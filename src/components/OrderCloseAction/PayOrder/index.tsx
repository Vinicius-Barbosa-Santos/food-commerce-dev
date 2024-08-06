import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCart } from '../../../contexts/CartContext'
import { priceFormatter } from '../../../utils/priceFormatter'
import { Container } from '../style'

export const PayOrder = () => {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)
  const navigate = useNavigate()

  const handlePayment = () => {
    toast.success(`Pagamento efetuado com sucesso!`)
    navigate('/')
  }

  return (
    <Container>
      <button type='submit' onClick={handlePayment}>Pagar</button>
      <span>
        Total <strong>{priceFormatter.format(totalAmount)}</strong>
      </span>
    </Container>
  )
}
