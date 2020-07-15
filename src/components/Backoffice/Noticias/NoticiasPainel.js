import React, { Component } from "react";
import axios from "axios";
import BootstrapTable, { Type } from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import moment from 'react-moment';

const columns = [
  {
    dataField: "publish",
    text: "Publicado",
    filter: textFilter(),
    sort: true,
    formatter: function dateFormatter(publish) {
      if (publish === 1) {
        return "Publicado";
      }
      return "Não Publicado";
    },
  },
  {
    dataField: "pt_date",
    text: "Data Publicação",
    filter: textFilter(),
    sort: true,
  },
  {
    dataField: "pt_title",
    text: "Título Notícia",
    filter: textFilter(),
    sort: true,
  },

  {
    dataField: "button",
    text: "Editar",
    formatter: () => <a href="#">📝 Editar </a>,
  },

  {
    dataField: "link",
    text: "Eliminar",
    formatter: () => <a href="#">🗑 Eliminar </a>,
  },
];

class NoticiaPainel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasInput: [],
    };
  }

  getData = () => {
    // Send the request
    axios
      .get("/news")
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

  render() {
    const { noticiasInput } = this.state;
    return (
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={noticiasInput}
        columns={columns}
        pagination={paginationFactory()}
        filter={filterFactory()}
        filterPosition="top"
      />
    );
  }
}
export default NoticiaPainel;
