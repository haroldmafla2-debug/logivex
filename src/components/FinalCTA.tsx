"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-neutral-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left - CTA content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="mb-4 inline-block text-xs font-medium tracking-widest uppercase text-accent">
              Contáctenos
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Solicite su cotización{" "}
              <span className="text-accent">sin compromiso</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-neutral-500">
              Cuéntenos qué necesita y le entregaremos una propuesta clara, sin
              costos ocultos y con el respaldo de nuestra experiencia. El primer
              paso para un transporte sin preocupaciones.
            </p>

            {/* Contact info cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/573132780724"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-green-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    WhatsApp
                  </div>
                  <div className="text-sm text-neutral-500">
                    313 278 0724 / 314 320 8463
                  </div>
                </div>
                <svg
                  className="ml-auto h-5 w-5 text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="tel:+573132780724"
                className="group flex items-center gap-5 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    Teléfono
                  </div>
                  <div className="text-sm text-neutral-500">
                    313 278 0724 / 312 474 3909
                  </div>
                </div>
                <svg
                  className="ml-auto h-5 w-5 text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href="mailto:coordinacion.logistica@logivexsas.com"
                className="group flex items-center gap-5 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">
                    Correo electrónico
                  </div>
                  <div className="text-sm text-neutral-500">
                    coordinacion.logistica@logivexsas.com
                  </div>
                </div>
                <svg
                  className="ml-auto h-5 w-5 text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right - Quote form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-primary p-8 lg:p-10">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Solicitar Cotización
              </h3>
              <p className="mb-8 text-sm text-white/50">
                Complete el formulario y le responderemos en menos de 24 horas.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      placeholder="Su nombre"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="300 000 0000"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                      Ciudad de origen
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Bogotá"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                      Ciudad de destino
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Medellín"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                    Tipo de servicio
                  </label>
                  <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                    <option value="" className="text-neutral-900">
                      Seleccione un servicio
                    </option>
                    <option value="ninera" className="text-neutral-900">
                      Servicio de Niñera
                    </option>
                    <option value="grua" className="text-neutral-900">
                      Servicio de Grúa
                    </option>
                    <option value="ambos" className="text-neutral-900">
                      Ambos servicios
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium tracking-wide text-white/60">
                    Mensaje adicional
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntenos más sobre su necesidad..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent py-4 text-base font-semibold text-primary transition-all duration-300 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
                >
                  Enviar Cotización
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
