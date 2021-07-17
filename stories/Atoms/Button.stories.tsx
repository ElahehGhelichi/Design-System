import React from 'react';
import { Button, ButtonProps } from '../../src/Atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size:"md"
    
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'helloo',
  size: 'sm',
  onClick: console.log,
  backgroundColor: 'black'
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};



