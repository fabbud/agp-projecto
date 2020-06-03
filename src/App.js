import React, { Suspense } from 'react';
import './App.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import RamosDirigente from './components/RamosDirigente/RamosDirigente';
import AssociacaoMundial from './components/AssociacaoMundial/AssociacaoMundial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
        <RamosDirigente />
      </Suspense>
    </div>
  );
}

export default App;
