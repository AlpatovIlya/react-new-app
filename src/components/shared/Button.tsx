import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children?: React.ReactNode;
  type?: string;
  green?: boolean;
  red?: boolean;
  disabled?: boolean;
};

type StyleProps = {
  green?: boolean;
  red?: boolean;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ children, green, red, disabled }) => {
  console.log(disabled);
  return (
    <ButtonStyle red={red} green={green} disabled={disabled}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<StyleProps>`
  border: none;
  padding: 10px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.7;
    `}
  ${(props) =>
    props.green &&
    css`
      color: #fff;
      background: #17e861;
    `}

  ${(props) =>
    props.red &&
    css`
      color: #fff;
      background: #ee1137;
    `}
`;

export default Button;
