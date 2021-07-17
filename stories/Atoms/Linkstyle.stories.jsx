import React from 'react';
import Linkstyle from '../../src/Atoms/Linkstyle'

export default {
  title: 'Atoms/Linkstyle',
  component: Linkstyle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Linkstyle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Linkstyle',
};
