"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  Siren,
  Users,
  Activity,
} from "lucide-react";
import Link from "next/link";



const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Specialized Medical Expertise",
    text: "Specialized expertise in offshore, remote, corporate, and industrial medical operations.",
  },
  {
    number: "02",
    icon: Users,
    title: "Qualified Medical Personnel",
    text: "Highly qualified and experienced medical professionals committed to delivering dependable care.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "HSE & Risk Management",
    text: "Strong emphasis on health, safety, environment, compliance, and proactive risk management.",
  },
  {
    number: "04",
    icon: Siren,
    title: "Rapid Emergency Response",
    text: "Responsive emergency capabilities designed to support time-critical medical situations.",
  },
  {
    number: "05",
    icon: Activity,
    title: "Tailored Healthcare Solutions",
    text: "Flexible healthcare solutions designed around the operational needs of corporate and industrial clients.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Reliability & Excellence",
    text: "A consistent commitment to quality, reliability, professional standards, and client satisfaction.",
  },
];

export const OldWhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[28rem] w-[28rem] rounded-full bg-cyan-50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-sky-500" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
              Why Choose DocMarine
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Healthcare expertise built
            <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              around your operations.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            From remote medical operations to corporate and industrial
            environments, DocMarine Health Services provides dependable
            healthcare solutions where professional expertise and rapid
            response matter most.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:border-sky-200 hover:shadow-[0_20px_50px_rgba(14,165,233,0.10)]"
              >
                <div className="absolute right-6 top-5 text-xs font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-sky-100">
                  {reason.number}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-100 bg-sky-50 text-sky-600 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.text}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
                  Operational Confidence
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                When the environment is demanding,
                <span className="text-sky-600"> reliability matters.</span>
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Our approach combines qualified personnel, appropriate medical
                resources, safety-conscious operations, and responsive support
                to help organizations maintain a dependable healthcare
                infrastructure.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="mailto:info@docmarinehs.com"
                className="group inline-flex items-center justify-between gap-8 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-sky-200 hover:text-sky-600 hover:shadow-md"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                    <Mail className="h-4 w-4" />
                  </span>
                  Email Our Team
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="tel:+2348034048799"
                className="group inline-flex items-center justify-between gap-8 rounded-xl bg-sky-600 px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(2,132,199,0.25)] transition-all hover:bg-sky-700 hover:shadow-[0_15px_40px_rgba(2,132,199,0.30)]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
                    <Phone className="h-4 w-4" />
                  </span>
                  +234 803 404 8799
                </span>

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};