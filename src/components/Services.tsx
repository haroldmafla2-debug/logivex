"use client";

import { motion } from "framer-motion";

const services = [
  {
    tag: "01",
    title: "Servicio de Niñera",
    subtitle: "Transporte masivo de vehículos",
    description:
      "El transporte en niñera es la solución más eficiente para trasladar automóviles, camperos y camionetas. Utilizamos camiones especializados tipo tractomula o quintiñario con capacidad de hasta 5 o 9 unidades respectivamente, garantizando un transporte seguro, ágil y a escala.",
    features: [
      "Tractomula hasta 5 unidades",
      "Quintiñario hasta 9 unidades",
      "Cobertura nacional",
      "Seguro de transporte incluido",
    ],
    accent: true,
  },
  {
    tag: "02",
    title: "Servicio de Grúa",
    subtitle: "Movilización individual especializada",
    description:
      "Atención rápida y efectiva para vehículos que requieren movilización individual, ya sea dentro de la ciudad o hacia cualquier destino del país. Contamos con grúas tipo plataforma y convencionales, operadas por personal experto y disponibles para atención programada o traslados urgentes.",
    features: [
      "Grúa plataforma y convencional",
      "Atención urgente 24/7",
      "Personal experto certificado",
      "Traslados ciudad y carretera",
    ],
    accent: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-accent">
            Nuestros servicios
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Soluciones de transporte diseñadas para su negocio
          </h2>
          <p className="text-lg leading-relaxed text-neutral-500">
            Dos servicios especializados que cubren todas sus necesidades de
            movilización vehicular, desde traslados masivos hasta movimientos
            individuales urgentes.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`group relative overflow-hidden rounded-3xl p-10 lg:p-12 transition-all duration-500 ${
                service.accent
                  ? "bg-primary text-white"
                  : "border border-neutral-200 bg-white"
              }`}
            >
              {/* Tag number */}
              <span
                className={`mb-8 inline-block text-7xl font-bold ${
                  service.accent ? "text-white/10" : "text-neutral-100"
                }`}
              >
                {service.tag}
              </span>

              <div className="relative">
                <span
                  className={`mb-2 block text-sm font-medium tracking-wide ${
                    service.accent ? "text-accent" : "text-accent"
                  }`}
                >
                  {service.subtitle}
                </span>
                <h3
                  className={`mb-4 text-2xl font-bold sm:text-3xl ${
                    service.accent ? "text-white" : "text-primary"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mb-8 leading-relaxed ${
                    service.accent ? "text-white/70" : "text-neutral-500"
                  }`}
                >
                  {service.description}
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-center gap-3 text-sm ${
                        service.accent ? "text-white/80" : "text-neutral-600"
                      }`}
                    >
                      <svg
                        className={`h-4 w-4 shrink-0 ${
                          service.accent ? "text-accent" : "text-accent"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative circle */}
              {service.accent && (
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
