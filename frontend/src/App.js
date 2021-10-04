import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { LandingPage } from './pages/LandingPage';
import { Pedido } from './pages/Pedido';
import { CheckPedido } from './pages/CheckPedido';
import { FormCompra } from './pages/FormCompra';
import { Success } from './pages/Success';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/success">
            <Success/>
          </Route>
          <Route exact path="/checkout">
            <FormCompra />
          </Route>
          <Route exact path="/check-pedido">
            <CheckPedido />
          </Route>
          <Route exact path="/carga-productos">
            <Pedido />
          </Route>
          <Route exact path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;