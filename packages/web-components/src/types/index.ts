export type ThemeType = 'filled' | 'outlined' | 'twotone' | 'purely';
export type ThemeTypeUpperCase = 'Filled' | 'Outlined' | 'TwoTone' | 'Purely';

export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

export interface IconDefinition {
  name: string; // kebab-case-style
  theme: ThemeType;
  icon: ((primaryColor: string, secondaryColor: string) => AbstractNode) | AbstractNode;
}
