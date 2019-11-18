import {ADD_ITEM, SUB_ITEM, REMOVE_ITEM} from "../types";
import Basket from "../components/basket";
import {pricingRules} from "../components/pricingRules";


const basket = new Basket(pricingRules);

const initState = {

    items: [
        {
            id: 'FR1',
            title: 'Fruit tea',
            price: 3.11,
            image: 'https://cdn.shortpixel.ai/spai/w_2340+q_glossy+ret_img+to_webp/https://www.seasonsandsuppers.ca/wp-content/uploads/2017/06/cold-brewed-iced-tea-A.jpg'
        },
        {
            id: 'SR1',
            title: 'Strawberries',
            price: 5,
            image: 'https://cdn.theatlantic.com/assets/media/img/mt/2019/08/RTR4FJJS/lead_720_405.jpg?mod=1567003290'
        },
        {
            id: 'CF1',
            title: 'Coffee',
            price: 11.23,
            image: 'http://www.samacharnama.com/wp-content/uploads/2018/05/coffee1.jpg'
        },
    ],
    basket: [],
    total: 0,
};

const cartReducer = (state = initState, action) => {
    const basketItem = state.items.find(item => item.id === action.id);

    switch (action.type) {
        case ADD_ITEM: {
            return {...state, basket: basket.add(basketItem), total: basket.total()};
        }
        case SUB_ITEM: {
            return {...state, basket: basket.substract(basketItem), total: basket.total()};
        }
        case REMOVE_ITEM: {
            return {...state, basket: basket.remove(basketItem), total: basket.total()};
        }
        default:
            return state;
    }
};

export default cartReducer;
