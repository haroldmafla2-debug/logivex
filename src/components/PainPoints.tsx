"use client";

import { motion } from "framer-motion";

const pains = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
    title: "Daños durante el transporte",
    description:
      "Cada rayón, abolladura o golpe en un vehículo nuevo destruye su valor y la confianza de su cliente. Las pérdidas por daños pueden superar los millones.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Demoras impredecibles",
    description:
      "Cuando los vehículos no llegan a tiempo, su negocio se paraliza. Los clientes no esperan y las oportunidades de venta desaparecen.",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    title: "Costos exorbitantes",
    description:
      "Las tarifas infladas y los costos ocultos devoran sus márgenes de ganancia. Transportar un solo vehículo no debería arruinar su presupuesto.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Editorial left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-accent">
              El problema
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Transportar vehículos en Colombia no debería ser una
              <span className="text-accent"> pesadilla</span>
            </h2>
            <p className="text-lg leading-relaxed text-neutral-500">
              Si usted es dueño de un concesionario o necesita movilizar
              vehículos, conoce estos problemas de primera mano. Son frustrantes,
              costosos y completamente evitables.
            </p>
          </motion.div>

          {/* Pain cards - right column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {pains.map((pain, i) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    {pain.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-primary">
                      {pain.title}
                    </h3>
                    <p className="leading-relaxed text-neutral-500">
                      {pain.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
