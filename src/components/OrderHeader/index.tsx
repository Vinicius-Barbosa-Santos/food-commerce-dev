import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import * as C from './styles'

export const OrderHeader = () => {
    return (
        <C.Container>
            <Link to={'/'}>
                <img src={logoImg} alt="" />
            </Link>
        </C.Container>
    )
}