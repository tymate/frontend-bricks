import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '../src/ui';
import { Title } from '../src/ui/typography';
import {
  Card,
  CardContent,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardFooter,
  CardDescription,
} from '../src/ui/cards';

export default storiesOf('Cards', module).add('Card', () => (
  <Container>
    <Title>Cards</Title>
    <Card size="fixed">
      <CardHeader>
        <CardTitle>CardTitle</CardTitle>
        <CardSubtitle>CardSubtitle</CardSubtitle>
      </CardHeader>
      <CardContent>
        <CardDescription>CardDescription</CardDescription>
      </CardContent>
      <CardFooter />
    </Card>
  </Container>
));
