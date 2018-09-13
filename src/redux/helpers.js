
export const addItem = (sourceItems, item, quantity) => {
    let found = false;
    let items = sourceItems.map((el) => {
        if(item.id == el.id) {
        found = true;  
        return Object.assign({}, el, {quantity: el.quantity+quantity});
        } else return el;
    });
    if(!found) 
        items[items.length] = Object.assign({}, item, {quantity: quantity}); 
    return items;
}

export const delItem = (Items, item, quantity) =>  {
    let items = Items.map((el) => {
        if(item.id == el.id ) {
            if(el.quantity-quantity > 0) {
                return Object.assign({}, el, {quantity: el.quantity-quantity});
            }    
        } else return el;
    });
    items = items[0] == undefined ? [] : items;
    return items;
}