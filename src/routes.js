import React from 'react';
import {IndexRoute, Route} from 'react-router';

import {
    App,
    Portfolio,
    About,
    Blog,
    NotFound,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Portfolio}/>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="blog" component={Blog}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
