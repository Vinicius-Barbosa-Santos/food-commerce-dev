import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackItemType } from '../../../interface/SnackItemType'
import api from '../../../services/api'

export const PizzasPages = () => {
    const [data, setData] = useState<SnackItemType[]>([])

    const fetchPizzas = async () => {
        try {
            const response = await api.get('/pizzas')
            setData(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchPizzas()
    }, [])

    return (
        <>
            <Head title='Pizzas' description='Nossas Melhores Pizzas' />
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={data} />
        </>
    )
}