import themeConfig from "@/app/config/theme-config.mjs";

export function themeVars(): React.CSSProperties {
  const theme = themeConfig;
  
  return {
    "--color-primary": theme.colors.primary,
    "--color-primary-foreground": theme.colors.primaryForeground,
    "--color-secondary": theme.colors.secondary,
    "--color-secondary-foreground": theme.colors.secondaryForeground,
    "--color-muted": theme.colors.muted,
    "--color-muted-foreground": theme.colors.mutedForeground,
    "--color-accent": theme.colors.accent,
    "--color-accent-foreground": theme.colors.accentForeground,
    "--color-destructive": theme.colors.destructive,
    "--color-destructive-foreground": theme.colors.destructiveForeground,
    "--color-border": theme.colors.border,
    "--color-input": theme.colors.input,
    "--color-ring": theme.colors.ring,
    "--color-background": theme.colors.background,
    "--color-foreground": theme.colors.foreground,
    "--color-card": theme.colors.card,
    "--color-card-foreground": theme.colors.cardForeground,
    "--color-popover": theme.colors.popover,
    "--color-popover-foreground": theme.colors.popoverForeground,
    "--color-text": theme.colors.text,
    "--font-heading": theme.fonts.heading,
    "--font-body": theme.fonts.body,
    "--radius": theme.radii.base,
  } as React.CSSProperties;
}
