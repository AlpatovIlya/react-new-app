import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsType from '../models/News';

import { getNews } from '../services/News';

import { List, News, Tawlind, ListNewsItem } from '../components';
import { Container, Title, Row } from '../components/shared';
import { Link } from 'react-router-dom';

const news: NewsType[] = [];

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
            <List.Wrapper title="Самые свежие новости">
              {news.map(({ id, title, text, transTitle }) => {
                return (
                  <List.Item key={id}>
                    <ItemLink to={`/news/${transTitle}`}>
                      <ListNewsItem title={title} text={text} />
                    </ItemLink>
                  </List.Item>
                );
              })}
            </List.Wrapper>
          </ListNewsColumn>
        </Row>
      </Container>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  padding: 20px 0;
`;

const ListNewsColumn = styled.div`
  width: 240px;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
`;

export default Home;
