import { ThemeEditProps } from '@react-bulk/core';

const dark: ThemeEditProps = {
  mode: 'dark',

  colors: {
    primary: '#3E64FF',
    secondary: '#FFA249',

    background: {
      primary: '#212B4E',
      secondary: '#182039',
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
        padding: '1.5rem',
      },
    },
  },
};

export default dark;
