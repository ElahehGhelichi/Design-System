import React from 'react';
import Checkbox from '../../src/Atoms/Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Checkbox',
};
