import React from 'react';
import styled from 'styled-components';
import { A, Img } from './shared';

type Props = {
  img: string;
  title: string;
  href: string;
  text: string;
  views: number;
  comments: number;
};

const News: React.FC<Props> = ({ img, title, href, text, views, comments }) => {
  return (
    <NewsStyle>
      <NewsHeader>
        <Img src={img} alt="news" ariaHidden={true} />
      </NewsHeader>
      <NewsBody>
        <NewsTitle>{title}</NewsTitle>
        <NewsText>{text}</NewsText>
        <A href={href}>Читать дальше</A>
      </NewsBody>
    </NewsStyle>
  );
};

const NewsStyle = styled.div`
  border-radius: 20px;
  box-shadow: 1px 1px 2px 2px #dadada;
`;

const NewsHeader = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;

const NewsBody = styled.div`
  padding: 10px 5px;
`;

const NewsTitle = styled.span`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
`;

const NewsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export default News;
