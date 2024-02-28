import * as C from './styles'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'

import menuImg from '../../assets/menu.svg'

export const SideBar = () => {
    return (
        <C.SideBarContainer>
            <button type='button'>
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
                            <BurgerIcon />
                            
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </C.SideBarContainer>
    )
}