/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={items[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    <div className={styles.drawer}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.arry.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
