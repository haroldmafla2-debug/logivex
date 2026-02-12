"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Desde que trabajamos con Logivex, la logística de nuestro concesionario cambió completamente. Puntualidad, cuidado y precios justos. Son nuestro aliado número uno.",
    name: "Carlos Ramírez",
    role: "Director Comercial, Concesionario Automotriz",
    location: "Bogotá",
  },
  {
    quote:
      "Necesitábamos mover 15 vehículos de Medellín a Barranquilla en tiempo récord. Logivex lo hizo sin un solo rayón y antes de lo pactado. Increíble servicio.",
    name: "María Fernanda López",
    role: "Gerente de Operaciones",
    location: "Medellín",
  },
  {
    quote:
      "La atención es personalizada y los precios son realmente competitivos. Cuando digo que son la niñera de mis carros, lo digo con total confianza. Recomendados al 100%.",
    name: "Andrés Gutiérrez",
    role: "Propietario de Flota Vehicular",
    location: "Cali",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-primary py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-accent">
            Testimonios
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/10"
            >
              {/* Quote icon */}
              <svg
                className="mb-6 h-8 w-8 text-accent/40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="mb-8 leading-relaxed text-white/70">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-lg font-bold text-accent">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-sm text-white/50">{t.role}</div>
                    <div className="text-xs text-white/30">{t.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
