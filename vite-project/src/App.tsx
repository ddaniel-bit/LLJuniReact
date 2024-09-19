import ItemList from "./itemlist"
import Product from "./Product"
import StyleBox from "./StyleBox"
import Welcome from "./Welcome"
import Shoppings from "./Shoppings"
import ShoppingList from "./ShoppingList"
function App() {
  const termek:shoppingListProps[]=[
  {
    name:"zaza",
    quantity:4000,
  },
  {
    name:"paradicsom",
    quantity:300,
  }
]
  return (
    <>
      <ShoppingList {...termek}></ShoppingList>
    </>
  )
}

export default App
