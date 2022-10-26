import logo from '../logo.svg';
import '../App.css';
import Footer from './Footer'
import NavBar from './NavBar'
import Header from './Header';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
