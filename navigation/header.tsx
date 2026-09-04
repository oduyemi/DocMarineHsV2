"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X, ShieldCheck } from "lucide-react";
import { RequestDetailDialog } from "@/dialog/request-modal";



const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const handleRequest = () => {
    setMobileOpen(false);
    setRequestOpen(true);
  };

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50
          transition-all duration-300
          ${
            scrolled
              ? "border-b border-slate-200/70 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
              : "bg-white"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className={`
              flex items-center justify-between
              transition-all duration-300
              ${
                scrolled
                  ? "h-[72px]"
                  : "h-[82px] lg:h-[88px]"
              }
            `}
          >
            <Link
              href="/"
              className="group flex items-center gap-3"
              aria-label="DocMarine Health Services home"
            >
              <div className="relative flex items-center">
                {/* Subtle logo glow */}
                <div className="absolute inset-0 rounded-xl bg-sky-400/10 blur-xl transition-opacity duration-300 group-hover:bg-sky-400/20" />

                <img
                  src="/images/logo/logo.png"
                  alt="DocMarine Health Services"
                  className="
                    relative
                    h-28
                    w-auto
                    max-w-[190px]
                    object-contain
                    scale-110
                    transition-transform
                    duration-300
                    group-hover:scale-[1.13]
                  "
                />
              </div>

              <div className="hidden sm:block">
                <p className="text-[15px] font-bold leading-tight tracking-tight text-slate-900">
                  DocMarine
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.17em] text-sky-600">
                  Health Services
                </p>
              </div>
            </Link>

            <nav
              className="hidden items-center gap-1 lg:flex"
              aria-label="Main navigation"
            >
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative rounded-lg px-4 py-2.5
                      text-sm font-medium
                      transition-colors duration-200
                      ${
                        active
                          ? "text-sky-600"
                          : "text-slate-600 hover:text-slate-950"
                      }
                    `}
                  >
                    {item.name}

                    {active && (
                      <motion.span
                        layoutId="header-active"
                        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-sky-500"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="mr-2 hidden items-center gap-2 xl:flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  <ShieldCheck className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    Healthcare
                  </p>

                  <p className="text-xs font-semibold text-slate-700">
                    Trusted Solutions
                  </p>
                </div>
              </div>

              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleRequest}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(14,165,233,0.2)] transition-all duration-300 hover:shadow-[0_12px_35px_rgba(14,165,233,0.32)]"
              >
                Request Information

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 lg:hidden"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
            >
              <div className="mx-auto max-w-7xl px-5 pb-6 pt-4 sm:px-6">
                <nav
                  className="flex flex-col"
                  aria-label="Mobile navigation"
                >
                  {navigation.map((item, index) => {
                    const active = isActive(item.href);

                    return (
                      <motion.div
                        key={item.name}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                      >
                        <Link
                          href={item.href}
                          className={`
                            flex items-center justify-between
                            border-b border-slate-100
                            py-4
                            text-base font-medium
                            transition-colors
                            ${
                              active
                                ? "text-sky-600"
                                : "text-slate-700 hover:text-sky-600"
                            }
                          `}
                        >
                          <span>{item.name}</span>

                          <ChevronDown
                            className={`
                              h-4 w-4 -rotate-90
                              transition-transform
                              ${
                                active
                                  ? "text-sky-500"
                                  : "text-slate-300"
                              }
                            `}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile CTA */}
                <motion.button
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  onClick={handleRequest}
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,165,233,0.22)]"
                >
                  Request Information

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Mobile trust indicator */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-sky-500" />

                  <span>
                    Trusted healthcare solutions across Nigeria
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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