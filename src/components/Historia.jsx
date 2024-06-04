
import styles from './Components.module.css'
export function Historia(props) {
    return (
        // <h1>Historia</h1>

        <div>

        <h1>{props.nomePagina}</h1>

        <div className={styles.cardHistory}>
            
        <p>Fundada na paixão pela velocidade e pelo luxo, a Speed Wheels se estabeleceu como uma referência em carros esportivos e de luxo na região. Desde a nossa inauguração em 2000, temos orgulho de oferecer uma experiência exclusiva para os aficionados por automóveis que procuram não apenas um carro, mas um estilo de vida.</p>
        <p>Nossa jornada começou com um pequeno showroom e uma grande ambição. Com dedicação e um olhar atento às tendências do mercado automobilístico, crescemos para nos tornar o destino dos sonhos para entusiastas e colecionadores. Na Speed Wheels, cada cliente é recebido com um atendimento personalizado, garantindo que suas expectativas sejam não apenas atendidas, mas superadas.</p>
        <p>Com uma curadoria impecável, nossa coleção inclui desde modelos clássicos restaurados até as últimas novidades do mundo dos supercarros. Acreditamos que dirigir é uma arte, e cada veículo em nosso catálogo é uma obra-prima. Seja para sentir a adrenalina de um motor potente ou para desfrutar do conforto e da sofisticação de interiores luxuosos, a Speed Wheels é sua aliada na estrada para a excelência automotiva.</p>
        <p>Venha nos visitar e descubra por que a Speed Wheels não é apenas uma loja, é o ponto de encontro dos verdadeiros apaixonados por carros.</p>

        </div>

        </div>
    )
}