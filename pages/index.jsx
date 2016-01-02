import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import sortBy from 'lodash/collection/sortBy';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import { rhythm } from 'utils/typography';
import Bio from 'components/Bio';
import About from 'components/About';

export default class Index extends React.Component {
  static data() {
    return {
      yo: true
    };
  }
  render() {
    const { pages } = this.props;
    const { blogTitle, authorName } = this.props.config;
    const pageLinks = sortBy(pages, (page) => {
      return page.data ? page.data.date : void 0;
    })
    .reverse()
    .filter(page => {
      return page.path && page.path !== '/';
    })
    .map(page => {
      const title = (page.data ? page.data.title : null) || page.path;
      return (
        <li
          key={page.path}
          style={{
            marginBottom: rhythm(1 / 4)
          }}
        >
          <Link to={link(page.path)}>{title}</Link>
        </li>
      );
    });
    return (
      <DocumentTitle title={blogTitle}>
        <div>
          <About />
          <ul>
            {pageLinks}
          </ul>
          <Bio authorName={authorName} />
        </div>
      </DocumentTitle>
    );
  }
}

Index.propTypes = {
  pages: PropTypes.array,
  config: PropTypes.object,
};
