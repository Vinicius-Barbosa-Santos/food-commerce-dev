import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../contexts/SnackContext'

export const IceCreamsPages = () => {
    const { iceCreams } = useSnack()

    return (
        <>
            <Head title='Sorvetes' />
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={iceCreams}></Snacks>
        </>
    )
}