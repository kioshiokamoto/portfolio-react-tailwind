import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Hero}/>
          <Route path='/skills' exact component={Hero}/>
          <Route path='/portfolio' exact component={Hero}/>
          <Route path='/contacto' exact component={Hero}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
