import { getCalryEnv } from "@/lib/env";
import { Property } from "@/lib/types";
import "server-only";

export type CalryListing = {
    id: string;
    name: string;
    internalName?: string;
    description?: string;
    thumbnailURL?: string;
    pictures?: { url: string; description?: string }[];
    address?: {
        city?: string;
        line1?: string;
        state?: string;
        country?: string;
        postal_code?: string;
    };
    latitude?: number;
    longitude?: number;
    bedroomCount?: number;
    bathroomCount?: number;
    maxOccupancy?: number;
    startPrice?: number;
    currency?: string;
    rating?: { count?: number; average?: number };
    is_tenant_owned?: boolean;
};

type CalryListingsResponse = {
    data: CalryListing[];
    meta?: {
        total?: number;
        limit?: number;
        totalPages?: number;
        current?: number;
        previous?: number | null;
        next?: number | null;
    };
};

export async function fetchMostLovedListings(limit: number = 10): Promise<Property[]> {
    const env = getCalryEnv();
    if (!env.CALRY_API_URL || !env.CALRY_API_KEY) {
        return [];
    }

    const url = new URL("/api/v1/listing", env.CALRY_API_URL);
    // Prefer ACTIVE listings
    url.searchParams.set("status", "ACTIVE");
    // Ask API for a bit more to allow sorting tenant-owned first, then slice
    url.searchParams.set("limit", String(Math.max(limit, 20)));
    if (env.CALRY_DISPLAY_CURRENCY) {
        url.searchParams.set("displayCurrency", env.CALRY_DISPLAY_CURRENCY);
    }

    const headers: Record<string, string> = {
        "x-calry-api-key": env.CALRY_API_KEY,
    };
    if (env.CALRY_TENANT_ID) {
        headers["x-calry-tenant-id"] = env.CALRY_TENANT_ID;
    }

    try {
        const res = await fetch(url.toString(), {
            method: "GET",
            headers,
            // Cache for a short time; tweak as desired
            next: { revalidate: 300 },
        });

        if (!res.ok) {
            return [];
        }

        const payload = (await res.json()) as CalryListingsResponse;
        const listings = Array.isArray(payload.data) ? payload.data : [];

        // Sort tenant-owned first, then by rating desc if available
        listings.sort((a, b) => {
            const ownedDiff = Number(Boolean(b.is_tenant_owned)) - Number(Boolean(a.is_tenant_owned));
            if (ownedDiff !== 0) return ownedDiff;
            const ratingA = a.rating?.average ?? 0;
            const ratingB = b.rating?.average ?? 0;
            return ratingB - ratingA;
        });

        const mapped = listings.map(mapCalryListingToProperty).filter(Boolean) as Property[];
        return mapped.slice(0, limit);
    } catch {
        return [];
    }
}

export function mapCalryListingToProperty(listing: CalryListing): Property | null {
    const imageUrl = listing.thumbnailURL || listing.pictures?.[0]?.url;
    const city = listing.address?.city;
    const state = listing.address?.state;
    const country = listing.address?.country;
    const location = [city, state || country].filter(Boolean).join(", ");

    // Some essential fields must exist
    if (!listing.id || !listing.name) return null;

    const { TENANT_PUBLIC_URL } = getCalryEnv();
    const base = TENANT_PUBLIC_URL?.replace(/\/$/, "") || "";
    const href = base ? `${base}/property/${listing.id}` : "";

    return {
        id: listing.id,
        title: listing.name,
        location: location || "",
        imageAlt: listing.name,
        imageUrl: imageUrl || undefined,
        beds: listing.bedroomCount ?? 0,
        baths: listing.bathroomCount ?? 0,
        guests: listing.maxOccupancy ?? 0,
        priceFrom: listing.startPrice ?? 0,
        href,
    };
}

