import { createContext } from 'react';

interface ProductStateInterface {}

interface ProductContextInterface {
  products: [];
  productLoading: boolean;
  productError: any;
  getProducts: () => any;
  createProduct?: (formData: FormData, history: any) => Promise<void>;
}

export const ProductContext = createContext<ProductContextInterface>({
  products: [],
  productLoading: false,
  productError: null,
  getProducts: () => {}
});
