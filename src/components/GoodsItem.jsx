function GoodsItem(props) {
    const {
        'mainId': id,
        "displayName": name,
        "displayDescription": description,
        "price": price,
        "displayAssets": full_background
    } = props;



    return <div className="card" id={id}>
        <div className="card-image">
            <img src={full_background} alt={name} />
            <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className="btn">Купить</button>
            <span className="right">{price}</span>
        </div>
    </div>
}

export { GoodsItem }

