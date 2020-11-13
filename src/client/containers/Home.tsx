import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';
import '../styles/containers/home.scss';
import Loader from '../components/Loader';

const Home: React.FunctionComponent = () => {
  // routing
  const history = useHistory();

  // getting state from context
  const productContext = useContext(ProductContext);

  const {
    products,
    getProducts,
    productLoading,
    productError
  } = productContext;

  useEffect(() => {
    // only make api call when page is refreshed
    if (products.length === 0) {
      getProducts();
    }
  }, []);

  return (
    <div>
      <div className="homeHeader">
        <h1>Products</h1>
        <div className="homeButton">
          <button onClick={() => history.push('/new-product')}>
            New Product
          </button>
        </div>
      </div>
      <div>
        {productLoading ? (
          <Loader />
        ) : products && products.length === 0 ? (
          <div>No products found.</div>
        ) : (
          products.map((product: any) => (
            <Product key={product.id} product={product} />
          ))
        )}
        {productError && <div>An unexpected error happened :(</div>}
      </div>
    </div>
  );
};

export default Home;
