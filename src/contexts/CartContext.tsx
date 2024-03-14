import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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
    cart: Snack[]
    addSnackIntoCart: (snack: SnackItemType) => void,
    // removeSnackFromCart: ({ id, snack }: RemoveSnackFromCart) => void,
    // updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void
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

            console.log('newCart Atualizado', newCart)
            setCart(newCart)
            return
        }

        // adicionar

        const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
        const newCart = [...cart, newSnack]

        console.log('newCart Adicionado', newCart)
        setCart(newCart)
    }

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