const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
export const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

const ButtonTypes = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'] as const;
export type ButtonType = (typeof ButtonTypes)[number];

const ButtonShapes = ['default', 'circle', 'round'] as const;
export type ButtonShape = (typeof ButtonShapes)[number];

const ButtonHTMLTypes = ['submit', 'button', 'reset'] as const;
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
