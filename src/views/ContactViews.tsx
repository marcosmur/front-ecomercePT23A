'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactViews = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado con éxito');
    // Aquí puedes agregar la lógica para enviar el formulario, como hacer una solicitud POST a tu backend.
  };

  return (
    <main className="bg-white text-gray-900 py-10">
      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20">
        <h1 className="text-4xl font-extrabold">¡Estamos aquí para ayudarte!</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">Contáctanos para cualquier consulta o pregunta que tengas. Estamos disponibles para ti.</p>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail size={40} className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Correo Electrónico</h3>
              <p>iphonestore@gmail.com</p>
            </div>
            <div className="text-center">
              <Phone size={40} className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Teléfono</h3>
              <p>+1 (232) 423-5634</p>
            </div>
            <div className="text-center">
              <MapPin size={40} className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Ubicación</h3>
              <p>Calle 12, mercedes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Envíanos un Mensaje</h2>
          <p className="text-lg mb-8">Déjanos tu consulta o comentario y nos pondremos en contacto contigo lo antes posible.</p>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                rows={6}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-200"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes alguna duda?</h2>
        <p className="text-lg mb-8">No dudes en preguntarnos. Estamos disponibles para ayudarte con cualquier consulta.</p>
        <Link
          href="/support"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-8 py-3 text-lg font-semibold shadow-md hover:bg-blue-500 transition-all duration-200"
        >
          Visita nuestro Centro de Ayuda
        </Link>
      </section>
    </main>
  );
};

export default ContactViews;
