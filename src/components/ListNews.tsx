import React from 'react';
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
        <Wrapper key={news.id}>
          {console.log(news)}
          <Title>{news.title}</Title>
          <Text>{news.text}</Text>
        </Wrapper>
      ))}
    </List.Wrapper>
  );
};

const Wrapper = styled(List.Item)`
  padding: 20px 0;
`;
const Title = styled.div`
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
