export default class Basket {
    constructor (pricingRules) {
        this.pricingRules = pricingRules;
        this.items = [];
    }

    add(item) {
        const existingItem = this.items.find(it => it.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
            return this.items;
        }
        item.quantity = 1;
        this.items.push(item);
        return this.items;
    }

    substract(item) {
        const existingItem = this.items.find(it => it.id === item.id);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
            return this.items;
        }
        return this.remove(item);
    }

    remove(item) {
        this.items = this.items.filter(it => it.id !== item.id);
        return this.items;
    }

    total() {
        if (this.pricingRules) {
            return this.pricingRules(this.items);
        } else {
            return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
        }
    }
}
