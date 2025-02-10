'use client'

import { useAuth } from '@/context/AuthContext';
import { getOrders } from '@/helper/orders.helper';
import { Iorder } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const OrdersViews = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [orders, setOrders] = useState<Iorder[]>([]);

  const loadOrders = async () => {
    if (userData?.token) {
      try {
        const response: Iorder[] = await getOrders(userData.token);
        console.log("Pedidos obtenidos:", response);
        
        // Reemplazar las órdenes en lugar de acumularlas
        setOrders(response);
      } catch (error) {
        console.error("Error al obtener órdenes:", error);
      }
    }
  };

  useEffect(() => {
    if (userData?.token) {
      loadOrders(); // Carga las órdenes cuando el token cambie
    }
  }, [userData?.token]);  // Dependencia para ejecutarse cuando userData.token cambie
  

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.length > 0 ? (
        orders.map((item: Iorder) => (
          <div key={item.id}>
            <p>Status - {item.status.toLocaleUpperCase()}</p>
            <p>Date - {new Date(item.date).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <div>You dont have orders yet, go to shopping</div>
      )}
    </div>
  );
};

export default OrdersViews;
