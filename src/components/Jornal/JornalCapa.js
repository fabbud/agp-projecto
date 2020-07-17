import React from 'react';
import './Jornal.css'
import New from '../../assets/images/Outros/new.png';
import downLoad from '../../assets/images/Outros/download.png';



function JornalCapa(props) {

    // download = () => {
    //     console.log('download')
    // }
    //console.log(props.temas);
    
    return (

        <div className='cardJornal'>
            <h4 className='titulo'>{props.titulo}</h4>
            <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}ª edição`}</h4>
            <div className='capaDownload'>
                <img className='capa'
                    alt={props.alt}
                    src={props.src}
                />

                <a className='download' href={props.pdf} target="_blank" download title={props.titulo}>

                    <img className='downloadImage' alt={'download Jornal O Trevo Guias de Portugal'}
                        src={props.index === 0 ? New : downLoad}
                    />
                </a>

            </div>


            <div className='temasBox'>
                <p className='temas'>{props.temas1_pt && `-${props.temas1_pt}`}</p>
                <p className='temas'>{props.temas2_pt && `-${props.temas2_pt}`}</p>
                <p className='temas'>{props.temas3_pt && `-${props.temas3_pt}`}</p>
                <p className='temas'>{props.temas4_pt && `-${props.temas4_pt}`}</p>
                <p className='temas'>{props.temas5_pt && `-${props.temas5_pt}`}</p>
                {/* <p className='temas'>{props.temas1_en && `-${props.temas1_en}`}</p>
                <p className='temas'>{props.temas2_en && `-${props.temas2_en}`}</p>
                <p className='temas'>{props.temas3_en && `-${props.temas3_en}`}</p>
                <p className='temas'>{props.temas4_en && `-${props.temas4_en}`}</p>
                <p className='temas'>{props.temas5_en && `-${props.temas5_en}`}</p> */}
                
            </div>
        </div>

    )

}

export default JornalCapa;
