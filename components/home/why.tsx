"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  Headphones,
  Mail,
  PackageCheck,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";


const reasons = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Quality-Focused Equipment",
    text: "Medical equipment and supplies selected with reliability, clinical usability, safety, and professional healthcare requirements in mind.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Healthcare Understanding",
    text: "We understand that medical equipment must support real clinical needs, from routine patient care to emergency and diagnostic environments.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Dependable Supply",
    text: "We support healthcare organizations with dependable access to essential medical equipment, devices, and supplies.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Safety & Quality Commitment",
    text: "Our approach places strong emphasis on product quality, patient safety, professional standards, and responsible healthcare delivery.",
  },
  {
    number: "05",
    icon: Boxes,
    title: "Wide Equipment Range",
    text: "From diagnostic and emergency equipment to patient-care devices, sterilization systems, rescue equipment, and medical consumables.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Responsive Client Support",
    text: "Our team works with clients to understand their requirements and help identify suitable equipment for their healthcare environment.",
  },
];


export const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-50 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                Why Choose DocMarine
              </p>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Medical equipment you can
              <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                source with confidence.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              DocMarine currently focuses on supplying medical equipment and
              healthcare products for hospitals, clinics, emergency teams,
              healthcare professionals, and organizations requiring dependable
              medical solutions.
            </p>

            <div className="mt-5 flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />

              <p className="text-sm leading-6 text-slate-500">
                We help clients identify and source equipment suited to their
                clinical and operational requirements.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-sky-200 hover:shadow-[0_20px_50px_rgba(14,165,233,0.09)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-100/70 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 transition-all duration-300 group-hover:border-sky-600 group-hover:bg-sky-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-xs font-bold tracking-[0.18em] text-slate-300 transition-colors group-hover:text-sky-200">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reason.text}
                  </p>

                  <div className="mt-7 h-px w-8 bg-sky-500 transition-all duration-300 group-hover:w-14" />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_25px_80px_rgba(15,23,42,0.14)]"
        >
          {/* Background */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            {/* Message */}

            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                  <Boxes className="h-5 w-5" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  Medical Equipment Supply
                </p>
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Looking for the right equipment
                <span className="block text-sky-400">
                  for your facility?
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Browse our growing catalogue of diagnostic, emergency,
                patient-care, rescue, sterilization, monitoring, and other
                professional medical equipment.
              </p>

              {/* Mini assurances */}

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "Healthcare-focused sourcing",
                  "Professional product guidance",
                  "Responsive enquiries",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                    <span className="text-xs font-medium text-slate-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}

            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[230px] lg:flex-col">
              <Link
                href="/products"
                className="group inline-flex items-center justify-between gap-8 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(14,165,233,0.35)]"
              >
                <span>Explore Products</span>

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="mailto:info@docmarinehs.com"
                className="group inline-flex items-center justify-between gap-8 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-sky-400" />

                  Email Us
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="tel:+2348034048799"
                className="group inline-flex items-center justify-between gap-8 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400/30 hover:bg-sky-400/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-sky-400" />

                  Call Us
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            FUTURE SERVICES NOTE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-sky-100 bg-sky-50/60 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-sky-600 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-900">
                More healthcare capabilities are part of our broader vision.
              </p>

              <p className="mt-1 max-w-3xl text-xs leading-6 text-slate-500">
                Explore our Services page to learn more about the healthcare
                capabilities DocMarine is structured to provide as our service
                offering continues to expand.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-700 transition-colors hover:text-sky-900"
          >
            View Our Services

            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};