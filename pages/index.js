import React from 'react';
import { delBasePath } from 'next/dist/next-server/lib/router/router'
import styled from 'styled-components'
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json'
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`; */

/*
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`; */

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
              <Input type="text" 
                name="nomeDoUsuario"
                onChange={(e) => { setName(e.target.value); }} 
                placeholder="Seu nome" 
                value={name} />
              <Button type="submit" disabled={name.length === 0}>{`Jogar ${name}`}</Button>
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


