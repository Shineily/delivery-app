import { types } from "../types/types";


const initialState = {
    products: [
        {
            producto: 'Producto A',
            precio: 50,
            cantidad: 2,
            precioFinal: 100,
            fechaDeEnvio: 'Mayo 15, 2021',
            id: 11111
        },
        {  
            producto: 'Producto C',
            precio: 70,
            cantidad: 3,
            precioFinal: 210,
            fechaDeEnvio: 'Febrero 21, 2021',
            id: 2222
        }
    ]
}


export const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.actionAddProduct:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case types.actionDeleteProduct:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        case types.actionUploadProduct:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ?
                    action.payload.product : product )
            }
        default:
            return state
    }
}

