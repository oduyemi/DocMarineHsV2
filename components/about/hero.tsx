"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Waves,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        {/* Atmospheric glows */}
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-500/20 blur-[140px]" />

        <div className="absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute -bottom-60 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />

        {/* Radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,transparent_0%,rgba(2,6,23,0.35)_45%,rgba(2,6,23,0.96)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* =====================================================
              LEFT — CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >       
            <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">
              Healthcare built around
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                people and purpose.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              DocMarine Health Services Ltd provides professional medical,
              occupational health, and emergency response solutions for people
              working across offshore, marine, energy, and industrial
              environments.
            </p>

            <div className="mt-7 flex max-w-xl items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                <HeartPulse className="h-3.5 w-3.5" />
              </div>

              <p className="text-sm leading-7 text-slate-400">
                Because behind every operation is a person whose health,
                safety, and wellbeing matter.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#company-overview"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(14,165,233,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(14,165,233,0.35)]"
              >
                Discover Our Story

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.08]"
              >
                Talk to Our Team

                <ArrowRight className="h-4 w-4 text-sky-400 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* =================================================
                COMPANY TRUST STRIP
            ================================================= */}

            <div className="mt-12 grid max-w-2xl grid-cols-2 border-y border-white/10 py-6 sm:grid-cols-3">
              <HeroTrust
                icon={<Building2 className="h-4 w-4" />}
                label="Established"
                value="2020"
              />

              <HeroTrust
                icon={<ShieldCheck className="h-4 w-4" />}
                label="CAC Registered"
                value="RC 1716604"
                border
              />

              <HeroTrust
                icon={<Waves className="h-4 w-4" />}
                label="Operational Focus"
                value="Nigeria"
                border
                hideMobile
              />
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — HUMAN-CENTRED VISUAL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-[500px]">
              {/* Ambient glow */}
              <div className="absolute -inset-10 rounded-[4rem] bg-sky-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/images/abthero.jpg"
                    alt="DocMarine healthcare professionals"
                    fill
                    priority
                    sizes="(max-width: 1024px) 0vw, 500px"
                    className="object-cover object-center"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Soft blue tint */}
                  <div className="absolute inset-0 bg-sky-950/10 mix-blend-multiply" />

                  {/* Image content */}
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-300">
                        People First
                      </span>
                    </div>

                    <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white">
                      Caring for people.
                      <span className="block text-sky-300">
                        Supporting operations.
                      </span>
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
                      Professional healthcare support designed around the
                      people who keep critical operations moving.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING PEOPLE CARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.5,
                }}
                className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      People at the centre
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Healthcare with purpose
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING MEDICAL CARD
              ================================================= */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-5 top-12 hidden rounded-2xl border border-sky-400/15 bg-slate-900/95 px-4 py-4 shadow-2xl backdrop-blur-xl xl:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <Stethoscope className="h-4.5 w-4.5" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Clinical Expertise
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Professional healthcare
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  SMALL STATUS BADGE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.5,
                }}
                className="absolute right-5 -bottom-5 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/95 px-4 py-2.5 shadow-xl backdrop-blur-xl"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                  Operationally Ready
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.a
        href="#company-overview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-sky-400 md:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Explore
        </span>

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
      </motion.a>
    </section>
  );
};

/* ===============================================================
   TRUST ITEM
================================================================ */

const HeroTrust = ({
  icon,
  label,
  value,
  border = false,
  hideMobile = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  border?: boolean;
  hideMobile?: boolean;
}) => {
  return (
    <div
      className={`${hideMobile ? "hidden sm:flex" : "flex"} items-center gap-3 ${
        border ? "border-l border-white/10 pl-5 sm:pl-7" : ""
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400">
        {icon}
      </div>

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>

        <p className="mt-1 text-xs font-semibold text-slate-200 sm:text-sm">
          {value}
        </p>
      </div>
    </div>
  );
};