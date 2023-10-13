import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { Spacer } from '../Spacer';

import { Button } from './Button';
import { colors } from '../colors';

storiesOf('Button', module)
  .add('Contained', () => (
    <>
      <Spacer my={1}>
        <Button text="Contained primary" variant="contained" color="primary" />
      </Spacer>
      <Spacer my={1}>
        <Button text="Contained secondary" variant="contained" color="secondary" />
      </Spacer>
      <Spacer my={1}>
        <Button text="Contained tertiary" variant="contained" color="tertiary" />
      </Spacer>
    </>
  ))
  .add('Contained White', () => (
    <>
      <Spacer my={1}>
        <Button text="Contained white" variant="containedWhite" color="primary" />
      </Spacer>
    </>
  ))
  .add('Outlined', () => (
    <>
      <Spacer my={1} p={2} style={{ backgroundColor: colors.primary }}>
        <Button text="Outlined white" variant="outlined" color="white" />
      </Spacer>
      <Spacer my={1}>
        <Button text="Outlined primary" variant="outlined" color="primary" />
      </Spacer>
      <Spacer my={1}>
        <Button text="Outlined secondary" variant="outlined" color="secondary" />
      </Spacer>
      <Spacer my={1}>
        <Button text="Outlined secondary" variant="outlined" color="tertiary" />
      </Spacer>
    </>
  ))
  .add('With Icon', () => (
    <>
      <Spacer my={1}>
        <Button text="Save" variant="contained" color="primary" />
      </Spacer>
      <Spacer my={1}>
        <Button text="Evening" variant="containedWhite" color="tertiary" />
      </Spacer>
    </>
  ));
