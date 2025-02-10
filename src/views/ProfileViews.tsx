"use client";

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'

const Profileviews = () => {
  const { userData, setUserData } = useAuth(); // Asegúrate de obtener `setUserData` desde el contexto
  const router = useRouter();

  const handleLogout = () => {
    // Eliminar datos de la sesión (localStorage, context, etc.)
    localStorage.removeItem("userSession"); // Asegúrate de eliminar el valor correcto

    // Vaciar el estado global de autenticación
    setUserData(null); // Esto vacía el estado de la sesión

    // Redirigir al login o página inicial
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-50 shadow-lg rounded-xl p-8">
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Bienvenido a tu perfil
        </h1>
        <h4 className="text-lg text-gray-600 mb-4">
          <span className="font-medium">tu correo: {userData?.user.email}</span>
        </h4>
        <h4 className="text-lg text-gray-600 mb-4">
          <span className="font-medium">tu dirección: {userData?.user.address}</span>
        </h4>
        <h4 className="text-lg text-gray-600">
          <span className="font-medium">tu número: {userData?.user.phone}</span>
        </h4>
        
        {/* Botón de Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profileviews;
