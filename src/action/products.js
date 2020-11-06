
import { priceProduct } from "../dataStore/priceProduct";
import { types } from "../types/types";


// export const openModal = () => ({
//     type: types.actionOpenModal
// });

// export const closeModal = () => ({
//     type: types.actionCloseModal
// });

export const addProduct = (producto, cantidad, calendar, date) => {
    return (dispatch) => {
        
        cantidad = Number(cantidad);
        calendar = calendar.toString();
        date = Number(date);
        const productPrice = priceProduct.find(product => (product.producto === producto) );

        const precioFinal = productPrice.precio * cantidad;
        const newProduct ={
            producto,
            precio: productPrice.precio,
            cantidad,
            precioFinal,
            fechaDeEnvio: calendar,
            id: date
        }

        dispatch(addProducType(newProduct))
    }

};

export const addProducType = (newProduct) => ({
    type: types.actionAddProduct,
    payload: newProduct
});

export const deleteProduct = (id) => ({
    type: types.actionDeleteProduct,
    payload: id
});

export const uploadProduct = (producto, cantidad, calendar, date, id) => {
    return (dispatch) => {

        
        cantidad = Number(cantidad);
        calendar = calendar.toString();
        date = Number(date);
        console.log(producto, cantidad, calendar, date, id)
        
        const productPrice = priceProduct.find(product => (product.producto === producto) );
        const precioFinal = productPrice.precio * cantidad;
    
        const newProduct ={
            producto,
            precio: productPrice.precio,
            cantidad,
            precioFinal,
            fechaDeEnvio: calendar,
            id
        }

        dispatch(uploadPRoductType(newProduct, id))
    }
};

export const uploadPRoductType = (newProduct, id) => ({
    type: types.actionUploadProduct,
    payload: {
        id,
        product: newProduct
    }
})