import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { SnackItemType } from '../../../interface/SnackItemType'
import api from '../../../services/api'

export const IceCreamsPages = () => {
    const [data, setData] = useState<SnackItemType[]>([])

    const fetchIceCreams = async () => {
        try {
            const response = await api.get('/ice-creams')
            setData(response.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchIceCreams()
    }, [])

    return (
        <>
            <Head title='Sorvetes' />
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    )
}