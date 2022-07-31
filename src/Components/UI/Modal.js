import React from 'react';

import styles from './Modal.module.css';

const Modal = props => {
  const modalOffHandler = () => {
    props.clearModal();
  };
  const BackDrop = () => {
    return (
      <div className={styles.backdrop} onClick={modalOffHandler} ></div>
    )
  };
  const ModalCard = () => {
    return (
      <div className={styles.modalCard}>{props.children}</div>
    )
  };
  return (
    <React.Fragment>
      <BackDrop />
      <ModalCard>{props.children}</ModalCard>
    </ React.Fragment>
  );
};

export default Modal;