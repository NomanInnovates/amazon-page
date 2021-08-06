import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import {useStateValue } from './StateProvider'
import './header.css'



function Header(){
const [{basket}, dispatch] = useStateValue();
     return (
         <div className="header">
             <Link to='/'>
             <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo" />
             </Link>
             <div className="header_search">
                 <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon'/>
                  {/*Logo  */}
             </div>

             <div className="header_nav">
             <Link to="/login">
                <div className="header_option">
                <span className="header_optionLineOne"> Helllo</span>
                <span className="header_optionLineTwo"> Sign in</span>
                </div>
                </Link>
                <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">&amp; Orders</span>
                </div>
                
                <div className="header_option">
                <span className="header_optionLineOne">Your </span>
                <span className="header_optionLineTwo">Prime</span>
                </div>
             </div>
            <Link to="/checkout">

            <div className="header_optionBasket">
                <AddShoppingCartIcon/>
                <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>
            </Link>

         </div>
     );
}

export default Header;