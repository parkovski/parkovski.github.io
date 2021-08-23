import { Theme, ThemeUIContextValue, useThemeUI } from 'theme-ui';
import chroma from 'chroma-js';

type BasicColorName = 'primary' | 'secondary' | 'tertiary' | 'complement'
  | 'accent' | 'gray';

const __colors: { [n in BasicColorName]: string[] } =
{"primary":["#3d8e33","#ecf4e9","#b4d2ab","#8ebb82","#67a45b","#1c7318","#005800","#003f00","#002000"],"secondary":["#3a75c4","#edf0f9","#b8c5e8","#93a9dc","#6c8fd0","#0a5da9","#00468f","#003175","#001350"],"tertiary":["#ffc61e","#fff9eb","#ffe7ae","#ffdc85","#ffd159","#cc9a00","#9a6f00","#6c4800","#3b1000"],"accent":["#1e5f73","#e9eef0","#a7bcc5","#7c9ca9","#517d8d","#004d61","#003c4f","#002c3d","#001625"],"complement":["#ce1025","#ffeae7","#f9aca1","#ef8276","#e0554c","#b20012","#960000","#7c0000","#570000"],"gray":["#70747f","#f0f0f2","#c3c5ca","#a7a9b0","#8b8e97","#585c67","#41454f","#2c2f39","#0c111a"]}

type BasePalette = {
  [n in BasicColorName]: {
    base: string;
    lite: string[];
    dark: string[];
  }
} & {
  [m in 'white' | 'black']: {
    base: string;
    lite: string;
    dark: string;
  };
};

const C = (() => {
  return Object.entries(__colors).reduce((a, [_key, value]) => {
    const key = _key as BasicColorName;
    const shades = (value.length - 1) >> 1;
    a[key] = {
      base: value[0],
      lite: value.slice(1, shades + 1).reverse(),
      dark: value.slice(-shades),
    };
    return a;
  }, {} as BasePalette);
})();

Object.assign(C, {
  white: { lite: '#F8F8F6', base: '#F0F0E7', dark: '#E8E8E0' },
  black: { lite: '#282A2E', base: '#18181C', dark: '#08080C' },
});
// gray: ['#E0D8D8', '#98A0A0', '#586060', '#404848', '#283030'],

const colors = {
  primary: C.primary.base,
  secondary: C.secondary.base,
  tertiary: C.tertiary.base,
  accent: C.accent.base,
  complement: C.complement.base,
  muted: C.primary.lite[1],

  gray: C.gray.base,

  text: C.black.dark,
  textInv: C.white.lite,
  background: C.white.base,
  contentBackground: C.white.lite,

  logo: C.primary.lite[3],
	header: C.primary.dark[0],
  headerText: C.white.lite,
	logoTextShadow: C.primary.dark[2],
  themeSwitcherBg: chroma(C.tertiary.lite[0]).alpha(.5).hex(),
  themeSwitcherBorder: chroma(C.tertiary.lite[1]).alpha(.5).hex(),
  themeSwitcherHover: C.tertiary.dark[0],

  modes: {
    dark: {
      muted: C.primary.dark[1],

      gray: C.gray.dark[1],

      text: C.white.dark,
      textInv: C.black.lite,
      background: C.black.base,
      contentBackground: C.black.lite,

      header: C.primary.dark[1],
      logoTextShadow: C.primary.dark[3],
      themeSwitcherBg: chroma(C.tertiary.dark[0]).alpha(.5).hex(),
      themeSwitcherBorder: chroma(C.tertiary.dark[2]).alpha(.5).hex(),
    },
  }
};

type ThemeColor = Omit<keyof typeof colors, 'modes'>;

const cssv = (c: ThemeColor) => `var(--theme-ui-colors-${c})`;

const makeTheme = <T extends Theme>(t: T) => t;
const theme = makeTheme({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Raleway',
    //body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segue UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
    logo: 'Cinzel Decorative',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    logo: {
      variant: 'text.heading',
      flex: 1,
      m: 0,
      textShadow: `1px 1px 2px ${cssv('logoTextShadow')}`,
    },
  },
  borders: {
    themeSwitcher: `1px solid ${cssv('themeSwitcherBorder')}`,
  },
  radii: {
    input: '4px',
    panel: '8px',
  },
  buttons: {
    __common: {
      borderRadius: 'input',
      py: '.25ex',
      color: 'textInv',
    },
    themeSwitcher: {
      width: '5ex',
      height: '100%',
      border: 'themeSwitcher',
      borderRadius: 'input',
      bg: 'themeSwitcherBg',
      '&:hover': {
        bg: 'themeSwitcherHover',
      },
    },
  },
  layout: {
    header: {
      display: 'flex',
      flexDirection: 'row',
      bg: 'header',
      color: 'headerText',
      padding: 1,
      fontFamily: 'logo',
    },
    container: {
      minWidth: 0,
      flex: 1,
      mx: 2,
    },
    pageColumn: {
      my: 2,
      padding: 1,
      bg: 'contentBackground',
    },
    main: {
      variant: 'layout.pageColumn',
      maxWidth: '960px',
      mx: 'auto',
      border: `1px ${cssv('secondary')}`,
      borderStyle: 'solid none solid',
    },
    nav: {
      variant: 'layout.pageColumn',
      flexBasis: ['auto', 230],
      order: -1,
      border: `1px ${cssv('secondary')}`,
      borderStyle: 'solid none solid',
    },
    ads: {
      variant: 'layout.pageColumn',
      flexBasis: ['auto', 230],
      border: `1px ${cssv('secondary')}`,
      borderStyle: 'solid none solid',
    },
    footer: {
      bg: 'header',
      color: 'headerText',
      //borderTop: `1px solid ${cssv('headerBorder')}`,
    },
  },
  colors,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
});

export type ExactTheme = typeof theme;

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ExactTheme,
}

export const useTheme = (useThemeUI as unknown) as () => ExactContextValue;
export default theme;