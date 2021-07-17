// Button.stories.js | Button.stories.jsx

import React from 'react';

import Calander from '../../src/Molecules/Calander';

export default {
  title: 'Molecules/Calander',
  component: Calander,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};

const Template = (args) => <Calander {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
