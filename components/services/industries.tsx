"use client";
import { motion } from "framer-motion";
import { Fuel, Factory, Building2, HardHat, Ship, CheckCircle2 } from "lucide-react";


const industries = [
  {
    icon: Fuel,
    title: "Offshore Oil & Gas",
    description:
      "Medical personnel, emergency response, occupational health, and healthcare support for offshore platforms and exploration operations.",
    image: "/images/offshore_oil.JPG",
  },
  {
    icon: Ship,
    title: "Marine & Shipping",
    description:
      "Healthcare services for vessels, ports, marine operators, crew medical assessments, and medical evacuation coordination.",
    image: "/images/shipping.jpg",
  },
  {
    icon: Factory,
    title: "Energy & Petrochemical",
    description:
      "Occupational health programs, emergency preparedness, workforce medical surveillance, and clinical support for energy facilities.",
    image: "/images/energy.jpg",
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description:
      "Standby medical teams, first aid coverage, project medical planning, and health risk management for high-risk construction sites.",
    image: "/images/construction.jpg",
  },
  {
    icon: Building2,
    title: "Manufacturing Industries",
    description:
      "Industrial healthcare, employee wellness initiatives, statutory medical examinations, and workplace health management.",
    image: "/images/manufacturing.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Institutions",
    description:
      "Corporate clinics, executive health screening, preventive healthcare programs, and occupational medical consultancy.",
    image: "/images/corporate.jpg",
  },
];


export const IndustriesServed = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-sky-100 blur-[120px]" />
      <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-cyan-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Healthcare solutions designed for
            <span className="block text-sky-600">
              high-performance industries.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every industry faces unique operational health and safety challenges.
            We provide specialized medical services that protect people,
            strengthen compliance, and keep operations running safely.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-sky-200 hover:shadow-[0_25px_60px_rgba(14,165,233,0.15)]"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-sky-600 shadow-lg backdrop-blur">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-xl font-bold text-white">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-sky-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Industry-tailored healthcare support
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[32px] bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 p-8 text-white lg:p-12"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_65%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
                Trusted Across Critical Sectors
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight lg:text-4xl">
                Supporting organizations where health, safety, and operational
                readiness matter every day.
              </h3>

              <p className="mt-5 max-w-2xl text-cyan-50/90 leading-8">
                Whether offshore, at sea, on industrial sites, or within corporate
                workplaces, DocMarine delivers healthcare solutions that align with
                operational realities and international HSE expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Offshore", "Medical Support"],
                ["Marine", "Healthcare Services"],
                ["Industrial", "Occupational Health"],
                ["Corporate", "Medical Programs"],
              ].map(([title, label]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"
                >
                  <p className="text-lg font-bold">{title}</p>
                  <p className="mt-1 text-xs text-cyan-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};