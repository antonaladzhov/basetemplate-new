import { z } from "zod";

const CalryEnvSchema = z.object({
    CALRY_API_URL: z.string().url().optional(),
    CALRY_API_KEY: z.string().min(1).optional(),
    CALRY_TENANT_ID: z.string().min(1).optional(),
    CALRY_DISPLAY_CURRENCY: z.string().min(3).max(3).optional(),
    TENANT_PUBLIC_URL: z.string().url().optional(),
});

export type CalryEnv = z.infer<typeof CalryEnvSchema>;

export function getCalryEnv(): CalryEnv {
    return CalryEnvSchema.parse({
        CALRY_API_URL: process.env.CALRY_API_URL,
        CALRY_API_KEY: process.env.CALRY_API_KEY,
        CALRY_TENANT_ID: process.env.CALRY_TENANT_ID,
        CALRY_DISPLAY_CURRENCY: process.env.CALRY_DISPLAY_CURRENCY,
        TENANT_PUBLIC_URL: process.env.TENANT_PUBLIC_URL,
    });
}

export function hasCalryCredentials(): boolean {
    const env = getCalryEnv();
    return Boolean(env.CALRY_API_URL && env.CALRY_API_KEY);
}


