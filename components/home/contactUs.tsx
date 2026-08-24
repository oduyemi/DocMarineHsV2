"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";

export const ContactUs = () => {
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-28 lg:py-36"
    >
      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================= */}

      {/* Main blue glow */}
      <div className="pointer-events-none absolute -left-64 -top-64 h-[700px] w-[700px] rounded-full bg-sky-500/[0.08] blur-[150px]" />

      {/* Secondary cyan glow */}
      <div className="pointer-events-none absolute -bottom-64 -right-64 h-[700px] w-[700px] rounded-full bg-cyan-400/[0.07] blur-[150px]" />

      {/* Central glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[130px]" />

      {/* Grid */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          bg-[size:56px_56px]
        "
      />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* =======================================================
            SECTION INTRO
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}

          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10">
              <MessageCircle className="h-3.5 w-3.5 text-sky-400" />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Talk to DocMarine
            </span>
          </div>

          {/* Heading */}

          <h2 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Let&apos;s find the right
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              healthcare solution.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From medical equipment procurement to healthcare support,
            our team is available to understand your requirements and
            help you move forward with confidence.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* ===================================================
                CONTACT INFORMATION CARD
            =================================================== */}

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-8">
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                      Get in touch
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      Contact our team
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:flex">
                    <Stethoscope className="h-5 w-5 text-sky-400" />
                  </div>
                </div>

                <div className="mt-8 space-y-7">

                  <ContactItem
                    icon={<Mail className="h-4.5 w-4.5" />}
                    title="Email"
                    value={[
                      <Link
                        key="info"
                        href="mailto:info@docmarinehs.com"
                      >
                        info@docmarinehs.com
                      </Link>,

                      <Link
                        key="charles"
                        href="mailto:charles.kanu@docmarinehs.com"
                      >
                        charles.kanu@docmarinehs.com
                      </Link>,

                      <Link
                        key="okeke"
                        href="mailto:okeke.ozeph@docmarinehs.com"
                      >
                        okeke.ozeph@docmarinehs.com
                      </Link>,
                    ]}
                  />

                  <ContactItem
                    icon={<Phone className="h-4.5 w-4.5" />}
                    title="Phone"
                    value={[
                      <Link
                        key="phone1"
                        href="tel:+2348034048799"
                      >
                        +234 803 404 8799
                      </Link>,

                      <Link
                        key="phone2"
                        href="tel:+2348116760000"
                      >
                        +234 811 676 0000
                      </Link>,
                    ]}
                  />

                  <ContactItem
                    icon={<MapPin className="h-4.5 w-4.5" />}
                    title="Office"
                    value="6 Alhaji Olusesi Street, off Ibeh Road, Ire Akari Estate, Isolo, Lagos"
                  />

                </div>
              </div>
            </div>

            {/* ===================================================
                SUPPORT FEATURES
            =================================================== */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

              <SupportCard
                icon={<Clock3 className="h-5 w-5" />}
                title="Prompt response"
                text="We typically respond within 24 hours."
              />

              <SupportCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Professional support"
                text="Speak directly with our healthcare team."
              />

            </div>

            {/* ===================================================
                CONTACT PAGE LINK
            =================================================== */}

            <Link
              href="/contact"
              className="
                group flex items-center justify-between
                rounded-2xl border border-white/10
                bg-white/[0.025]
                px-5 py-4
                transition-all duration-300
                hover:border-sky-400/30
                hover:bg-sky-400/[0.05]
              "
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  Need more information?
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Explore our complete contact page.
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4 text-sky-400" />
              </div>
            </Link>
          </motion.div>

          {/* =====================================================
              RIGHT — ENQUIRY FORM
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Outer glow */}

            <div className="pointer-events-none absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-sky-400/20 via-transparent to-blue-500/10 blur-xl" />

            {/* Form card */}

            <div className="relative rounded-[2rem] border border-white/10 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">

              {/* Form heading */}

              <div className="flex flex-col gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-start sm:justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                    Send an enquiry
                  </p>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    Tell us what you need.
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                    Share a few details about your requirement and
                    our team will get back to you.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <FileText className="h-5 w-5" />
                </div>
              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                action="https://formspree.io/f/mkozydgn"
                method="POST"
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Formspree */}

                <input
                  type="hidden"
                  name="_subject"
                  value="New DocMarine Healthcare Enquiry"
                />

                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Input
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    disabled={loading}
                  />

                  <Input
                    name="email"
                    label="Email Address"
                    type="email"
                    placeholder="you@email.com"
                    disabled={loading}
                  />
                </div>

                {/* Organization */}

                <Input
                  name="organization"
                  label="Organization"
                  placeholder="Hospital, clinic or organization"
                  required={false}
                  disabled={loading}
                />

                {/* Enquiry */}

                <Select
                  name="enquiry"
                  label="Enquiry Type"
                  disabled={loading}
                >
                  <option value="">
                    What can we help you with?
                  </option>

                  <option value="product-information">
                    Medical Product Information
                  </option>

                  <option value="quotation">
                    Request a Quotation
                  </option>

                  <option value="procurement">
                    Procurement & Supply
                  </option>

                  <option value="healthcare-solutions">
                    Healthcare Solutions
                  </option>

                  <option value="general-enquiry">
                    General Enquiry
                  </option>
                </Select>

                {/* Message */}

                <Textarea
                  name="message"
                  label="Your Message"
                  placeholder="Tell us about your requirements, products of interest, quantity, or any other relevant information..."
                  disabled={loading}
                />

                {/* Submit */}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="
                    group
                    h-13
                    w-full
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    via-sky-500
                    to-blue-600
                    font-semibold
                    text-white
                    shadow-[0_12px_30px_rgba(14,165,233,0.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_18px_45px_rgba(14,165,233,0.32)]
                  "
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending enquiry...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Enquiry

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>

                {/* Status */}

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }}
                      className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

                      <span>
                        Your enquiry has been sent successfully.
                        Our team will be in touch shortly.
                      </span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -8,
                      }}
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

                      <span>
                        We couldn&apos;t send your enquiry. Please
                        try again or contact us directly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Privacy / response */}

                <div className="flex items-center justify-center gap-2 pt-1 text-center text-[11px] text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5" />

                  <span>
                    Your enquiry is handled securely by our team.
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            BOTTOM TRUST STRIP
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            mt-12
            grid
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-white/[0.025]
            sm:grid-cols-3
          "
        >
          <TrustStrip
            title="Medical Equipment"
            text="Professional-grade products"
          />

          <TrustStrip
            title="Healthcare Solutions"
            text="Support for institutions"
          />

          <TrustStrip
            title="Nigeria-wide Support"
            text="Serving healthcare providers"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ===============================================================
   CONTACT ITEM
