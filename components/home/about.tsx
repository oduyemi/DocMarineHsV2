"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-100/70 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-50 blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(14,165,233,0.035),transparent_35%)]" />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

          {/* =====================================================
              LEFT — STORY
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
                About DocMarine
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl">
              Healthcare solutions built on
              <span className="block mt-2 text-sky-600">
                trust, quality and care.
              </span>
            </h2>

            {/* Main copy */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Doc Marine Health Services LTD is a privately registered
              healthcare company in Nigeria, dedicated to providing dependable
              medical equipment and comprehensive healthcare solutions.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
              We work with hospitals, clinics, emergency responders, and
              healthcare institutions to provide reliable tools and solutions
              designed for demanding clinical environments.
            </p>

            {/* Trust points */}
            <div className="mt-8 space-y-3">
              <TrustPoint>
                Quality-focused medical equipment
              </TrustPoint>

              <TrustPoint>
                Solutions for clinical and emergency environments
              </TrustPoint>

              <TrustPoint>
                Professional support for healthcare institutions
              </TrustPoint>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-600 hover:shadow-md"
              >
                Discover Our Story

                <ArrowRight className="h-4 w-4 text-sky-500 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — CAPABILITIES
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-[2rem] border border-sky-100/80" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-7">

              {/* Header panel */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-7 text-white sm:p-8">
                {/* Background glow */}
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                      <HeartPulse className="h-5 w-5" />
                    </div>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                      Healthcare Partner
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight sm:text-3xl">
                    Built around the needs of healthcare professionals.
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-slate-400">
                    From medical equipment to critical-care solutions, we focus
                    on dependable products that support better healthcare
                    delivery.
                  </p>
                </div>
              </div>

              {/* Feature cards */}
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <FeatureItem
                  icon={<ShieldCheck className="h-5 w-5" />}
                  title="Compliance"
                  text="Registered and committed to professional standards."
                />

                <FeatureItem
                  icon={<HeartPulse className="h-5 w-5" />}
                  title="Critical Care"
                  text="Solutions for emergency and demanding environments."
                />

                <FeatureItem
                  icon={<Stethoscope className="h-5 w-5" />}
                  title="Quality"
                  text="Equipment selected for reliable clinical use."
                />
              </div>

              {/* Bottom statement */}
              <div className="mt-5 flex items-center gap-4 rounded-2xl border border-sky-100 bg-white px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Dependability when it matters most.
                  </p>

                  <p className="mt-0.5 text-xs text-slate-500">
                    Supporting healthcare delivery across Nigeria.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating statistic */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_15px_45px_rgba(15,23,42,0.12)] sm:block lg:-right-7"
            >
              <p className="text-2xl font-extrabold tracking-tight text-slate-900">
                24/7
              </p>

              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                Emergency Support
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ===============================================================
   TRUST POINT
================================================================ */

const TrustPoint = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
        <Check className="h-3 w-3" strokeWidth={3} />
      </div>

      <span className="text-sm font-medium text-slate-600">
        {children}
      </span>
    </div>
  );
};

/* ===============================================================
   FEATURE ITEM
================================================================ */

const FeatureItem = ({
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
      whileHover={{
        y: -3,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
        {icon}
      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </motion.div>
  );
};