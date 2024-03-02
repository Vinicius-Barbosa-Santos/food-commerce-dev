import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import * as C from './styles'

export const PizzasPages = () => {
    const data = [
        {
            id: 1,
            snack: 'pizza',
            name: 'Calabresa',
            description:
                'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
            price: 25,
            image: 'https://images.unsplash.com/photo-1542282811-943ef1a977c3?q=80&w=3773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            snack: 'pizza',
            name: 'Portuguesa',
            description:
                'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
            price: 28.5,
            image: 'https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=4608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]

    return (
        <>
            <Head title='Pizzas' description='Nossas Melhores Pizzas' />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={data} />
        </>
    )
}