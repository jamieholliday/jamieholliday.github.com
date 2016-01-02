import React, { PropTypes } from 'react';
import { rhythm } from 'utils/typography';

const Bio = (props) => {
  return (
    <div
      style={{
        marginBottom: rhythm(2.5),
        paddingTop: rhythm(1),
        display: 'flex',
        borderTop: '1px solid lightgray'
      }}
    >
      <img
        src="../images/jamie.jpg"
        style={{
          float: 'left',
          marginRight: rhythm(1 / 4),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2)
        }}
      />
    <p>Written by <strong>{props.authorName}</strong>. <a href="https://twitter.com/jamieholliday">I'm on Twitter</a>, <a href="https://github.com/jamieholliday">Github</a> and <a href="https://www.linkedin.com/in/jamieholliday">LinkedIn</a><br />Site built with <a href="https://github.com/gatsbyjs/gatsby">Gatsby</a></p>
</div>
  );
};

Bio.propTypes = {
  authorName: PropTypes.string,
};

export default Bio;
