import './App.css';
import Hero from './components/hero/Hero';
import Offer from './components/offer/Offer';
import Navbar from './components/navbar/Navbar';
import Reason from './components/reasons/Reason'
import Work from './components/works/Work';
import Client from './components/client/Client';
import Partners from './components/partners/Partners';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer />
      <Reason />
      <Work/>
      <Client />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
