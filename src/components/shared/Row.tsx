import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children?: React.ReactNode;
  column?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  justifyEnd?: boolean;
};

type StyleProps = {
  column: boolean;
  justifyCenter: boolean;
  justifyEnd: boolean;
  alignCenter: boolean;
};

export const Row: React.FC<Props> = ({
  children,
  column = false,
  justifyCenter = false,
  alignCenter = false,
  justifyEnd = false,
}) => {
  return (
    <RowStyle
      column={column}
      justifyCenter={justifyCenter}
      alignCenter={alignCenter}
      justifyEnd={justifyEnd}
    >
      {children}
    </RowStyle>
  );
};

const RowStyle = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-between;

  ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.justifyEnd &&
    css`
      justify-content: flex-end;
    `}
  align-items: ${(props) => (props.alignCenter ? 'center' : '')};
`;

export default Row;
