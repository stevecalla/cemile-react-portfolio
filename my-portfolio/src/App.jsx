// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer/Footer';
import '/global-styles/style.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
