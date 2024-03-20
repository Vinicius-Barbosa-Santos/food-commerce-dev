import { FaTrashAlt } from 'react-icons/fa'

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'
import { useCart } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/priceFormatter'
import * as C from './styles'

export const TableDesktop = () => {

    const { cart, removeSnackFromCart } = useCart()

    return (
        <C.Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lanche</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={`${item.snack} - ${item.id}`}>
                            <td>
                                <img src={item.image} alt={item.name} />
                            </td>
                            <td>
                                <h4>{item.name}</h4>
                                <span>{priceFormatter.format(item.price)}</span>
                            </td>
                            <td>
                                Ações do carrinho
                            </td>
                            <td>
                                <div>
                                    <button type='button' onClick={() => console.log(`decrementar snack`, item)}>
                                        <img src={minusImg} alt="Remover quantidade" />
                                    </button>
                                    {`${item.quantity}`.padStart(2, '0')}
                                    <button type='button' onClick={() => console.log(`incrementar snack`, item)}>
                                        <img src={plusImg} alt="Adicionar quantidade" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <h5>{priceFormatter.format(item.subtotal)}</h5>
                            </td>
                            <td>
                                <button type='button' onClick={() => removeSnackFromCart(item)}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </C.Container>
    )
}