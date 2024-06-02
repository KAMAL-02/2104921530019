import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProducts} />
        <Route path="/product/:id" component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
