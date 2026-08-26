"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BedDouble,
  BriefcaseMedical,
  Cross,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Waves,
} from "lucide-react";
import { RequestDetailDialog } from "@/dialog/request-modal";
import Link from "next/link";

const categories = [
  {
    title: "Diagnostic Equipment",
    description:
      "Reliable diagnostic devices designed to support accurate assessment, monitoring, and clinical decision-making.",
    icon: Activity,
    products: "Diagnostic devices",
    accent: "sky",
    featured: true,
  },
  {
    title: "Patient Monitoring",
    description:
      "Professional monitoring solutions for vital signs, patient observation, and critical care environments.",
    icon: HeartPulse,
    products: "Monitoring systems",
    accent: "cyan",
  },
  {
    title: "Hospital Furniture",
    description:
      "Functional and durable furniture solutions designed for hospitals, clinics, wards, and treatment environments.",
    icon: BedDouble,
    products: "Beds & furniture",
    accent: "blue",
  },
  {
    title: "Surgical & Clinical",
    description:
      "Essential clinical and surgical equipment supporting healthcare professionals across a range of procedures.",
    icon: Stethoscope,
    products: "Clinical equipment",
    accent: "sky",
  },
  {
    title: "Emergency & Critical Care",
    description:
      "Emergency-ready equipment for rapid response, resuscitation, critical care, and urgent medical situations.",
    icon: BriefcaseMedical,
    products: "Emergency equipment",
    accent: "cyan",
  },
  {
    title: "Medical Consumables",
    description:
      "Everyday healthcare consumables and essential supplies for clinical, diagnostic, and treatment settings.",
    icon: Syringe,
    products: "Medical supplies",
    accent: "blue",
  },
  {
    title: "Laboratory Equipment",
    description:
      "Laboratory solutions supporting testing, analysis, research, and healthcare diagnostics.",
    icon: Microscope,
    products: "Laboratory solutions",
    accent: "sky",
  },
  {
    title: "Specialised Healthcare",
    description:
      "Purpose-built healthcare products for specialised applications, professional teams, and demanding environments.",
    icon: ShieldCheck,
    products: "Specialised solutions",
    accent: "cyan",
  },
];

const accentStyles = {
  sky: {
    icon: "bg-sky-400/10 text-sky-400 ring-sky-400/20",
    glow: "bg-sky-400/10",
    line: "bg-sky-400",
    hover: "group-hover:border-sky-400/25",
  },
  cyan: {
    icon: "bg-cyan-400/10 text-cyan-400 ring-cyan-400/20",
    glow: "bg-cyan-400/10",
    line: "bg-cyan-400",
    hover: "group-hover:border-cyan-400/25",
  },
  blue: {
    icon: "bg-blue-400/10 text-blue-400 ring-blue-400/20",
    glow: "bg-blue-400/10",
    line: "bg-blue-400",
    hover: "group-hover:border-blue-400/25",
  },
};


export const ProductCategories = () => {
    const [requestOpen, setRequestOpen] = useState(false);

    return (
        <section
        id="product-categories"
        className="relative overflow-hidden bg-white py-24 lg:py-32"
        >
        <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-sky-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[30rem] w-[30rem] rounded-full bg-cyan-50 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
            >
            <div>
                <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-sky-500" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                    Product Categories
                </p>
                </div>

                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Equipment for
                <span className="block text-sky-600">
                    every stage of care.
                </span>
                </h2>
            </div>

            <div className="lg:ml-auto lg:max-w-2xl">
                <p className="text-lg leading-8 text-slate-600">
                Explore a growing range of medical equipment and healthcare
                supplies selected for hospitals, clinics, healthcare
                professionals, emergency teams, and demanding clinical
                environments.
                </p>

                <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-slate-900">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <Cross className="h-4 w-4" />
                </span>

                Quality-focused healthcare solutions
                </div>
            </div>
            </motion.div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
                const Icon = category.icon;
                const styles =
                accentStyles[
                    category.accent as keyof typeof accentStyles
                ];

                return (
                <motion.article
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.035)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(14,165,233,0.08)] ${styles.hover}`}
                >
                    <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${styles.glow}`}
                    />

                    <div className="relative">
                    <div className="flex items-start justify-between">
                        <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition-all duration-300 group-hover:scale-105 ${styles.icon}`}
                        >
                        <Icon className="h-5 w-5" />
                        </div>

                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                        {String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-900">
                        {category.title}
                    </h3>

                    <p className="mt-3 min-h-[96px] text-sm leading-7 text-slate-600">
                        {category.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2">
                        <span
                        className={`h-1.5 w-1.5 rounded-full ${styles.line}`}
                        />

                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        {category.products}
                        </span>
                    </div>

                    <div className="mt-7 border-t border-slate-100 pt-5">
                        <button
                            type="button"
                            onClick={() => setRequestOpen(true)}
                            className="group/request flex w-full items-center justify-between"
                        >
                            <span className="text-xs font-semibold text-slate-500 transition-colors group-hover/request:text-slate-900">
                            Request Information
                            </span>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover/request:border-sky-200 group-hover/request:bg-sky-50 group-hover/request:text-sky-600">
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/request:translate-x-0.5" />
                            </span>
                        </button>
                        </div>
                    </div>
                </motion.article>
                );
            })}
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_20px_70px_rgba(15,23,42,0.12)] sm:p-9 lg:p-10"
            >
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                {/* Decorative glow */}

                <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

                <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                    <Waves className="h-5 w-5" />
                </div>

                <div>
                    <p className="text-sm font-bold text-white">
                    Looking for something specific?
                    </p>

                    <p className="mt-1 max-w-2xl text-sm leading-7 text-slate-400">
                    If you cannot find the equipment or medical supply you need,
                    speak with our team. We can help identify the right solution
                    for your requirements.
                    </p>
                </div>
                </div>

                <Link
                href="/contact"
                className="group relative inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
                >
                Talk to Our Team

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
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