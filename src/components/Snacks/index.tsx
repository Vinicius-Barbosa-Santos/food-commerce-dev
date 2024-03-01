import { SnackItemType } from '../../interface/SnackItemType'
import * as C from './styles'

interface SnacksProps {
    snacks: SnackItemType[]
}

export const Snacks = ({ snacks }: SnacksProps) => {
    return (
        <C.SnacksContainer>
            {snacks.map((snackItem) => (
                <div key={snackItem.id}>
                    <h2>{snackItem.name}</h2>
                    <img src={snackItem.image} alt={snackItem.name} />
                    <p>{snackItem.description}</p>
                    <div>
                        <strong>{snackItem.price}</strong>
                        <button type='button'></button>
                    </div>
                </div>
            ))}
        </C.SnacksContainer>
    )
}