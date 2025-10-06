'use client';

import { useEffect } from 'react';

interface TypographySettings {
  size: number;
  weight: string;
  lineHeight: string;
}

interface TypographyConfig {
  h1?: TypographySettings;
  h2?: TypographySettings;
  h3?: TypographySettings;
  h4?: TypographySettings;
  h5?: TypographySettings;
  h6?: TypographySettings;
  p?: TypographySettings;
  body?: TypographySettings;
}

interface GlobalSettings {
  typography?: TypographyConfig;
}

export default function DynamicTypography({ settings }: { settings: GlobalSettings }) {
  useEffect(() => {
    if (!settings?.typography) return;

    const typography = settings.typography;
    const root = document.documentElement;

    // Apply typography settings to CSS variables
    if (typography.h1) {
      root.style.setProperty('--typography-h1-size', `${typography.h1.size}px`);
      root.style.setProperty('--typography-h1-weight', typography.h1.weight);
      root.style.setProperty('--typography-h1-line-height', typography.h1.lineHeight);
    }
    if (typography.h2) {
      root.style.setProperty('--typography-h2-size', `${typography.h2.size}px`);
      root.style.setProperty('--typography-h2-weight', typography.h2.weight);
      root.style.setProperty('--typography-h2-line-height', typography.h2.lineHeight);
    }
    if (typography.h3) {
      root.style.setProperty('--typography-h3-size', `${typography.h3.size}px`);
      root.style.setProperty('--typography-h3-weight', typography.h3.weight);
      root.style.setProperty('--typography-h3-line-height', typography.h3.lineHeight);
    }
    if (typography.h4) {
      root.style.setProperty('--typography-h4-size', `${typography.h4.size}px`);
      root.style.setProperty('--typography-h4-weight', typography.h4.weight);
      root.style.setProperty('--typography-h4-line-height', typography.h4.lineHeight);
    }
    if (typography.h5) {
      root.style.setProperty('--typography-h5-size', `${typography.h5.size}px`);
      root.style.setProperty('--typography-h5-weight', typography.h5.weight);
      root.style.setProperty('--typography-h5-line-height', typography.h5.lineHeight);
    }
    if (typography.h6) {
      root.style.setProperty('--typography-h6-size', `${typography.h6.size}px`);
      root.style.setProperty('--typography-h6-weight', typography.h6.weight);
      root.style.setProperty('--typography-h6-line-height', typography.h6.lineHeight);
    }
    if (typography.p) {
      root.style.setProperty('--typography-p-size', `${typography.p.size}px`);
      root.style.setProperty('--typography-p-weight', typography.p.weight);
      root.style.setProperty('--typography-p-line-height', typography.p.lineHeight);
    }
    if (typography.body) {
      root.style.setProperty('--typography-body-size', `${typography.body.size}px`);
      root.style.setProperty('--typography-body-weight', typography.body.weight);
      root.style.setProperty('--typography-body-line-height', typography.body.lineHeight);
    }
  }, [settings]);

  return null; // This component doesn't render anything
}
