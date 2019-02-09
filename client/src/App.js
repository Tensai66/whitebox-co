import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Product from './Product';
import ProductDetail from './ProductDetail';

// Routing for SPA functionality
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path={'/product-detail'} component={ProductDetail} />
        <Route path={'/product'} component={Product} />
        <Route path={'/'} component={Product} />
        <Route path='*' render={() => <h3>This page does not exist</h3>} />
      </Switch>
    </BrowserRouter>
    );
  }
}
export default App;
