import React from 'react'
import { Provider } from 'react-redux';


import { AppScreen } from './AppScreen'
import { store } from './store/store';

export const DeliveryApp = () => {
    return (
        <Provider store={store} >
            <AppScreen />
        </Provider>
    )
};
