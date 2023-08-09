import { useContext, useState } from "react"
import { DataContext } from "./DataContext"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'


const CartTotal = () => {
    initMercadoPago('TEST-004dead8-1d42-440f-96a4-cee4e6ad97b3')

    const clientId = "Aa6AFIn6iTgPSwmIVb4ckrLDF9oBaEQOhgsLUPgahHVeuRGw-VA3P36pj1r-i_AeSfTLtB-UxtZuo3ur"

    const { cart } = useContext(DataContext)

    const total = cart.reduce((acc, el) => acc + el.precio * el.quanty, 0)

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: total,
                    },
                },
            ],
        })
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            console.log("pago realizado: ", details);
        })
    }

    return (
        <>
            <h3 className="text-center">Total a pagar: ${total}</h3>
            <PayPalScriptProvider options={{ "client-id": clientId }}>
                <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
            </PayPalScriptProvider>
        </>
    )
}

export default CartTotal
