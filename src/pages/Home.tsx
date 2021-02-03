import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsType from '../models/News';

import { getNews } from '../services/News';

import { ListNews, News, Tawlind } from '../components';
import { Container, Title, Row } from '../components/shared';

const news: NewsType[] = [
  {
    id: 1,
    title: 'Все что вы хотели знать о UUID',
    transTitle: 'Vse_sho_ve_hotely_znat',
    img: 'https://comphome.ru/wp-content/uploads/post/uuid.jpg',
    text: 'Lorem 1000',
    views: 2,
    comments: 0,
  },
  {
    id: 2,
    title: 'Все что вы хотели знать о UUID',
    transTitle: 'Vse_sho_ve_hotely_znat',
    img: 'https://comphome.ru/wp-content/uploads/post/uuid.jpg',
    text: 'Lorem 1000',
    views: 2,
    comments: 0,
  },
  {
    id: 3,
    title: 'Все что вы хотели знать о UUID',
    transTitle: 'Vse_sho_ve_hotely_znat',
    img: 'https://comphome.ru/wp-content/uploads/post/uuid.jpg',
    text: 'Lorem 1000',
    views: 2,
    comments: 0,
  },
];

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fecthAPI() {
      const news: NewsType[] = await getNews();
      setNews(news);
      setLoading(false);
    }

    fecthAPI();
  }, []);

  if (isLoading) return <span>Loading...</span>;

  return (
    <HomeStyle>
      <Container>
        <Title>Все новости:</Title>
        <Row>
          <Tawlind.Table>
            {news.map((news) => (
              <Tawlind.Item key={news.id}>
                <News
                  img={news.img}
                  title={news.title}
                  href={news.transTitle}
                  text={news.text}
                  views={news.views}
                  comments={news.comments}
                />
              </Tawlind.Item>
            ))}
          </Tawlind.Table>
          <ListNewsColumn>
            <ListNews title="Самые свежие новости" news={news} />
          </ListNewsColumn>
        </Row>
      </Container>
    </HomeStyle>
  );
};

const ListNewsColumn = styled.div`
  width: 240px;
`;

const HomeStyle = styled.div`
  padding: 20px 0;
`;

export default Home;
