"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-5"
          >
            <div className="relative">
              {/* Main visual block */}
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-primary">
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <span className="mb-2 text-8xl font-bold text-accent">
                    2021
                  </span>
                  <span className="text-xl font-light tracking-wide text-white/70">
                    Año de fundación
                  </span>
                  <div className="mt-8 h-px w-16 bg-accent/30" />
                  <p className="mt-8 text-sm leading-relaxed text-white/50">
                    Comenzamos con solo 3 vehículos y hoy contamos con una
                    flota en constante crecimiento
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 rounded-2xl bg-accent p-6 shadow-xl shadow-accent/20"
              >
                <div className="text-3xl font-bold text-primary">2030</div>
                <div className="text-sm font-medium text-primary/70">
                  Visión de liderazgo
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-accent">
              Sobre Logivex
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Transportamos todo tipo de{" "}
              <span className="text-accent">vehículos</span>
            </h2>

            <div className="mb-10 space-y-5 text-lg leading-relaxed text-neutral-500">
              <p>
                Logivex S.A.S es una empresa dedicada a la prestación de
                servicios de transporte y logística automotriz a nivel nacional
                y urbano. Nuestra misión es prestar un servicio óptimo y eficaz,
                ofreciendo tarifas al precio justo.
              </p>
              <p>
                En 2021 iniciamos con solo 3 vehículos. Gracias a nuestro
                cumplimiento y excelentes precios, hemos crecido de manera
                considerable, ganándonos la confianza de concesionarios y
                empresas líderes del sector automotriz colombiano.
              </p>
            </div>

            <div className="mb-10 border-l-2 border-accent pl-6">
              <p className="text-lg italic text-neutral-600">
                &ldquo;Para el año 2030, nos consolidaremos como una de las
                empresas líderes en logística a nivel nacional, proporcionando a
                nuestros clientes la confianza que necesitan como su aliado
                estratégico.&rdquo;
              </p>
              <span className="mt-3 block text-sm font-medium text-accent">
                — Visión Logivex S.A.S
              </span>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "Economía", desc: "Tarifas justas" },
                { value: "Servicio", desc: "Atención de calidad" },
                { value: "Seguridad", desc: "Entregas perfectas" },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-xl border border-neutral-100 p-4 text-center"
                >
                  <div className="mb-1 text-sm font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-xs text-neutral-400">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
