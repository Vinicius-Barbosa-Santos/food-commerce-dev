import { useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import * as C from './styles'

export const BurgerPage = () => {

    const [data, setData] = useState([
        {
            id: 1,
            snack: 'burger',
            name: 'Mega',
            description:
                'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
            price: 25.5,
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            snack: 'burger',
            name: 'Extra bacon',
            description:
                'Criado para os amantes de bacon, possui em todas as suas camadas bacon bem assado e ainda queijo e carne.',
            price: 23.5,
            image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=5304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ])

    return (
        <>
            <Head title='Hambúrgueres' description='Nossos Melhores Burgers' />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={data}/>
        </>
    )
}