import CColors, {ICColors} from './colors';

export type TThemes = 'light' | 'dark';

export interface IColorSchemes {
  primary: string;
  secondary: string;
  background: string;
  textColor: string;
  accent: string;
  navBarColor?: string;
  others: ICColors;
}
const OtherColors = CColors;

const ThemeConfigs: Record<TThemes, IColorSchemes> = {
  light: {
    primary: CColors.blue,
    secondary: CColors.green,
    background: CColors.white,
    textColor: CColors.black,
    accent: CColors.red,
    navBarColor: CColors.blue,
    others: OtherColors,
  },
  dark: {
    primary: CColors.blue,
    secondary: CColors.green,
    background: CColors.black,
    textColor: CColors.white,
    accent: CColors.red,
    navBarColor: CColors.darkGray,
    others: OtherColors,
  },
};

export default ThemeConfigs;
