import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { useCart } from '../../contexts/CartContext'
import * as C from './styles'

export const OrderHeader = () => {

    const { cart } = useCart()



    return (
        <C.Container>
            <Link to={'/'}>
                <img src={logoImg} alt="" />
            </Link>

            <div>
                <div>
                    <h3>Meus Pedidos</h3>
                    <span>
                        <strong>
                            {`${cart.length}`.padStart(2, '0')} lanche(s)
                        </strong>
                    </span>
                </div>
                <CartIcon />
            </div>
        </C.Container>
    )
}