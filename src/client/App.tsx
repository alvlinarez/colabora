import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import NewProduct from './containers/NewProduct';
import Layout from './components/layout/Layout';
import { ProductState } from './context/ProductState';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ProductState>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/new-product'} component={NewProduct} />
          </Switch>
        </ProductState>
      </Layout>
    </BrowserRouter>
  );
};
