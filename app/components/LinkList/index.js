/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';
import styles from './styles.css';
import IconButton from '../IconButton';

function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(link => (
    <Link key={link.id} link={link} />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton
        icon="plus"
        iconClass={styles.icon}
        buttonClass={styles.button}
        onClick={() => startAdd(topicName)}
      />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      description: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      id: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  topicName: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
  startAdd: React.PropTypes.func.isRequired,
};

export default LinkList;
