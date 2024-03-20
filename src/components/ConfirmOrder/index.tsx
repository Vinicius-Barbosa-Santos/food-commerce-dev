import { useCart } from '../../contexts/CartContext'
import { priceFormatter } from '../../utils/priceFormatter'
import * as C from './styles'

export const ConfirmOrder = () => {

    const { cart } = useCart()

    const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

    return (
        <C.Container>
            <button type='button'>Finalizar Pedido</button>
            <span>
                Total <strong>{priceFormatter.format(totalAmount)}</strong>
            </span>
        </C.Container>
    )
}