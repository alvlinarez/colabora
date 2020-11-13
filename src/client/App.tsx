import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import NewProduct from './containers/NewProduct';
import Layout from './components/layout/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/new-product'} component={NewProduct} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
