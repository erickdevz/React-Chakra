// imports Carousel
import japanCar from '../assets/Japan-car-img-1-cover.jpg'
import skylineCar from '../assets/Skyline-img-1-cover.jpg'
import lamborghiniCar from '../assets/Lamborghini-img-1.jpg'

// imports Films
import fastFurious from '../assets/FastFuriousCover.jpg'
import rush from '../assets/RushCover.jpg'
import fordVsFerrari from '../assets/FordVSFerrariCover.jpg'
import ritmoDeFuga from '../assets/RitmoDeFuga.jpg'

// imports default
import Carousel from 'react-bootstrap/Carousel'
import styles from './Components.module.css'

export function Home(props) {
    return (
        // <h1>Home</h1>

        <div>

    <Carousel fade>
      <Carousel.Item interval={900}>
        <img className={styles.carouselImg} src={japanCar} />
        <Carousel.Caption>
          <h3>Venha conhecer nossos modelos Japoneses!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img className={styles.carouselImg} src={skylineCar} />
        <Carousel.Caption>
          <h3>Honre o legado de um veloz furioso!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.carouselImg} src={lamborghiniCar} />
        <Carousel.Caption>
          <h3>Do lixo ao Luxo - Venha conhecer a história da Lamborghini!</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className={styles.cardFilmes}>
      <span>Filmes que recomendamos!</span>

      <div className={styles.filmesBox}>
        <img src={fastFurious} alt="Velozes e Furiosos" />
        <img src={rush} alt="Rush" />
        <img src={fordVsFerrari} alt="Ford VS Ferrari (2019)" />
        <img src={ritmoDeFuga} alt="Em Ritmo de Fuga" />
      </div>
    </div>

        </div>
    )
}