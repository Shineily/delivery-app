import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

import { uploadProduct } from '../action/products';

export const EditProducts = (props) => {
    const dispatch = useDispatch();

    const [calendar, setCalendar] = useState();
    const [producto, setProducto] = useState('Producto A');
    const [cantidad, setCantidad] = useState();

    
    const handleChangeCalendar = (event) => {
        setCalendar(event._d);
    };
    
    const handleChangeProducto = (event) => {
        setProducto(event.target.value);
    };
    
    const handleChangeCantidad = (event) => {
        setCantidad(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const date = new Date();
        const id = props.id
        console.log(producto, cantidad, calendar)
        dispatch(uploadProduct(producto, cantidad, calendar, date, id));

    };

    
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
        <Modal.Title>Actualizar Entrega</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group  controlId="Products">
                        <Form.Label>Productos</Form.Label>
                        <Form.Control  onChange={handleChangeProducto} as="select" custom>
                            <option >Producto A</option>
                            <option >Producto B</option>
                            <option >Producto C</option>
                            <option >Producto D</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Label>Cantidad</Form.Label>
                    <input  onChange={handleChangeCantidad} type='number' className='form-control'/>

                    <Form.Label>Fecha de envio</Form.Label>
                    <Datetime value={calendar} onChange= {handleChangeCalendar} />

                </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide} type='submit'  variant="primary"  >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
    </Modal>
    )
}
