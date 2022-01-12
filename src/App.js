import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from './components/nav';
import Accueil from './components/accueil';
import Contact from './components/contact';
import Apropos from './components/apropos';
import Excursions from './components/excursion';
import Detail from './components/detail';
import Reserver from './components/reserver';
import Paiement from './components/paiement';
import Connexion from './components/connexion';
import Login from './components/login';
import Facture from './components/facture';
function App() {
  return (
        <div className="App">
      <Router>
      <Nav/>
        <Switch>
        <Route path="/accueil" component={Accueil}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/apropos" component={Apropos}></Route>
        <Route path="/excursions" component={Excursions}></Route>
        <Route path="/detail/:id"component={Detail}></Route>
        <Route path="/reserver" component={Reserver}></Route>
        <Route path="/paiement" component={Paiement}></Route>
        <Route path="/connexion" component={Connexion}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/facture" component={Facture}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
