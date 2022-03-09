import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Primary' } as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary', children: 'Secondary' } as ButtonProps;

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;
