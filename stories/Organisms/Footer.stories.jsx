
import React from 'react';

import Footer from '../../src/Organisms/Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {

    primary: true,
  },
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

