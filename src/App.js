import React from 'react';
import styled from 'styled-components';

import Sidebar from './components/Sidebar/Sidebar'
import Article from './components/Article/Article'

import data from './Articles.json'

const Container = styled.div`
  text-align: center;
  display: flex;
  width: 100vw;
`;

const Header = styled.h4`
  color: #202C39;
  text-align: left;
`

const Articles = styled.div`
  width: 100vw;
  padding: 0px 20px;
  max-height: 100vh;
  overflow-y: scroll;
`;

class App extends React.Component {
  render() {
    const article = data.Articles;
    return (
      <Container>
        <Sidebar />
        <Articles>
          <Header>250 words or less:</Header>
          {
            article.map(a => (
              <Article
                title={a.title}
                date={a.date}
                summary={a.summary}
                citation={a.citation}
                tags={a.tags}
              />
            ))
          }
        </Articles>
      </Container>
    ) 
  }
}

export default App;
