import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Centered from '../components/Centered';
import { fonts, colours } from '../helpers/styles';

// Import typefaces
import 'typeface-raleway';
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

  .gatsby-resp-image-wrapper {
    margin: 20px 0;
  }

  .blog ul {
    padding-left: 20px;
  }

  .blog li {
    margin-bottom: 10px;
    list-style: initial; 
  }
`;

const S_main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: calc(100vh - 147px);
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    return (
      <div>
        <Header />
        <S_main>
          <Centered>
            {children()}
          </Centered>
        </S_main>
        <Footer />
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};

export default Template;
