  import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import moment from "react-moment";
import './NoticiasPainel.css';
import ModalPopup from './PopUpDeleteNoticias';


class NoticiaPainel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasInput: [],
      showModal: false,
    };
  }

  getData = () => {
    // Send the request
    axios
      .get('/news')
      // Extract the DATA from the received response
      .then((response) => {
        console.log(response);
        return response.data;
      })
      // Use this data to update the state
      .then((dataresult) => {
        console.log(dataresult);
        this.setState({ noticiasInput: dataresult });
      });
  };


  // handleModalDelete = (id) => {
  //   const { showModal } = this.state;

  //   axios
  //     .delete(`/news/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       return response.data;
  //     })
  //     .then((dataresult) => {
  //       console.log(dataresult);
  //       this.setState({ noticiasInput: dataresult });
  //     });
  // };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const { noticiasInput, showModal } = this.state;
    const link = '/backoffice/news/painel/new';

    const columns = [
      {
        dataField: 'publish',
        text: 'Publicado',
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: '25%' }),
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return 'Publicado';
          }
          return 'Não Publicado';
        },
      },
      {
        dataField: 'pt_date',
        text: 'Data Publicação',
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: '25%' }),
      },
      {
        dataField: 'pt_title',
        text: 'Título Notícia',
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: '40%' }),
      },

      {
        dataField: 'id',
        text: 'Editar',
        formatter: (id) => (
          <a style={{ textDecoration: 'none' }} href={`/backoffice/news/painel/${id}`}>
            <span role="img" aria-label="edit">
              📝
            </span>
          </a>
        ),
        headerStyle: () => ({ width: '5%' }),
        align: 'center',
      },

      {
        dataField: 'id',
        text: 'Eliminar',
        formatter: (id) => (
          <a
            style={{ textDecoration: 'none', justifyContent: 'center' }}
            onClick={() => this.setState({ showModal: true })}
          >
            <span role="img" aria-label="trash">
              🗑
            </span>
          </a>
        ),
        headerStyle: () => ({ width: '5%' }),
        align: 'center',
      },
    ];
    console.log(showModal);
    return (
      <div className="NoticiasPainel">
        {showModal && <ModalPopup />}
        <ModalPopup />
        <div className="NoticiasPainel-title">Notícias Painel</div>
        <div className="NoticiasPainel-section-button">
          <Link to={link}>
            <button className="NoticiasPainel-button" type="submit">
              Criar uma nova Notícia
            </button>
          </Link>
        </div>
        <div className="NoticiasPainel-Table">
          <BootstrapTable
            className="BootstrapTable"
            bootstrap4
            keyField="id"
            data={noticiasInput}
            columns={columns}
            pagination={paginationFactory()}
            filter={filterFactory()}
            filterPosition="top"
          />
        </div>
      </div>
    );
  }
}
export default NoticiaPainel;
