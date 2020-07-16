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

  componentDidMount = () => {
    this.getData();
  };

  handleModalDelete = () => {
    console.log('delete');
    const { showModal, noticiasInput } = this.state;
    console.log(noticiasInput[0].id);
    axios
      .delete(`/news/${noticiasInput[0].id}`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((dataresult) => {
        console.log(dataresult);
        this.setState({
          noticiasInput: dataresult,
          showModal: false,
        });
      });
    this.getData();
  }

  handleModal = () => {
    console.log('handleModal');
    console.log('handleModal');
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { noticiasInput, showModal } = this.state;
    const link = '/backoffice/news/painel/new';

    const columns = [
      {
        dataField: 'publish',
        text: 'Status',
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: '15%' }),
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return 'Publicado';
          }
          return 'Não Publicado';
        },
        align: 'center',
      },
      {
        dataField: 'pt_date',
        text: 'Publicação',
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: '15%' }),
        align: 'center',
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
            onClick={() => this.hendleModal(id)}
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

    return (
      <div className="NoticiasPainel">
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
        <ModalPopup show={showModal} handleDelete={this.handleModalDelete} handleClose={this.handleModal} />
      </div>
    );
  }
}
export default NoticiaPainel;
