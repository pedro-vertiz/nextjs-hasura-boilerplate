import * as React from 'react';

import { Button } from '.';
const { storiesOf } = require('@storybook/react');

storiesOf('Button', module).add('Default', () => (
  <Button onClick={() => console.log('click')}>Click Me</Button>
));
