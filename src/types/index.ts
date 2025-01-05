export type DesignTokens = {
  light: ColorScheme;
  dark: ColorScheme;
};

type ColorScheme = {
  primary: {
    main: string;
    accent: string;
    highlight: string;
  };
  neutrals: {
    100: string;
    200: string;
    300: string;
    400: string;
    900: string;
  };
  success?: string;
  warning?: string;
  error?: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
};

export type Skill = {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  proficiency: number;
  icon?: string;
};