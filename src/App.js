import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import {
  Switch,
  Route,
  useHistory,
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
import AssociacaoFront from './components/Associacao/AssociacaoFront';
import LojaMaster from './components/Loja/LojaMaster';
import ConteudoNoticia from './components/ConteudoNoticia/ConteudoNotica';
import Search from './components/Search/Search';
import Jornal from './components/Jornal/Jornal';
import HistoriaGuidismo from './components/HistoriaGuidismo/HistoriaGuidismo';
import Login from './components/Backoffice/Login/Login';
import NoticiaInput from './components/Backoffice/Noticias/NoticiaInput';
import MetodoGuidista from './components/MetodoGuidista/MetodoGuidista';
import FerramentasGuidista from './components/MetodoGuidista/FerramentasGuidista';
import ProjetoGuidista from './components/MetodoGuidista/ProjetoGuidista';
import MediaShare from './components/MediaShare/MediaShare';
import HomepageBackoffice from './components/Backoffice/Homepage/HomepageBackoffice';
import JournalInput from './components/Backoffice/Journal/Journal'

function App() {

  const currentPath = window.location.pathname;

  const history = useHistory();
  const [locationPath, setLocationPath] = useState('/');

  useEffect(() => {
    return history.listen((location) => {
      setLocationPath(location.pathname);
    });
  }, [history]);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sobre/associacao" component={AssociacaoFront} />
          <Route exact path="/sobre/historia-guidismo" component={HistoriaGuidismo} />
          <Route exact path="/sobre/associacao-mundial" component={AssociacaoMundial} />
          <Route exact path="/pedagogia/metodo-guidista" component={MetodoGuidista} />
          <Route exact path="/pedagogia/metodo-guidista/ferramentas/:ferramenta" component={FerramentasGuidista} />
          <Route exact path="/pedagogia/metodo-guidista/projetos/:projeto" component={ProjetoGuidista} />
          <Route exact path="/pedagogia/ramos/:tipo" component={RamosDirigente} />
          <Route exact path="/pedagogia/dirigente" component={RamosDirigente} />
          <Route exact path="/pedagogia/palavra-pais" component={PalavraAosPais} />
          <Route exact path="/publicações/jornal-trevo" component={Jornal} />
          <Route exact path="/publicações/noticias" component={Noticias} />
          <Route exact path="/publicações/noticias/:id" component={ConteudoNoticia} />
          <Route exact path="/publicações/recursos/ligações-úteis" component={LigacoesUteis} />
          <Route exact path="/loja/:modo" component={LojaMaster} />
          <Route exact path="/contactos/:modo" component={Contactos} />
          <Route exact path="/search/:type" component={Search} />
          <Route exact path="/backoffice" component={Login} />
          <Route exact path="/backoffice/homepage" component={HomepageBackoffice} />
          <Route exact path="/backoffice/news" component={NoticiaInput} />
          <Route exact path="/backoffice/journal/new" component={JournalInput} />
          <Route exact path="/backoffice/journal/:edition" component={JournalInput} />
        </Switch>
        {!currentPath.includes('backoffice')
          && (
            <div>
              <Header />
              {locationPath !== '/' ? <MediaShare /> : <MediaShare currentPath="homepage" />}
              <Footer />
            </div>
          )}
      </Suspense>
    </div>
  );
}

export default App;
