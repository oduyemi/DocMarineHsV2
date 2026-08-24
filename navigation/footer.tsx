"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { RequestDetailDialog } from "@/dialog/request-modal";



export const Footer = () => {
  const [requestOpen, setRequestOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute -top-72 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

        {/* Side glow */}
        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[100px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative overflow-hidden rounded-3xl
              border border-sky-400/20
              bg-gradient-to-br from-sky-500/10 via-white/[0.03] to-transparent
              px-6 py-8
              sm:px-8
              lg:px-10 lg:py-9
            "
          >
            {/* CTA glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
                    Need assistance?
                  </p>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Let&apos;s find the right healthcare solution for you.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Speak with our team about medical equipment, product
                  availability, quotations, or healthcare requirements.
                </p>
              </div>

              <motion.button
                type="button"
                onClick={() => setRequestOpen(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group inline-flex shrink-0 items-center justify-center gap-3
                  rounded-xl
                  bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600
                  px-6 py-3.5
                  text-sm font-semibold text-white
                  shadow-[0_12px_35px_rgba(14,165,233,0.25)]
                  transition-all duration-300
                  hover:shadow-[0_18px_45px_rgba(14,165,233,0.4)]
                "
              >
                Request Information

                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative flex h-14 w-14 items-center justify-center
                  overflow-hidden rounded-2xl
                  border border-white/15
                  bg-white
                  shadow-[0_10px_35px_rgba(14,165,233,0.12)]
                "
              >
                <img
                  src="/images/logo/logo.png"
                  alt="DocMarine Health Services Logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain p-1.5"
                />

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-sky-400/20" />
              </div>

              <div>
                <p className="text-base font-bold tracking-tight text-white">
                  DocMarine
                </p>

                <p className="text-xs font-medium text-sky-400">
                  Health Services LTD
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              A Nigerian healthcare company providing dependable medical
              equipment and healthcare solutions for hospitals, clinics,
              emergency responders, and professional healthcare environments.
            </p>

            {/* Trust badge */}
            <div
              className="
                mt-7 inline-flex items-center gap-3
                rounded-xl
                border border-white/10
                bg-white/[0.035]
                px-4 py-3
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Healthcare & Medical Equipment
                </p>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  Quality-focused solutions
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterHeading>Explore</FooterHeading>

            <nav className="mt-6">
              <ul className="space-y-4">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/products">Products</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterHeading>Company</FooterHeading>

            <nav className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <Link
                    href="/about#company-overview"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Who We Are
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about#mission"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Our Mission
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about#quality"
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    Quality & Compliance
                  </Link>
                </li>

                <li>
                  <button
                    type="button"
                    onClick={() => setRequestOpen(true)}
                    className="text-left text-slate-400 transition-colors hover:text-white"
                  >
                    Request Information
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FooterHeading>Get In Touch</FooterHeading>

            <div className="mt-6 space-y-5">
              <FooterContact
                icon={<Mail className="h-4 w-4" />}
                label="Email"
              >
                <a
                  href="mailto:info@docmarinehs.com"
                  className="transition-colors hover:text-sky-400"
                >
                  info@docmarinehs.com
                </a>
              </FooterContact>

              <FooterContact
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
              >
                <div className="space-y-1">
                  <a
                    href="tel:+2348034048799"
                    className="block transition-colors hover:text-sky-400"
                  >
                    +234 803 404 8799
                  </a>

                  <a
                    href="tel:+2348116760000"
                    className="block transition-colors hover:text-sky-400"
                  >
                    +234 811 676 0000
                  </a>
                </div>
              </FooterContact>

              <FooterContact
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
              >
                <span>
                  6 Alhaji Olusesi Street,
                  <br />
                  Off Ibeh Road, Ire Akari Estate,
                  <br />
                  Isolo, Lagos, Nigeria.
                </span>
              </FooterContact>
            </div>
          </motion.div>
        </div>


        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Doc Marine Health Services LTD.
              All rights reserved.
            </p>

            <p className="text-xs text-slate-600">
              Healthcare & medical equipment solutions.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Terms
            </Link>

            {/* Back to top */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                text-slate-400
                transition-all duration-300
                hover:border-sky-400/30
                hover:bg-sky-400/10
                hover:text-sky-400
              "
            >
              <ChevronUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {requestOpen && (
          <RequestDetailDialog
            onClose={() => setRequestOpen(false)}
          />
        )}
      </AnimatePresence>
    </footer>
  );
};

const FooterHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
      {children}
    </p>

    <div className="mt-3 h-px w-8 bg-sky-400/60" />
  </div>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="
        group inline-flex items-center gap-2
        text-sm text-slate-400
        transition-colors duration-200
        hover:text-white
      "
    >
      <span
        className="
          h-px w-0 bg-sky-400
          transition-all duration-300
          group-hover:w-3
        "
      />

      {children}
    </Link>
  </li>
);

const FooterContact = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    <div
      className="
        mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center
        rounded-lg
        border border-sky-400/10
        bg-sky-400/10
        text-sky-400
      "
    >
      {icon}
    </div>

    <div className="min-w-0">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <div className="mt-1 text-sm leading-6 text-slate-400">
        {children}
      </div>
    </div>
  </div>
);