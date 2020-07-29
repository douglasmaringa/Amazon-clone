import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer'
import { Route } from "react-router-dom"

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>Subtotal ({basket.length} items) : <strong>{`${value}`}</strong></p>
                    <small className='subtotal__gift'>
                        <input type="checkbox"/> This order contains gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value = {getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button><a href="/login">Proceed to Checkout</a></button>

            
        </div>
    );
}

export default Subtotal;
