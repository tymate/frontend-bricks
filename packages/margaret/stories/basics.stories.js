import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Buttons, Container } from '../src/ui';
import { boolean } from '@storybook/addon-knobs';

export default storiesOf('Basics', module)
  .add('Button', () => (
    <Container>
      <h2>Default</h2>

      <Buttons alignment="left">
        <Button
          onClick={action('clicked')}
          disabled={boolean('Disabled', false)}
        >
          Hello Button
        </Button>
        <Button disabled onClick={action('clicked')}>
          Hello Button
        </Button>
      </Buttons>

      <h2>Variant: Primary</h2>

      <Buttons alignment="left">
        <Button
          variant="primary"
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('clicked')}
        >
          Hello Button
        </Button>
      </Buttons>

      <h2>Variant: Secondary</h2>

      <Buttons alignment="left">
        <Button
          variant="secondary"
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('clicked')}
        >
          Hello Button
        </Button>
      </Buttons>

      <h2>Variant: Outline</h2>

      <Buttons alignment="left">
        <Button
          variant="outline"
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('clicked')}
        >
          Hello Button
        </Button>
      </Buttons>

      <h2>Size: big</h2>

      <Buttons alignment="left">
        <Button
          size="big"
          variant="primary"
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('clicked')}
        >
          Hello Button
        </Button>
      </Buttons>

      <h2>Size: full</h2>

      <Buttons alignment="left">
        <Button
          size="full"
          variant="primary"
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('clicked')}
        >
          Hello Button
        </Button>
      </Buttons>

      <h2>Size: fixed</h2>

      <Buttons alignment="left">
        <Button
          size="fixed"
          variant="primary"
          disabled={boolean('Disabled', false)}
          isLoading={boolean('Loading', false)}
          onClick={action('clicked')}
        >
          Hello Button
        </Button>
        <Button size="fixed" variant="primary" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button size="fixed" variant="primary" onClick={action('clicked')}>
          Hello Button
        </Button>
      </Buttons>
    </Container>
  ))
  .add('Buttons', () => (
    <Container>
      <h2>SpacingSize : small</h2>
      <Buttons spacingSize="small">
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
      </Buttons>

      <h2>SpacingSize : big</h2>
      <Buttons spacingSize="big">
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
      </Buttons>

      <h2>Alignment : left</h2>
      <Buttons alignment="left" spacingSize="big">
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
      </Buttons>

      <h2>Alignment : right</h2>
      <Buttons alignment="right" spacingSize="big">
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
        <Button variant="outline" onClick={action('clicked')}>
          Hello Button
        </Button>
      </Buttons>
    </Container>
  ))
  .add('Typography', () => <></>);
