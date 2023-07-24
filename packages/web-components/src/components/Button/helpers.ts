const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

export const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = (typeof ButtonTypes)[number];

export const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

export const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
