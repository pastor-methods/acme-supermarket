export function pricingRules(items) {
    const buyOneGetOneFree = (item) => {
        const quantity = Math.floor(item.quantity / 2) + item.quantity % 2;
        return quantity * item.price;
    };

    const bulkStrawberries = (item) => {
        let price = item.price;
        if (item.quantity > 2) {
            price = 4.5;
        }
        return item.quantity * price;
    };

    return items.reduce((total, item) => {
        switch (item.id) {
            case 'FR1': {
                return buyOneGetOneFree(item) + total;
            }
            case 'SR1': {
                return bulkStrawberries(item) + total;
            }
            default:
                return (item.price * item.quantity) + total;
        }
    }, 0)
}
