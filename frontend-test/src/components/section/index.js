import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Section = ({ children, className, title }) => (
  <div className={classNames(styles.section, className)}>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.node.isRequired
};

export default Section;
