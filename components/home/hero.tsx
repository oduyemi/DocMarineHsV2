"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Activity,
  Cross,
  Siren,
} from "lucide-react";
import { RequestDetailDialog } from "@/dialog/request-modal";

export const Hero = () => {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Primary atmospheric glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[620px] w-[620px] rounded-full bg-sky-500/15 blur-[140px]" />

      <div className="pointer-events-none absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-60 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.035] bg-[size:48px_48px]" />

      {/* Subtle radial fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.35)_100%)]" />

      {/* =========================================================
          DECORATIVE MEDICAL CROSS
      ========================================================= */}

      <div className="pointer-events-none absolute right-[8%] top-[15%] hidden lg:block">
        <motion.div
          animate={{
            rotate: [0, 4, 0, -4, 0],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-sky-400"
        >
          <Cross className="h-48 w-48" strokeWidth={0.7} />
        </motion.div>
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28 xl:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          
          {/* =====================================================
              LEFT — HERO CONTENT
          ===================================================== */}

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
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Healthcare & Medical Equipment
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-6xl xl:text-7xl">
              Reliable Medical
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Solutions You Can Trust.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              DocMarine Health Services delivers certified medical equipment
              and dependable healthcare solutions for hospitals, clinics,
              healthcare professionals, and emergency response teams across
              Nigeria.
            </p>

            {/* Supporting statement */}
            <div className="mt-7 flex items-start gap-3 text-sm text-slate-400">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>

              <p>
                Quality-focused solutions designed for demanding clinical
                environments.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/products"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-[0_15px_45px_rgba(14,165,233,0.28)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(14,165,233,0.42)]"
              >
                <span className="relative z-10">
                  Explore Our Products
                </span>

                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
              </motion.a>

              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setRequestOpen(true)}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.08]"
              >
                Request Information

                <ChevronRight className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div className="mt-14 grid max-w-2xl grid-cols-3 border-y border-white/10 py-6">
              <HeroStat
                value="100%"
                label="Certified Products"
              />

              <HeroStat
                value="24/7"
                label="Emergency Support"
                border
              />

              <HeroStat
                value="Nationwide"
                label="Service Coverage"
                border
              />
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — MEDICAL CAPABILITY PANEL
          ===================================================== */}

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
            {/* Ambient glow behind panel */}
            <div className="absolute -inset-8 rounded-[3rem] bg-sky-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6">
              
              {/* Top panel */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                      <Activity className="h-4 w-4" />
                      Healthcare Solutions
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                      Built for care.
                      <span className="block text-slate-400">
                        Ready when it matters.
                      </span>
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 sm:flex">
                    <HeartPulse className="h-6 w-6" />
                  </div>
                </div>

                {/* Pulse visualization */}
                <div className="relative mt-8 h-20 overflow-hidden rounded-xl border border-white/5 bg-slate-950/80">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-sky-400/10" />

                  <svg
                    viewBox="0 0 500 80"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 40 H100 L115 40 L130 12 L145 65 L160 40 H220 L235 40 L250 25 L265 55 L280 40 H340 L355 40 L370 8 L385 68 L400 40 H500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-sky-400"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 2,
                        delay: 0.8,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>

                  <div className="absolute bottom-3 left-4 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    Clinical readiness
                  </div>

                  <div className="absolute bottom-3 right-4 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </div>
                </div>
              </div>

              {/* Capability cards */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <CapabilityCard
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Certified Equipment"
                  text="International standards"
                />

                <CapabilityCard
                  icon={<Siren className="h-5 w-5" />}
                  title="Critical Care"
                  text="Emergency-ready solutions"
                />

                <CapabilityCard
                  icon={<Stethoscope className="h-5 w-5" />}
                  title="Clinical Grade"
                  text="Professional performance"
                />

                <CapabilityCard
                  icon={<HeartPulse className="h-5 w-5" />}
                  title="Reliable Support"
                  text="Responsive service"
                />
              </div>

              {/* Bottom trust strip */}
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-sky-400/10 bg-sky-400/[0.045] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <ShieldCheck className="h-4.5 w-4.5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Trusted Healthcare Partner
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Serving healthcare needs across Nigeria
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Quality Focused
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Healthcare solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating certification badge */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-10 hidden rounded-xl border border-sky-400/15 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl lg:-right-6 lg:block"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sky-400" />

                <span className="text-xs font-semibold text-slate-200">
                  Certified Solutions
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM SCROLL INDICATOR
        ===================================================== */}

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
                animate={{ y: [0, 8, 0] }}
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

      {/* =========================================================
          REQUEST INFORMATION DIALOG
      ========================================================= */}

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

/* ===============================================================
   CAPABILITY CARD
================================================================ */

const CapabilityCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.05]"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition-colors duration-300 group-hover:bg-sky-400/15">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* ===============================================================
   HERO STAT
================================================================ */

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
      className={`${
        border ? "border-l border-white/10 pl-5 sm:pl-8" : ""
      }`}
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