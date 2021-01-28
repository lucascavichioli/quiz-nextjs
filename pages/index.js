import React from 'react';
import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from 'next/head';
import { useRouter } from 'next/router';

/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */


export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  
  const [name, setName] = React.useState('');
  console.log(name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz NextJS | Aprendendo NextJS!</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Vikings in World!</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(e){
                e.preventDefault();
                router.push(`/quiz?name=${name}`);

                console.log('Fazendo uma requisição');
              }
            }>
              <input type="text" 
                onChange={function (e){
                    console.log(e.target.value);
                     //State
                    //name = e.target.value;
                    setName(e.target.value); 
                  }} 
                placeholder="Seu nome" />
              <button type="submit" disabled={name.length === 0}>Jogar {name}</button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The Vikings in World!</h1>
            <p>awdawdawdawdawdawdawd!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucascavichioli" />
    </QuizBackground>
  );
}


