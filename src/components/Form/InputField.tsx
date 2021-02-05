import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const InputField: React.FC<Props> = ({ children }) => {
  return <InputFieldStyle>{children}</InputFieldStyle>;
};

const InputFieldStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export default InputField;
