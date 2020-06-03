import React from 'react';
import {
  Navbar, Nav, NavDropdown, Form, FormControl,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import './Header.css';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const { t, i18n} = useTranslation();

  return (
    <div>
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Brand href="" className="header-logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="header-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={i18n.t('header.sobre.label')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.associacao.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.historiaGuidismo.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.estatutos.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.associacaoMundial.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.pedagogia.label')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.metodoGuidista.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoAvezinha.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoAventura.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoCaravela.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.ramoMoinho.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.dirigente.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.palavrasPais.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.publicacoes.label')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.noticias.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.jornal.label')}</NavDropdown.Item>
              <NavDropdown bsPrefix="dropdown-item" title={t('header.recursos.label')} className="dropright">
                <NavDropdown.Item className="dropdown-item" href="">{t('header.livroEspecialidades.label')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('header.regulamentos.label')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('header.cartaoAssociada.label')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href="">{t('header.ligacoesUteis.label')}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t('header.loja.label')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.fardas.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.livros.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.diversos.label')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.contactos.label')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item" href="">{t('header.queresSerGuia.label')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="">{t('header.sedeNacional.label')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="search-languages">
            <Form inline className="search-fields">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <FormControl type="text" placeholder={t('header.pesquisa.label')} className="mr-sm-2 search-input" />
            </Form>
            <LanguageSelector />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
