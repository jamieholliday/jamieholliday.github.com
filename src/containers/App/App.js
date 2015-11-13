import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { InfoBar, Nav } from 'components';
// import { pushState } from 'redux-router';
import config from '../../config';

// @connect(
//   // state => ({user: state.auth.user}),
//   {pushState}
// )
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    // pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static fetchData(getState, dispatch) {
    const promises = [];
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    return Promise.all(promises);
  }

  render() {
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <Nav />
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        <InfoBar/>
      </div>
    );
  }
}
