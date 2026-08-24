"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  Cross,
  HeartPulse,
  Home,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[120px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(2,6,23,0.75)_100%)]" />
      <motion.div
        animate={{
          rotate: [0, 4, 0, -4, 0],
          opacity: [0.025, 0.06, 0.025],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-10 top-10 hidden text-sky-400 lg:block"
      >
        <Cross
          className="h-[420px] w-[420px]"
          strokeWidth={0.5}
        />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Status */}

            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.07] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                System Status · 404
              </span>
            </div>

            {/* Heading */}

            <div className="mt-8">
              <p className="text-[7rem] font-black leading-none tracking-[-0.08em] text-white sm:text-[9rem] lg:text-[10rem]">
                4
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  0
                </span>
                4
              </p>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Patient not found.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                The page you&apos;re looking for appears to have left the
                facility without checking out.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Don&apos;t worry. No emergency has been declared. Our response
                team recommends returning to a known location.
              </p>
            </div>

            {/* Actions */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_45px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(14,165,233,0.38)]"
              >
                <Home className="h-4 w-4" />

                Return Home

                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/[0.06] hover:text-white"
              >
                <Search className="h-4 w-4 text-sky-400" />

                Browse Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-sky-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-6">
              {/* Header */}

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <Activity className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Navigation Diagnostics
                    </p>

                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-slate-500">
                      DocMarine Response System
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span className="hidden text-[10px] font-bold uppercase tracking-wider text-emerald-400 sm:block">
                    Stable
                  </span>
                </div>
              </div>

              {/* Diagnostic */}

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Incident Report
                  </span>

                  <span className="font-mono text-xs text-sky-400">
                    #404
                  </span>
                </div>

                {/* Pulse */}

                <div className="relative mt-7 h-20 overflow-hidden rounded-xl border border-white/5 bg-slate-900/80">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-sky-400/10" />

                  <svg
                    viewBox="0 0 500 80"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 40 H90 L105 40 L120 22 L135 57 L150 40 H230 L245 40 L260 30 L275 50 L290 40 H370 L385 40 L400 18 L415 62 L430 40 H500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-sky-400"
                      initial={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  </svg>

                  <span className="absolute bottom-2 left-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Page signal
                  </span>

                  <span className="absolute bottom-2 right-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-amber-400">
                    Not located
                  </span>
                </div>

                {/* Diagnostic rows */}

                <div className="mt-5 space-y-2">
                  <DiagnosticRow
                    icon={<HeartPulse className="h-4 w-4" />}
                    label="Website"
                    status="Operational"
                    active
                  />

                  <DiagnosticRow
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="Healthcare Systems"
                    status="Operational"
                    active
                  />

                  <DiagnosticRow
                    icon={<Stethoscope className="h-4 w-4" />}
                    label="Requested Page"
                    status="Not Found"
                  />
                </div>
              </div>

              {/* Response */}

              <div className="mt-4 rounded-2xl border border-sky-400/10 bg-sky-400/[0.045] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Recommended response
                    </p>

                    <p className="mt-1.5 text-xs leading-6 text-slate-500">
                      Return to the homepage or explore our healthcare
                      solutions. If you believe this page should exist,
                      please contact our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    No emergency
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Just a missing page
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-white/10" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
            DocMarine Health Services
          </p>

          <span className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>
    </main>
  );
}


const DiagnosticRow = ({
  icon,
  label,
  status,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  status: string;
  active?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            active
              ? "bg-sky-400/10 text-sky-400"
              : "bg-amber-400/10 text-amber-400"
          }`}
        >
          {icon}
        </div>

        <span className="text-xs font-medium text-slate-300">
          {label}
        </span>
      </div>

      <span
        className={`text-[10px] font-bold uppercase tracking-wider ${
          active ? "text-emerald-400" : "text-amber-400"
        }`}
      >
        {status}
      </span>
    </div>
  );
};