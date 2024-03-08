import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { SnackItemType } from "../interface/SnackItemType";
import api from "../services/api";

interface SnackContextProps {
    burgers: SnackItemType[]
    pizzas: SnackItemType[]
    drinks: SnackItemType[]
    iceCreams: SnackItemType[]
}

export const SnackContext = createContext({} as SnackContextProps)

interface SnackContextProviderProps {
    children: ReactNode
}

export const SnackContextProvider = ({ children }: SnackContextProviderProps) => {
    const [burgers, setBurgers] = useState<SnackItemType[]>([])
    const [pizzas, setPizzas] = useState<SnackItemType[]>([])
    const [drinks, setDrinks] = useState<SnackItemType[]>([])
    const [iceCreams, setIceCreams] = useState<SnackItemType[]>([])

    const fetchData = async () => {
        try {
            const burgerResponse = await api.get('/burgers');
            setBurgers(burgerResponse.data);

            const pizzasResponse = await api.get('/pizzas');
            setPizzas(pizzasResponse.data);

            const drinksResponse = await api.get('/drinks');
            setDrinks(drinksResponse.data);

            const iceCreams = await api.get('/ice-creams')
            setIceCreams(iceCreams.data)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
            {children}
        </SnackContext.Provider>
    )
}

export const useSnack = () => {
    const context = useContext(SnackContext)

    return context
}