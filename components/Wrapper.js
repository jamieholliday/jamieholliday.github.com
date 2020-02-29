import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Centered from './Centered';
import { fonts, colours } from '../helpers/styles';

// Import typefaces

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${fonts.default};
    color: white;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
  }

  a {
    color: white;
    /* text-decoration: none; */
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

const S_div_wrapper = styled.div`
  background: ${({ colour }) => colours[colour]};
`;

const S_main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: calc(100vh - 74px);
`;

const Wrapper = props => {
  return (
    <S_div_wrapper colour={props.background}>
      <GlobalStyles />
      <Header />
      <S_main>
        <Centered>{props.children}</Centered>
      </S_main>
    </S_div_wrapper>
  );
};

Wrapper.defaultProps = {
  background: 'purple',
};

Wrapper.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

export default Wrapper;
