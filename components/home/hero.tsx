"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Cross,
  Phone,
  Mail,
  Users,
  MapPin,
} from "lucide-react";
import { RequestDetailDialog } from "@/dialog/request-modal";


export const Hero = () => {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[620px] w-[620px] rounded-full bg-sky-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-60 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.025] bg-[size:48px_48px]" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,6,23,0.45)_100%)]" />
      <div className="pointer-events-none absolute right-[8%] top-[13%] hidden lg:block">
        <motion.div
          animate={{
            rotate: [0, 4, 0, -4, 0],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sky-400"
        >
          <Cross className="h-48 w-48" strokeWidth={0.7} />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28 xl:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.92fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Healthcare • Occupational Health • Emergency Response
              </span>
            </motion.div>

            {/* Heading */}

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-6xl xl:text-7xl">
              Healthcare that
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                puts people first.
              </span>
            </h1>

            {/* Human-focused description */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              DocMarine Health Services provides dependable medical,
              occupational health, and emergency response solutions for
              people working in offshore, marine, energy, and industrial
              environments across Nigeria.
            </p>

            {/* Human statement */}

            <div className="mt-7 max-w-2xl border-l-2 border-sky-400/60 pl-5">
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                Behind every operation is a person. Our role is to help keep
                those people healthy, protected, medically ready, and cared
                for when it matters most.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              {/* Primary */}

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setRequestOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-[0_15px_45px_rgba(14,165,233,0.28)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(14,165,233,0.42)]"
              >
                <span className="relative z-10">
                  Talk to DocMarine
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
              </motion.button>

              {/* Products */}

              <motion.a
                href="/products"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.08]"
              >
                Explore Our Products

                <ChevronRight className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>

            {/* Direct contact */}

            <div className="mt-7 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-5">

              <a
                href="tel:+2348034048799"
                className="group inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-400 transition-colors group-hover:border-sky-400/20 group-hover:bg-sky-400/10">
                  <Phone className="h-3.5 w-3.5" />
                </span>

                <span>
                  +234 803 404 8799
                </span>
              </a>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <a
                href="mailto:info@docmarinehs.com"
                className="group inline-flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-400 transition-colors group-hover:border-sky-400/20 group-hover:bg-sky-400/10">
                  <Mail className="h-3.5 w-3.5" />
                </span>

                <span>
                  info@docmarinehs.com
                </span>
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/10 py-6">

              <HeroStat
                value="2020"
                label="Established"
              />

              <HeroStat
                value="Nigeria"
                label="Based & Registered"
                border
              />

              <HeroStat
                value="24/7"
                label="Emergency Readiness"
                border
              />

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Ambient glow */}

            <div className="absolute -inset-8 rounded-[3rem] bg-sky-500/10 blur-3xl" />

            {/* Main image */}

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-[0_35px_100px_rgba(0,0,0,0.4)]">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
                <img
                  src="/images/hero.jpg"
                  alt="DocMarine healthcare professional providing medical care"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Image treatment */}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-sky-950/20" />

                {/* Soft blue wash */}

                <div className="absolute inset-0 bg-sky-950/10 mix-blend-multiply" />
                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/60 px-3.5 py-2 backdrop-blur-xl">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/15 text-sky-300">
                      <HeartPulse className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      People Behind the Care
                    </span>

                  </div>

                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-md">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Ready to respond
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      Professional care.
                      <span className="block text-sky-300">
                        Human connection.
                      </span>
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                      Supporting the health and wellbeing of the people who
                      keep essential operations moving.
                    </p>

                  </div>

                </div>
              </div>

              <div className="grid grid-cols-2 border-t border-white/10 bg-slate-950/90">
                <div className="flex items-center gap-3 border-r border-white/10 px-5 py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <Stethoscope className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Medical Expertise
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Professional care
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3 px-5 py-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Safety First
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      HSE conscious
                    </p>
                  </div>

                </div>

              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-5 hidden max-w-[240px] rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <Users className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    People come first
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    Healthcare designed around the people we serve.
                  </p>
                </div>

              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-10 hidden rounded-xl border border-sky-400/15 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl lg:-right-6 lg:block"
            >
              <div className="flex items-center gap-2.5">

                <MapPin className="h-4 w-4 text-sky-400" />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Serving
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-slate-200">
                    Nigeria & beyond
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 hidden items-center justify-center lg:flex"
        >
          <a
            href="#about"
            className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-sky-400"
          >
            <span>Discover DocMarine</span>

            <span className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1">
              <motion.span
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-0.5 rounded-full bg-sky-400"
              />
            </span>
          </a>
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

const HeroStat = ({
  value,
  label,
  border = false,
}: {
  value: string;
  label: string;
  border?: boolean;
}) => {
  return (
    <div
      className={
        border
          ? "border-l border-white/10 pl-5 sm:pl-8"
          : ""
      }
    >
      <p className="text-xl font-bold tracking-tight text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
};