import React from 'react';
import Input from '../../src/Atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};
