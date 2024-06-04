
import faGithub from '../assets/github.svg'
import styles from './Footer.module.css';
export function Footer(props) {
    return (
        <footer className={styles.footer}>
            {/* <p>Desenvolvido por Bruno Gregório</p> */}
            <a href='https://github.com/DevBrzera' target='_blank'><img src={faGithub} /> {props.brunoFooter} </a>
            <a href='https://github.com/PedroTheDevv' target='_blank'><img src={faGithub} /> {props.pedroFooter} </a>
            <a href='https://github.com/ErickDevz' target='_blank'><img src={faGithub} /> {props.erickFooter} </a>
        </footer>

    )

}
