import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

import { useDispatch } from 'react-redux';
import { addProduct } from '../action/products';



export const NavBar = () => {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const [calendar, setCalendar] = useState();
    const [producto, setProducto] = useState('Producto A');
    const [cantidad, setCantidad] = useState();



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseSave = () => {
        setShow(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = new Date();

        dispatch(addProduct(producto, cantidad, calendar, date));
    };

    const handleChangeCalendar = (event) => {
        setCalendar(event._d);
    };

    const handleChangeProducto = (event) => {
        setProducto(event.target.value);
        console.log()
    };

    const handleChangeCantidad = (event) => {
        setCantidad(event.target.value);
    };

    // const validateDate = (currentDate, selectedDate) => {
        
    // }



    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">Productos</div>
            <select className="custom-select w-25 p-3">
                <option value=''>Open this select menu</option>
                <option >Producto A</option>
                <option >Producto B</option>
                <option >Producto C</option>
                <option >Producto D</option>
            </select>
            <Button variant="primary" onClick={handleShow}>
                Agregar productos
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Agendar Entrega</Modal.Title>
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
                    <Datetime  value={calendar} onChange= {handleChangeCalendar} />

                </Modal.Body>
                    <Modal.Footer>
                        <Button type='submit'  variant="primary" onClick={handleCloseSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </nav>
    )
}



