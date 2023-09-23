function BasketItem(props) {
    const { id, name, price, quantity,
        removeFromBasket = Function.prototype,
        decQuantity = Function.prototype,
        incQuantity = Function.prototype,
    } = props;
    return <li className="collection-item ">
        {name}  <i className="material-icons basket-quantity" onClick={() => decQuantity}>remove</i> x{quantity}{' '} <i className="material-icons basket-quantity" onClick={() => incQuantity}>add</i> = {price * quantity} тенге
        <span class="secondary-content" onClick={() => removeFromBasket(id)}>
            <i class="material-icons basket-delete">close</i>
        </span>
    </li>
}

export { BasketItem }