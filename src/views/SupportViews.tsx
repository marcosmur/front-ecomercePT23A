"use client";

import React, { useState } from "react";

const SupportPage = () => {
  const [query, setQuery] = useState(""); // Estado para almacenar la consulta del usuario
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (query.trim() === "") {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="bg-gray-100 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Apple Soporte</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Iniciar sesión
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4">¿En qué podemos ayudarte?</h2>
        <input
          type="text"
          placeholder="Escribe tu consulta aquí..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`border rounded-lg px-4 py-2 w-full max-w-md mx-auto ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && (
          <p className="text-red-500 mt-2">Por favor, ingrese su consulta antes de enviarla.</p>
        )}
      </header>

      {/* Categorías de soporte */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">iPhone</h3>
          <p>Obtén ayuda con tu iPhone</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">Mac</h3>
          <p>Soporte técnico para Mac</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">iPad</h3>
          <p>Solución de problemas con tu iPad</p>
        </div>
      </section>

      {/* Botón de Envío */}
      <div className="text-center mt-10">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Enviar solicitud de soporte
        </button>
      </div>

      {/* Mensaje de Agradecimiento */}
      {submitted && (
        <div className="text-center mt-6 text-green-600 text-lg font-semibold">
          <span>Gracias por su tiempo, en breves nos comunicaremos para ayudarlo.</span>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t">
        <p className="text-gray-500">© 2025 Apple Soporte. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default SupportPage;
