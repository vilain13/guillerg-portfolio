import React from 'react';
//import { Provider } from 'react-redux';
//import store  from '../store/store';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import E404 from '../pages/e404';
import Project from '../pages/project';

import Header from '../components/header';
import Footer from '../components/footer';

function Routage() {
  return (
      <Router>
        <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project/>} />  {/* prendre en compte l'id du projet dans l'url */}
              {/* Route pour dÃ©finir la page Ã  afficher si le chemin saisi sans l'url n'est pas dÃ©fini au dessus */}
              <Route path="*" element={<E404 />} />
          </Routes>
        <Footer />
       </Router>
  )
}

export default Routage