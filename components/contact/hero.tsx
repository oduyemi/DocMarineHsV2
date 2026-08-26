"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Headphones,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";



export const ContactHero = () => {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-sky-500/15 blur-[140px]" />
        <div className="absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-60 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,transparent_0%,rgba(2,6,23,0.3)_45%,rgba(2,6,23,0.96)_100%)]" />
      </div>

      <motion.div
        animate={{
          opacity: [0.03, 0.07, 0.03],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-[13%] hidden lg:block"
      >
        <div className="flex h-64 w-64 items-center justify-center rounded-full border border-sky-400/10">
          <div className="flex h-48 w-48 items-center justify-center rounded-full border border-sky-400/10">
            <div className="h-32 w-32 rounded-full border border-sky-400/10" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-400" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-300">
                Contact DocMarine
              </p>
            </div>

            <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Let's build a safer,
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                healthier operation.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you need medical equipment, occupational health support,
              offshore medical services, or emergency response solutions,
              our team is ready to understand your requirements and help you
              find the right solution.
            </p>

            <div className="mt-8 flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                <Headphones className="h-3.5 w-3.5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Speak with our team
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Tell us what you need and we'll help identify the appropriate
                  healthcare or medical solution.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(14,165,233,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(14,165,233,0.38)]"
              >
                Send an Enquiry

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+2348034048799"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-400/[0.07]"
              >
                <Phone className="h-4 w-4 text-sky-400" />

                Call Our Team
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sky-400">
                  <Building2 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Company
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-200">
                    DocMarine Health Services Ltd
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sky-400">
                  <MapPin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    Coverage
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-200">
                    Nationwide · Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
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
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                      <Mail className="h-4 w-4" />
                      Get in touch
                    </div>

                    <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                      Tell us what
                      <span className="block text-slate-400">
                        you need.
                      </span>
                    </h2>
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 sm:flex">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  From medical equipment and supplies to occupational health,
                  offshore medical support, and emergency preparedness, we're
                  here to help.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value="info@docmarinehs.com"
                  href="mailto:info@docmarinehs.com"
                />

                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value="+234 803 404 8799"
                  href="tel:+2348034048799"
                />

                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Service Coverage"
                  value="Nigeria & operational environments"
                />
              </div>

              <div className="mt-4 rounded-2xl border border-sky-400/10 bg-sky-400/[0.045] px-5 py-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Professional. Responsive. Reliable.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your enquiry is handled with the professionalism and
                      attention expected from a healthcare partner.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-8"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Ready to Assist
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Contact our team
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#contact-methods"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-sky-400 md:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Connect
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.045]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/10 transition-colors group-hover:bg-sky-400/15">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
          {value}
        </p>
      </div>

      {href && (
        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-sky-400" />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
};