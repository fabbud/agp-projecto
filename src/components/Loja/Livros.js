import React from 'react'

function Livros(props) {
    return (
        <div className="loja">
            <img className="fotoArtigos">
                alt={props.alt}
            src={props.src}
            </img>
            <div className="descriçãoArtigos">
                {props.descrição}
                {props.preço}
                {props.id}
            </div>
        </div>

    )
}

export default Livros