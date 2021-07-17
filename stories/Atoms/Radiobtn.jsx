import React from 'react';
import Radiobtn from '../../src/Atoms/Radiobtn'

export default {
  title: 'Atoms/Radiobtn',
  component: Radiobtn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Radiobtn',
};
