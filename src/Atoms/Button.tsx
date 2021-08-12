import React, {MouseEvent, PropsWithChildren} from 'react'
import '../Atoms/Button.scss';
import '../Atoms/Color.scss';

type BackgroundColor = string;
type OnClickAdapter<E extends HTMLElement> = (event: MouseEvent<E>) => void

interface ButtonPropsWithoutChildren {
  primary?: boolean,
  backgroundColor?: BackgroundColor,
  onClick(): OnClickAdapter<HTMLButtonElement>,
  size: 'sm' | 'md'
}

export type ButtonProps = PropsWithChildren<ButtonPropsWithoutChildren>;

export const Button = (props: ButtonProps) => {
  const { 
    primary, 
    backgroundColor, 
    size, 
    children,
    ...restOfProps
  } = props;
  const mode = primary ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      type="button"
      className={['btn', `btn-${size}`, mode].join(' ')}
      style={{ backgroundColor: backgroundColor }}
      {...restOfProps}
    >
      {children}
    </button>
  );
};

