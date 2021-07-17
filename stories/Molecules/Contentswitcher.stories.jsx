// Button.stories.js | Button.stories.jsx

import React from 'react';

import Contentswitcher from '../../src/Molecules/Contentswitcher';

export default {
  title: 'Molecules/Contentswitcher',
  component: Contentswitcher,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};

const Template = (args) => <Contentswitcher {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
