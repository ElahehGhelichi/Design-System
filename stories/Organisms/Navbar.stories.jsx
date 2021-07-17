

import React from 'react';

import Navbar from '../../src/Organisms/Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {

    primary: true,
  },
};

const Template = (args) => <Navbar {...args} />;


export const Primary = Template.bind({});
