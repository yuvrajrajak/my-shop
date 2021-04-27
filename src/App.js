import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer, Sidebar } from './components'
import { HomePage, AboutPage, StorePage, SingleProductPage, CartPage } from './pages'
import ErrorPage from './pages/ErrorPage'
import Checkout from './pages/Checkout'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/cart'>
          <CartPage />
        </Route>
        <Route exact path='/store'>
          <StorePage />
        </Route>
        <Route exact path='/store/:id' children={<SingleProductPage />} />
        <PrivateRoute exact path='/checkout'>
          <Checkout />
        </PrivateRoute>
        <Route exact path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
