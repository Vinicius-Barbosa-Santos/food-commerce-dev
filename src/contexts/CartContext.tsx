import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'

import { snackEmoji } from "../helpers/snackEmoji";
import { SnackItemType } from "../interface/SnackItemType";

interface Snack extends SnackItemType {
    quantity: number,
    subtotal: number
}

interface CartContextProps {
    cart: Snack[]
    addSnackIntoCart: (snack: SnackItemType) => void,
    removeSnackFromCart: (id: number, snack: SnackItemType) => void,
    snackCartIncrement: (id: number, snack: Snack) => void
    snackCartDecrement: (id: number, snack: Snack) => void
    confirmOrder: () => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Snack[]>([])

    const addSnackIntoCart = (snack: SnackItemType): void => {
        // buscar
        const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

        // atualizar
        if (snackExistentInCart) {
            const newCart = cart.map((item) => {
                if (item.id === snack.id) {
                    const quantity = item.quantity + 1
                    const subtotal = item.price * quantity

                    return { ...item, quantity, subtotal }
                }

                return item
            })

            toast.success(`Outra(a) ${snack.snack} ${snack.name} adicionado nos pedidos!`)
            setCart(newCart)
            return
        }

        // adicionar

        const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
        const newCart = [...cart, newSnack]

        toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
        setCart(newCart)
    }

    // const removeSnackFromCart = (id: number, snack: Snack) => {

    // }

    const updateSnackQuantity = (id: number, snack: Snack, newQuantity: number) => {}

    const snackCartIncrement = (id: number, snack: Snack) => {
        updateSnackQuantity(id, snack, snack.quantity + 1)
    }

    const snackCartDecrement = (id: number, snack: Snack) => {
        updateSnackQuantity(id, snack, snack.quantity - 1)
    }

    // const confirmOrder = () => {

    // }

    return (
        <CartContext.Provider value={{ cart, addSnackIntoCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)

    return context
}