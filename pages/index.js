import React from 'react';
import summary from '../content/summary';
import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import { media, colours } from '../helpers/styles';

import styled from 'styled-components';

const S_h1 = styled.h1`margin-bottom: 20px;`;
const S_h2 = styled.h2`margin-bottom: 20px;`;

const S_div_about = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  ${media.sm`
    flex-direction: row
  `};
`;

const S_div_profile = styled.div`
  margin-bottom: 20px;
  width: 300px;
  height: 300px;
  align-self: center;
  flex: 1;

  ${media.sm`
    margin: 0 20px 0 0;
    width: 150px;
    height: 150px;
  `};
`;

const S_img_profile = styled.img`
  border: 5px solid ${colours.darkBlue};
  border-radius: 50%;
  width: 300px;
  height: 300px;
  ${media.sm`
    min-width: 150px;
    width: 150px;
    height: 150px;
  `};
`;

const S_div_copy = styled.div`${media.sm`padding-top: 30px;`};`;

const S_ul_portfolio_items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -5px 20px;

  ${media.sm`
    justify-content: space-between
  `};
`;

const S_img_portfolio_item = styled.img`
  max-width: 330px;
  width: 100%;
  margin: 5px;
  border: 3px solid #f1f1f1;
`;

const S_img_portfolio_main = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const portfolio = [
  { alt: 'Nokia screenshot', img: 'screen2.jpg' },
  { alt: 'Ignition screenshot', img: 'screen3.jpg' },
  { alt: 'JCC screenshot', img: 'screen4.jpg' },
  { alt: 'Jaguar Landrover screenshot', img: 'screen6.jpg' },
  { alt: 'Pavers screenshot', img: 'screen7.jpg' },
  { alt: 'IJP screenshot', img: 'screen8.jpg' },
  { alt: 'PoP screenshot', img: 'screen9.jpg' },
  { alt: 'Bauhaus Kids screenshot', img: 'screen10.jpg' },
  { alt: 'Victoria Dashboard screenshot', img: 'screen11.jpg' },
];

const renderAbout = () => {
  return (
    <section>
      <S_div_about>
        <S_div_profile>
          <S_img_profile
            src={'/images/jamie.jpg'}
            alt="Jamie Holliday"
            width="150"
            height="150"
          />
        </S_div_profile>
        <S_div_copy>
          <p>
            I'm Jamie. I currenty work for{' '}
            <a href="http://www.myjobmatcher.com">MyJobMatcher</a> as a Lead
            Front End Developer. My daily work involves building apps focussed
            on matching users to their perfect job and helping recruiters find
            relevant hires, as well as the development of internal tools
          </p>
          <p>
            I work 100% remotely. I'm very happy and productive with this setup.
            The ratrace commute is not for me thanks.
          </p>
        </S_div_copy>
      </S_div_about>
    </section>
  );
};

const renderPortfolio = () => {
  return (
    <section>
      <S_h2>Portfolio</S_h2>
      <p>
        I have worked on a number of Front End projects in various product and
        agency environments, for brands such as Agent Provocateur, Polarn O
        Pyret, Bauhaus, Nokia, Toyota, Jaguar LandRover, Honda, Nissan, L'Oréal,
        Lexus &amp; Yamaha.
      </p>
      <S_img_portfolio_main
        alt="MJM uk screenshot"
        src="/images/screen15.jpg"
      />
      <S_ul_portfolio_items>
        {portfolio.map((item, itr) => (
          <li key={itr}>
            <S_img_portfolio_item src={`/images/${item.img}`} alt={item.alt} />
          </li>
        ))}
      </S_ul_portfolio_items>
    </section>
  );
};
const renderTools = () => {
  return (
    <section>
      <S_h2>Tools</S_h2>
      <p>
        I try and stay up to date with the ever changing Front End techniques
        and technologies. My current favourite tech stack would include React,
        Redux, Node, Webpack, ES6, Jest.
      </p>
    </section>
  );
};

const Home = props => {
  return (
    <Wrapper>
      <Head>
        <title>Jamie Holliday</title>
      </Head>
      <S_h1>Jamie Holliday</S_h1>
      {renderAbout()}
      {renderPortfolio()}
      {renderTools()}
    </Wrapper>
  );
};

export default Home;
