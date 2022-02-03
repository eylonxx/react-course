const choice = (items) => {
    return items[Math.floor(Math.random()) * items.length];
}

const remove = (items, item) => {
    const itemIndex = items.findIndex(fruit => fruit === item );
    const foundItem = items[itemIndex];
    if(itemIndex === -1) return undefined;
    items.splice(itemIndex, 1);
    return foundItem;
}

export {choice, remove}