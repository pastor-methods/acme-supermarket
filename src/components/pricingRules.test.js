import {pricingRules} from "./pricingRules";


describe('pricingRules tests', () => {
    it('FR1, SR1, FR1, CF1 total is £19.94', () => {
        const items = [{
            id: 'FR1',
            title: 'Fruit tea',
            price: 3.11,
            quantity: 2,
            image: 'https://cdn.shortpixel.ai/spai/w_2340+q_glossy+ret_img+to_webp/https://www.seasonsandsuppers.ca/wp-content/uploads/2017/06/cold-brewed-iced-tea-A.jpg'
        }, {
            id: 'SR1',
            title: 'Strawberries',
            price: 5,
            quantity: 1,
            image: 'https://cdn.theatlantic.com/assets/media/img/mt/2019/08/RTR4FJJS/lead_720_405.jpg?mod=1567003290'
        }, {
            id: 'CF1',
            title: 'Coffee',
            price: 11.23,
            quantity: 1,
            image: 'http://www.samacharnama.com/wp-content/uploads/2018/05/coffee1.jpg'
        }];
        const result = pricingRules(items);
        expect(result).toEqual(19.34)
    });

    it('SR1, SR1, SR1, FR1 total is £16.61', () => {
        const items = [{
            id: 'FR1',
            title: 'Fruit tea',
            price: 3.11,
            quantity: 2,
            image: 'https://cdn.shortpixel.ai/spai/w_2340+q_glossy+ret_img+to_webp/https://www.seasonsandsuppers.ca/wp-content/uploads/2017/06/cold-brewed-iced-tea-A.jpg'
        }, {
            id: 'SR1',
            title: 'Strawberries',
            price: 5,
            quantity: 3,
            image: 'https://cdn.theatlantic.com/assets/media/img/mt/2019/08/RTR4FJJS/lead_720_405.jpg?mod=1567003290'
        }];
        const result = pricingRules(items);
        expect(result).toEqual(16.61)
    });

    it('FR1, FR1 total is £3.11', () => {
        const items = [{
            id: 'FR1',
            title: 'Fruit tea',
            price: 3.11,
            quantity: 2,
            image: 'https://cdn.shortpixel.ai/spai/w_2340+q_glossy+ret_img+to_webp/https://www.seasonsandsuppers.ca/wp-content/uploads/2017/06/cold-brewed-iced-tea-A.jpg'
        }];
        const result = pricingRules(items);
        expect(result).toEqual(3.11)
    });

    it('empty total is £0', () => {
        const items = [];
        const result = pricingRules(items);
        expect(result).toEqual(0)
    });
});