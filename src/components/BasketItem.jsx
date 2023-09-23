function BasketItem(props) {
    const { id, name, price, quantity, removeFromBasket = Function.prototype } = props;
    return <li className="collection-item ">
        {name} x {quantity} = {price * quantity} тенге
        <span class="secondary-content" onClick={() => removeFromBasket(id)}>
            <i class="material-icons basket-delete">close</i>
        </span>
    </li>
}

export { BasketItem }