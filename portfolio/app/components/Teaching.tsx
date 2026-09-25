"use client";

import { motion } from "motion/react";
import { ChalkboardTeacher, Buildings, Clock } from "@phosphor-icons/react";

const POSITIONS = [
  {
    role: "Associate Professor",
    institution: "Punjab Engineering College (PEC), Chandigarh",
    period: "May 2023 – Present",
    type: "current",
  },
  {
    role: "Postdoctoral Associate (Raman Fellow, UGC)",
    institution: "The Institute of Optics, University of Rochester, NY, USA",
    period: "July 2016 – July 2017",
    type: "past",
    highlight: "Research on all-optical information security under Prof. Govind P. Agrawal",
  },
  {
    role: "Assistant Professor (Stage 3 — Selected Scale)",
    institution: "Dept. of ECE, Punjabi University, Patiala",
    period: "Dec. 2020 – May 2023",
    type: "past",
  },
  {
    role: "Visiting Researcher (ASEAN-India Scheme, DST)",
    institution: "National University of Malaysia (UKM); Le Quy Don Technical University, Vietnam",
    period: "Sept. 2019 – Sept. 2021",
    type: "past",
  },
  {
    role: "Assistant Professor (Stage 1 & 2)",
    institution: "Dept. of ECE, Punjabi University, Patiala",
    period: "Dec. 2011 – Dec. 2020",
    type: "past",
  },
  {
    role: "Teaching Associate",
    institution: "Dept. of ECE, Thapar University, Patiala",
    period: "July – Dec. 2011",
    type: "past",
  },
];

const EDITORIAL = [
  { role: "Associate Editor", journal: "Journal of Optical Engineering", body: "SPIE", since: "Feb. 2026" },
  { role: "Editor", journal: "Defence Science Journal (SCIE)", body: "DRDO", since: "Nov. 2025" },
  { role: "Editor", journal: "IETE Journal of Research (SCIE)", body: "IETE", since: "Sept. 2025" },
  { role: "Associate Editor", journal: "IET Electronics Letters (SCI)", body: "IET", since: "Feb. 2021" },
  { role: "Associate Editor", journal: "IET Journal of Engineering (SCI)", body: "IET", since: "Feb. 2021" },
];

const PEC_COURSES = [
  "Introduction to Electronics & Electrical Engineering (B.Tech 1st Year)",
  "Analog and Digital Communication (B.Tech 2nd/3rd Year)",
  "Mobile and Cellular Communication (B.Tech 4th Year)",
  "Mobile Communications (B.Tech 3rd Year, 2025)",
  "Advanced Optical Communication (Ph.D Coursework)",
  "Semiconductor Package Manufacturing (B.Tech 4th Year)",
];

const PU_COURSES = [
  "Optical Fiber Communication (B.Tech & M.Tech)",
  "Wireless Communication (B.Tech & Ph.D)",
  "Artificial Neural Networks & Fuzzy Logic (B.Tech & M.Tech)",
  "Data & Computer Communication Networks (M.Tech)",
  "Satellite Communication (B.Tech)",
  "Research Methodology (Ph.D coursework)",
];

const revealVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Teaching() {
  return (
    <section id="teaching" className="section-pad">
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="accent-line" />
          <h2 className="section-heading">Teaching &amp; Experience</h2>
          <p className="section-subheading" style={{ marginTop: "0.75rem" }}>
            15+ years across premier Indian and international institutions — from Patiala and Chandigarh to Rochester and Kuala Lumpur.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem" }} className="teaching-grid">
          {/* Left — Career Timeline */}
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <Buildings size={20} color="var(--accent)" weight="fill" />
              Academic &amp; Research Positions
            </h3>

            <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
              <div className="timeline-line" />

              {POSITIONS.map((pos, i) => (
                <motion.div
                  key={pos.role + pos.institution}
                  custom={i}
                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  style={{ position: "relative", marginBottom: i < POSITIONS.length - 1 ? "1.25rem" : 0 }}
                >
                  <div
                    className="timeline-dot"
                    style={{
                      position: "absolute",
                      left: "-1.97rem",
                      top: "14px",
                      background: pos.type === "current" ? "var(--accent)" : "var(--slate-300)",
                      border: "2px solid #ffffff",
                      boxShadow: pos.type === "current" ? "0 0 0 3px rgba(29, 78, 216, 0.25)" : "none",
                    }}
                  />

                  <div
                    className="glass-card"
                    style={{
                      padding: "1rem 1.25rem",
                      borderLeft: pos.type === "current" ? "3px solid var(--accent)" : "1px solid var(--card-border)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                      <Clock size={12} color="var(--accent)" />
                      <span style={{ fontSize: "0.7rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.04em" }}>
                        {pos.period}
                        {pos.type === "current" && (
                          <span style={{ marginLeft: "0.5rem", color: "#15803d", background: "rgba(22,163,74,0.08)", border: "1px solid rgba(22,163,74,0.25)", borderRadius: "999px", padding: "0.15rem 0.5rem", fontSize: "0.62rem", fontWeight: 700 }}>
                            CURRENT
                          </span>
                        )}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.2rem", lineHeight: 1.4 }}>
                      {pos.role}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                      {pos.institution}
                    </div>
                    {pos.highlight && (
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontStyle: "italic", marginTop: "0.4rem", lineHeight: 1.5 }}>
                        {pos.highlight}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Editorial Roles */}
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", margin: "2.5rem 0 1.25rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <ChalkboardTeacher size={20} color="var(--accent)" weight="fill" />
              Editorial Appointments
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {EDITORIAL.map((ed, i) => (
                <motion.div
                  key={ed.journal}
                  custom={i}
                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="glass-card"
                  style={{ padding: "0.85rem 1.1rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}
                >
                  <div>
                    <div style={{ fontSize: "0.65rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                      {ed.role} · {ed.body}
                    </div>
                    <div style={{ fontSize: "0.83rem", color: "var(--text-primary)" }}>{ed.journal}</div>
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>since {ed.since}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Courses */}
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <ChalkboardTeacher size={20} color="var(--accent)" weight="fill" />
              Courses Taught
            </h3>

            {/* PEC */}
            <motion.div
              custom={0}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card"
              style={{ padding: "1.5rem", marginBottom: "1.25rem" }}
            >
              <div style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Punjab Engineering College, Chandigarh (2023 – Present)
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none" }}>
                {PEC_COURSES.map((c) => (
                  <li key={c} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--accent)", marginTop: "2px", fontSize: "0.5rem" }}>◆</span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Punjabi Univ */}
            <motion.div
              custom={1}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card"
              style={{ padding: "1.5rem", marginBottom: "1.25rem" }}
            >
              <div style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Punjabi University, Patiala (2011 – 2023)
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none" }}>
                {PU_COURSES.map((c) => (
                  <li key={c} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start", fontSize: "0.84rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--accent)", marginTop: "2px", fontSize: "0.5rem" }}>◆</span>
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* PhD supervision */}
            <motion.div
              custom={2}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card"
              style={{ padding: "1.5rem" }}
            >
              <div style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Ph.D. Supervision
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "0.9rem" }}>
                {[
                  { n: "5", l: "Completed PhDs" },
                  { n: "6+", l: "Under Guidance" },
                  { n: "30+", l: "Masters Theses" },
                ].map(({ n, l }) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--white)", letterSpacing: "-0.03em" }}>{n}</div>
                    <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>{l}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Topics include: Hybrid optical-wireless access networks, OCDMA security, GMPLS QoS, MIMO antennas for mmWave/THz, NG-PON for 5G fronthaul, EV batteries, and 5G-enabled medical devices.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .teaching-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
