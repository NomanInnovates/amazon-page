import React from 'react';
import './product.css';
import {useStateValue} from './StateProvider';
function Product({title, image, price, rating, id}){

    const [{basket}, dispatch] = useStateValue();
    console.log('this is basket=> ',basket)
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
     return (
        <div className="product">
            <div className="product_info">
    <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
 <span>⭐</span>
                    ))}
                   
                </div>
            </div>
            <div className="product_img"> 
<img src={image} />
     </div>
      <button onClick={addToBasket}>Add To Basket </button>
        </div>
    );
}
export default Product;