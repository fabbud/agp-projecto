import React, { Suspense } from 'react';
import './App.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AssociacaoFront from './components/AssociacaoFront';
import RamosDirigente from './components/RamosDirigente/RamosDirigente';
import AssociacaoMundial from './components/AssociacaoMundial/AssociacaoMundial';
import PalavraAosPais from './components/PalavraAosPais/PalavraAosPais';
import LigacoesUteis from './components/LigacoesUteis/LigacoesUteis';
import Contactos from './components/Contactos/Contactos';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
        <Contactos />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
