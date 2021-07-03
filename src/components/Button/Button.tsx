import React, {FC} from 'react';
import {ButtonWrapper, StyledButton} from "./Buttons.styled";
import {ButtonProps} from "./Button.types";

const Button:FC<ButtonProps> = (props) => {
  const {title,onClick, uri} = props
  return (
    <ButtonWrapper onClick={onClick}>
      <StyledButton href={uri}>{title}</StyledButton>
    </ButtonWrapper>
  );
};

export default Button;
