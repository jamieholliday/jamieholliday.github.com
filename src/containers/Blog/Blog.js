import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    const styles = require('./Blog.scss');
    return (
      <div className={styles.blog}>
        <div className="container">
          Blog
        </div>
      </div>
    );
  }
}
