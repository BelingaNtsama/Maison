import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



const initialOptions = {
    clientId: "AbRlSFUv3QXvlXvZAOwY_8PZg9bDYKs_3L-V5HVkMiN-G-lfHn_FCu06skO6cFsMnQ9YQtJaiHF9EhBq",
    currency: "USD", // Devise souhaitée
    intent: "capture", // Type d'intention (capture, authorize, etc.)
};

export default function Paiement() {
    return <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
}
