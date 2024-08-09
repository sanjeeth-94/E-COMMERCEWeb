"use strict";

import {
    PRODUCT,
    PRODUCT_SUCCESS,
    PRODUCT_FAILED
} from '../Actions/Type';

const INITIAL_STATE = {
    productListLoader: false,
    productListData: [],
   
};

const ConfigReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT:
            return { ...state, productListLoader: true };
        case PRODUCT_SUCCESS:
            return { ...state, productListData: action.payload, productListLoader: false };
        case PRODUCT_FAILED:
            return { ...state, productListLoader: false };
      
        default:
            return state;
    }
};

export default ConfigReducer;
