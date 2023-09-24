import { DefaultTheme } from 'styled-components';

type Color = {
  25: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Font = {
  regular: string;
  medium: string;
  semibold: string;
};

export type Theme = {
  color: {
    gray: Color;
    primary: Color;
    error: Color;
    warning: Color;
    success: Color;
  };
  space: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    8: string;
    10: string;
    12: string;
    16: string;
    20: string;
    24: string;
  };
  size: {
    headerHeight: string;
  };
  breakpoint: {
    desktop: string;
  };
  zIndex: {
    header: number;
  };
  font: {
    text: {
      xs: Font;
      sm: Font;
      md: Font;
    };
    display: {
      sm: Font;
      md: Font;
    };
  };
};

export const OldTheme = {
  color: {
    gray: {
      25: '#FCFCFD',
      50: '#F9FAFB',
      100: '#f2f4f7',
      200: '#E4E7EC',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1D2939',
      900: '#101828',
    },
    primary: {
      25: '#FCFAFF',
      50: '#F9F5FF',
      100: '#F4EBFF',
      200: '#E9D7FE',
      300: '#D6BBFB',
      400: '#B692F6',
      500: '#9E77ED',
      600: '#7F56D9',
      700: '#6941C6',
      800: '#53389E',
      900: '#42307D',
    },
    error: {
      25: '#FFFBFA',
      50: '#FEF3F2',
      100: '#FEE4E2',
      200: '#FECDCA',
      300: '#FDA29B',
      400: '#F97066',
      500: '#F04438',
      600: '#D92D20',
      700: '#B42318',
      800: '#912018',
      900: '#7A271A',
    },
    warning: {
      25: '#FFFCF5',
      50: '#FFFAEB',
      100: '#FEF0C7',
      200: '#FEDF89',
      300: '#FEC84B',
      400: '#FDB022',
      500: '#F79009',
      600: '#DC6803',
      700: '#B54708',
      800: '#93370D',
      900: '#7A2E0E',
    },
    success: {
      25: '#F6FEF9',
      50: '#ECFDF3',
      100: '#D1FADF',
      200: '#A6F4C5',
      300: '#6CE9A6',
      400: '#32D583',
      500: '#12B76A',
      600: '#039855',
      700: '#027A48',
      800: '#05603A',
      900: '#054F31',
    },
  },
  space: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  size: {
    headerHeight: '4rem',
  },
  breakpoint: {
    desktop: '64em',
  },
  zIndex: {
    header: 1000,
  },
  font: {
    text: {
      xs: {
        regular: `
          font-size: 0.75rem;
          line-height: 1.125rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 0.75rem;
          line-height: 1.125rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 0.75rem;
          line-height: 1.125rem;
          font-weight: 600;
        `,
      },
      sm: {
        regular: `
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 600;
        `,
      },
      md: {
        regular: `
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: 600;
        `,
      },
    },
    display: {
      sm: {
        regular: `
          font-size: 1.875rem;
          line-height: 2.375rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 1.875rem;
          line-height: 2.375rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 1.875rem;
          line-height: 2.375rem;
          font-weight: 600;
        `,
      },
      md: {
        regular: `
          font-size: 2.25rem;
          line-height: 2.75rem;
          font-weight: 400;
        `,
        medium: `
          font-size: 2.25rem;
          line-height: 2.75rem;
          font-weight: 500;
        `,
        semibold: `
          font-size: 2.25rem;
          line-height: 2.75rem;
          font-weight: 600;
        `,
      },
    },
  },
};

export function color(name: keyof Theme['color'], shade: keyof Color) {
  return ({ theme }: { theme: Theme }) => theme.color[name][shade];
}

export function space(...names: Array<keyof Theme['space']>) {
  return ({ theme }: { theme: Theme }) => {
    const spaces = names.map((name) => theme.space[name]);
    return spaces.join(' ');
  };
}

export function breakpoint(name: keyof Theme['breakpoint']) {
  return ({ theme }: { theme: Theme }) => theme.breakpoint[name];
}

export function zIndex(name: keyof Theme['zIndex']) {
  return ({ theme }: { theme: Theme }) => theme.zIndex[name];
}

export function textFont(
  size: keyof Theme['font']['text'],
  weight: keyof Font
) {
  return ({ theme }: { theme: Theme }) => theme.font.text[size][weight];
}

export function displayFont(
  size: keyof Theme['font']['display'],
  weight: keyof Font
) {
  return ({ theme }: { theme: Theme }) => theme.font.display[size][weight];
}

export const theme: DefaultTheme = {
  colors: {
    black: '#000',
    white: '#fff',
    brand: {
      50: '#4480db',
      100: '#306dc8',
      200: '#2e5da3',
      300: '#2b4d80',
      400: '#213b63',
      500: '#1f324f',
      600: '#1b283c',
      700: '#161e2b',
      800: '#0f141a',
      900: '#07090b',
    },
    rose: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#f43f5e',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    fuchsia: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    indigo: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    sky: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    lime: {
      50: '#f7fee7',
      100: '#ecfccb',
      200: '#d9f99d',
      300: '#bef264',
      400: '#a3e635',
      500: '#84cc16',
      600: '#65a30d',
      700: '#4d7c0f',
      800: '#3f6212',
      900: '#365314',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
    amber: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    warmGray: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
    },
    trueGray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    coolGray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    blueGray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
  },
};
