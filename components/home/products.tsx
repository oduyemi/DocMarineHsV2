"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./productCard";


export const Products = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-48 h-[600px] w-[600px] rounded-full bg-cyan-200/30 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.05),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Left */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
                Our Products
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              Medical equipment designed
              <span className="block mt-2 text-sky-600">
                for real-world care.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore a selection of dependable medical and emergency
              equipment designed to support hospitals, clinics, healthcare
              professionals, and critical-care environments.
            </p>
          </div>

          <Link
            href="/products"
            className="group hidden shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-600 hover:shadow-md sm:inline-flex"
          >
            View All Products

            <ArrowRight className="h-4 w-4 text-sky-500 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-3 sm:grid-cols-3"
        >
          <TrustBadge
            icon={<BadgeCheck className="h-4 w-4" />}
            text="Quality-focused equipment"
          />

          <TrustBadge
            icon={<ShieldCheck className="h-4 w-4" />}
            text="Professional healthcare use"
          />

          <TrustBadge
            icon={<ChevronRight className="h-4 w-4" />}
            text="Solutions across Nigeria"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/products"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-slate-800"
          >
            Explore All Products

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 hidden items-center justify-center gap-2 text-center sm:flex"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />

          <p className="text-sm text-slate-500">
            Looking for a specific medical product?
          </p>

          <Link
            href="/contact"
            className="text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
          >
            Talk to our team
          </Link>

          <ArrowRight className="h-3.5 w-3.5 text-sky-500" />
        </motion.div>
      </div>
    </section>
  );
};

const TrustBadge = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3.5 shadow-sm backdrop-blur-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
        {icon}
      </div>

      <span className="text-xs font-semibold text-slate-600 sm:text-sm">
        {text}
      </span>
    </div>
  );
};