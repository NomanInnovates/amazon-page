import React from 'react'
import './subTotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


export default function Subtotal() {
    
const [{ basket }, dispatch ] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => (<>
            <p>Subtotal ({basket.length} items): <stronge>{value}</stronge></p>
            <small className="subtotal_gift"><input type="checkbox" />This Order Contains a Gift  </small>
            </>)}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
            />    
            <button>Proceed to Checkout</button>
            </div>
    );
}

