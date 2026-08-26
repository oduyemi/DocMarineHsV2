"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";


const contactMethods = [
  {
    icon: Phone,
    eyebrow: "Call our team",
    title: "Speak with us",
    description:
      "For urgent enquiries, service requirements, or to discuss how DocMarine can support your operation.",
    value: "+234 803 404 8799",
    action: "Call DocMarine",
    href: "tel:+2348034048799",
    featured: true,
  },
  {
    icon: Mail,
    eyebrow: "Send an enquiry",
    title: "Email our team",
    description:
      "Send us your requirements and our team will review your enquiry and get back to you.",
    value: "info@docmarinehs.com",
    action: "Send an email",
    href: "mailto:info@docmarinehs.com",
  },
  {
    icon: MapPin,
    eyebrow: "Service coverage",
    title: "Across Nigeria",
    description:
      "Supporting healthcare, occupational health, medical equipment, and emergency response needs across Nigeria.",
    value: "Nigeria · Nationwide",
    action: "Our coverage",
    href: "#contact-information",
  },
];


export const ContactMethods = () => {
  return (
    <section
      id="contact-methods"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-sky-500" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
              Contact Methods
            </p>

            <span className="h-px w-10 bg-sky-500" />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            However you reach us,
            <span className="block text-sky-600">
              we're ready to listen.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Choose the contact option that works best for you. Whether you
            have an immediate requirement, need more information, or want to
            explore a potential partnership, our team is here to help.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 lg:p-8 ${
                  method.featured
                    ? "border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 shadow-[0_20px_60px_rgba(14,165,233,0.10)]"
                    : "border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.05)] hover:border-sky-200 hover:shadow-[0_20px_60px_rgba(14,165,233,0.09)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${
                    method.featured
                      ? "bg-sky-400/15"
                      : "bg-sky-400/10"
                  }`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl ${
                        method.featured
                          ? "bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                          : "bg-sky-50 text-sky-600 ring-1 ring-sky-100"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-600">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-600">
                    {method.eyebrow}
                  </p>

                  <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-950">
                    {method.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-600">
                    {method.description}
                  </p>

                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <p className="text-sm font-bold text-slate-900">
                      {method.value}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-sky-600 transition-colors group-hover:text-sky-700">
                      {method.action}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_20px_70px_rgba(15,23,42,0.12)]"
        >
          <div className="relative">
            <div className="pointer-events-none absolute -left-20 -top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-base font-bold text-white">
                    A healthcare partner you can reach
                  </h3>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-400">
                    Ready to assist
                  </span>
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
                  From routine healthcare requirements to operational and
                  emergency medical support, DocMarine works with clients to
                  understand their needs and provide dependable solutions.
                </p>
              </div>

              <div className="flex items-center gap-3 lg:border-l lg:border-white/10 lg:pl-8">
                <Clock3 className="h-4 w-4 text-sky-400" />

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Enquiries
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-200">
                    We're here to help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-2 text-center"
        >
          <ShieldCheck className="h-4 w-4 text-sky-500" />

          <p className="text-xs leading-6 text-slate-500">
            Professional healthcare support built around your operational
            requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};