import React from 'react';
import summary from '../content/summary';
import Head from 'next/head';
import Wrapper from '../components/Wrapper';
import styled from 'styled-components';
import { fromIso } from '../helpers/date';

const S_h1_title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;
const S_li_list = styled.li`margin-bottom: 10px;`;

const renderItem = (item, key) => {
  return (
    <S_li_list key={key}>
      <a href={`/blog/${item.base.replace('.json', '')}`}>{item.title}</a>
      <p>{fromIso(item.date)}</p>
    </S_li_list>
  );
};

const Blog = props => {
  return (
    <Wrapper>
      <Head>
        <title>Blog - all posts</title>
      </Head>
      <S_h1_title>Blog posts</S_h1_title>
      <ul>
        {Object.keys(summary.fileMap)
          .sort(
            (a, b) =>
              summary.fileMap[a].date > summary.fileMap[b].date ? 0 : 1
          )
          .map((item, itr) => renderItem(summary.fileMap[item], itr))}
      </ul>
    </Wrapper>
  );
};

export default Blog;
