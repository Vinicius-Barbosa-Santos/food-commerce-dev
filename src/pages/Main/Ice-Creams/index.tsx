import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import * as C from './styles'

export const IceCreamsPages = () => {

    const data = [
        {
            id: 1,
            snack: 'ice-cream',
            name: 'Casquinha',
            description: 'A casquinha crocante e saborosa que nossos clientes amam.',
            price: 4.5,
            image: 'https://plus.unsplash.com/premium_photo-1666985128049-98894e3994cd?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            snack: 'ice-cream',
            name: 'Chocolate com granulado',
            description: 'Sorvete de chocolate com granulados em chocolate para você se deliciar.',
            price: 6,
            image: 'https://images.unsplash.com/photo-1628585352636-f4a24c2e17d5?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            snack: 'ice-cream',
            name: 'Flocos',
            description: 'O tradicional flocos vem com cobertura em chocolate para adocicar seu dia.',
            price: 7,
            image: 'https://media.istockphoto.com/id/1190352830/pt/foto/yogurt-parfait-with-granola-chocolate-and-ice-cream-sweet-delicious-breakfast.jpg?s=2048x2048&w=is&k=20&c=m8lMsA5GRZw99DgwtS7PBd_PkYhdpcnfrSNj47yfpkU=',
        },
    ]

    return (
        <>
            <Head title='Sorvetes' />
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    )
}