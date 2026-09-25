"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BookOpen } from "@phosphor-icons/react";

const BOOKS = [
  {
    title: "Broadband Connectivity in 5G and Beyond",
    authors: "Simranjit Singh, Gurpreet Kaur, M. Tariqul Islam, R. S. Kaler",
    publisher: "Springer, USA",
    year: "2022",
    isbn: "978-3-031-06866-9",
    link: "#",
  },
  {
    title: "Handbook on Optical Amplifiers",
    authors: "Simranjit Singh, Rajneesh Randhawa, R. S. Kaler",
    publisher: "Lambert Academic Publishing, Saarbrücken, Germany",
    year: "2015",
    isbn: "978-3-659-68032-8",
    link: "#",
  },
  {
    title: "Highly Efficient Ultra-Wide Band MIMO Patch Antenna Array for Short Range THz Applications",
    authors: "Mandeep Singh, Simranjit Singh, Tariqul Islam",
    publisher: "Chapter in Emerging Trends in Terahertz Engineering, Springer",
    year: "2021",
    isbn: "pp. 193–207",
    link: "#",
  },
];

const SELECTED_PAPERS = [
  {
    num: "73",
    authors: "Harpreet Kaur, Simranjit Singh, Ranjit Kaur",
    title: "100G-PON over Dual Polarized 16QAM by Utilizing Heterodyne Modulated Millimeter Wave for 6G Fronthaul",
    journal: "J. of Nonlinear Optical Physics and Materials — World Scientific",
    year: "2026 (Accepted)",
    if: "—",
    type: "SCI",
  },
  {
    num: "70",
    authors: "Harpreet Kaur, Simranjit Singh, Ranjit Kaur",
    title: "Optically Powered Heterodyne Modulated Sub-THz over Fiber using DP-16QAM at 100G (ITU-T G.9804) for 6G Fronthaul",
    journal: "Optical Fiber Technology — Elsevier, vol. 93, 104241",
    year: "2025",
    if: "—",
    type: "SCI",
  },
  {
    num: "63",
    authors: "Harpreet Kaur, Simranjit Singh, Ranjit Kaur, Rajandeep Singh",
    title: "Advances in Fronthauling of Communication Technologies: A Review",
    journal: "J. of Network and Computer Applications — Elsevier, vol. 233, 103806",
    year: "2024",
    if: "8.7",
    type: "SCI",
  },
  {
    num: "60",
    authors: "Monika, Simranjit Singh, Amit Wason",
    title: "Performance Investigations on Data Protection Algorithms in GMPLS Optical Networks",
    journal: "Scientific Reports — Springer Nature, vol. 13, pp. 425",
    year: "2023",
    if: "4.996",
    type: "SCI",
  },
  {
    num: "56",
    authors: "Monika, Simranjit Singh, Amit Wason",
    title: "Performance Evaluation of Bandwidth Allocating Algorithms in GMPLS Optical Networks",
    journal: "IEEE Access, vol. 10, pp. 40731–40742",
    year: "2022",
    if: "3.9",
    type: "SCI",
  },
  {
    num: "47",
    authors: "Tayyab Shabbir, M. Tariqul Islam, Norbahiah Misran, Simranjit Singh et al.",
    title: "Broadband single-layer reflectarray antenna loaded with meander-delay-lines for X-band applications",
    journal: "Alexandria Engineering Journal — Elsevier, vol. 60, no. 1",
    year: "2021",
    if: "6.8",
    type: "SCI",
  },
  {
    num: "55",
    authors: "Simranjit Singh, R. S. Kaler",
    title: "Novel Optical Flat Gain Hybrid Amplifier for Dense Wavelength Division Multiplexed System",
    journal: "IEEE Photonics Technology Letters, vol. 26, no. 2, pp. 173–176",
    year: "2014",
    if: "2.6",
    type: "SCI",
  },
  {
    num: "28",
    authors: "Simranjit Singh, R. S. Kaler",
    title: "Performance Optimization of EDFA-Raman Hybrid Optical Amplifier Using Genetic Algorithm",
    journal: "Optics and Laser Technology — Elsevier, vol. 68, pp. 89–95",
    year: "2015",
    if: "5.0",
    type: "SCI",
  },
];

