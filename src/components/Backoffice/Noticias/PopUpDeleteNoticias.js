import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';


function ModalPopup(props) {
  const { handleClose, handleDelete, show } = props;
  return (
    <div style={{ height: '100px', width: '100px' }}>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Você quer mesmo deletar esta notícia?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button className="modal-button" onClick={handleClose}>
            Não
          </Button>
          <Button className="modal-button" onClick={handleDelete}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalPopup.propTypes = {
  handlemodal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default ModalPopup;