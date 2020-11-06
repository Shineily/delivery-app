import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../action/products'

export const DeleteProduct = (props) => {
    const dispatch = useDispatch()

    const handleDelete = () => {

        // props.onHide
        dispatch(deleteProduct(props.id))
    }


    return (
        <Modal {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Entrega</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Esta Seguro de querer eliminar este producto?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                    Eliminar
                </Button>
                <Button variant="secondary" onClick={props.onHide}>
                    Salir
                </Button>
            </Modal.Footer>
      </Modal>
    )
}
