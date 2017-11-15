import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Centered from '../components/Centered';
import { fonts, colours } from '../helpers/styles';

// Import typefaces
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${fonts.default};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
  }

  a {
    color: ${colours.blue};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  li {
    list-style: none;
  }

  p {
    line-height: 1.2;
    margin-bottom: 1em;
  }

  .blog ul {
    padding-left: 20px;
  }

  .blog li {
    margin-bottom: 10px;
    list-style: initial; 
  }

  img {
    max-width: 100%
  }
`;

const S_main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: calc(100vh - 147px);
`;

const Wrapper = props => {
  return (
    <div>
      <Header />
      <S_main>
        <Centered>{props.children}</Centered>
      </S_main>
      <Footer />
    </div>
  );
};

export default Wrapper;
