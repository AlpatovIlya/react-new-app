import News from '../models/News';
import { DB, firebase } from './DB';

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

const getNewsByTitle = async (idTitle: string): Promise<News> => {
  let candidate: News | null = null;

  const res = await DB.collection('news').get();

  res.forEach((doc) => {
    const { title, transTitle, img, text, views, comments } = doc.data();
    if (transTitle === idTitle) {
      candidate = {
        id: doc.id,
        title,
        transTitle,
        img,
        text,
        views,
        comments,
      };
    }
  });

  if (candidate) {
    return candidate;
  }

  throw new Error('Новость не найдена');
};
export { getNews, addNews, getNewsByTitle };