export async function fetchLocationsForSearch(limit: number = 100): Promise<{ label: string; lat: number; lng: number }[]> {
    const env = getCalryEnv();
    if (!env.CALRY_API_URL || !env.CALRY_API_KEY) {
        return [];
    }

    const url = new URL("/api/v1/listing", env.CALRY_API_URL);
    url.searchParams.set("status", "ACTIVE");
    url.searchParams.set("limit", String(Math.max(limit, 50)));
    if (env.CALRY_DISPLAY_CURRENCY) {
        url.searchParams.set("displayCurrency", env.CALRY_DISPLAY_CURRENCY);
    }

    const headers: Record<string, string> = {
        "x-calry-api-key": env.CALRY_API_KEY,
    };
    if (env.CALRY_TENANT_ID) {
        headers["x-calry-tenant-id"] = env.CALRY_TENANT_ID;
    }

    try {
        const res = await fetch(url.toString(), {
            method: "GET",
            headers,
            next: { revalidate: 300 },
        });
        if (!res.ok) return [];
        const payload = (await res.json()) as CalryListingsResponse;
        const listings = Array.isArray(payload.data) ? payload.data : [];
        const map = new Map<string, { label: string; lat: number; lng: number }>();
        for (const l of listings) {
            const city = l.address?.city?.trim();
            const country = l.address?.country?.trim();
            const label = [city, country].filter(Boolean).join(", ");
            if (!label || typeof l.latitude !== "number" || typeof l.longitude !== "number") continue;
            const key = label.toLowerCase();
            if (!map.has(key)) {
                map.set(key, { label, lat: l.latitude, lng: l.longitude });
            }
        }
        return Array.from(map.values());
    } catch {
        return [];
    }
}

export async function fetchFeaturedAndLocations(options?: { listingsLimit?: number; scanLimit?: number }): Promise<{ properties: Property[]; locations: { label: string; lat: number; lng: number }[] }> {
    const listingsLimit = options?.listingsLimit ?? 10;
    const scanLimit = Math.max(options?.scanLimit ?? 100, listingsLimit);

    const env = getCalryEnv();
    if (!env.CALRY_API_URL || !env.CALRY_API_KEY) {
        return { properties: [], locations: [] };
    }

    const url = new URL("/api/v1/listing", env.CALRY_API_URL);
    url.searchParams.set("status", "ACTIVE");
    url.searchParams.set("limit", String(scanLimit));
    if (env.CALRY_DISPLAY_CURRENCY) {
        url.searchParams.set("displayCurrency", env.CALRY_DISPLAY_CURRENCY);
    }

    const headers: Record<string, string> = {
        "x-calry-api-key": env.CALRY_API_KEY,
    };
    if (env.CALRY_TENANT_ID) {
        headers["x-calry-tenant-id"] = env.CALRY_TENANT_ID;
    }

    try {
        const res = await fetch(url.toString(), {
            method: "GET",
            headers,
            next: { revalidate: 300 },
        });
        if (!res.ok) return { properties: [], locations: [] };

        const payload = (await res.json()) as CalryListingsResponse;
        const listings = Array.isArray(payload.data) ? payload.data : [];

        // Sort and map to properties
        listings.sort((a, b) => {
            const ownedDiff = Number(Boolean(b.is_tenant_owned)) - Number(Boolean(a.is_tenant_owned));
            if (ownedDiff !== 0) return ownedDiff;
            const ratingA = a.rating?.average ?? 0;
            const ratingB = b.rating?.average ?? 0;
            return ratingB - ratingA;
        });
        const properties = listings.map(mapCalryListingToProperty).filter(Boolean).slice(0, listingsLimit) as Property[];

        // Build unique locations
        const map = new Map<string, { label: string; lat: number; lng: number }>();
        for (const l of listings) {
            const city = l.address?.city?.trim();
            const country = l.address?.country?.trim();
            const label = [city, country].filter(Boolean).join(", ");
            if (!label || typeof l.latitude !== "number" || typeof l.longitude !== "number") continue;
            const key = label.toLowerCase();
            if (!map.has(key)) {
                map.set(key, { label, lat: l.latitude, lng: l.longitude });
            }
        }
        const locations = Array.from(map.values());

        return { properties, locations };
    } catch {
        return { properties: [], locations: [] };
    }
}


