import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { MargaretProvider } from '../src';

const GlobalStyle = createGlobalStyle`
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

addParameters({
  options: {
    showRoots: true,
  },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: false,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: false,
  },
});

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(story => (
  <>
    <MargaretProvider>
      <GlobalStyle />
      {story()}
    </MargaretProvider>
  </>
));
