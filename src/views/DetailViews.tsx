const DetailViews=async({
    params,
}: {
    params: Promise<{ productId: string }>
})=>{
    const productID = (await params).productId
console.log(params);

return(
    <div>este es el talle del producto -d {productID} </div>
)
}

export default DetailViews
