import firebase from 'firebase';

const firebaseConfig: Object = {
  apiKey: 'AIzaSyACOAqbfYYtNM1sZ_So4IYxlW-bLNgulJI',
  authDomain: 'react-news-app-f7a86.firebaseapp.com',
  projectId: 'react-news-app-f7a86',
  storageBucket: 'react-news-app-f7a86.appspot.com',
  messagingSenderId: '57109045309',
  appId: '1:57109045309:web:607ae238152d290060ca54',
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore();

export { DB, firebase };
