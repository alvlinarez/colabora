import React from 'react';
import { useHistory } from 'react-router-dom';
import Product from '../components/Product';
import '../styles/containers/home.scss';

const Home: React.FunctionComponent = () => {
  const history = useHistory();
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
        {[1, 2, 3].map((product, i) => (
          <Product key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
