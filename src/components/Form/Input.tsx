import React from 'react';
import styled from 'styled-components';
import FieldType from '../../types/FieldType';

const Input: React.FC<FieldType> = ({
  value,
  onChange,
  name = '',
  placeholder = '',
  type = '',
  disabled,
}) => {
  return (
    <InputStyle
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={type}
      disabled={disabled}
    />
  );
};

const InputStyle = styled.input`
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  transition: 0.15s;
  :hover {
    background: #e9e9e9;
  }
  :focus {
    box-shadow: 0px 1px 1px 1px gray;
    ::placeholder {
      font-size: 12px;
    }
  }
  ::placeholder {
    font-size: 13px;
    color: gray;
  }
  &:disabled {
    opacity: 0.3;
    background: #e9e9e9;
  }
`;

export default Input;
