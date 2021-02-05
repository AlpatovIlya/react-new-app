import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Header, Footer } from './components';

import { Home, NewsPage, Admin, NotFound } from './pages';
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Header />
          <Main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/news/:transTitle" component={NewsPage} />
              <Route path="/admin" component={Admin} />
              <Route component={NotFound} />
            </Switch>
          </Main>
          <Footer />
        </Router>
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = styled.main`
  flex: 1 1 auto;
`;

export default App;
