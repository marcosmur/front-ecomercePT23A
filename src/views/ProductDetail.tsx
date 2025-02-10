'use client'

import { useAuth } from '@/context/AuthContext';
import { Iproducts } from '@/types'
import React from 'react'

const ProductDetail: React.FC<Iproducts> = ({ name, image, description, stock, price, id, categoryId }) => {
    const { userData } = useAuth();

    const handleAddToCart = () => {
        if (!userData?.token) {
            alert("Tienes que estar logueado para agregar productos");
        } else {
            const cart: Iproducts[] = JSON.parse(localStorage.getItem("cart") || "[]");
            const productExist = cart.some((item: Iproducts) => item.id === id);

            if (productExist) {
                return alert("Este producto ya fue agregado");
            } else {
                cart.push({ name, image, description, stock, price, categoryId });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Se agregó el producto a tu carrito");
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10 p-6">
            <div className="flex flex-col md:flex-row">
                {/* Imagen del producto con tamaño uniforme */}
                <div className="md:w-1/2 flex justify-center">
                    <img 
                        src={image} 
                        alt={`${name} - product image`} 
                        className="w-[300px] h-[300px] object-cover rounded-lg"
                    />
                </div>

                {/* Información del producto */}
                <div className="md:w-1/2 p-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <p className="text-gray-700 font-semibold">Stock: <span className="text-green-600">{stock}</span></p>
                    <p className="text-xl font-bold text-blue-600 my-4">Precio: ${price}</p>

                    {/* Botón de agregar al carrito */}
                    <button 
                        onClick={handleAddToCart} 
                        className="w-full bg-blue-700 text-black font-bold py-3 px-5 rounded-lg border-2 border-blue-700 hover:bg-blue-800 hover:border-blue-900 transition duration-300"
                    >
                        🛒 Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
