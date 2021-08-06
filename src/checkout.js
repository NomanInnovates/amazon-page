import React from 'react';
import './checkout.css';
import add from './images/4.jpg';
import Subtotal from './subTotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './checkoutProduct'

export default function Checkout(props) {
const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src={add} alt="Source not found"/>
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}

                    {/* Checkout product */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}
