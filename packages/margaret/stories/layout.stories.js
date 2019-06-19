import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card } from '../src/ui/cards';
import { boolean } from '@storybook/addon-knobs';

export default storiesOf('Layout', module).add('Card', () => (
  <Card>Truc Bidule Chouette</Card>
));
