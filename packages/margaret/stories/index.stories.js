import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
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
  <ThemeProvider
    theme={{
      primary: 'hsl(137, 54%, 61%)',
      primaryLight: 'hsl(137, 54%, 70%)',
      secondary: 'hsl(196, 53%, 41%)',
      secondaryLight: 'hsl(196, 53%, 50%)',

      disabled: 'rgba(4%, 6%, 13%, .2)',
      separator: 'rgba(4%, 6%, 13%, .2)',

      text: '#0B0F21',
      textLight: 'rgba(4%, 6%, 13%, .5)',

      spacing: (input = 1) => `${input * 16}px`,

      borderRadius: '6px',
      buttonBorderRadius: '6px',

      fontStack: {
        title: '"Archivo Narrow", sans-serif',
        body: '"Chivo", sans-serif',
        ui: 'sans-serif',
      },
    }}
  >
    <React.Fragment>
      <OurStyles />

      {storyFn()}
    </React.Fragment>
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
addDecorator(withA11y);
addDecorator(withKnobs);
