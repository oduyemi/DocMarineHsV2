"use client";
import { useState } from "react";
import type { Product } from "@/data/products";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestDetailDialog } from "./request-modal";



export const ProductModal = ({product, onClose}: {
  product: Product;
  onClose: () => void;
}) => {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-lg"
      />

      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.96 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative z-10
          w-full max-w-4xl
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-slate-950
          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
        "
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="
            absolute right-5 top-5 z-20
            rounded-full
            bg-white/10
            p-2
            transition
            hover:bg-white/20
          "
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative h-72 overflow-hidden md:h-full md:min-h-[480px]">
            <img
              src={product.image}
              alt={product.name}
              className="
                absolute inset-0
                h-full w-full
                object-contain
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-slate-950
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.10),transparent_60%)]
              "
            />
          </div>

          <div className="flex flex-col justify-center p-8 text-white md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-300
                "
              >
                Medical Equipment
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {product.name}
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              {product.description}
            </p>

            <div className="mt-7 h-px w-32 bg-gradient-to-r from-sky-400 to-transparent" />

            <div className="mt-10">
              <Button
                type="button"
                onClick={() => setRequestOpen(true)}
                className="
                  h-11
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-sky-500
                  px-8
                  text-white
                  transition
                  hover:from-cyan-400
                  hover:to-sky-400
                "
              >
                Request Information
              </Button>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Request product specifications, pricing, availability, or
              procurement information from our team.
            </p>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {requestOpen && (
          <RequestDetailDialog
            product={{ name: product.name }}
            onClose={() => setRequestOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};