import React, { useReducer } from 'react';
import ProductReducer from './ProductReducer';
import { axiosClient } from '../config/axios';
import { ProductContext } from './ProductContext';

import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  PRODUCT_LOADING
} from '../types/ProductTypes';

export const ProductState: React.FC = ({ children }) => {
  const initialState = {
    products: [],
    productLoading: false,
    productError: null
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    dispatch({
      type: PRODUCT_LOADING
    });
    try {
      const { data } = await axiosClient().get('product');
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data.products
      });
    } catch (e) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: e.response.data.error
      });
    }
  };

  const createProduct = async (formData: FormData, history: any) => {
    dispatch({
      type: PRODUCT_LOADING
    });
    try {
      const { data } = await axiosClient().post('product', formData);
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: data.product
      });
      history.push('/');
    } catch (e) {
      dispatch({
        type: ADD_PRODUCT_ERROR,
        payload: e.response.data.error
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        productLoading: state.productLoading,
        productError: state.productError,
        getProducts,
        createProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
