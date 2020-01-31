import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../src/ui';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

const OurStyles = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fontStack.title};
  }

  body {
    font-family: ${({ theme }) => theme.fontStack.body};
  }

  button {
    font-family: ${({ theme }) => theme.fontStack.ui};
  }
`;

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <OurStyles />

      {storyFn()}
    </React.Fragment>
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
addDecorator(withA11y);
addDecorator(withKnobs);
