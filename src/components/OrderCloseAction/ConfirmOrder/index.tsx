import { useCart } from '../../../contexts/CartContext'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Container } from '../style'

export const ConfirmOrder = () => {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='button'>Finalizar Pedido</button>
      <span>
        Total <strong>{priceFormatter.format(totalAmount)}</strong>
      </span>
    </Container>
  )
}
