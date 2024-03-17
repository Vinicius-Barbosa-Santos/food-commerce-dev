import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import * as C from './styles'

export const MyCart = () => {
    return (
        <C.Container>
            <Head title='Carrinho' />
            <OrderHeader />
        </C.Container>
    )
}