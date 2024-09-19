
type shoppingItemProps = { name:string, quantity: number,
}
const ShoppingItem = (props: shoppingItemProps)=>{

return( 
    <div>
        <h4>{props.name}</h4>
        <h3>{props.quantity}</h3>
    </div>
)

}
export default ShoppingItem