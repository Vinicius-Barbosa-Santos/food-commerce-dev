import { FiPlus } from 'react-icons/fi'

import { SnackItemType } from '../../interface/SnackItemType'
import { priceFormatter } from '../../utils/priceFormatter'
import * as C from './styles'

interface SnacksProps {
    snacks: SnackItemType[]
}

export const Snacks = ({ snacks }: SnacksProps) => {
    return (
        <C.SnacksContainer>
            {snacks.map((snackItem) => (
                <div key={snackItem.id} className='snack'>
                    <h2>{snackItem.name}</h2>
                    <img src={snackItem.image} alt={snackItem.name} />
                    <p>{snackItem.description}</p>
                    <div>
                        <strong>{priceFormatter.format(snackItem.price)}</strong>
                        <button type='button'>
                            <FiPlus />
                        </button>
                    </div>
                </div>
            ))}
        </C.SnacksContainer>
    )
}