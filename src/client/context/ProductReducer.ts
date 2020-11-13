import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  PRODUCT_LOADING,
  RESET_PRODUCT_STATE
} from '../types/ProductTypes';

interface ProductState {
  products: any;
  productLoading: boolean;
  productError: any;
}

interface ActionType {
  type: string;
  payload?: any;
}

const ProductReducer = (
  state: ProductState,
  action: ActionType
): ProductState => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        productLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productLoading: false,
        products: action.payload,
        productError: null
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        productError: null,
        products: [action.payload, ...state.products],
        productLoading: false
      };

    case RESET_PRODUCT_STATE:
      return {
        productLoading: false,
        productError: null,
        products: []
      };
    case GET_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        productLoading: false,
        productError: action.payload
      };
    default:
      return state;
  }
};

export default ProductReducer;
