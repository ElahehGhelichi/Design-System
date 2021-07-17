// Button.stories.js | Button.stories.jsx

import React from 'react';

import Textinput from '../../src/Molecules/Textinput';

export default {
  title: 'Molecules/Textinput',
  component: Textinput,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};

const Template = (args) => <Textinput {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
