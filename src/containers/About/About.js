import React, { Component } from 'react';

export default class About extends Component {
  render() {
    const styles = require('./About.scss');
    return (
      <div className={styles.about}>
        <div className="container">
          About page
        </div>
      </div>
    );
  }
}
