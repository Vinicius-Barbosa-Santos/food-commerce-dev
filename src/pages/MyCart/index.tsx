import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import * as C from './styles'
import { Table } from './Table'

export const MyCart = () => {
    return (
        <C.Container>
            <Head title='Carrinho' />
            <OrderHeader />
            <Table />
        </C.Container>
    )
}