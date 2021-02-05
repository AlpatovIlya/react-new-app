import React from 'react';
import styled from 'styled-components';
import FieldType from '../../types/FieldType';

const Textarea: React.FC<FieldType> = ({
  value,
  onChange,
  placeholder,
  name,
  disabled,
}) => {
  return (
    <TextareaStyle
      id={name}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

const TextareaStyle = styled.textarea`
  min-height: 150px;
  padding: 5px 10px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  transition: 0.15s;
  resize: none;
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

export default Textarea;
