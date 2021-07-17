import React from 'react';
import Typography from '../../src/Atoms/Typography'

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Typography',
};
