import { Link } from 'react-router-dom'
import wheelsLogo from '../assets/car-front-fill.svg'
import styles from './Header.module.css';

// import chakra
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

export function Header() {
    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                <img src={wheelsLogo} alt="speed wheels! Logo" />
                <li><Link className={styles.linkMenu} to="./">HOME</Link></li>
                <li><Link className={styles.linkMenu} to="./Missao">MISSÃO</Link></li>
                <li><Link className={styles.linkMenu} to="./Produto">PRODUTOS</Link></li>
                <li><Link className={styles.linkMenu} to="./Historia">NOSSA HISTÓRIA</Link></li>
                <li><Link className={styles.linkMenu} to="./Contato">CONTATO</Link></li>
                <li><Link className={styles.linkMenu} to="./Login">
                    <AvatarGroup padding='10px 0 10px 0' display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                        <Avatar bg='teal.500' height='45px'  />
                    </AvatarGroup>LOGIN</Link></li>
            </ul>

            {/* <strong className={styles.header}>Página Header</strong> */}

        </header>
    )
}

// MÉTODO ÂNCORA - TAG <A>

// export function Header() {
//     return (
//         <header className={styles.header}>
//             <ul className={styles.menu}>
//                 <li><a className={styles.linkMenu} href="./">HOME</a></li>
//                 <li><a className={styles.linkMenu} href="./Missao">MISSÃO</a></li>
//                 <li><a className={styles.linkMenu} href="./Produto">PRODUTOS</a></li>
//                 <li><a className={styles.linkMenu} href="./Historia">NOSSA HISTÓRIA</a></li>
//                 <li><a className={styles.linkMenu} href="./Contato">CONTATO</a></li>
//             </ul>

//             {/* <strong className={styles.header}>Página Header</strong> */}

//         </header>
//     )
// }