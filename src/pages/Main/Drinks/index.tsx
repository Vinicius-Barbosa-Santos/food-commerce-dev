import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../contexts/SnackContext'

export const DrinksPages = () => {
    const { drinks } = useSnack()

    return (
        <>
            <Head title='Bebidas' description='Nossas Melhores Bebidas' />
            <SnackTitle>Drinks</SnackTitle>
            <Snacks snacks={drinks} />
        </>
    )
}