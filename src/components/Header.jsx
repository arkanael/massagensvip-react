import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header(){
    return(
        <header className={styles.header}>
         <div class="navbar">
                <div class="header-inner-content">
                    <h1 class="logo">MASSAGEM<span>VIPS</span></h1>
                    <nav>
                    <ul>
                        <li>Home</li>
                        <li>Terapeutas</li>
                        <li>Clínicas</li>
                        <li>Massagens</li>
                        <li>Massagem Misteriosa</li>
                        <li>
                        <span>
                            <imagem> </imagem>
                        </span>
                        </li>
                    </ul>
                    </nav>
                    <div class="nav-icon-container">
                    <img src="https://massagemvips.vercel.app/images/cart.png" />
                    <img src="https://massagemvips.vercel.app/images/menu.png" class="menu-button" />
                    </div>
                </div>
            </div>
        </header>
    );
}

