// ========== Button
// import all modules
import React from 'react';
import { IButtonProps } from '../../interfaces';
import * as Styled from './button.styled';

export const Button: React.FC<IButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Styled.Button {...rest}>
      {children}
    </Styled.Button>
  );
};
