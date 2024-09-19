type ProductProps={
    name:string,
    price:number,
}

const Product=(props:ProductProps)=>{
    return(
        <div>
            <h1>Termeknév: {props.name}</h1>
            <p>Ár: {props.price}</p>
        </div>
    )
}
export default Product