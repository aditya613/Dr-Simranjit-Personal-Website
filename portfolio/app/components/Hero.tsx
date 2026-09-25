"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowDown,
  GraduationCap,
  Medal,
  BookOpen,
  Star,
  ArrowUpRight,
} from "@phosphor-icons/react";

const STATS = [
  { value: "73", label: "SCI Journal Papers" },
  { value: "1,305", label: "Citations (Scholar)" },
  { value: "H-20", label: "H-Index" },
  { value: "Top 2%", label: "Stanford Citation Ranking" },
  { value: "₹3.9Cr+", label: "Research Funding" },
  { value: "11+", label: "PhD Scholars" },
];

const BADGES = [
  { icon: Star, label: "Fellow IETE" },
  { icon: Star, label: "Senior Member IEEE" },
  { icon: GraduationCap, label: "Raman Fellow (UGC)" },
  { icon: Medal, label: "Postdoc — Univ. of Rochester" },
  { icon: BookOpen, label: "Top 2% Most-Cited Scientist" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg"
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        paddingTop: "96px",
        paddingBottom: "4rem",
      }}
    >
      <div className="container-xl" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left Column: Text Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Credential badges */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
            >
              {BADGES.map(({ icon: Icon, label }) => (
                <span key={label} className="badge">
                  <Icon size={14} weight="fill" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                  color: "var(--white)",
                }}
              >
                Dr. Simranjit{" "}
                <span className="gradient-text">Singh</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "var(--accent)",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                Associate Professor · Dept. of Electronics &amp; Communication Engineering
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  marginTop: "0.3rem",
                  fontWeight: 500,
                }}
              >
                Punjab Engineering College (Deemed-to-be University), Chandigarh, India
              </p>
            </motion.div>

            {/* Mission */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.02rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "54ch",
              }}
            >
              Advancing optical fiber communications, photonics, and next-generation
              wireless (5G/6G) systems — recognized among the{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 700 }}>
                Top 2% most-cited scientists worldwide
              </strong>{" "}
              by Stanford University &amp; Elsevier (2021 &amp; 2025).
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}
            >
              <a
                href="#research"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("research")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Research
                <ArrowDown size={16} />
              </a>
              <a
                href="https://scholar.google.com/citations?user=1ZjokGwAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Google Scholar
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Portrait + Stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
            style={{ display: "flex", flexDirection: "column", gap: "2.25rem", alignItems: "center" }}
          >
            {/* Portrait with Modern Elevated Double-Bezel Frame */}
            <div
              style={{
                position: "relative",
                width: "min(290px, 100%)",
                aspectRatio: "1",
              }}
            >
              {/* Outer decorative ambient ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, rgba(29,78,216,0.3), rgba(219,234,254,0.4) 40%, rgba(37,99,235,0.25) 70%, transparent)",
                  opacity: 0.8,
                  animation: "spin 12s linear infinite",
                  filter: "blur(4px)",
                }}
              />

              {/* Inner bezel frame */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "5px solid #ffffff",
                  boxShadow:
                    "0 20px 40px -12px rgba(29, 78, 216, 0.2), 0 8px 20px -6px rgba(15, 23, 42, 0.1)",
                  background: "#f1f5f9",
                }}
              >
                <Image
                  src="/Dr.Simranjit.jpg"
                  alt="Dr. Simranjit Singh — Associate Professor, PEC Chandigarh"
                  fill
                  sizes="(max-width: 768px) 260px, 300px"
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  priority
                />
              </div>
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.85rem",
                width: "100%",
              }}
            >
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  className="glass-card"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  }}
                  style={{
                    padding: "1rem 0.75rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
                      fontWeight: 800,
                      color: "var(--accent)",
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      color: "var(--text-muted)",
                      marginTop: "0.35rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      lineHeight: 1.3,
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--text-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
