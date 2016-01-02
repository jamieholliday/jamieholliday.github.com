import React from 'react';
import moment from 'moment';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';
import ReadNext from '../components/ReadNext';
import { rhythm, fontSizeToMS } from 'utils/typography'
import Bio from 'components/Bio';

import '../css/zenburn.css';

module.exports = React.createClass({
  render: function() {
    var post
    post = this.props.page.data;

    return (
      <DocumentTitle title={`${post.title} | ${this.props.config.blogTitle}`}>
        <div className="markdown">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{__html: post.body}}/>
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2),
              color: '#8F8F8F'
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <ReadNext post={post} {...this.props}/>
          <Bio authorName={this.props.config.authorName} />
        </div>
      </DocumentTitle>
    );
  }
});
