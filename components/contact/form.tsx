"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

const enquiryTypes = [
  {
    value: "medical-equipment-supplies",
    label: "Medical Equipment & Supplies",
  },
  {
    value: "offshore-medical-services",
    label: "Offshore Medical Services",
  },
  {
    value: "occupational-health-services",
    label: "Occupational Health Services",
  },
  {
    value: "general-medical-services",
    label: "General Medical Services",
  },
  {
    value: "emergency-preparedness-response",
    label: "Emergency Preparedness & Response",
  },
  {
    value: "medical-equipment-maintenance",
    label: "Medical Equipment Maintenance",
  },
  {
    value: "corporate-healthcare",
    label: "Corporate Healthcare",
  },
  {
    value: "general-enquiry",
    label: "General Enquiry",
  },
];

const companyTypes = [
  "Oil & Gas",
  "Marine & Shipping",
  "Energy & Petrochemical",
  "Construction & Engineering",
  "Manufacturing",
  "Healthcare Institution",
  "Corporate Institution",
  "Other",
];

const initialFormData = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  enquiry: "",
  industry: "",
  message: "",
};

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const form = e.currentTarget;
      const payload = new FormData(form);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to submit your enquiry."
        );
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-sky-100/70 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
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
              Send an Enquiry
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Tell us what you
            <span className="block text-sky-600">
              need help with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Share a few details about your requirements and our team will
            review your enquiry and determine how DocMarine can best support
            you.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.34fr] lg:items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />

            <div className="relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    {/* Your details */}
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                          <User className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-950">
                            Your details
                          </p>

                          <p className="text-xs text-slate-500">
                            Tell us who we're speaking with.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <FormField
                          label="Full Name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />

                        <FormField
                          label="Company / Organisation"
                          name="organization"
                          placeholder="Company name"
                          value={formData.organization}
                          onChange={handleChange}
                        />

                        <FormField
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />

                        <FormField
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          placeholder="+234..."
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="h-px bg-slate-100" />

                    {/* Enquiry details */}
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                          <MessageSquare className="h-4 w-4" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-950">
                            Enquiry details
                          </p>

                          <p className="text-xs text-slate-500">
                            Help us understand what you require.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <SelectField
                          label="What can we help with?"
                          name="enquiry"
                          value={formData.enquiry}
                          onChange={handleChange}
                          options={enquiryTypes}
                          required
                        />

                        <SelectField
                          label="Industry"
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          options={companyTypes}
                        />
                      </div>

                      <div className="mt-5">
                        <label
                          htmlFor="message"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700"
                        >
                          How can we help?
                          <span className="ml-1 text-sky-500">*</span>
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements, project, equipment needs, location, timeline, or any other information that may help us understand your enquiry."
                          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                        />
                      </div>
                    </div>

                    {/* Error */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                            {error}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <div className="border-t border-slate-100 pt-7">
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex max-w-md items-start gap-3">
                          <p className="text-xs leading-5 text-slate-500">
                            Your information is used only to respond to your
                            enquiry and understand how we can support your
                            healthcare requirements.
                          </p>
                        </div>

                        <motion.button
                          type="submit"
                          disabled={loading}
                          whileHover={!loading ? { y: -2 } : undefined}
                          whileTap={!loading ? { scale: 0.98 } : undefined}
                          className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-7 text-sm font-bold text-white shadow-[0_15px_40px_rgba(14,165,233,0.22)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(14,165,233,0.32)] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Submit Enquiry
                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex min-h-[520px] flex-col items-center justify-center px-4 py-12 text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-8 ring-emerald-50/70">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>

                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">
                      Enquiry Received
                    </p>

                    <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
                      Thank you for reaching out.
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                      Your enquiry has been received. Our team will review the
                      information you've provided and get back to you regarding
                      the next steps.
                    </p>

                    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
                      <p className="text-xs leading-6 text-slate-500">
                        Need to speak with us directly?
                      </p>

                      <a
                        href="tel:+2348034048799"
                        className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700"
                      >
                        <Phone className="h-4 w-4" />
                        +234 803 404 8799
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setError("");
                      }}
                      className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-sky-600"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.15)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                <Phone className="h-5 w-5" />
              </div>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400">
                Prefer a conversation?
              </p>

              <h3 className="mt-2 text-xl font-bold">
                Talk to our team.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                If your requirement is time-sensitive or you'd simply prefer
                to speak with someone, give us a call.
              </p>

              <a
                href="tel:+2348034048799"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-sky-400"
              >
                +234 803 404 8799
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <Mail className="h-5 w-5" />
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Email
              </p>

              <a
                href="mailto:info@docmarinehs.com"
                className="mt-2 block break-all text-sm font-bold text-slate-900 transition-colors hover:text-sky-600"
              >
                info@docmarinehs.com
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.05)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <MapPin className="h-5 w-5" />
              </div>

              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                Service Coverage
              </p>

              <p className="mt-2 text-sm font-bold text-slate-900">
                Nigeria & operational environments
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Supporting clients across healthcare, offshore, marine,
                energy, industrial, and corporate environments.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-sky-500">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[50px] w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
      />
    </div>
  );
};

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  options:
    | string[]
    | {
        value: string;
        label: string;
      }[];
  required?: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-sky-500">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="h-[50px] w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pr-11 text-sm text-slate-900 outline-none transition-all focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
        >
          <option value="">Select an option</option>

          {options.map((option) => {
            if (typeof option === "string") {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            }

            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );
};