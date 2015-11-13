import React from 'react';
import { Link } from 'react-router';

const renderLinks = (item, i, styles) => {
  return (
    <li key={i}>
      <Link className={styles.nav__item} to={item.path} activeClassName={styles.nav__item__active}>{item.name}</Link>
    </li>
  );
};

export default () => {
  const styles = require('./Nav.scss');
  const links = [
    {name: 'Portfolio', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Blog', path: '/blog'},
  ];
  return (
    <div>
      <ul>
        {links.map((link, i) => renderLinks(link, i, styles))}
      </ul>
    </div>
  );
};
