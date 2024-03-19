import { useCart } from "../../../contexts/CartContext"
import { TableDesktop } from './TableDesktop'

export const Table = () => {
    const { cart } = useCart()

    if (cart.length === 0) {
        return <h1>Ops! Parece que você não tem pedidos, peça já!</h1>
    }

    return <TableDesktop />
}