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
//import AssociacaoFront from './components/AssociacaoFront';
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
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route exact path="/associacao" component={AssociacaoFront} /> */}
          <Route exact path="/ramos" component={RamosDirigente} />
          <Route exact path="/associacao-mundial" component={AssociacaoMundial} />
          <Route exact path="/palavra-pais" component={PalavraAosPais} />
          <Route exact path="/ligações-úteis" component={LigacoesUteis} />
          <Route exact path="/contactos" component={Contactos} />
          <Route exact path="/noticias" component={Noticias} />
        </Switch>
        <Suspense fallback={null}>
          <Header />
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
