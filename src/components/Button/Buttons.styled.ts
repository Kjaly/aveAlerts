import styled from "styled-components";

export const ButtonWrapper = styled.div`
  background: #DBE4EE;
  color: #2A2B2E;
  padding: 10px;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-size: 26px;
  &:hover {
    transform: scale(1.05);
  }
`

export const StyledButton = styled.a`
  background: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`
