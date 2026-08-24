"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { RequestDetailDialog } from "@/dialog/request-modal";


export const HomeCTA = () => {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative overflow-hidden
            rounded-[2rem]
            border border-sky-200
            bg-slate-950
            px-6 py-12
            shadow-[0_30px_80px_rgba(15,23,42,0.15)]
            sm:px-10
            lg:px-16 lg:py-16
          "
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Let&apos;s Work Together
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Reliable healthcare support
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  starts with a conversation.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                Whether you need medical equipment, emergency healthcare
                support, or a tailored solution for your organization, our team
                is ready to understand your requirements.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              {/* Primary */}
              <motion.button
                type="button"
                onClick={() => setRequestOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group inline-flex
                  min-h-14
                  items-center justify-center gap-3
                  rounded-xl
                  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600
                  px-7
                  text-sm font-semibold text-white
                  shadow-[0_15px_40px_rgba(14,165,233,0.3)]
                  transition-all duration-300
                  hover:shadow-[0_20px_50px_rgba(14,165,233,0.45)]
                "
              >
                Request Information

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              <motion.a
                href="mailto:info@docmarinehs.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  min-h-14
                  items-center justify-center gap-3
                  rounded-xl
                  border border-white/10
                  bg-white/[0.05]
                  px-7
                  text-sm font-semibold text-white
                  backdrop-blur
                  transition-all duration-300
                  hover:border-sky-400/30
                  hover:bg-sky-400/10
                "
              >
                <Mail className="h-4 w-4 text-sky-400" />
                Email Our Team
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+2348034048799"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  min-h-14
                  items-center justify-center gap-3
                  rounded-xl
                  border border-white/10
                  bg-white/[0.05]
                  px-7
                  text-sm font-semibold text-white
                  backdrop-blur
                  transition-all duration-300
                  hover:border-sky-400/30
                  hover:bg-sky-400/10
                "
              >
                <Phone className="h-4 w-4 text-sky-400" />
                Call +234 803 404 8799
              </motion.a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center text-xs text-slate-500 sm:flex-row sm:gap-6">
              <a
                href="mailto:info@docmarinehs.com"
                className="transition-colors hover:text-sky-400"
              >
                info@docmarinehs.com
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

              <a
                href="tel:+2348034048799"
                className="transition-colors hover:text-sky-400"
              >
                +234 803 404 8799
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

              <span>
                Lagos, Nigeria
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {requestOpen && (
          <RequestDetailDialog
            onClose={() => setRequestOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};