import { FaTrashAlt } from 'react-icons/fa'

import minusImg from '../../../../assets/circle-minus.svg'
import plusImg from '../../../../assets/circle-plus.svg'
import { ConfirmOrder } from '../../../../components/ConfirmOrder'
import { useCart } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/priceFormatter'
import * as C from './styles'

export const TableMobile = () => {

    const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement } = useCart()

    return (
        <C.Container>
            {cart.map((item) => (
                <div key={`${item.snack}-${item.id}`} className='order-item'>
                    <div>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <h4>{item.name}</h4>
                        <span>{priceFormatter.format(item.price)}</span>
                        <div>
                            <div>
                                <button type='button' onClick={() => snackCartDecrement(item)}>
                                    <img src={minusImg} alt='Remover quantidade' />
                                </button>
                                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                                <button type='button' onClick={() => snackCartIncrement(item)}>
                                    <img src={plusImg} alt='Adicionar quantidade' />
                                </button>
                            </div>
                            <button type='button' onClick={() => removeSnackFromCart(item)}>
                                <FaTrashAlt />
                            </button>
                        </div>
                        <h5>
                            <span>Subtotal</span> {priceFormatter.format(item.subtotal)}
                        </h5>
                    </div>
                </div>
            ))}

            <ConfirmOrder />
        </C.Container>
    )
}