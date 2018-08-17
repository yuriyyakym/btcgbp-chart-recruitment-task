import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
