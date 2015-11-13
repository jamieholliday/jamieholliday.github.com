import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    const styles = require('./Portfolio.scss');
    return (
      <div className={styles.portfolio}>
        <div className="container">
          Portfolio page
        </div>
      </div>
    );
  }
}
