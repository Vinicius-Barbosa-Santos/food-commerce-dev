import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../contexts/SnackContext'

export const BurgerPage = () => {
    const { burgers } = useSnack()
    
    return (
        <>
            <Head title='Hambúrgueres' description='Nossos Melhores Burgers' />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={burgers} />
        </>
    )
}