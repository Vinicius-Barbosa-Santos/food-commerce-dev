import { FiPlus } from 'react-icons/fi'

import { useCart } from '../../contexts/CartContext'
import { SnackItemType } from '../../interface/SnackItemType'
import { priceFormatter } from '../../utils/priceFormatter'
import { SkeletonSnack } from './SkeletonSnack'
import * as C from './styles'

interface SnacksProps {
  snacks: SnackItemType[]
}

export function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <C.Container>
      {!snacks.length
        ? [1, 2, 3, 4,].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {

          const snackExistsInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

          return (
            <div key={snack.id} className='snack'>
              {snackExistsInCart && <span>{snackExistsInCart.quantity}</span>}
              <h2>{snack.name}</h2>
              <img src={snack.image} alt={snack.name} />
              <p>{snack.description}</p>
              <div>
                <strong>{priceFormatter.format(snack.price)}</strong>
                <button type='button' onClick={() => addSnackIntoCart(snack)}>
                  <FiPlus />
                </button>
              </div>
            </div>
          )
        })}
    </C.Container>
  )
}
