import React from "react";
import axios from "axios";
import NoticiasCard from "./NoticiasCard";
import "./Noticias.css";

class Noticias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasData: [],
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
        this.setState({ noticiasData: dataresult });
      });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getData();
  };

  render() {
    const { noticiasData } = this.state;
    return (
      <div className="Noticias">
        <p className="NoticiasTitle">Notícias</p>
        <div className="MapNoticias">
          {noticiasData.map((noticia) => (
            <NoticiasCard key={noticia.id} noticia={noticia} />
          ))}
        </div>
      </div>
    );
  }
}
export default Noticias;
