import React, { Suspense } from 'react';
import './App.css';
import AssociacaoFront from './components/AssociacaoFront';

import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import PalavraAosPais from './components/PalavraAosPais/PalavraAosPais';


function App() {
  return (
    <div className="App">
      <AssociacaoFront />
      <Suspense fallback={null}>
        <Header />
        {/* <PalavraAosPais /> */}
        <Footer />
      </Suspense>

    </div>
  );
}

export default App;
