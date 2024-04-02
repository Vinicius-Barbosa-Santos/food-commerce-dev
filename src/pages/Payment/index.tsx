import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import * as C from './styles'

export const Payment = () => {
    return (
        <C.Container>
            <Head title='Pagamento' />
            <OrderHeader />
            <C.Inner>
                <C.Form>
                    <h4>informações</h4>

                    <div className='field'>
                        <label htmlFor='full-name'>Nome e sobrenome</label>
                        <input type='text' id='full-name' name='full-name' autoComplete='name' />
                    </div>

                    <div className='grouped'>
                        <div className='field'>
                            <label htmlFor='email'>E-mail</label>
                            <input type='email' name='email' id='email' autoComplete='email' />
                        </div>

                        <div className='field'>
                            <label htmlFor='mobile'>Celular</label>
                            <input type='tel' id='mobile' name='mobile' autoComplete='phone' />
                        </div>

                        <div className='field'>
                            <label htmlFor='document'>CPF / CNPJ</label>
                            <input type='text' id='document' name='document' />
                        </div>
                    </div>
                </C.Form>
            </C.Inner>
        </C.Container>
    )
}