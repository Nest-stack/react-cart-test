import React from 'react';
import Item from './Item';
import Card from '../UI/Card';

const ItemList = props => {
  return (
    <Card>
      <ul>
        {props.menuData.map((item) => {
          return <li
            key={item.id}
          ><Item
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            /></li>
        })}
      </ul>
    </Card>
  );
};

export default ItemList;
