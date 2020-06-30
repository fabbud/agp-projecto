import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar fixed="top" expand="lg" className="navbar">
        <Link to="/"><Navbar.Brand className="header-logo" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={(t('header.sobre'))} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item"><Link to="/associacao">{t('header.associacao')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.historiaGuidismo')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.estatutos')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/associacao-mundial">{t('header.associacaoMundial')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.pedagogia')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item">{t('header.metodoGuidista')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/ramos">{t('header.ramoAvezinha')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/ramos">{t('header.ramoAventura')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/ramos">{t('header.ramoCaravela')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/ramos">{t('header.ramoMoinho')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/ramos">{t('header.dirigente')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/palavra-pais">{t('header.palavrasPais')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.publicacoes')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item"><Link to="/noticias">{t('header.noticias')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.jornal')}</NavDropdown.Item>
              <NavDropdown bsPrefix="dropdown-item" title={t('header.recursos')} className="dropright">
                <NavDropdown.Item className="dropdown-item">{t('header.livroEspecialidades')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item">{t('header.regulamentos')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item">{t('header.cartaoAssociada')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item"><Link to="/ligações-úteis">{t('header.ligacoesUteis')}</Link></NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t('header.loja')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item"><Link to="/loja/fardas">{t('header.fardas')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/loja/livros">{t('header.livros')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/loja/diversos">{t('header.diversos')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.contactos')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item"><Link to="/contactos">{t('header.queresSerGuia')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/contactos">{t('header.sedeNacional')}</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="search-languages">
            <Form inline className="search-fields">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl type="text" placeholder={t('header.pesquisa')} className="mr-sm-2 search-input" />
            </Form>
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
