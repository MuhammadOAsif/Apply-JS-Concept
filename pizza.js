function pizzaPanda(foodName, quantity) {
    if (foodName.toLowerCase() != 'pizza') {
        return 'sorry, we sell pizza only.'
    }
    var price = 10 * quantity
    var massage = ('order successful!, order infu: ' + foodName + ',Price: ' + price + '$')
    return massage;
}

