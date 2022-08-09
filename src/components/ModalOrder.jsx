import React, { useState, useContext } from 'react';
import { CartContext } from "../contexts/CartContext";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormOrder from "./FormOrder";

function ModalOrder({totalPrice}) {

  const [show, setShow] = useState(false);
  const context = useContext(CartContext);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-dark" onClick={handleShow}>
        Finalizar compra
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Finalizar órden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormOrder totalPrice={totalPrice} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalOrder;