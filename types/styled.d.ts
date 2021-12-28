import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;

    colors: {
      background: string;
      navbar: string;
      logo: string;
      input: string;
      inputColor: string;
      menuBorder: string;
      switchCircleColor: string;
      switchTabColor: string;
      textColor: string;

      cards: Array<string>
    }
  }
}
