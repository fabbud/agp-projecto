import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import RamosDirigente from './components/RamosDirigente/RamosDirigente';
import AssociacaoMundial from './components/AssociacaoMundial/AssociacaoMundial';
import PalavraAosPais from './components/PalavraAosPais/PalavraAosPais';
import Noticias from './components/Noticias/Noticias';
import LigacoesUteis from './components/LigacoesUteis/LigacoesUteis';
import Contactos from './components/Contactos/Contactos';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/sobre/associacao-mundial" component={AssociacaoMundial} />
            <Route exact path="/pedagogia/ramos/:tipo" component={RamosDirigente} />
            <Route exact path="/pedagogia/dirigente" component={RamosDirigente} />
            <Route exact path="/pedagogia/palavra-pais" component={PalavraAosPais} />
            <Route exact path="/publicações/recursos/ligações-úteis" component={LigacoesUteis} />
            <Route exact path="/contactos/:modo" component={Contactos} />
            <Route exact path="/publicações/noticias" component={Noticias} />
          </Switch>
          <Header />
          <Footer />
        </Suspense>
      </div>
    </Router>

  );
}

export default App;
