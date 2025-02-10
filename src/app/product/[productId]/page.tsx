import { getProductsById } from "@/helper/products.helper"
import ProductDetail from "@/views/ProductDetail"

const detail=async({
    params,
}: {
    params: Promise<{ productId: string }>
})=>{
    const productID = (await params).productId
const products=await getProductsById(productID)
console.log(products)
return(
<ProductDetail {...products}/>
)
}

export default detail
