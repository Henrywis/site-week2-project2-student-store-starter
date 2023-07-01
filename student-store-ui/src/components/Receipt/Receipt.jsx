import React from "react";
import "./Receipt.css";
import { BsCreditCard } from "react-icons/bs";


export default function Receipt({
    cartItems,
    credentials,
    getProductById,
    subTotal,
    total
}) {
    return (
        <>
            <div className="receipt">
                <div className="checkout-info">
                    <h2>
                        <BsCreditCard/>{" "}
                        Checkout Info
                    </h2>
                    {credentials.name && credentials.email ? (
                        <div className="user-receipt">
                            <h3>Receipt</h3>
                            <div className="description">
                                {
                                    Object.keys(cartItems).map((productId) => {
                                        const items = cartItems[productId];
                                        const product = getProductById(productId);
                                        const cost = product.price * items;
                                        return (
                                            <div key={productId}>
                                                <p>
                                                    Showing receipt for {credentials.name} available at {credentials.email}:
                                                </p>
                                                <>
                                                </>
                                                <p>
                                                    • {items} total {product.name} purchased at a cost of {product.price} for a total cost of {cost}.
                                                </p>
                                            </div>
                                        )

                                    })
                                }
                                {/* After iteratiion I want do display summary */}
                                <p>Before taxes, the subtotal was {subTotal}</p>
                                <p>After taxes and fees were applied, the total comes out to {total.toFixed(2)}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="no-item-description">
                            <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}
