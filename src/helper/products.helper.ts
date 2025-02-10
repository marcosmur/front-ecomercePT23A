import { Iproducts } from "@/types";

const APIURL=process.env.NEXT_PUBLIC_API_URL

export async function getProductsDB():Promise<Iproducts[]> {
    try {
        // const response=await fetch(`${APIURL}/products`)
        const response = await fetch(`${APIURL}/products`, {
            cache: 'no-cache'
        })
        const products=await response.json();
        return products;
    } catch (error:any) {
        throw new Error(error)
    }
    
}


export async function getProductsById(id:string):Promise<Iproducts[]> {
    try {
        const products:Iproducts[]=await getProductsDB();
        const productsFilterd=products.find((products)=>products.id.toString()===id);
        if(!productsFilterd)throw new Error("Product not found")
            return productsFilterd
    } catch (error:any) {
        throw new Error(error)
    }
    
}