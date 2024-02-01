import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectGallery from './components/ProjectGallery/ProjectGallery';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
      </Routes>
    </Router>

  )
}

export default App
