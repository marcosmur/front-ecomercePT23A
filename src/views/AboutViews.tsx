'use client';

import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-900 py-10">
      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-extrabold">Estamos cambiando la forma en que las personas se conectan</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">Descubre nuestra misión, valores y el equipo que hace todo esto posible.</p>
      </section>

      {/* Nuestra Misión Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-left">
              <p className="text-lg">
                Nuestra misión es redefinir cómo las personas interactúan con la tecnología, proporcionando experiencias
                únicas que mejoren la conectividad, la eficiencia y la accesibilidad para todos. Buscamos constantemente la
                innovación para crear un futuro más interconectado y accesible.
              </p>
            </div>
            <div>
              <img
                src="https://static.wixstatic.com/media/24bb9b_70793acd07ef4ac2875d55a32525d61c~mv2.jpg/v1/fill/w_568,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/24bb9b_70793acd07ef4ac2875d55a32525d61c~mv2.jpg"
                alt="Nuestra misión"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Creemos en la honestidad, la transparencia y el compromiso con nuestros clientes y colaboradores. Cada
            decisión que tomamos está guiada por nuestros valores fundamentales: integridad, innovación y dedicación.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Innovación</h3>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYW1Mg8EgWQUQ4Fyf3fk_u8AE4ihNAWEcRQ&s"
                alt="Innovación"
                className="rounded-full shadow-md mb-4"
              />
              <p>Siempre buscamos nuevas formas de hacer las cosas, desafiando los límites de lo posible.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Honestidad</h3>
              <img
                src="https://i.ytimg.com/vi/JjO11LB1U48/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAN7TXIgeMyurswsg0YKw5rDAv0XQ"
                alt="Honestidad"
                className="rounded-full shadow-md mb-4"
              />
              <p>La confianza es clave, y nos esforzamos por ser transparentes en todas nuestras acciones.</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-xl mb-2">Compromiso</h3>
              <img
                src="https://www.apple.com/newsroom/images/product/services/lifestyle/Apple-Data-Privacy-Day-hero_big.jpg.large.jpg"
                alt="Compromiso"
                className="rounded-full shadow-md mb-4"
              />
              <p>Estamos dedicados a lograr los mejores resultados para nuestros clientes y colaboradores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Gente Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestra Gente</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Nuestro equipo es el corazón de la empresa. Cada miembro aporta una perspectiva única y valiosa que
            contribuye a nuestro éxito. Aquí, trabajamos juntos para lograr objetivos comunes y hacer crecer nuestra
            visión.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.ctfassets.net/vztl6s0hp3ro/3GqqdPTaIy3jZeJkroXyO9/4bd78747425eda8fd806951fc96c4db5/8_team-player_qualities_to_look_for_in_top_talent__1_.webp"
                alt="Miembro del equipo"
                className="rounded-full shadow-md mb-4"
              />
              <h3 className="font-semibold text-xl">Carlos Pérez</h3>
              <p className="text-gray-600">Desarrollador Senior</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.connectamericas.com/sites/default/files/ThinkstockPhotos-101115515.jpg"
                alt="Miembro del equipo"
                className="rounded-full shadow-md mb-4"
              />
              <h3 className="font-semibold text-xl">María González</h3>
              <p className="text-gray-600">Gerente de Marketing</p>
            </div>
            <div className="text-center">
              <img
                src="https://www.businessempresarial.com.pe/wp-content/uploads/2024/02/disenador-2-724x470.jpg"
                alt="Miembro del equipo"
                className="rounded-full shadow-md mb-4"
              />
              <h3 className="font-semibold text-xl">Luis Rodríguez</h3>
              <p className="text-gray-600">Diseñador UX/UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Te gustaría saber más?</h2>
        <p className="text-lg mb-8">Estamos siempre dispuestos a responder a tus preguntas. No dudes en contactarnos.</p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-8 py-3 text-lg font-semibold shadow-md hover:bg-blue-500 transition-all duration-200"
        >
          Contáctanos
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;
