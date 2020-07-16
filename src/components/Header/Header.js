import React, { useState } from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Header.css';
import EstatutosPDF from '../../assets/pdfs/Estatutos_AGP.pdf';
import RegulamentosPDF from '../../assets/pdfs/Regulamentos_AGP_Março_2020.pdf';
import LivroEspecialidadesPDF from '../../assets/pdfs/Livro_de_Especialidades.pdf';
import CartãoAssociadaPDF from '../../assets/pdfs/Cartão_de_Associada_Protocolos_AGP.pdf';

const Header = (props) => {
  const { t } = useTranslation();

  const [searchBy, setSearchBy] = useState('');

  const handleInputSearch = (event) => {
    const input = event.target.value;
    setSearchBy(input);
  };

  const handleSearch = () => {
    localStorage.setItem('searchBy', JSON.stringify(searchBy));
    props.history.push({
      pathname: `/search/${searchBy}`,
      state: { searchBy },
    });
  };

  return (
    <div>
      <Navbar fixed="top" expand="lg" className="navbar" collapseOnSelect>
        <Link to="/"><Navbar.Brand className="header-logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={(t('header.sobre'))} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item eventKey="1" className="dropdown-item"><Link to="/sobre/associacao">{t('header.associacao')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="2" className="dropdown-item"><Link to="/sobre/historia-guidismo">{t('header.historiaGuidismo')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="3" className="dropdown-item" href={EstatutosPDF} target="_blank">{t('header.estatutos')}</NavDropdown.Item>
              <NavDropdown.Item eventKey="4" className="dropdown-item"><Link to="/sobre/associacao-mundial">{t('header.associacaoMundial')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.pedagogia')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item eventKey="5" className="dropdown-item"><Link to="/pedagogia/metodo-guidista">{t('header.metodoGuidista')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="6" className="dropdown-item"><Link to="/pedagogia/ramos/avezinha">{t('header.ramoAvezinha')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="7" className="dropdown-item"><Link to="/pedagogia/ramos/aventura">{t('header.ramoAventura')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="8" className="dropdown-item"><Link to="/pedagogia/ramos/caravela">{t('header.ramoCaravela')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="9" className="dropdown-item"><Link to="/pedagogia/ramos/moinho">{t('header.ramoMoinho')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="10" className="dropdown-item"><Link to="/pedagogia/dirigente">{t('header.dirigente')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="11" className="dropdown-item"><Link to="/pedagogia/palavra-pais">{t('header.palavrasPais')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.publicacoes')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item eventKey="12" className="dropdown-item"><Link to="/publicações/noticias">{t('header.noticias')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="13" className="dropdown-item"><Link to="/publicações/jornal-trevo">{t('header.jornal')}</Link></NavDropdown.Item>
              <NavDropdown bsPrefix="dropdown-item" title={t('header.recursos')} className="dropright">
                <NavDropdown.Item eventKey="14" className="dropdown-item" href={LivroEspecialidadesPDF} target="_blank">{t('header.livroEspecialidades')}</NavDropdown.Item>
                <NavDropdown.Item eventKey="15" className="dropdown-item" href={RegulamentosPDF} target="_blank">{t('header.regulamentos')}</NavDropdown.Item>
                <NavDropdown.Item eventKey="16" className="dropdown-item" href={CartãoAssociadaPDF} target="_blank">{t('header.cartaoAssociada')}</NavDropdown.Item>
                <NavDropdown.Item eventKey="17" className="dropdown-item"><Link to="/publicações/recursos/ligações-úteis">{t('header.ligacoesUteis')}</Link></NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t('header.loja')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item eventKey="18" className="dropdown-item"><Link to="/loja/fardas">{t('header.fardas')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="19" className="dropdown-item"><Link to="/loja/livros">{t('header.livros')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="20" className="dropdown-item"><Link to="/loja/diversos">{t('header.diversos')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.contactos')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item eventKey="21" className="dropdown-item"><Link to="/contactos/formulário">{t('header.queresSerGuia')}</Link></NavDropdown.Item>
              <NavDropdown.Item eventKey="22" className="dropdown-item"><Link to="/contactos/sede">{t('header.sedeNacional')}</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="search-languages">
            <Form inline className="search-fields" onSubmit={handleSearch}>
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl type="text" placeholder={t('header.pesquisa')} className="mr-sm-2 search-input" onChange={handleInputSearch} />
            </Form>
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.string.isRequired,
};

export default withRouter(Header);
