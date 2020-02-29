/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';

const S_h1 = styled.h1`
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Wrapper background="orange">
      <Head>
        <title>Jamie Holliday</title>
        <meta
          name="description"
          content="Javascript developer using react, redux"
        />
      </Head>
      <S_h1>Jamie Holliday</S_h1>
      <section>
        <p>
          I'm Jamie.
          <br />
          This is my small section of the internet.
        </p>
        <p>
          I currenty work for <a href="https://www.job.com">Job.com</a> leading
          the front end development team. I have more than 10 years web
          development experience with the current core tech stack focussed
          around React, Redux, etc
        </p>
        <p>
          I work 100% remotely. I'm very happy and productive with this setup. A
          commute is not for me thanks!
        </p>
        <p>I'm into fitness, drawing, snowboarding, and mountain biking.</p>
      </section>
    </Wrapper>
  );
};

export default Home;
