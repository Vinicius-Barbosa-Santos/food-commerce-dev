import { useState } from 'react'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/soda.svg'
import * as C from './styles'

export const SideBar = () => {

    // Sidebar - Finalizado

    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <C.SideBarContainer
            isMenuOpen={menuOpen}
        >
            <button type='button' onClick={handleMenuToggle}>
                <img src={menuImg} alt="Abrir e fechar o menu" />
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#" className='active'>
                            <BurgerIcon />

                            <span>Hambúrgueres</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <PizzaIcon />
                            
                            <span>Pizzas</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <SodaPopIcon />
                            
                            <span>Bebidas</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <IceCreamIcon />
                            
                            <span>Sorvetes</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </C.SideBarContainer>
    )
}