import { createContext, ReactNode, useEffect, useState } from "react";

import { SnackItemType } from "../interface/SnackItemType";

interface Snack extends SnackItemType {
    quantity: number,
    subtotal: number
}

interface RemoveSnackFromCart {
    id: number,
    snack: string
}

interface UpdateCartProps {
    id: number,
    snack: string,
    newQuantity: number
}

interface CartContextProps {
    cart: SnackItemType[]
    addSnackIntoCart: (snack: SnackItemType) => void,
    // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void,
    // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
    children: ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<SnackItemType[]>([])

    const addSnackIntoCart = (snack: SnackItemType): void => {
        const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
        const newCart = [...cart, newSnack]
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addSnackIntoCart }}>
            {children}
        </CartContext.Provider>
    )
}