import React from 'react';
import './Jornal.css'
import New from '../../assets/images/Outros/new.png';
import downLoad from '../../assets/images/Outros/download.png';



function JornalCapa(props) {

    // download = () => {
    //     console.log('download')
    // }
    return (
        //<span className='cardArea'>
        <div className='cardJornal'>
            <h4 className='titulo'>{props.titulo}</h4>
            <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}ª edição`}</h4>
            <div className='capaDownload'>
                <img className='capa'
                    alt={props.alt}
                    src={require(`../../assets/images/Jornal/${props.src}`)}
                />

                <a className='download' href={`../../assets/pdfs/Jornal/${props.pdf}`} download={props.pdf} title={props.titulo}>

                    <img className='downloadImage' alt={'download Jornal O Trevo Guias de Portugal'}
                        src={props.index === 0 ? New : downLoad}
                    />
                </a>

            </div>

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