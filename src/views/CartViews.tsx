'use client'

import { useAuth } from '@/context/AuthContext'
import { createOrder } from '@/helper/orders.helper';
import { Iproducts } from '@/types';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CartViews = () => {
    const {userData} = useAuth();
    const [cart, setCart] = useState<Iproducts[]>([]);
    const [total, setTotal] = useState<number>(0);

    const router = useRouter();

    useEffect(() => {
        if (!userData) {
            router.push("/login");
        }
    }, [userData]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (storedCart.length) {
            let totalCart = storedCart.reduce((acc: number, item: Iproducts) => acc + item.price, 0);
            setTotal(totalCart);
            setCart(storedCart);
        }
    }, []);

    const handleCheckout = async () => {
        const idProducts = cart.map(product => product.id);
        if (userData?.token) {
            await createOrder(idProducts, userData.token);
            setCart([]);
            setTotal(0);
            localStorage.setItem("cart", "[]");
        }
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            
            <div className="border border-gray-300 p-4 rounded-lg bg-white">
            {cart.length ? (
    cart.map((item: Iproducts, index) => (
        <div key={item.id || index} className="flex items-center border-b py-2">
            {/* Imagen del producto */}
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
            
            <div className="flex justify-between w-full">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
        </div>
    ))
) : (
    <p className="text-gray-500">You dont have products in your cart.</p>
)}

            </div>

            <div className="flex justify-between items-center mt-4 text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>

            <button 
                onClick={handleCheckout} 
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
                Checkout
            </button>
        </div>
    );
}

export default CartViews;
