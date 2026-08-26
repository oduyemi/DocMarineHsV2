"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  MapPinned,
  ShieldCheck,
  Siren,
  Stethoscope,
  ArrowUpRight,
} from "lucide-react";


const focusAreas = [
  {
    icon: HeartPulse,
    title: "Occupational Health",
    text: "Keeping workforces healthy, fit, and medically ready for demanding environments.",
  },
  {
    icon: Siren,
    title: "Emergency Response",
    text: "Rapid and coordinated medical support when critical situations arise.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Expertise",
    text: "Professional medical expertise grounded in practical operational experience.",
  },
  {
    icon: ShieldCheck,
    title: "Operational Safety",
    text: "Healthcare solutions aligned with HSE, risk management, and operational realities.",
  },
];

export const CompanyOverview = () => {
  return (
    <section
      id="company-overview"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-50 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(14,165,233,0.035),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-sky-500" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
              Company Overview
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Healthcare built around
            <span className="block text-sky-600">
              real-world operations.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            DocMarine Health Services provides integrated medical,
            occupational health, and emergency response solutions for
            organizations operating in challenging environments.
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-sky-100" />

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
              <Image
                src="/images/about/surgery.jpg"
                alt="DocMarine healthcare professionals providing medical support"
                width={1000}
                height={850}
                className="h-[480px] w-full object-cover sm:h-[560px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 text-sky-300">
                    <HeartPulse className="h-4 w-4" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Healthcare With Purpose
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                    Protecting people.
                    <span className="block text-sky-300">
                      Supporting operations.
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.14)] sm:-right-7"
            >
              <p className="text-3xl font-extrabold tracking-tight text-slate-950">
                2020
              </p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Established in Nigeria
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
              Who We Are
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              A healthcare partner for environments where reliability matters.
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              DocMarine Health Services Ltd (DMHS) is a Nigerian healthcare
              company specializing in medical, occupational health, and
              emergency response solutions for the offshore oil and gas,
              marine, and industrial sectors.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We understand that healthcare in remote and operational
              environments requires more than clinical knowledge. It requires
              preparedness, responsiveness, safety, and a clear understanding
              of the people and organizations being supported.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <MiniPoint
                icon={<ShieldCheck className="h-4 w-4" />}
                text="Professional healthcare delivery"
              />

              <MiniPoint
                icon={<HeartPulse className="h-4 w-4" />}
                text="Workforce wellbeing focused"
              />

              <MiniPoint
                icon={<Siren className="h-4 w-4" />}
                text="Emergency-ready capabilities"
              />

              <MiniPoint
                icon={<CheckCircle2 className="h-4 w-4" />}
                text="Client-focused solutions"
              />
            </div>

            <div className="mt-9 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg shadow-sky-600/20">
                  <Building2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Registered Nigerian Company
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Incorporated in Nigeria in 2020 and registered with the
                    Corporate Affairs Commission.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      <CalendarDays className="h-3.5 w-3.5 text-sky-500" />
                      Established 2020
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      <MapPinned className="h-3.5 w-3.5 text-sky-500" />
                      Nigeria
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                      RC 1716604
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
                What We Do
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Healthcare expertise that works beyond the hospital.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              Our services are designed around the realities of offshore,
              marine, industrial, and remote working environments.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-[0_18px_45px_rgba(14,165,233,0.09)]"
                >
                  <span className="absolute right-5 top-5 text-xs font-bold text-slate-200 transition-colors group-hover:text-sky-100">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h4 className="mt-6 text-base font-bold text-slate-950">
                    {area.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {area.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-slate-950"
        >
          <div className="relative px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Our Approach
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Healthcare is more than a service.
                  <span className="block text-sky-300">
                    It is part of protecting people and keeping operations moving.
                  </span>
                </h3>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-400">
                <HeartPulse className="h-6 w-6" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MiniPoint = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
        {icon}
      </div>

      <span className="text-sm font-medium text-slate-700">
        {text}
      </span>
    </div>
  );
};