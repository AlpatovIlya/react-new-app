import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  column?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
};

type StyleProps = {
  column: boolean;
  justifyCenter: boolean;
  alignCenter: boolean;
};

export const Row: React.FC<Props> = ({
  children,
  column = false,
  justifyCenter = false,
  alignCenter = false,
}) => {
  return (
    <RowStyle
      column={column}
      justifyCenter={justifyCenter}
      alignCenter={alignCenter}
    >
      {children}
    </RowStyle>
  );
};

const RowStyle = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.justifyCenter ? 'center' : 'space-between'};
  align-items: ${(props) => (props.alignCenter ? 'center' : '')};
`;


export default Row;