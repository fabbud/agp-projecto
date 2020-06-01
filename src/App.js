import React, { Suspense } from 'react';
import './App.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AssociacaoMundial from './components/AssociacaoMundial/AssociacaoMundial';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
        <AssociacaoMundial />
      </Suspense>
    </div>
  );
}

export default App;
