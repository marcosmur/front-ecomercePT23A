// import Link from 'next/link'
// import Card from './Card'
// import { getProductsDB } from '@/helper/products.helper'

// const CardList = async() => {
//     const products=await getProductsDB()
//     console.log(products);
// return (
//     <div className='flex flex-wrap items-center gap-4 justify-center m-20'>{
//         products &&
//         products?.map((Product)=>{
//         return(
//         <Link key={Product.id} href={`/product/${Product.id}`}>
//             <Card key={Product.id} {... Product}/>
//         </Link>
        
//     )
//     })
//     }
//     </div>
// )
// }

// export default CardList


import Link from 'next/link'
import Card from './Card'
import { getProductsDB } from '@/helper/products.helper'

const CardList = async () => {
    const products = await getProductsDB();
    console.log(products);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`} className="hover:scale-105 transition-transform duration-300">
                        <Card key={product.id} {...product} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CardList;
