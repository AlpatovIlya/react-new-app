import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getNews } from '../services/News';

import { ListNews } from '../components/ListNews';
import { News } from '../components/News';
import { Container } from '../components/shared/Container';
import { Row } from '../components/shared/Row';
import { Title } from '../components/shared/Title';
import { Item, Table } from '../components/Tawlind';

import NewsType from '../models/News';

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
          <Table>
            {news.map((news) => (
              <Item key={news.id}>
                <News
                  img={news.img}
                  title={news.title}
                  href={news.transTitle}
                  text={news.text}
                  views={news.views}
                  comments={news.comments}
                />
              </Item>
            ))}
          </Table>
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
