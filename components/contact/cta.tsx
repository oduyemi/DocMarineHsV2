"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";


export const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-100 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full bg-sky-400/15 blur-[130px]" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(241,245,249,0.75)_80%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.10)]"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative grid gap-12 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-14 lg:py-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2"
              >
                <MessageCircle className="h-3.5 w-3.5 text-sky-600" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700">
                  Let's Work Together
                </span>
              </motion.div>

              <h2 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Healthcare support that works around
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                  your operational needs.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Whether you need medical equipment, occupational health
                support, offshore medical services, or emergency response
                solutions, our team is ready to understand your requirements
                and help you find the right solution.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Professional healthcare support",
                  "Solutions tailored to your needs",
                  "Quality-focused service delivery",
                  "Responsive client support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-600" />

                    <span className="text-sm font-medium text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact#contact-form"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(14,165,233,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(14,165,233,0.32)]"
                >
                  Contact Our Team

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-7 py-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                  DocMarine Health Services
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                  A dependable healthcare partner.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  We combine healthcare expertise, operational understanding,
                  and a commitment to quality to support organizations and
                  people in demanding environments.
                </p>

                <div className="my-7 h-px bg-slate-200" />

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Ready to assist
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Enquiries & support
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-100">
                    Available
                  </span>
                </div>
              </div>

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -right-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-500" />

                  <span className="text-xs font-semibold text-slate-600">
                    Healthcare. Safety. Reliability.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-2 text-center"
        >
          <ShieldCheck className="h-4 w-4 text-sky-600" />

          <p className="text-xs font-medium text-slate-500">
            Professional healthcare solutions designed around your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};