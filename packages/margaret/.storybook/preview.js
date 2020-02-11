import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { MargaretProvider } from '../src';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

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

const history = createBrowserHistory();

addParameters({
  options: {
    showRoots: true,
    showCanvas: false,
  },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: false,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: false,
    previewTabs: { canvas: { hidden: true } },
  },
});

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(story => (
  <>
    <MargaretProvider>
      <Router history={history}>
        <GlobalStyle />
        {story()}
      </Router>
    </MargaretProvider>
  </>
));
