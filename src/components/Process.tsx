"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Solicite su cotización",
    description:
      "Contáctenos por WhatsApp, teléfono o correo electrónico. Cuéntenos el tipo de vehículo, origen y destino, y le entregaremos una cotización clara y sin sorpresas.",
  },
  {
    number: "02",
    title: "Programamos el servicio",
    description:
      "Coordinamos la fecha y hora de recolección según su disponibilidad. Nuestro equipo se encarga de toda la logística para que usted no tenga que preocuparse por nada.",
  },
  {
    number: "03",
    title: "Recolección profesional",
    description:
      "Nuestro personal experto recoge el vehículo con inspección detallada documentada. Cada auto es asegurado correctamente en nuestras niñeras o grúas especializadas.",
  },
  {
    number: "04",
    title: "Entrega segura y garantizada",
    description:
      "Su vehículo llega en perfectas condiciones al destino acordado. Realizamos inspección final conjunta para su total tranquilidad y satisfacción.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-accent">
            Cómo funciona
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Cuatro pasos hacia la <span className="text-accent">tranquilidad</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-500">
            Un proceso simple, transparente y pensado para que su experiencia
            sea impecable de principio a fin.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-neutral-200 lg:block" />
              )}

              <div className="relative rounded-2xl bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                <span className="mb-6 block text-5xl font-bold text-neutral-100 transition-colors group-hover:text-accent/20">
                  {step.number}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
