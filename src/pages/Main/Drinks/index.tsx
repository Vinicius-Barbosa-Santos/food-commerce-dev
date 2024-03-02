import { useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import * as C from './styles'

export const DrinksPages = () => {

    const [data, setData] = useState([
        {
            id: 1,
            snack: 'drink',
            name: 'Coca-Cola 2l',
            description:
                'A Tradicional Coca-Cola que a família brasileira adora',
            price: 12,
            image: 'https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            snack: 'drink',
            name: 'Heineken',
            description:
                'A irresistível e saborosa Heineken em sua versão Long Neck',
            price: 6.5,
            image: 'https://images.unsplash.com/photo-1644330473960-633ef9b9de17?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            snack: 'drink',
            name: 'Suco de Abacaxi',
            description:
                'Suco natural de abacaxi com leves incrementos de algumas hortaliças para fortificar sua saúde',
            price: 6.5,
            image: 'https://images.unsplash.com/photo-1631065565414-c810ce96f078?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ])

    return (
        <>
            <Head title='Bebidas' description='Nossas Melhores Bebidas' />
            <SnackTitle>Drinks</SnackTitle>
            <Snacks snacks={data} />
        </>
    )
}