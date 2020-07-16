import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import moment from "react-moment";

import '../Noticias/NoticiasPainel.css';
//import ModalPopup from './PopUpDeleteNoticias';
import ModalPopup from '../Noticias/PopUpDeleteNoticias';


class TableJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalInput: [],
            showModal: false,
            editionId: 0,
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

    componentDidMount = () => {
        this.getData();
    };

    handleModalDelete = () => {
        console.log("delete")
        const { editionId, journalInput, showModal } = this.state;
        console.log("publicação", editionId)
        axios
            .delete(`/journal/${editionId}`)
            .then((response) => {
                return response.data;
            })
            .then((dataresult) => {
                this.setState({
                    journalInput: dataresult,
                    showModal: false
                });
            });
        this.getData();
    }

    handleModal = () => {
        console.log("handleModal")
        const { showModal } = this.state;
        this.setState({ showModal: !showModal });
    }

    render() {
        const { journalInput, showModal } = this.state;
        const link = '/backoffice/journal/painel/new';

        const columns = [
            {
                dataField: 'publish',
                text: 'Status',
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
                        style={{ cursor: 'pointer', textDecoration: 'none', justifyContent: 'center' }}
                        onClick={() => this.handleModal()}
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
        const rowEvents = {
            onClick: (e, row) => {
                console.log(row.edition);
                this.setState({ editionId: row.edition })
                console.log(this.state.editionId);
            }
        }
        return (

            <div className="NoticiasPainel">

                <div className="NoticiasPainel-title">Jornal Painel</div>
                <div className="NoticiasPainel-section-button">
                    <Link to={link}>
                        <button className="NoticiasPainel-button" type="submit">
                            Criar nova edição
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
                        rowEvents={rowEvents}
                    />
                </div>
                <ModalPopup show={showModal} handleDelete={this.handleModalDelete} handleClose={this.handleModal} />
            </div>
        );
    }
}
export default TableJournal;
