import React from 'react';

import Color from '../../src/Atoms/Color';

export default {
  title: 'Atoms/Color',
  component: Color,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    colors: true,
  },
};

const Template = (args) => <Color {...args} />;

//👇 Each story then reuses that template
export const colors = Template.bind({});
