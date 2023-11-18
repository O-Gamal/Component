export type ColorPalette = {
  [shade: string]: string;
};

export type ColorsConfig = {
  neutral: ColorPalette;
  primary: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  destructive: ColorPalette;
  shades: ColorPalette;
};
