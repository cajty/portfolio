export const designTokens = {
  light: {
    primary: {
      main: '#2563eb',
      accent: '#0891b2',
      highlight: '#4f46e5'
    },
    neutrals: {
      100: '#FFFFFF',
      200: '#F8FAFC',
      300: '#E2E8F0',
      400: '#94A3B8',
      900: '#0F172A'
    },
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626'
  },
  dark: {
    primary: {
      main: '#3b82f6',
      accent: '#06b6d4',
      highlight: '#6366f1'
    },
    neutrals: {
      100: '#030712',
      200: '#1e293b',
      300: '#334155',
      400: '#94a3b8',
      900: '#f8fafc'
    }
  }
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
] as const;