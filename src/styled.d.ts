import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    listColor: string;
    bgColor: string;
    accentColor: string;
  }
}
