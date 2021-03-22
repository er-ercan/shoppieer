import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import Product from './pages/Product';
import Result from './pages/Result';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();
const stripePromise = loadStripe(
  'pk_test_51IXlmmComwAZv3H7uerlzS7Azatgaok7fxQbckREFdpP8uKaSmNxZn8iAKZY64KddPWk97aSA96rbPsmw3AEQ2rH00ReBesTS6'
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="USD"
      >
        <BrowserRouter>
          <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
