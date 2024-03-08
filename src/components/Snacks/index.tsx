import { FiPlus } from 'react-icons/fi'

import { priceFormatter } from '../../utils/priceFormatter'
import { SkeletonSnack } from './SkeletonSnack'
import * as C from './styles'

interface SnacksProps {
  snacks: any[]
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <C.Container>
      {!snacks.length
        ? [1, 2, 3, 4,].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => (
          <div key={snack.id} className='snack'>
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>
            <div>
              <strong>{priceFormatter.format(snack.price)}</strong>
              <button type='button'>
                <FiPlus />
              </button>
            </div>
          </div>
        ))}
    </C.Container>
  )
}
