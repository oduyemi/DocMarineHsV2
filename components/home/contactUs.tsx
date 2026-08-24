"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Clock3,
  Loader2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
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
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-48 -top-48 h-[600px] w-[600px] rounded-full bg-sky-500/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.10),transparent_40%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sky-400" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
              Contact DocMarine
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
            Let&apos;s discuss your
            <span className="mt-2 block text-sky-400">
              healthcare needs.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Whether you are sourcing medical equipment, requesting a
            quotation, or looking for healthcare solutions, our team is
            ready to help.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* =====================================================
              LEFT — CONTACT INFORMATION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {/* Intro card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-xl font-bold">
                We&apos;re here to help.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Speak with our team about your requirements and we&apos;ll
                help you identify the right products or solutions for your
                organization.
              </p>

              {/* Contact details */}
              <div className="mt-8 space-y-7">
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
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
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                  value={[
                    <Link
                      key="phone-1"
                      href="tel:+2348034048799"
                    >
                      +234 803 404 8799
                    </Link>,
                    <Link
                      key="phone-2"
                      href="tel:+2348116760000"
                    >
                      +234 811 676 0000
                    </Link>,
                  ]}
                />

                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  title="Office"
                  value="6 Alhaji Olusesi Street, off Ibeh Road, Ire Akari Estate, Isolo, Lagos"
                />
              </div>
            </div>

            {/* Response time */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Clock3 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Prompt response
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Full contact page */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              Visit our contact page

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* =====================================================
              RIGHT — FORM
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10"
          >
            {/* Form heading */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-600">
                Send an enquiry
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                How can we help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form and a member of our team will get back to
                you.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mkozydgn"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Formspree helpers */}
              <input
                type="hidden"
                name="_subject"
                value="New DocMarine Contact Form Submission"
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

              {/* Enquiry type */}
              <Select
                name="enquiry"
                label="What can we help with?"
                disabled={loading}
              >
                <option value="">
                  Select an enquiry type
                </option>
                <option value="product-information">
                  Product Information
                </option>
                <option value="quotation">
                  Request a Quotation
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
                label="Message"
                placeholder="Tell us about your requirements..."
                disabled={loading}
              />

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="group h-12 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.2)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(14,165,233,0.35)]"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
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
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="flex items-start gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>
                      Message sent successfully. We&apos;ll be in touch
                      shortly.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>
                      Something went wrong. Please try again or contact us
                      directly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="text-center text-[11px] leading-5 text-slate-400">
                By submitting this form, you agree to be contacted regarding
                your enquiry.
              </p>
            </form>
          </motion.div>
        </div>
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
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
          {title}
        </p>

        <div className="mt-2 space-y-1.5 text-sm text-slate-300">
          {Array.isArray(value) ? (
            value.map((item, index) => (
              <p key={index}>
                <span className="transition-colors hover:text-sky-400">
                  {item}
                </span>
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