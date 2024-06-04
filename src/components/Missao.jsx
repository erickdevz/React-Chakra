
import styles from './Components.module.css'
export function Missao(props) {
    return (
        // <h1>Missao</h1>

        <div>

        <h1>{props.nomePagina}</h1>

        <div className={styles.cardMissao}>
            <ul>
                <li>{props.missao} <p>Proporcionar aos entusiastas de carros esportivos e de luxo uma experiência inigualável, oferecendo veículos que não são apenas meios de transporte, mas símbolos de inovação, desempenho e prestígio. Na Speed Wheels, comprometemo-nos a superar as expectativas de nossos clientes com um serviço excepcional, conhecimento especializado e uma paixão compartilhada por carros que definem estilos de vida.</p> </li>
                <li>{props.visao} <p>Ser reconhecida como a principal destinação para amantes de carros esportivos e de luxo, liderando o mercado com uma seleção incomparável de veículos de alta performance e um compromisso com a excelência. Na Speed Wheels, aspiramos a criar uma comunidade de clientes e entusiastas que valorizam a arte da engenharia automotiva e a alegria da condução.</p> </li>
            </ul>
        </div>

        </div>
    )
}