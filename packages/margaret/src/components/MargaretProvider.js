import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '../ui';
import 'sanitize.css';

const merge = (empirical = {}, payload = {}) => {
  let output = empirical;

  // eslint-disable-next-line
  for (const key in payload) {
    output = {
      ...output,
      [key]: {
        ...(output[key] || {}),
        ...(payload[key] || {}),
      },
    };
  }

  return output;
};

const MargaretProvider = ({ theme, children }) => {
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeProvider>
  );
};

export default MargaretProvider;
