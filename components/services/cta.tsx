"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Cross, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { RequestDetailDialog } from "@/dialog/request-modal";


const highlights = [
  "Offshore & marine medical support",
  "Occupational health programmes",
  "Emergency preparedness & response",
  "Medical equipment & supplies",
];



export const ServicesCTA = () => {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-sky-100/70 blur-[130px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/70 blur-[130px]" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-[0_30px_100px_rgba(15,23,42,0.2)]"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-sky-500/15 blur-[120px]" />

              <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[130px]" />

              <div className="absolute right-[15%] top-[15%] hidden lg:block">
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    opacity: [0.025, 0.06, 0.025],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-sky-400"
                >
                  <Cross
                    className="h-72 w-72"
                    strokeWidth={0.6}
                  />
                </motion.div>
              </div>

              <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>
            <div className="relative grid gap-12 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-16 lg:py-16 xl:px-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-sky-400" />

                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400">
                    Let's Work Together
                  </p>
                </div>

                <h2 className="mt-7 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Your operation deserves
                  <span className="block text-sky-400">
                    the right medical support.
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                  Tell us about your healthcare requirements and our team can
                  help you identify the right combination of medical services,
                  personnel, equipment, and operational support.
                </p>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/15">
                        <Check
                          className="h-3.5 w-3.5"
                          strokeWidth={3}
                        />
                      </span>

                      <span className="text-sm font-medium text-slate-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRequestOpen(true)}
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(14,165,233,0.25)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(14,165,233,0.4)]"
                  >
                    Request Information

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>

                  <a
                    href="tel:+2348034048799"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/[0.07]"
                  >
                    Speak With Our Team
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

                <div className="relative w-full max-w-sm">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                          <HeartPulse className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white">
                            Medical Support
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            Built around your operation
                          </p>
                        </div>
                      </div>

                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                      </span>
                    </div>

                    <div className="mt-7 space-y-3">
                      <ServiceLine
                        icon={<Stethoscope className="h-4 w-4" />}
                        label="Clinical Care"
                        status="Ready"
                      />

                      <ServiceLine
                        icon={<ShieldCheck className="h-4 w-4" />}
                        label="Occupational Health"
                        status="Ready"
                      />

                      <ServiceLine
                        icon={<HeartPulse className="h-4 w-4" />}
                        label="Emergency Response"
                        status="Ready"
                      />

                      <ServiceLine
                        icon={<Cross className="h-4 w-4" />}
                        label="Medical Equipment"
                        status="Supported"
                      />
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.18em] text-slate-600">
                          Service approach
                        </span>

                        <span className="text-xs font-semibold text-sky-400">
                          Integrated
                        </span>
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
                    className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                        <Check
                          className="h-4 w-4"
                          strokeWidth={3}
                        />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-white">
                          Client-focused
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Healthcare delivery
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="relative h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-7 flex max-w-3xl items-start justify-center gap-3 text-center"
          >
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

            <p className="text-xs leading-6 text-slate-500">
              DocMarine Health Services is committed to professional standards,
              operational safety, workforce wellbeing, and dependable
              healthcare service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {requestOpen && (
          <RequestDetailDialog
            onClose={() => setRequestOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const ServiceLine = ({
  icon,
  label,
  status,
}: {
  icon: React.ReactNode;
  label: string;
  status: string;
}) => {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.035] px-4 py-3 transition-colors duration-300 hover:border-sky-400/15 hover:bg-white/[0.055]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
          {icon}
        </div>

        <span className="text-xs font-medium text-slate-300">
          {label}
        </span>
      </div>

      <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {status}
      </span>
    </motion.div>
  );
};