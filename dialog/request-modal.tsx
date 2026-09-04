"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, PackageSearch, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


type RequestDetailDialogProps = {
  product?: {
    name: string;
  } | null;
  onClose: () => void;
};

export const RequestDetailDialog = ({product, onClose}: RequestDetailDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (loading) return;

    const form = event.currentTarget;

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(form);

      formData.set(
        "product",
        product?.name ?? "General product inquiry"
      );

      formData.set(
        "source",
        product ? "product_modal" : "general_request_dialog"
      );

      const response = await fetch("/api/request-details", {
        method: "POST",
        body: formData,
      });

      let data: {
        success?: boolean;
        message?: string;
      };

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server returned an unexpected response."
        );
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to send your request. Please try again."
        );
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error("Request submission error:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-detail-title"
    >
      <div
        onClick={loading ? undefined : onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-lg"
      />
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
          scale: 0.97,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        exit={{
          y: 30,
          opacity: 0,
          scale: 0.97,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          relative z-10
          w-full max-w-xl
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-slate-950
          shadow-[0_40px_120px_rgba(0,0,0,0.8)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute -left-24 -top-24
            h-56 w-56 rounded-full
            bg-cyan-500/10 blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-24 -right-24
            h-56 w-56 rounded-full
            bg-sky-500/10 blur-3xl
          "
        />

        <button
          type="button"
          onClick={onClose}
          disabled={loading}
          aria-label="Close dialog"
          className="
            absolute right-5 top-5 z-20
            rounded-full
            border border-white/10
            bg-white/10
            p-2
            transition
            hover:bg-white/20
            disabled:pointer-events-none
            disabled:opacity-50
          "
        >
          <X className="h-5 w-5 text-white" />
        </button>

        <div className="relative p-8 text-white md:p-10">
          {!success && (
            <>
              <div
                className="
                  mb-5 flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-cyan-400/20
                  bg-cyan-400/10
                "
              >
                <PackageSearch className="h-5 w-5 text-cyan-300" />
              </div>

              <h2
                id="request-detail-title"
                className="pr-10 text-2xl font-semibold tracking-tight"
              >
                {product
                  ? "Request Product Information"
                  : "Request Information"}
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
                Tell us what you need and our team will respond
                with relevant product specifications, pricing and
                availability information.
              </p>

              <div
                className="
                  mt-6
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-4 py-3
                  text-sm
                "
              >
                {product ? (
                  <>
                    <span className="text-slate-400">
                      Product:
                    </span>{" "}

                    <span className="font-medium text-white">
                      {product.name}
                    </span>
                  </>
                ) : (
                  <span className="text-slate-300">
                    General medical equipment enquiry
                  </span>
                )}
              </div>
            </>
          )}

          {success ? (
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="py-5"
            >
              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  border border-emerald-400/20
                  bg-emerald-400/10
                "
              >
                <CheckCircle2 className="h-7 w-7 text-emerald-400" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Request sent successfully
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                Thank you for contacting DocMarine Health Services.
                Our team has received your request and will contact
                you with the relevant information.
              </p>

              {product && (
                <div
                  className="
                    mt-6 rounded-xl
                    border border-white/10
                    bg-white/5
                    px-4 py-3
                    text-sm
                  "
                >
                  <span className="text-slate-400">
                    Requested product:
                  </span>{" "}

                  <span className="font-medium text-white">
                    {product.name}
                  </span>
                </div>
              )}

              <Button
                type="button"
                onClick={onClose}
                className="
                  mt-7 h-11
                  rounded-full
                  bg-emerald-500
                  px-7
                  text-slate-950
                  hover:bg-emerald-400
                "
              >
                Close
              </Button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <Input
                name="name"
                required
                autoComplete="name"
                maxLength={150}
                placeholder="Full name"
                className="
                  h-11
                  border-white/10
                  bg-white/5
                  text-white
                  placeholder:text-slate-400
                  focus-visible:ring-cyan-500
                "
              />

              <Input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email address"
                className="
                  h-11
                  border-white/10
                  bg-white/5
                  text-white
                  placeholder:text-slate-400
                  focus-visible:ring-cyan-500
                "
              />

              <Input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone number"
                className="
                  h-11
                  border-white/10
                  bg-white/5
                  text-white
                  placeholder:text-slate-400
                  focus-visible:ring-cyan-500
                "
              />

              <Input
                name="company"
                autoComplete="organization"
                placeholder="Company / Organization (optional)"
                className="
                  h-11
                  border-white/10
                  bg-white/5
                  text-white
                  placeholder:text-slate-400
                  focus-visible:ring-cyan-500
                "
              />

              <Textarea
                name="message"
                required
                maxLength={5000}
                placeholder={
                  product
                    ? `Tell us what you'd like to know about ${product.name}`
                    : "What information do you need?"
                }
                className="
                  min-h-[120px]
                  resize-none
                  border-white/10
                  bg-white/5
                  text-white
                  placeholder:text-slate-400
                  focus-visible:ring-cyan-500
                "
              />

              {error && (
                <div
                  className="
                    rounded-xl
                    border border-red-500/20
                    bg-red-500/10
                    px-4 py-3
                  "
                >
                  <p className="text-sm leading-5 text-red-300">
                    {error}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 pt-3">
                <Button
                  type="submit"
                  disabled={loading}
                  className="
                    h-11
                    min-w-[150px]
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-sky-500
                    px-8
                    text-white
                    transition
                    hover:from-cyan-400
                    hover:to-sky-400
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={loading}
                  className="
                    h-11
                    rounded-full
                    border-white/20
                    bg-transparent
                    px-7
                    text-gray-200
                    hover:border-white/30
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};