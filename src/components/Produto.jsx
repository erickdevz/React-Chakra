import styles from './Components.module.css'
import Button from 'react-bootstrap/Button';
export function Produto(props) {
    return (
        // <h1>Produto</h1>

        <div className={styles.mainProduto}>
            <h1>{props.nomePagina}</h1>
            <div className={styles.cardProduto}>
                <div className={styles.imgProduto}>
                    <img src="https://wallpapersmug.com/download/1920x1080/8f1ceb/yellow-lamborghini-urus-suv.jpg"/>
                </div>
                <div className={styles.especProduto}>
                    <p>Lamborghini Urus</p>
                    <p className={styles.descProduto}>A Lamborghini Urus é o primeiro Super Sport Utility Vehicle do 
                        mundo, fundindo a alma de um superesportivo com a funcionalidade prática de um SUV.</p>
                    <p>R$2,500,000.00</p>
                    <Button variant="success">Comprar</Button>
                </div>
            </div>
            <div className={styles.cardProduto}>
                <div className={styles.imgProduto}>
                    <img src="https://wallpapersmug.com/download/1920x1080/e7f7c7/bmw-m3-vorsteiner-2024.jpg"/>
                </div>
                <div className={styles.especProduto}>
                    <p>BMW M3 Competition</p>
                    <p className={styles.descProduto}>O BMW M3 Competition, combina as proporções robustas e 
                    distintas do seu design de três seções e 4 portas com o estilo esportivo típico de um veículo M. 
                    Com os seus impressionantes 510 cv de potência e um torque de 650 Nm.</p>
                    <p>R$829,950.00</p>
                    <Button variant="success">Comprar</Button>
                </div>
            </div>
            <div className={styles.cardProduto}>
                <div className={styles.imgProduto}>
                    <img src="https://wallpapersmug.com/download/1920x1080/022a8a/2023-ford-mustang-shelby-gt500-blue.jpg"/>
                </div>
                <div className={styles.especProduto}>
                    <p>Ford Mustang Shelby GT500</p>
                    <p className={styles.descProduto}>O Ford Mustang Shelby GT500 é um esportivo da série Mustang 
                    da Ford. Shelby é a versão mais potente da marca Mustang, sendo uma homenagem a um ex-piloto 
                    automobilístico Carroll Shelby, criador do modelo Cobra.</p>
                    <p>R$1,499,000.00</p>
                    <Button variant="success">Comprar</Button>
                </div>
            </div>
            <div className={styles.cardProduto}>
                <div className={styles.imgProduto}>
                    <img src="https://wallpapersmug.com/download/1920x1080/5239f0/lamborghini-revuelto-arena-ad-personam-white.jpg"/>
                </div>
                <div className={styles.especProduto}>
                    <p>Lamborghini Revuelto</p>
                    <p className={styles.descProduto}>A emoção máxima proporcionada pelo Revuelto é alcançada graças a um trem de força 
                    que entrega 1.015 CV no total, combinando a potência de um novíssimo motor de combustão interna de 12 cilindros com 
                    três motores elétricos.</p>
                    <p>R$5,970,000.00</p>
                    <Button variant="success">Comprar</Button>
                </div>
            </div>
        </div>
    )
}