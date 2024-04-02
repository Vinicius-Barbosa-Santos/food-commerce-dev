import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import * as C from './styles'

export const Payment = () => {
    return (
        <C.Container>
            <Head title='Pagamento' />
            <OrderHeader />
            <C.Inner>Formulário</C.Inner>
        </C.Container>
    )
}