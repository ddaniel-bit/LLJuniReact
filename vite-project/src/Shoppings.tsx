type shoppingprops = {
    name: string,
    quantity: number,
}
const Shoppings = (props: shoppingprops[]) => {
    return (
        props.map(item => (
            <div>
                <h3>név: {item.name}</h3>
                <h4>mennyiség: {item.quantity}</h4>
            </div>

        )))
}

export default Shoppings