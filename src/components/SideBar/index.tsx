import { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
                        <NavLink to={'/'} >
                            <BurgerIcon />

                            <span>Hambúrgueres</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/pizzas'}>
                            <PizzaIcon />

                            <span>Pizzas</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/drinks'}>
                            <SodaPopIcon />

                            <span>Bebidas</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'/ice-creams'}>
                            <IceCreamIcon />

                            <span>Sorvetes</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </C.SideBarContainer>
    )
}