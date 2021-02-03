import News from '../models/News';
import { DB } from './DB';

const getNews = async (): Promise<News[]> => {
  const res = await DB.collection('news').get();
  const news: News[] = [];

  res.forEach((doc) => {
    const { title, transTitle, img, text, views, comments } = doc.data();
    const newNews = {
      id: doc.id,
      title,
      transTitle,
      img,
      text,
      views,
      comments,
    };

    news.push(newNews);
  });
  return news;
};

const addNews = async (news: News): Promise<void> => {
  const res = await DB.collection('news').add(news);
};
export { getNews, addNews };