================================================================ */

const ContactItem = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode | React.ReactNode[];
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/10 bg-sky-400/10 text-sky-400">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
          {title}
        </p>

        <div className="mt-2 space-y-1.5 text-sm text-slate-300">
          {Array.isArray(value) ? (
            value.map((item, index) => (
              <p
                key={index}
                className="transition-colors hover:text-sky-400"
              >
                {item}
              </p>
            ))
          ) : (
            <p className="max-w-sm leading-6">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* ===============================================================
   SUPPORT CARD
================================================================ */

const SupportCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.045]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
        {icon}
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};

/* ===============================================================
   TRUST STRIP
================================================================ */

const TrustStrip = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className="border-b border-white/10 px-6 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {text}
      </p>
    </div>
  );
};

/* ===============================================================
   INPUT
================================================================ */

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  disabled,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="
          w-full rounded-xl
          border border-slate-200
          bg-slate-50
          px-4 py-3
          text-sm text-slate-800
          placeholder:text-slate-400
          outline-none
          transition-all duration-200
          focus:border-sky-400
          focus:bg-white
          focus:ring-4
          focus:ring-sky-500/10
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      />
    </div>
  );
};

/* ===============================================================
   SELECT
================================================================ */

const Select = ({
  label,
  name,
  children,
  disabled,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        required
        disabled={disabled}
        defaultValue=""
        className="
          w-full rounded-xl
          border border-slate-200
          bg-slate-50
          px-4 py-3
          text-sm text-slate-700
          outline-none
          transition-all duration-200
          focus:border-sky-400
          focus:bg-white
          focus:ring-4
          focus:ring-sky-500/10
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {children}
      </select>
    </div>
  );
};

/* ===============================================================
   TEXTAREA
================================================================ */

const Textarea = ({
  label,
  name,
  placeholder,
  disabled,
}: {
  label: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        rows={5}
        required
        disabled={disabled}
        placeholder={placeholder}
        className="
          w-full resize-none rounded-xl
          border border-slate-200
          bg-slate-50
          px-4 py-3
          text-sm text-slate-800
          placeholder:text-slate-400
          outline-none
          transition-all duration-200
          focus:border-sky-400
          focus:bg-white
          focus:ring-4
          focus:ring-sky-500/10
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      />
    </div>
  );
};