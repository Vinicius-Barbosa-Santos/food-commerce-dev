import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackItemType } from '../../../interface/SnackItemType'
import api from '../../../services/api'

export const DrinksPages = () => {
    const [data, setData] = useState<SnackItemType[]>([])

    const fetchDrinks = async () => {
        try {
            const response = await api.get('/drinks')
            setData(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchDrinks()
    }, [])

    return (
        <>
            <Head title='Bebidas' description='Nossas Melhores Bebidas' />
            <SnackTitle>Drinks</SnackTitle>
            <Snacks snacks={data} />
        </>
    )
}