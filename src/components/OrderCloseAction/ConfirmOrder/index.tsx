import { useCart } from '../../../contexts/CartContext'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Container } from '../style'

export const ConfirmOrder = () => {
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='button' onClick={confirmOrder}>Finalizar Pedido</button>
      <span>
        Total <strong>{priceFormatter.format(totalAmount)}</strong>
      </span>
    </Container>
  )
}
