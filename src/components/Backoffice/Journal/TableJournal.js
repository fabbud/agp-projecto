import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import moment from "react-moment";

import '../Noticias/NoticiasPainel.css';
//import ModalPopup from './PopUpDeleteNoticias';


class TableJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalInput: [],
            showModal: false,
        };
    }

    getData = () => {
        // Send the request
        axios
            .get('/journal/all')
            // Extract the DATA from the received response
            .then((response) => {
                console.log(response);
                return response.data;
            })
            // Use this data to update the state
            .then((dataresult) => {
                console.log(dataresult);
                this.setState({ journalInput: dataresult });
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
        const { journalInput, showModal } = this.state;
        const link = '/backoffice/journal/painel/new';

        const columns = [
            {
                dataField: 'publish',
                text: 'Publicado',
                filter: textFilter(),
                sort: true,
                headerStyle: () => ({ width: '20%' }),
                formatter: function dateFormatter(publish) {
                    if (publish === 1) {
                        return 'Publicado';
                    }
                    return 'Não Publicado';
                },
            },
            {
                dataField: 'pt_title',
                text: 'Título',
                filter: textFilter(),
                sort: true,
                headerStyle: () => ({ width: '55%' }),
            },
            {
                dataField: 'edition',
                text: 'Edição',
                filter: textFilter(),
                sort: true,
                headerStyle: () => ({ width: '15%' }),
                align: 'center',
            },

            {
                dataField: 'edition',
                text: 'Editar',
                formatter: (edition) => (
                    <a style={{ textDecoration: 'none' }} href={`/backoffice/journal/painel/${edition}`}>
                        <span role="img" aria-label="edit">
                            📝
            </span>
                    </a>
                ),
                headerStyle: () => ({ width: '5%' }),
                align: 'center',
            },

            {
                dataField: 'edition',
                text: 'Eliminar',
                formatter: (edition) => (
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
            <div>
                <div className="NoticiasPainel">
                    {/* {showModal && <ModalPopup />}
                <ModalPopup />
                <div className="NoticiasPainel-title">Jornal Painel</div>
                <div className="NoticiasPainel-section-button"> */}
                    <Link to={link}>
                        <button className="NoticiasPainel-button" type="submit">
                            Criar uma nova edição do Jornal
            </button>
                    </Link>
                </div>
                <div className="NoticiasPainel-Table">
                    <BootstrapTable
                        className="BootstrapTable"
                        bootstrap4
                        keyField="edition"
                        data={journalInput}
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
export default TableJournal;
