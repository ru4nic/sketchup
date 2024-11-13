import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: '#E9E7E4';
      secondaryText: '#373539';
      background: '#ffffff';
      accent: '#ffc000';
      darkAccent: '#A07E5D';
      cardBackground: '#f8f8f8';
      navBackground: '#2B2530';
      footerBackground: '#2B2530';
      primary: '#d32f2f';
      dark: '#000000aa';
      link: '#ddd';
      checkedBlock: '#793b3d';
      titleSongsColor: '#ad9566';
      cartBackground: '#f5f7f8';
    };
    sizes: {
      heightOfNavBarDesktop: '5rem';
      heightOfNavBarMobile: '6.7rem';
    };
    fonts: {
      extraLight: 'Nunito Extralight';
      light: 'Nunito Light';
      regular: 'Nunito Regular';
      medium: 'Nunito Medium';
      semiBold: 'Nunito Semi-Bold';
      bold: 'Nunito Bold';
      extraBold: 'Nunito Extra-Bold';
      black: 'Nunito Black';
    };
  }
}
