import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../contexts/SnackContext'

export const PizzasPages = () => {
    const { pizzas } = useSnack()

    return (
        <>
            <Head title='Pizzas' description='Nossas Melhores Pizzas' />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={pizzas} />
        </>
    )
}