import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollTop.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About.jsx';
import Awards from './pages/Awards.jsx';
// import Classes from './pages/Classes.jsx';
// import Gallery from './pages/Gallery.jsx';
// import Contact from './pages/Contact.jsx';

function App() {

  return (
    
    <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          
          {/* <Route path="/Classes" element={<Classes />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
    </Router>
  )
}

export default App


