import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
function App() {
	return (
		<>
			<Router>
				<Navbar />
					<Switch>
						<Route path="/" exact component={Hero} />
						<Route path="/skills" exact component={Skills} />
						<Route path="/portfolio" exact component={Portfolio} />
						<Route path="/contacto" exact component={Contacto} />
						<Route component={NotFound} />
					</Switch>
				
				<Footer />
			</Router>
		</>
	);
}

export default App;
