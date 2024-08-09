/* eslint-disable  */
import {
    GET,
    EMPTY_PAYLOAD,
    PRODUCT,
    PRODUCT_SUCCESS,
    PRODUCT_FAILED
} from './Type';

import {
    SET_API,
    PRODUCT_API_PATH
} from '../Services';

// ADD USER API
export const getProductData = () => {
    
    return async (dispatch) => {
        dispatch({ type: PRODUCT })
        try {
            const addCapacityMeasure = await SET_API(PRODUCT_API_PATH.GET_PRODUCT_DATA, GET, EMPTY_PAYLOAD)
            if (addCapacityMeasure) {
                dispatch({ type: PRODUCT_SUCCESS, payload: addCapacityMeasure })
            }
        } catch (error) {
            dispatch({ type: PRODUCT_FAILED })
            return error
        }
    }
}

