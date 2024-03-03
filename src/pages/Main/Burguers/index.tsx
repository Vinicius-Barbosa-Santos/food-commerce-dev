import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackItemType } from '../../../interface/SnackItemType'
import api from '../../../services/api'

export const BurgerPage = () => {
    const [data, setData] = useState<SnackItemType[]>([])

    const fetchBurgers = async () => {
        try {
            const response = await api.get('/burgers')
            setData(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchBurgers()
    }, [])


    return (
        <>
            <Head title='Hambúrgueres' description='Nossos Melhores Burgers' />
            <SnackTitle>Hambúrgueres</SnackTitle>
            <Snacks snacks={data} />
        </>
    )
}