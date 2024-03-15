import { ReactComponent as CartIcon} from '../../assets/shopping-cart.svg'
import { useCart } from "../../contexts/CartContext"
import * as C from './styles'

export const MyOrder = () => {
    const { cart } = useCart()

    return (
        <C.Container to={'cart'}>
            <span>Meu Pedido</span>
            <CartIcon />

            {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
        </C.Container>
    )
}