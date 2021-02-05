import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { slugify } from 'transliteration';

import { Button, Container, Img, Row, Title } from '../components/shared';
import { ListNews } from '../components';

import News from '../models/News';
import { addNews, getNews } from '../services/News';
import { Form } from '../components';

const initialState = {
  title: '',
  transTitle: '',
  img: '',
  text: '',
};

const Admin = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [inputs, setInputs] = useState(initialState);

  async function fetchNews() {
    setLoading(true);
    const res = await getNews();
    setNews(res);
    setLoading(false);
  }

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    setInputs((prev) => ({ ...prev, transTitle: slugify(prev.title) }));
  }, [inputs.title]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const isEmpty = (): boolean => {
    return !(inputs.title && inputs.text && inputs.img);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setDisabled(true);

    const newNews: News = {
      id: Math.floor(Math.random() * 100),
      title: inputs.title,
      transTitle: inputs.transTitle,
      img: inputs.img,
      text: inputs.text,
      views: 0,
      comments: 0,
    };

    await addNews(newNews);
    setInputs(initialState);
    fetchNews();
    setDisabled(false);
  };

  return (
    <AdminStyle>
      <Container>
        <Title>Админ панель</Title>
        <Row>
          <ListNewsWrapper>
            {isLoading ? (
              'Loading...'
            ) : (
              <ListNews title="Все новости" news={news} />
            )}
          </ListNewsWrapper>
        </Row>
        <Row>
          <MainForm onSubmit={handleSubmit}>
            <Row justifyCenter>
              <Title>Форма новостей</Title>
            </Row>
            <Row>
              <Form.InputField>
                <Form.Label htmlFor="title">Заголовок</Form.Label>
                <Form.Input
                  value={inputs.title}
                  onChange={handleChange}
                  name="title"
                  disabled={disabled}
                />
              </Form.InputField>
              <Form.InputField>
                <Form.Label htmlFor="transTitle">Транслит</Form.Label>
                <Form.Input
                  value={inputs.transTitle}
                  onChange={handleChange}
                  name="transTitle"
                  disabled={true}
                />
              </Form.InputField>
            </Row>
            <Form.InputField>
              <Form.Label htmlFor="img">Url картинки</Form.Label>
              <Form.Input
                value={inputs.img}
                onChange={handleChange}
                name="img"
                disabled={disabled}
              />
            </Form.InputField>
            <Form.InputField>
              <Form.Label htmlFor="text">Текст</Form.Label>
              <Form.Textarea
                value={inputs.text}
                onChange={handleChange}
                name="text"
                disabled={disabled}
              />
            </Form.InputField>
            <Row justifyEnd>
              <Button green disabled={disabled || isEmpty()}>
                Добавить
              </Button>
            </Row>
          </MainForm>
          <Preview>
            <PreviewHeader>
              <Img src={inputs.img} alt="превью" />
            </PreviewHeader>
            <Row justifyCenter>
              <PreviewTitle>{inputs.title}</PreviewTitle>
            </Row>
            <PreviewText>{inputs.text}</PreviewText>
          </Preview>
        </Row>
      </Container>
    </AdminStyle>
  );
};

const ListNewsWrapper = styled.div`
  max-width: 270px;
`;

const AdminStyle = styled.section`
  padding: 30px 0;
`;

const MainForm = styled.form`
  padding: 40px 0;
  flex: 0 1 50%;
`;

const Preview = styled.div`
  flex: 0 1 320px;
  margin: 0 auto;
`;

const PreviewHeader = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;
const PreviewTitle = styled.h3`
  padding: 20px 0;
`;
const PreviewText = styled.div``;

export default Admin;
