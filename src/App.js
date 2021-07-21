import './styles/styles.css';
import Navbar from './components/Navbar';
import About from './components/About';
import CertificationsSearch from './components/CertificationsSearch';
import Projects from './components/Projects';


function App() {
  return (
    <div className='main'>
      <Navbar/>
      <About/>
      <Projects/>
      <CertificationsSearch/>
    </div>
  );
}

export default App;
