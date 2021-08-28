import logo from './pics/logo.svg';
import './App.css';
import Github from './Github.jsx';
import Navbar from './Navbar.jsx';
import Summary from './Summary.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Summary/>
      <Projects/>
      {/* <Github/> */}
    </div>
  );
}

export default App;
