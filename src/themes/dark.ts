import { ThemeOptionalProps } from '@react-bulk/core';

const dark: ThemeOptionalProps = {
  mode: 'dark',

  colors: {
    primary: '#2962ff',
    secondary: '#aa00ff',
  } as any,

  components: {
    Card: {
      defaultProps: {
        corners: 3,
      },
    } as any,
  } as any,
};

export default dark;
