import './styles/styles.css';
import Navbar from './components/Navbar';
import About from './components/About';
import CertificationsSearch from './components/CertificationsSearch';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className='main'>
      holis
      <Navbar />
      <About />
      <Projects />
      <CertificationsSearch />
      <Footer />
    </div>
  );
}

export default App;
