import { siteConfig } from "@/app/config/site-config";

export function safeConfig<T>(accessor: (config: typeof siteConfig) => T, fallback: T): T {
  try {
    return accessor(siteConfig);
  } catch (error) {
    console.error('Error accessing site config:', error);
    return fallback;
  }
}

export function safeConfigString(accessor: (config: typeof siteConfig) => string, fallback: string = ''): string {
  try {
    const result = accessor(siteConfig);
    return typeof result === 'string' ? result : fallback;
  } catch (error) {
    console.error('Error accessing site config string:', error);
    return fallback;
  }
}

export function safeConfigArray<T>(accessor: (config: typeof siteConfig) => T[], fallback: T[] = []): T[] {
  try {
    const result = accessor(siteConfig);
    return Array.isArray(result) ? result : fallback;
  } catch (error) {
    console.error('Error accessing site config array:', error);
    return fallback;
  }
}
