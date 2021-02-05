import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import News from '../models/News';
import List from './List';

type Props = {
  title: string;
  news: News[];
};

const ListNews: React.FC<Props> = ({ title, news }) => {
  return (
    <List.Wrapper title={title}>
      {news.map((news) => (
        <List.Item>
          <Wrapper key={news.id}>
            <ListStyle to={`/news/:${news.transTitle}`}>
              <Title>{news.title}</Title>
              <Text>{news.text}</Text>
            </ListStyle>
          </Wrapper>
        </List.Item>
      ))}
    </List.Wrapper>
  );
};

const Wrapper = styled.div`
  transition: 0.15s;
  &:hover {
    background: #cfcfcf;
  }
`;

const ListStyle = styled(Link)`
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

export default ListNews;
