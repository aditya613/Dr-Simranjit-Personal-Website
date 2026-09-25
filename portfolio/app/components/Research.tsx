"use client";

import { motion } from "motion/react";
import { ArrowUpRight, TrendUp, Lightbulb, Cpu } from "@phosphor-icons/react";

const RESEARCH_AREAS = [
  {
    icon: Lightbulb,
    title: "Optical Fiber Communication",
    description:
      "DWDM systems, hybrid optical amplifiers (Raman-EDFA, SOA), passive optical networks (PON, NG-PON2, 50G/100G-PON), optical burst switching, and GMPLS networks.",
    tags: ["DWDM", "EDFA", "Raman", "NG-PON", "OBS", "GMPLS"],
  },
  {
    icon: Cpu,
    title: "MIMO Antennas & 5G/6G",
    description:
      "Compact MIMO patch antennas for 5G, mmWave, and THz applications; millimeter-wave-over-fiber fronthaul/backhaul; reconfigurable antennas; RF energy harvesting.",
    tags: ["MIMO", "5G", "6G", "mmWave", "THz", "Fronthaul"],
  },
  {
    icon: TrendUp,
    title: "Information Security & ML",
    description:
      "All-optical information security, OCDMA encryption schemes, machine learning applications for optical network performance prediction and resource allocation.",
    tags: ["OCDMA", "Security", "ML", "Python", "Qiskit"],
  },
];

const GRANTS = [
  { agency: "SERB", title: "MIMO Patch Antenna Array for 5G/mmWave", amount: "₹52.7L", status: "Completed" },
  { agency: "DST ASEAN-India", title: "Compact MIMO Antenna for 5G", amount: "₹17.3L", status: "Completed" },
  { agency: "MeitY Visvesvaraya", title: "GMPLS Optical Networks with QoS", amount: "₹36.2L", status: "Completed" },
  { agency: "UGC Raman", title: "Security Enhancement in All-Optical Networks", amount: "₹26.2L", status: "Completed" },
  { agency: "PEC Grant", title: "mmWave over Fiber for 5G Fronthaul", amount: "₹10L", status: "Ongoing" },
  { agency: "RUSA Phase 2", title: "Smart IoT-Enabled Reconfigurable MIMO", amount: "₹73.8L", status: "Ongoing" },
  { agency: "ANRF", title: "Hybrid Microstrip Antenna for 6G Sensing", amount: "~₹53L", status: "Approved" },
  { agency: "DST NM-ICPS", title: "IIT Ropar CPS Lab", amount: "₹80L", status: "Ongoing" },
];

const AWARDS = [
  "Top 2% Most-Cited Scientists — Stanford/Elsevier 2021 & 2025",
  "PEC 5G Lab — Ranked #1 Among 100 Labs Nationally (Dec. 2025)",
  "Best Faculty Award (Research) — PEC Chandigarh (2023, 2024)",
  "University Medalist, M.Tech CSE — Punjabi University (2026)",
  "Outstanding Volunteer Award — IEEE Chandigarh Subsection (2025)",
  "Marquis Who's Who — Albert Nelson Lifetime Achievement Award (2017)",
  "Best Paper Award — Optics & Laser Technology, Thapar (2019)",
  "Vice Chancellor Award for Research — Punjabi University (2016)",
];

const revealVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Research() {
  return (
    <section id="research" className="section-pad">
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="accent-line" />
          <h2 className="section-heading">Research &amp; Expertise</h2>
          <p className="section-subheading" style={{ marginTop: "0.75rem" }}>
            Three interconnected research domains spanning photonics, wireless communications, and network security.
          </p>
        </div>

        {/* Research area cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "4rem" }}
          className="research-grid"
        >
          {RESEARCH_AREAS.map(({ icon: Icon, title, description, tags }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card"
              style={{ padding: "1.75rem" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-dim)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <Icon size={22} color="var(--accent)" weight="fill" />
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--white)", marginBottom: "0.75rem", lineHeight: 1.35 }}>
                {title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                {description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {tags.map((t) => (
                  <span key={t} className="badge" style={{ fontSize: "0.67rem", padding: "0.2rem 0.6rem" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two-column: Grants + Awards */}
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: "2.5rem" }} className="grants-grid">
          {/* Research Grants */}
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.5rem" }}>
              Major Research Grants
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {GRANTS.map((g, i) => (
                <motion.div
                  key={g.title}
                  custom={i}
                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="glass-card"
                  style={{
                    padding: "1rem 1.25rem",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "0.75rem",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, marginBottom: "0.2rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {g.agency}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-primary)", fontWeight: 500, lineHeight: 1.4 }}>
                      {g.title}
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--white)" }}>{g.amount}</div>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        padding: "0.15rem 0.55rem",
                        borderRadius: "999px",
                        fontWeight: 600,
                        background: g.status === "Ongoing"
                          ? "rgba(22,163,74,0.08)"
                          : g.status === "Approved"
                          ? "rgba(217,119,6,0.08)"
                          : "rgba(100,116,139,0.08)",
                        color: g.status === "Ongoing"
                          ? "#15803d"
                          : g.status === "Approved"
                          ? "#b45309"
                          : "var(--text-muted)",
                        border: `1px solid ${g.status === "Ongoing" ? "rgba(22,163,74,0.25)" : g.status === "Approved" ? "rgba(217,119,6,0.25)" : "rgba(100,116,139,0.2)"}`,
                      }}
                    >
                      {g.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.5rem" }}>
              Awards &amp; Recognitions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {AWARDS.map((award, i) => (
                <motion.div
                  key={award}
                  custom={i}
                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="glass-card"
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    padding: "0.85rem 1.1rem",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      marginTop: "6px",
                      flexShrink: 0,
                    }}
                  />
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{award}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scholar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <a
            href="https://scholar.google.com/citations?user=1ZjokGwAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Full Publication Record on Google Scholar
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .research-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .grants-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
