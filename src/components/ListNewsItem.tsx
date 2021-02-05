import React from 'react';
import styled from 'styled-components';
import News from '../models/News';

type Props = {
  title: string;
  text: string;
  onClick?: () => void;
};

const ListNewsItem: React.FC<Props> = ({ title, text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <ListStyle>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </ListStyle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    background: #cfcfcf;
  }
`;

const ListStyle = styled.div`
  display: block;
  text-decoration: none;
  color: #000;
  padding: 10px 5px;
`;
const Title = styled.span`
  display: block;
  width: 100%;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const Text = styled.span`
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default ListNewsItem;
