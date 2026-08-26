"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  Cross,
  HeartPulse,
  LifeBuoy,
  ShieldCheck,
  Siren,
  Stethoscope,
  Waves,
} from "lucide-react";


const servicePillars = [
  {
    icon: Waves,
    title: "Offshore Medical",
  },
  {
    icon: ShieldCheck,
    title: "Occupational Health",
  },
  {
    icon: Stethoscope,
    title: "General Medical",
  },
  {
    icon: Siren,
    title: "Emergency Response",
  },
  {
    icon: Activity,
    title: "Medical Equipment",
  },
];

const industries = [
  "Oil & Gas",
  "Marine",
  "Energy",
  "Construction",
  "Manufacturing",
  "Corporate",
];

export const ServiceHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 -top-48 h-[650px] w-[650px] rounded-full bg-sky-500/15 blur-[140px]" />
        <div className="absolute -right-48 top-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-[-300px] left-1/3 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,transparent_0%,rgba(2,6,23,0.3)_45%,rgba(2,6,23,0.96)_100%)]" />
      </div>

      <div className="pointer-events-none absolute right-[6%] top-[12%] hidden lg:block">
        <motion.div
          animate={{
            rotate: [0, 3, 0, -3, 0],
            opacity: [0.035, 0.075, 0.035],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sky-400"
        >
          <Cross
            className="h-56 w-56 xl:h-72 xl:w-72"
            strokeWidth={0.65}
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28 xl:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
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
                Our Medical Services
              </span>
            </motion.div>

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-6xl xl:text-7xl">
              Healthcare capability
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                where it matters most.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              From offshore medical support and occupational health to
              emergency preparedness and clinical services, DocMarine provides
              integrated healthcare solutions built around the realities of
              demanding operational environments.
            </p>

            <div className="mt-7 flex items-start gap-3 text-sm text-slate-400">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                <CheckCircle2
                  className="h-3.5 w-3.5"
                  strokeWidth={2.5}
                />
              </div>

              <p>
                Professional medical support designed around people,
                operations, safety, and readiness.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(14,165,233,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(14,165,233,0.4)]"
              >
                Explore Our Services

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.07]"
              >
                Talk to Our Team

                <ArrowRight className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-sky-400" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Industries We Serve
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-sky-400/60" />

                    <span className="text-xs font-medium text-slate-400">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
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
            <div className="absolute -inset-8 rounded-[3rem] bg-sky-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                      <HeartPulse className="h-4 w-4" />

                      Integrated Healthcare
                    </div>

                    <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                      One healthcare partner.
                      <span className="block text-slate-400">
                        Multiple capabilities.
                      </span>
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 sm:flex">
                    <LifeBuoy className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.045] px-4 py-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-emerald-300">
                      Operationally Ready
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Medical support for demanding environments
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {servicePillars.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.title}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.55 + index * 0.1,
                        duration: 0.45,
                      }}
                      whileHover={{
                        x: 3,
                      }}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 transition-colors duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.045]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-[10px] font-bold text-sky-400 ring-1 ring-sky-400/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-colors group-hover:text-sky-400">
                        <Icon className="h-4.5 w-4.5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {service.title}
                        </p>

                        <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-slate-600">
                          Healthcare capability
                        </p>
                      </div>

                      <ArrowRight className="ml-auto h-4 w-4 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-400" />
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-sky-400/10 bg-sky-400/[0.045] px-5 py-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Healthcare built around your operation
                  </p>

                  <p className="mt-0.5 text-xs leading-5 text-slate-500">
                    From planned medical support to emergency response and
                    clinical care.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <Cross className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Medical Readiness
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    People • Safety • Operations
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-10 hidden rounded-xl border border-sky-400/15 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl lg:-right-6 lg:block"
            >
              <div className="flex items-center gap-2">
                <Siren className="h-4 w-4 text-sky-400" />

                <span className="text-xs font-semibold text-slate-200">
                  Response Ready
                </span>
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
            href="#services"
            className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-sky-400"
          >
            <span>Explore Our Services</span>

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
    </section>
  );
};