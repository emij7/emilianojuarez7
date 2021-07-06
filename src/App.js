import './styles/styles.css';
import Navbar from './components/Navbar';
import About from './components/About';
import CertificationsSearch from './components/CertificationsSearch';


function App() {
  return (
    <div className='main'>
      <Navbar/>
      <About/>
      <CertificationsSearch/>
    </div>
  );
}

export default App;
