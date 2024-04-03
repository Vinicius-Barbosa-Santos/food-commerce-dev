import { useCart } from '../../../contexts/CartContext'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Container } from '../style'

export const PayOrder = () => {
  const { cart, payOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='button' onClick={payOrder}>Pagar</button>
      <span>
        Total <strong>{priceFormatter.format(totalAmount)}</strong>
      </span>
    </Container>
  )
}
