import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Img, Title } from '../components/shared';
import News from '../models/News';
import { getNewsByTitle } from '../services/News';

type Props = {
  match: any;
};

const NewsPage: React.FC<Props> = ({ match }) => {
  const transTitle: string = match.params.transTitle;
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchNews() {
    setLoading(true);
    try {
      const candidate: News = await getNewsByTitle(transTitle);
      setNews(candidate);
    } catch (e) {}
    setLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <span>Лоадинг....</span>;
  if (!news) return <span>Новость не найдена</span>;

  return (
    <NewsPageStyle>
      <Container>
        <ImgWrapper>
          <Img src={news.img} />
        </ImgWrapper>
        <Title>{news.title}</Title>
        <Text>{news.text}</Text>
      </Container>
    </NewsPageStyle>
  );
};

const NewsPageStyle = styled.div``;

const ImgWrapper = styled.div`
  padding-bottom: 20px;
`;
const Text = styled.div`
  padding-top: 20px;
`;

export default NewsPage;
