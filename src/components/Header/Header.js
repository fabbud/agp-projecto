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
import EstatutosPDF from '../../assets/pdfs/Estatutos.pdf';
import RegulamentosPDF from '../../assets/pdfs/Regulamentos_AGP_Março_2020.pdf';
import LivroEspecialidadesPDF from '../../assets/pdfs/Livro_de_Especialidades.pdf';
import CartãoAssociadaPDF from '../../assets/pdfs/Cartão_Associada_Protocolos_AGP.pdf';

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
              <NavDropdown.Item className="dropdown-item"><Link to="/sobre/associacao">{t('header.associacao')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.historiaGuidismo')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href={EstatutosPDF} target="_blank">{t('header.estatutos')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/sobre/associacao-mundial">{t('header.associacaoMundial')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.pedagogia')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item">{t('header.metodoGuidista')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/pedagogia/ramos/avezinha">{t('header.ramoAvezinha')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/pedagogia/ramos/aventura">{t('header.ramoAventura')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/pedagogia/ramos/caravela">{t('header.ramoCaravela')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/pedagogia/ramos/moinho">{t('header.ramoMoinho')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/pedagogia/dirigente">{t('header.dirigente')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item"><Link to="/pedagogia/palavra-pais">{t('header.palavrasPais')}</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('header.publicacoes')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item"><Link to="/publicações/noticias">{t('header.noticias')}</Link></NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.jornal')}</NavDropdown.Item>
              <NavDropdown bsPrefix="dropdown-item" title={t('header.recursos')} className="dropright">
                <NavDropdown.Item className="dropdown-item" href={LivroEspecialidadesPDF} target="_blank">{t('header.livroEspecialidades')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href={RegulamentosPDF} target="_blank">{t('header.regulamentos')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item" href={CartãoAssociadaPDF} target="_blank">{t('header.cartaoAssociada')}</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item"><Link to="/publicações/recursos/ligações-úteis">{t('header.ligacoesUteis')}</Link></NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t('header.loja')} id="basic-nav-dropdown" className="nav-header">
              <NavDropdown.Item className="dropdown-item">{t('header.fardas')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.livros')}</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item">{t('header.diversos')}</NavDropdown.Item>
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
