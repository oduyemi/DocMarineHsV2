"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Cross,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { products, Product } from "@/data/products";
import { RequestDetailDialog } from "@/dialog/request-modal";

type Category = {
  label: string;
  filter: (product: Product) => boolean;
};

const categories: Category[] = [
  {
    label: "All Products",
    filter: () => true,
  },
  {
    label: "Diagnostic",
    filter: (product) =>
      [
        "digital_xray_machine",
        "digital_ultrasound_scanner",
        "mercury_sphygmomanometer",
        "portable_water_test_kit",
        "otoscope",
        "infrared_thermometer",
        "ecg",
      ].includes(product.id),
  },
  {
    label: "Emergency & Rescue",
    filter: (product) =>
      [
        "manual_defibrillators",
        "valve_mask",
        "ambulance_stretcher",
        "basket_stretcher",
        "spine_board_with_head_immobilizer",
        "vacuum_mattress",
        "extrication_device",
        "suction_machine",
        "aed",
        "grab_bag",
        "neil_stretcher",
      ].includes(product.id),
  },
  {
    label: "Clinical & Sterilisation",
    filter: (product) =>
      [
        "autoclave",
        "suction_machine",
        "otoscope",
        "mercury_sphygmomanometer",
      ].includes(product.id),
  },
  {
    label: "Patient Care",
    filter: (product) =>
      [
        "cylinder",
        "braces_support",
        "ambulance_stretcher",
        "basket_stretcher",
        "spine_board_with_head_immobilizer",
        "vacuum_mattress",
        "neil_stretcher",
      ].includes(product.id),
  },
];

export const ProductCatalogue = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [requestOpen, setRequestOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    null
  );

  const activeFilter =
    categories.find((category) => category.label === activeCategory) ??
    categories[0];

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeFilter.filter(product);

      if (!query) {
        return matchesCategory;
      }

      const searchableText = [
        product.name,
        product.description,
        product.id,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [search, activeFilter]);

  const handleRequestInformation = (product: Product) => {
    setSelectedProduct(product);
    setRequestOpen(true);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute -left-40 top-40 h-[30rem] w-[30rem] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-sky-500" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-600">
                Medical Equipment Catalogue
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Equipment selected for
              <span className="block text-sky-600">
                clinical confidence.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-2xl">
            <p className="text-lg leading-8 text-slate-600">
              Explore our range of medical equipment and healthcare solutions
              for hospitals, clinics, emergency teams, healthcare
              professionals, and operational environments across Nigeria.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <ShieldCheck className="h-4 w-4 text-sky-500" />
                Quality-focused solutions
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Cross className="h-4 w-4 text-sky-500" />
                Professional healthcare support
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            TOOLBAR
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.04)] sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search */}

              <div className="relative w-full lg:max-w-md">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search medical equipment..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-500/10"
                />

                {search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Mobile filter trigger */}

              <button
                type="button"
                onClick={() => setMobileFiltersOpen((open) => !open)}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />

                Filter Products

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Desktop result count */}

              <div className="hidden items-center gap-2 text-sm text-slate-500 lg:flex">
                <span className="font-bold text-slate-900">
                  {filteredProducts.length}
                </span>

                {filteredProducts.length === 1
                  ? "product available"
                  : "products available"}
              </div>
            </div>

            {/* Category filters */}

            <div
              className={`${
                mobileFiltersOpen ? "flex" : "hidden"
              } mt-4 flex-wrap gap-2 border-t border-slate-100 pt-4 lg:flex`}
            >
              {categories.map((category) => {
                const active = category.label === activeCategory;

                return (
                  <button
                    key={category.label}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.label);
                      setMobileFiltersOpen(false);
                    }}
                    className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                      active
                        ? "bg-slate-950 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            RESULTS SUMMARY
        ========================================================= */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {search && (
              <>
                {" "}
                matching{" "}
                <span className="font-semibold text-slate-900">
                  “{search}”
                </span>
              </>
            )}
          </p>

          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-600 hover:text-sky-700"
            >
              Clear search
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* =========================================================
            PRODUCT GRID
        ========================================================= */}

        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onRequestInformation={handleRequestInformation}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            search={search}
            onClear={clearSearch}
          />
        )}

        {/* =========================================================
            BOTTOM INFORMATION STRIP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-[0_20px_70px_rgba(15,23,42,0.12)] sm:p-9 lg:p-10"
        >
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 ring-1 ring-sky-400/20">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Need help selecting the right equipment?
                </p>

                <p className="mt-1 max-w-2xl text-sm leading-7 text-slate-400">
                  Tell us what you need and our team can help you identify
                  suitable equipment for your clinical or operational
                  requirements.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                setRequestOpen(true);
              }}
              className="group relative inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Request Information

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          REQUEST INFORMATION DIALOG
      ========================================================= */}

      <AnimatePresence>
        {requestOpen && (
          <RequestDetailDialog
            onClose={() => {
              setRequestOpen(false);
              setSelectedProduct(null);
            }}
            product={selectedProduct}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ===============================================================
   PRODUCT CARD
================================================================ */

const ProductCard = ({
  product,
  index,
  onRequestInformation,
}: {
  product: Product;
  index: number;
  onRequestInformation: (product: Product) => void;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:border-sky-200 hover:shadow-[0_22px_60px_rgba(14,165,233,0.09)]"
    >
      {/* =========================================================
          IMAGE
      ========================================================= */}

      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        {/* Image overlay */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-60" />

        {/* Product number */}

        <div className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/20 bg-slate-950/65 px-2 backdrop-blur-md">
          <span className="text-[10px] font-bold tracking-[0.15em] text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Quality badge */}

        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-2.5 py-1.5 backdrop-blur-md">
          <CheckCircle2 className="h-3 w-3 text-sky-600" />

          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-700">
            Medical Equipment
          </span>
        </div>
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-7 tracking-tight text-slate-950">
          {product.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {product.description}
        </p>

        <div className="mt-auto pt-7">
          <div className="mb-5 h-px w-10 bg-sky-500 transition-all duration-300 group-hover:w-16" />

          <button
            type="button"
            onClick={() => onRequestInformation(product)}
            className="group/request flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50"
          >
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600 transition-colors group-hover/request:text-sky-700">
              Request Information
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-slate-400 shadow-sm transition-all duration-300 group-hover/request:bg-sky-600 group-hover/request:text-white">
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/request:translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ===============================================================
   EMPTY STATE
================================================================ */

const EmptyState = ({
  search,
  onClear,
}: {
  search: string;
  onClear: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 rounded-[2rem] border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Search className="h-6 w-6" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        No equipment found
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
        We could not find any products matching{" "}
        <span className="font-semibold text-slate-700">
          “{search}”
        </span>
        .
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Clear Search
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};