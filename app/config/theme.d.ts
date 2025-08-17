declare module "./theme-config.mjs" {
  export interface ThemeConfig {
    colors: Record<string, string>;
    fonts: Record<string, string>;
    radii?: Record<string, string>;
    spacingScale?: number;
  }
  const value: ThemeConfig;
  export default value;
}
