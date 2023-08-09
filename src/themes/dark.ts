import { ThemeEditProps } from '@react-bulk/core';

const dark: ThemeEditProps = {
  colors: {
    background: {
      primary: '#212B4E',
      secondary: '#182039',
    },

    primary: {
      main: '#3E64FF',
    },

    secondary: {
      main: '#FFA249',
    },
  },

  components: {
    Button: {
      defaultProps: {
        borderRadius: '1rem',
      },
    },
    Card: {
      defaultProps: {
        borderRadius: '1rem',
      },
    },
  },

  mode: 'dark',
};

export default dark;
