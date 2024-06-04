import faGithub from '../assets/github.svg'
import faLinkedin from '../assets/linkedin.svg'
import styles from './Components.module.css'
export function Contato(props) {
    return (
        // <h1>Contato</h1>
        
        <div>

        <h1>{props.nomePagina}</h1>
        
        <div className={styles.card}>
            <ul>
                <li>Telefone: {props.telContato}</li>
                <li>E-mail: {props.emailContato}</li>
                <li><div className={styles.imgs}><a href='https://github.com/DevBrzera' target='_blank'><img src={faGithub} /></a> <a href='https://www.linkedin.com/in/bruno-gregório-5b78aa2bb/' target='_blank'><img src={faLinkedin} /></a></div>DevBrzera </li>  
                <li><div className={styles.imgs}><a href='https://github.com/PedroTheDevv' target='_blank'><img src={faGithub} /></a> <a href='#' target='_blank'><img src={faLinkedin} /></a></div>PedroTheDevv</li>
                <li><div className={styles.imgs}><a href='https://github.com/ErickDevz' target='_blank'><img src={faGithub} /></a> <a href='https://
                www.linkedin.com/in/erick-xavier-psx' target='_blank'><img src={faLinkedin} /></a></div>ErickDevz</li>
            </ul>
        </div>

        </div>
    )
}