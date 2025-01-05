import { colors } from './colors';

export const designTokens = {
  light: {
    primary: {
      main: colors.blue.primary,
      accent: colors.cyan.primary,
      highlight: colors.indigo.primary
    },
    neutrals: {
      100: colors.neutrals.white,
      200: colors.neutrals.offWhite,
      300: colors.neutrals.lightGray,
      400: colors.neutrals.midGray,
      900: colors.neutrals.almostBlack
    },
    success: colors.status.success,
    warning: colors.status.warning,
    error: colors.status.error
  },
  dark: {
    primary: {
      main: colors.blue.bright,
      accent: colors.cyan.bright,
      highlight: colors.indigo.bright
    },
    neutrals: {
      100: colors.neutrals.deepDark,
      200: colors.neutrals.darkGray,
      300: colors.neutrals.midGray,
      400: colors.neutrals.lightGray,
      900: colors.neutrals.almostWhite
    }
  }
} as const;