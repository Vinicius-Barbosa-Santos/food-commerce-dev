import { useCart } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/priceFormatter'
import * as C from './styles'

export const TableDesktop = () => {

    const { cart } = useCart()

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
                            <td>{item.quantity}</td>
                            <td>
                                <h5>{priceFormatter.format(item.subtotal)}</h5>
                            </td>
                            <td>
                                Deletar
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </C.Container>
    )
}