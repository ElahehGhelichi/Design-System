import React from 'react';
import { Button, ButtonProps } from '../../src/Components/Button';
import { Story } from '@storybook/react'
import {MouseEvent, PropsWithChildren} from 'react'



type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    
  },
};
interface Props {
    kind: 'primary' | 'secondary' | 'ghost',
    icon?: 'with-icon' | 'icon-only',
    size: 'small' | 'medium' | 'larg',
    disabled?: boolean,
    onClick(): OnClickAdapter<HTMLButtonElement>,


    
}
const Template: Story <Props> = args => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
    kind: 'primary',
    size: 'small',
} as ButtonProps;


