import React, { Component } from 'react';

export default class Edit extends Component {
  render() {
    const styles = require('./Edit.scss');
    return (
      <div className={styles.edit}>
        <div className="container">
          Edit
        </div>
      </div>
    );
  }
}
