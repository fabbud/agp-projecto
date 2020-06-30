import React from 'react';
import './LojaMaster.css';


function Livros(props) {
    return (
        <div className="loja">
            <div class="artigosLoja">
                <img className="fotoArtigos"
                    alt={props.alt}
                    src={require(`../../assets/images/Loja/Livros/${props.src}`)}
                />
                
                <div className="descricaoArtigos">
                    {props.descrição}
                    {props.preço}
                    {props.id}
                </div>
            </div>
        </div>

    )
}

export default Livros;