import React, {FC} from 'react';
import {HeaderText, HeaderWrapper} from "./Header.styled";

const Header : FC = () => {
  return (
    <HeaderWrapper>
      <HeaderText>
        OAuth Test
      </HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
