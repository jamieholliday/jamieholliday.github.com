import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { fromIso } from '../helpers/date';
import styled from 'styled-components';

const S_div_content = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const S_ul_pagelinks = styled.ul`margin: 40px 0;`;

const S_h2_title = styled.h2`font-size: 20px;`;

class BlogIndex extends React.Component {
  render() {
    const pageLinks = [];
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    posts.forEach(post => {
      // console.log(post);
      if (post.node.frontmatter.path !== '/404/') {
        const title = get(post, 'node.frontmatter.title') || post.node.path;
        const date = get(post, 'node.frontmatter.date');
        pageLinks.push(
          <li
            key={post.node.frontmatter.path}
            style={{
              marginBottom: '10px',
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
              <S_h2_title>
                {title}
              </S_h2_title>
            </Link>
            {fromIso(date)}
          </li>
        );
      }
    });

    return (
      <S_div_content>
        <Helmet title={`${siteTitle} | Blog Posts`} />
        <h1>Blog Posts</h1>
        <S_ul_pagelinks>
          {pageLinks}
        </S_ul_pagelinks>
      </S_div_content>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date
            title
          }
        }
      }
    }
  }
`;
