import { Component } from 'react';
import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import { fromIso } from '../helpers/date';
import styled from 'styled-components';

class Post extends Component {
  static getInitialProps({ query }) {
    const content = require(`../content/${query.id}.json`);
    return { id: query.id, content };
  }
  render() {
    const { content } = this.props;
    return (
      <Wrapper>
        <Head>
          <title>{content.title}</title>
        </Head>
        <h1>{content.title}</h1>
        <p>{fromIso(content.date)}</p>
        <div dangerouslySetInnerHTML={{ __html: content.bodyHtml }} />
      </Wrapper>
    );
  }
}

export default Post;
