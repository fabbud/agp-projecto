import React, { Suspense } from 'react';
import './App.css';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
    </div>
  );
}

export default App;
