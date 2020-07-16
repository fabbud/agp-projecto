import React from 'react';
import './LojaMaster.css';


function Livros(props) {


    return (
        <div>
            <div class="artigosLoja">
                <img className="fotoArtigos"
                    alt={props.alt}
                    src={require(`../../assets/images/Loja/${props.categoria}/${props.src}`)}
                />

                <div className="descricaoArtigos">
                    <p>{props.descricao}<br />
                    <b>{props.preço}</b></p>
                </div>
                
                <div className="descricaoArtigos-mobile">
                    <p>{props.descricao}<br />
                    <b>{props.preço}</b></p>
                </div>
            </div>
        </div>

    )
}

export default Livros;