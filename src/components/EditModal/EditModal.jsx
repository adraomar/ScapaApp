import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditMotal = ({ show, onClose, rowData }) => {
    
    const {id, description} = rowData;

    return (
        <>
            <form>
                <Modal show={show} onHide={onClose}>
                    <Modal.Header className='bg-warning' closeButton>
                        <Modal.Title>Modificar Categoria</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3 disabled" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>N° Categoria</Form.Label>
                                <Form.Control type="text" placeholder={id} aria-label={id} disabled/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" value={description} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            Cerrar
                        </Button>
                        <Button variant="success">
                            Modificar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    )
}

export default EditMotal