const METRICS = [
  { value: "73", label: "SCI Journal Papers" },
  { value: "23", label: "Other Journals" },
  { value: "44", label: "Intl. Conferences" },
  { value: "108.1", label: "Cumulative Impact Factor" },
  { value: "1,305", label: "Total Citations" },
  { value: "H-20", label: "H-Index (i10: 38)" },
];

const revealVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Publications() {
  return (
    <section id="publications" className="section-pad section-alt">
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="accent-line" />
          <h2 className="section-heading">Publications</h2>
          <p className="section-subheading" style={{ marginTop: "0.75rem" }}>
            73 SCI-indexed journals, 3 books, 1 patent, and 44 international conference papers spanning 2013–2026.
          </p>
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: "1.5rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          {METRICS.map(({ value, label }) => (
            <div key={label} className="stat-block" style={{ alignItems: "center" }}>
              <div className="stat-value" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--accent)" }}>{value}</div>
              <div className="stat-label" style={{ fontSize: "0.64rem" }}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Books */}
        <div style={{ marginBottom: "3rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <BookOpen size={20} color="var(--accent)" weight="fill" />
            Books &amp; Book Chapters
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="books-grid">
            {BOOKS.map((book, i) => (
              <motion.div
                key={book.title}
                custom={i}
                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="glass-card"
                style={{ padding: "1.5rem" }}
              >
                <div style={{ fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.6rem", fontWeight: 600 }}>
                  {book.publisher} · {book.year}
                </div>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--white)", marginBottom: "0.6rem", lineHeight: 1.4 }}>
                  {book.title}
                </h4>
                <p style={{ fontSize: "0.78rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                  {book.authors}
                </p>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                  ISBN {book.isbn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{
            padding: "1.25rem 1.5rem",
            marginBottom: "3rem",
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
            borderLeft: "3px solid var(--accent)",
          }}
        >
          <div>
            <div style={{ fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.07em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem" }}>
              Indian Patent · Filed 5 Jan. 2024 · App. No. 202311077792
            </div>
            <div style={{ fontSize: "0.92rem", color: "var(--white)", fontWeight: 600 }}>
              64 Element Massive MIMO Antenna for Next Generation Networks
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.3rem" }}>
              Poonam Koundal, Simranjit Singh, Rajbir Kaur
            </div>
          </div>
        </motion.div>

        {/* Selected SCI Papers */}
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.25rem" }}>
          Selected SCI Journal Publications
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {SELECTED_PAPERS.map((paper, i) => (
            <motion.div
              key={paper.num}
              custom={i}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="glass-card"
              style={{
                padding: "1.1rem 1.5rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "1.25rem",
                alignItems: "center",
              }}
            >
              {/* Paper number */}
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "var(--accent-dim)",
                border: "1px solid var(--accent-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--accent)",
              }}>
                {paper.num}
              </div>

              {/* Paper details */}
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--white)", lineHeight: 1.4, marginBottom: "0.3rem" }}>
                  {paper.title}
                </div>
                <div style={{ fontSize: "0.76rem", color: "var(--text-secondary)", marginBottom: "0.2rem" }}>
                  {paper.authors}
                </div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontStyle: "italic" }}>
                  {paper.journal} · {paper.year}
                </div>
              </div>

              {/* IF badge */}
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                {paper.if !== "—" && (
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>IF</div>
                )}
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: paper.if !== "—" ? "var(--accent)" : "var(--text-muted)" }}>
                  {paper.if}
                </div>
                <span className="badge" style={{ fontSize: "0.6rem", marginTop: "0.25rem" }}>{paper.type}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scholar link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: "2rem", textAlign: "center" }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1rem" }}>
            Showing representative publications. Full list of 73 SCI papers available on Google Scholar.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://scholar.google.com/citations?user=1ZjokGwAAAAJ" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Google Scholar <ArrowUpRight size={15} />
            </a>
            <a href="https://www.researchgate.net/profile/Simranjit_Singh10" target="_blank" rel="noopener noreferrer" className="btn-outline">
              ResearchGate <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .books-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .books-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
