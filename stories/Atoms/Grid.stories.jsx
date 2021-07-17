import React from 'react';
import Grid from '../../src/Atoms/Grid'

export default {
  title: 'Atoms/Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Grid',
};



