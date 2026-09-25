"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Teaching", href: "#teaching" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        suppressHydrationWarning
        className={`navbar-base ${scrolled ? "navbar-scrolled" : ""}`}
      >
        <div
          className="container-xl"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.25,
            }}
          >
            <span
              style={{
                fontSize: "1.05rem",
                fontWeight: 800,
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              Dr. Simranjit Singh
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                letterSpacing: "0.02em",
                fontWeight: 500,
              }}
            >
              Associate Professor · PEC Chandigarh
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", gap: "2rem", alignItems: "center" }}
            className="hidden-mobile"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:simranjit@pec.edu.in"
              className="btn-primary"
              style={{ padding: "0.55rem 1.25rem", fontSize: "0.85rem" }}
            >
              Get in Touch
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--white)",
              cursor: "pointer",
              padding: "0.5rem",
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(255, 255, 255, 0.98)",
              borderBottom: "1px solid rgba(226, 232, 240, 0.9)",
              boxShadow: "0 16px 36px -8px rgba(15, 23, 42, 0.1)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                style={{ fontSize: "1.05rem", padding: "0.5rem 0" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:simranjit@pec.edu.in"
              className="btn-primary"
              style={{ marginTop: "0.75rem", justifyContent: "center" }}
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
