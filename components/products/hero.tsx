"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Check,
  ChevronRight,
  Cross,
  HeartPulse,
  Search,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Truck,
} from "lucide-react";
import Link from "next/link";

export const ProductsHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-48 -top-48 h-[700px] w-[700px] rounded-full bg-sky-500/15 blur-[150px]" />
      <div className="pointer-events-none absolute -right-48 top-1/4 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-64 left-1/3 h-[550px] w-[550px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_15%,rgba(2,6,23,0.5)_70%,rgba(2,6,23,0.95)_100%)]" />
      <motion.div
        animate={{
          rotate: [0, 4, 0, -4, 0],
          opacity: [0.025, 0.055, 0.025],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-16 top-8 hidden text-sky-400 lg:block"
      >
        <Cross
          className="h-[420px] w-[420px]"
          strokeWidth={0.45}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28 xl:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
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
                delay: 0.1,
                duration: 0.55,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Medical Equipment & Supplies
              </span>
            </motion.div>

            {/* Heading */}

            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-6xl xl:text-7xl">
              Equipment built for
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                better care.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              Explore professional-grade medical equipment and healthcare
              supplies selected to support hospitals, clinics, healthcare
              professionals, emergency teams, and demanding clinical
              environments across Nigeria.
            </p>

            {/* Supporting statement */}

            <div className="mt-7 flex items-start gap-3 text-sm text-slate-400">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                <Check
                  className="h-3.5 w-3.5"
                  strokeWidth={3}
                />
              </div>

              <p>
                Quality-focused equipment with dependable service and
                professional support.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#product-catalogue"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(14,165,233,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(14,165,233,0.42)]"
              >
                <ShoppingBag className="h-4 w-4" />

                Explore Equipment

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.07]"
              >
                Speak With Our Team

                <ChevronRight className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-3 border-y border-white/10 py-6">
              <ProductStat
                icon={<BadgeCheck className="h-4 w-4" />}
                value="Quality"
                label="Focused Products"
              />

              <ProductStat
                icon={<ShieldCheck className="h-4 w-4" />}
                value="Professional"
                label="Grade Solutions"
                border
              />

              <ProductStat
                icon={<Truck className="h-4 w-4" />}
                value="Nationwide"
                label="Availability"
                border
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-[3rem] bg-sky-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-6">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                      <Activity className="h-4 w-4" />

                      Product Catalogue
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                      Clinical equipment.
                      <span className="block text-slate-400">
                        Ready for the real world.
                      </span>
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 sm:flex">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                </div>

                {/* Search-style field */}

                <div className="mt-7 flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3">
                  <Search className="h-4 w-4 text-slate-500" />

                  <span className="text-xs text-slate-500">
                    Find medical equipment...
                  </span>

                  <span className="ml-auto hidden rounded-md border border-white/10 px-2 py-1 text-[9px] font-medium text-slate-600 sm:block">
                    SEARCH
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <ProductCategory
                  icon={<HeartPulse className="h-5 w-5" />}
                  title="Patient Care"
                  description="Clinical essentials"
                  number="01"
                />

                <ProductCategory
                  icon={<Stethoscope className="h-5 w-5" />}
                  title="Diagnostic"
                  description="Monitoring & assessment"
                  number="02"
                />

                <ProductCategory
                  icon={<Activity className="h-5 w-5" />}
                  title="Monitoring"
                  description="Vital signs & care"
                  number="03"
                />

                <ProductCategory
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Emergency"
                  description="Critical response"
                  number="04"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-sky-400/10 bg-sky-400/[0.045] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <Boxes className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Professional Supply
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Equipment for clinical & operational needs
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Available
                  </span>
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
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <BadgeCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Quality Focused
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Professional equipment
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
              className="absolute -right-3 top-10 hidden rounded-xl border border-sky-400/15 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl lg:-right-6 lg:block"
            >
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-sky-400" />

                <span className="text-xs font-semibold text-slate-200">
                  Nationwide Supply
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
            href="#product-catalogue"
            className="group flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-sky-400"
          >
            <span>Explore the catalogue</span>

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

const ProductCategory = ({
  icon,
  title,
  description,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.05]"
    >
      {/* Hover glow */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/10 transition-colors duration-300 group-hover:bg-sky-400/15">
            {icon}
          </div>

          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-600">
            {number}
          </span>
        </div>

        <h3 className="mt-6 text-sm font-semibold text-white">
          {title}
        </h3>

        <p className="mt-1 text-[11px] leading-5 text-slate-500">
          {description}
        </p>

        <div className="mt-5 h-px w-7 bg-sky-400/50 transition-all duration-300 group-hover:w-12" />
      </div>
    </motion.div>
  );
};

const ProductStat = ({
  icon,
  value,
  label,
  border = false,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  border?: boolean;
}) => {
  return (
    <div
      className={`${
        border ? "border-l border-white/10 pl-5 sm:pl-8" : ""
      }`}
    >
      <div className="flex items-center gap-2 text-sky-400">
        {icon}

        <p className="text-sm font-bold tracking-tight text-white sm:text-base">
          {value}
        </p>
      </div>

      <p className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
};