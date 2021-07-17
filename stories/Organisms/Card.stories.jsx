// Button.stories.js | Button.stories.jsx

import React from 'react';

import Card from '../../src/Organisms/Card';

export default {
  title: 'Organisms/Card',
  component: Card,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};

const Template = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
