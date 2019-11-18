import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from 'react-redux';
import {addItem} from "../actions/cartActions";


const Home = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const itemList = state.items.map(item => {
        return (
            <div className="card" key={item.id}>
                <div className="card-image">
                    <img src={item.image} alt={item.title}/>
                </div>
                <div className="card-title">
                    <span>{item.title}</span>
                    <span className="btn-floating halfway-fab waves-effect waves-light red">
                            <i className="material-icons" onClick={() => {dispatch(addItem(item.id))}}>add</i>
                        </span>
                </div>
                <div className="card-content">
                    <p><b>Price: {item.price}$</b></p>
                </div>
             </div>
        )
    });

    return (
        <div className="container">
            <div className="box">
                {itemList}
            </div>
        </div>
    );
};

export default Home