import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
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
        <Navbar.Brand href="" className="header-logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={(t('header.sobre'))} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.associacao')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.historiaGuidismo.')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.estatutos')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.associacaoMundial')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.pedagogia')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.metodoGuidista')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoAvezinha')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoAventura')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoCaravela')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoMoinho')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.dirigente')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.palavrasPais')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.publicacoes')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.noticias')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.jornal')}</NavDropdown.Item>
              <NavDropdown bsPrefix="dropdown-item" title={t('header.recursos')} className="dropright">
                <NavDropdown.Item className="dropdown-item" href="">{t('header.livroEspecialidades')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('header.regulamentos')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('header.cartaoAssociada')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('header.ligacoesUteis')}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t('header.loja')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.fardas')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.livros')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.diversos')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.contactos')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.queresSerGuia')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.sedeNacional')}</NavDropdown.Item>
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
