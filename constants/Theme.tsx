import {  DarkTheme as PaperDarkTheme,  DefaultTheme as PaperDefaultTheme} from 'react-native-paper';

export const LTheme = {
  ...PaperDefaultTheme,
    dark: true,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "#181329" ,
    background: '#181329',
    card: '#181329',
    text: '#ACA2CC',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export const DTheme = {
  ...PaperDarkTheme,
    dark: true,
  colors: {
    ...PaperDarkTheme.colors,
    primary: "#181329" ,
    background: '#181329',
    card: '#181329',
    text: '#ACA2CC',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};