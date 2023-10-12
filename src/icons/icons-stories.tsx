import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Spacer } from '../components/Spacer';
import { Row } from '../components/row/Row';
import * as Icons from './index';

type IconsType = keyof typeof Icons;
const icons = Object.keys(Icons).map(icon => Icons[icon as IconsType]);

storiesOf('Icons', module)
  .add('Default', () => (
    <Row alignItems="center">
      {icons.map((Icon, i) => (
        <Spacer p={1} key={`default-${i}`}>
          <Icon />
        </Spacer>
      ))}
    </Row>
  ))
  .add('Custom fill', () => (
    <Row alignItems="center">
      {icons.map((Icon, i) => (
        <Spacer p={1} key={`default-${i}`}>
          <Icon fill='white' />
        </Spacer>
      ))}
    </Row>
  ));
