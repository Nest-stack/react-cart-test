import React, { useState } from 'react';
import Header from './Components/Header/Header';
import ItemList from './Components/Item/ItemList';
import Modal from './Components/UI/Modal';
import Cart from './Components/Cart/Cart';

const MENU_DATA = [
  {
    id: '0',
    name: 'Sushi',
    description: 'Fish n rice',
    price: 8,
  },
  {
    id: '1',
    name: 'Salmon',
    description: 'Type of Fish',
    price: 2,
  },
  {
    id: '2',
    name: 'Soya',
    description: 'Veg Item',
    price: 4,
  },
  {
    id: '3',
    name: 'Salty Tuna',
    description: 'Salted Fish',
    price: 1,
  },
];

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const modalOffHandler = () => {
    setShowModal(false);
  };
  const modalShowHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal clearModal={modalOffHandler}>
          <Cart clearModal={modalOffHandler} menuData={MENU_DATA} />
        </Modal>
      )}
      <Header cartClick={modalShowHandler} />
      <h1>New feature</h1>
      <ItemList menuData={MENU_DATA} />
    </>
  );
};

export default App;
