import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
            </div>
            <h1>React Redux Example</h1>
          </div>
        </div>

        <div className="container">
          Homepage
        </div>
      </div>
    );
  }
}
