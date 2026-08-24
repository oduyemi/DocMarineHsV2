"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

export const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
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
          className="
            relative overflow-hidden
            rounded-[2rem]
            border border-sky-200
            bg-slate-950
            shadow-[0_30px_100px_rgba(15,23,42,0.16)]
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.20),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.15),transparent_35%)]" />

          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:50px_50px]" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

          <div className="relative grid gap-12 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
                <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  Partner With DocMarine
                </p>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build a healthier,
                <span className="block text-sky-400">
                  safer workforce.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Whether you operate offshore, in the marine sector, across
                industrial environments, or within corporate settings, our team
                can help develop healthcare solutions aligned with your
                operational requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="
                    group inline-flex items-center justify-center gap-3
                    rounded-xl
                    bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600
                    px-6 py-3.5
                    text-sm font-bold text-white
                    shadow-[0_12px_35px_rgba(14,165,233,0.28)]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_18px_45px_rgba(14,165,233,0.40)]
                  "
                >
                  Discuss Your Requirements

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="mailto:info@docmarinehs.com"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl
                    border border-white/15
                    bg-white/5
                    px-6 py-3.5
                    text-sm font-semibold text-slate-200
                    backdrop-blur
                    transition-all duration-300
                    hover:border-sky-400/30
                    hover:bg-sky-400/10
                    hover:text-white
                  "
                >
                  <Mail className="h-4 w-4 text-sky-400" />
                  Email Our Team
                </a>
              </div>
            </div>

            <div className="lg:w-[290px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Speak With Us
                </p>

                <div className="mt-5 space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+2348034048799"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20 transition-colors group-hover:bg-sky-400/15">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        Call directly
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-white transition-colors group-hover:text-sky-400">
                        +234 803 404 8799
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@docmarinehs.com"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20 transition-colors group-hover:bg-sky-400/15">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        General enquiries
                      </p>

                      <p className="mt-0.5 break-all text-sm font-semibold text-white transition-colors group-hover:text-sky-400">
                        info@docmarinehs.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Availability */}
                <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs text-slate-400">
                    Ready to discuss your healthcare needs
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-white/[0.025] px-7 py-5 sm:px-10 lg:px-14">
            <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-sky-400" />
                <span>
                  Occupational • Clinical • Emergency Healthcare Solutions
                </span>
              </div>

              <span className="text-slate-600">
                DocMarine Health Services Ltd
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};