import React from 'react';
import './Jornal.css'



function JornalCapa(props) {

    // download = () => {
    //     console.log('download')
    // }
    return (
        //<span className='cardArea'>
        <div className='cardJornal'>
            <h4 className='titulo'>{props.titulo}</h4>
            <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}ª edição`}</h4>
            <img className='capa'
                alt={props.alt}
                src={require(`../../assets/images/Jornal/${props.src}`)}
            />
            {/* <div class="download"><a href={`../../assets/pdfs/Jornal/${props.pdf}`}> */}
            <button class='download'></button>
            <div className='temasBox'>
                {props.temas.map((tema) => {
                    return <p className='temas'>- {tema}</p>
                })}
            </div>
        </div>
        //</span>
    )

}

export default JornalCapa