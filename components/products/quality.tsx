"use client";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ClipboardCheck, Globe2, HeartPulse, ShieldCheck } from "lucide-react";


const qualityPoints = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "We prioritize patient safety, workforce protection, and dependable equipment performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Management",
    description:
      "Robust quality practices support consistent service delivery and continuous improvement.",
  },
  {
    icon: Globe2,
    title: "Industry Standards",
    description:
      "Our approach aligns with national healthcare requirements and international industry expectations.",
  },
  {
    icon: HeartPulse,
    title: "Patient-Centred",
    description:
      "Every solution is selected with clinical effectiveness, usability, and patient care in mind.",
  },
];


export const ProductQuality = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-sky-100/60 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                Quality & Safety
              </p>
            </div>

            <h2 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Quality you can rely on.
              <span className="block text-sky-500">
                Safety you can trust.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg">
            DocMarine Health Services is committed to maintaining the highest
            standards of patient care, occupational health, and operational
            safety. We combine robust quality practices with a culture of
            continuous improvement to deliver dependable healthcare solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.12)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-sky-500/15 blur-[100px]" />

            <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />

            <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />
          </div>

          <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">

            <div className="relative border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                <Award className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                Our Commitment
              </p>

              <h3 className="mt-4 max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl">
                Built around quality.
                <span className="block text-slate-400">
                  Designed around safety.
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
                We implement robust quality management systems and promote a
                culture of continuous improvement, ensuring our services and
                solutions meet national healthcare requirements and the
                expectations of demanding oil and gas environments.
              </p>

              <div className="mt-9 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Continuous Improvement
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Quality is an ongoing commitment.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Our Quality Principles
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualityPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.08,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3 }}
                      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-sky-400/20 hover:bg-sky-400/[0.045]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/10 transition-colors group-hover:bg-sky-400/15">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h4 className="mt-5 text-sm font-bold text-white">
                        {point.title}
                      </h4>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {point.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-white/[0.025] px-8 py-5 sm:px-10 lg:px-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <p className="text-xs font-medium leading-5 text-slate-400">
                  Professional healthcare solutions guided by quality,
                  safety, and operational excellence.
                </p>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Quality Focused
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex items-start gap-3 px-2"
        >
          <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />

          <p className="max-w-4xl text-xs leading-6 text-slate-500">
            Because in healthcare, quality is more than a specification. It
            is confidence in the equipment, confidence in the process, and
            confidence in the people delivering care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};