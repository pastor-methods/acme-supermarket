import React from 'react';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addItem, removeItem, substractItem} from "../actions/cartActions";


function Cart () {

    const basket = useSelector(state => state.basket);
    const total = useSelector(state => state.total);
    const dispatch = useDispatch();

    let addedItems = basket.length ?
        basket.map(item => (
            <li className="collection-item avatar" key={item.id}>
                <div className="item-img">
                    <img src={item.image} alt={item.title} className=""/>
                </div>

                <div className="item-desc">
                    <span className="title">{item.title}</span>
                    <p>{item.desc}</p>
                    <p>
                        <b>Price: {item.price}$</b>
                    </p>
                    <p>
                        <b>Quantity: {item.quantity}</b>
                    </p>
                    <div className="add-remove">
                        <Link to="/cart"><i className="material-icons" onClick={()=>{dispatch(addItem(item.id))}}>arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons" onClick={()=>{dispatch(substractItem(item.id))}}>arrow_drop_down</i></Link>
                    </div>
                    <button className="waves-effect waves-light btn teal remove" onClick={()=>{dispatch(removeItem(item.id))}}>Remove</button>
                </div>

            </li>
        )) : <p className="collection-item">There are no items in your basket</p>;

    return (
        <div className="container">
            <div className="cart">
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>
            <div className="collection">
                <li className="collection-item"><b>Total: {total} $</b></li>
            </div>
            <div className="checkout">
                <button className="waves-effect waves-light btn">Checkout</button>
            </div>
        </div>
    )
}

export default Cart;