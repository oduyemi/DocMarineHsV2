"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-sky-100/60 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-cyan-50 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-50/40 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-[2.5rem] border border-sky-100" />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src="/images/about/xray.jpg"
                  alt="DocMarine healthcare professionals"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20">
                      <Users className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        People behind the care
                      </p>

                      <p className="mt-0.5 text-xs text-slate-300">
                        Professional healthcare delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              viewport={{ once: true }}
              className="
                absolute
                -bottom-7
                -right-4
                w-[230px]
                rounded-2xl
                border border-slate-200
                bg-white
                p-5
                shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                sm:-right-7
              "
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-sky-600">
                    Trusted Care
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-5 text-slate-900">
                    Healthcare solutions built around people.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -left-5 top-10 hidden h-20 w-20 rounded-2xl border border-sky-200 bg-white/80 shadow-sm backdrop-blur sm:block">
              <div className="flex h-full items-center justify-center">
                <HeartPulse className="h-7 w-7 text-sky-500" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
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
            <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl">
              Healthcare that puts
              <span className="block mt-2 text-sky-600">
                people first.
              </span>
            </h2>

            {/* Short introduction */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              DocMarine Health Services Ltd provides dependable healthcare
              solutions for hospitals, clinics, emergency responders, and
              organizations operating in demanding environments.
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              Our work brings together professional expertise, reliable
              equipment, and a commitment to safer, healthier workplaces.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <TrustPoint>
                Professional healthcare expertise
              </TrustPoint>

              <TrustPoint>
                Quality-focused solutions
              </TrustPoint>

              <TrustPoint>
                Emergency-ready support
              </TrustPoint>

              <TrustPoint>
                Client-focused service
              </TrustPoint>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-slate-950
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_30px_rgba(15,23,42,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-sky-600
                  hover:shadow-[0_15px_35px_rgba(14,165,233,0.2)]
                "
              >
                Discover Our Story

                <ArrowRight
                  className="
                    h-4 w-4
                    text-sky-400
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                />
              </Link>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />

                <span>Serving healthcare needs across Nigeria</span>
              </div>
            </div>

            {/* =================================================
                SIMPLE CREDIBILITY ROW
            ================================================= */}

            <div className="mt-12 border-t border-slate-200 pt-7">
              <div className="flex flex-wrap gap-x-10 gap-y-5">
                <MiniStat
                  value="Professional"
                  label="Healthcare Focus"
                />

                <MiniStat
                  value="Nigeria"
                  label="Local Expertise"
                />

                <MiniStat
                  value="24/7"
                  label="Emergency Support"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustPoint = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
        <Check
          className="h-3 w-3"
          strokeWidth={3}
        />
      </div>

      <span className="text-sm font-medium text-slate-600">
        {children}
      </span>
    </div>
  );
};

const MiniStat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div>
      <p className="text-sm font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {label}
      </p>
    </div>
  );
};