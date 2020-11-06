import React from 'react'
import { useSelector } from 'react-redux';


import { DeleteProduct } from '../modals/DeleteProduct';
import {EditProducts} from '../modals/EditProducts'

export const Table = () => {
    const {products} = useSelector(state => state.products);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowDelete, setModalShowDelete] = React.useState(false);

    


    return (
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio unitario</th>
                        <th scope="col">Precio total</th>
                        <th scope="col">Fecha de envío</th>
                        <th scope="col">Acciones</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <th scope="row">{index+1}</th>
                                <td>{product.producto}</td>
                                <td>{product.cantidad}</td>
                                <td>{product.precio}</td>
                                <td>{product.precioFinal}</td>
                                <td>{(new Date(product.fechaDeEnvio)).toLocaleDateString("es")}</td>

                                <td variant="primary" onClick={() => setModalShow(true)} > 
                                    Editar
                                </td>
                                <EditProducts 
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    id={product.id}
                                />
                                <td onClick={ () => setModalShowDelete(true) }> Eliminar </td>
                                <DeleteProduct
                                    show={modalShowDelete}
                                    onHide={() => setModalShowDelete(false)}
                                    id={product.id}
                                />
                            </tr>
                        ))}
                </tbody>
            </table>

        </>
    )
}
