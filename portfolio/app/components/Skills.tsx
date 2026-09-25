"use client";

import { motion } from "motion/react";
import { Code, Wrench, Chalkboard, Users } from "@phosphor-icons/react";

const SKILL_GROUPS = [
  {
    icon: Code,
    title: "Core Research Domains",
    skills: [
      "Optical Fiber Communication & DWDM",
      "Hybrid Optical Amplifiers (Raman-EDFA, SOA)",
      "Passive Optical Networks (PON, NG-PON2, 50G/100G-PON)",
      "OCDMA & Information Security",
      "MIMO Antenna Design (5G, 6G, THz, mmWave)",
      "Millimeter-Wave-over-Fiber & 5G/6G Fronthaul",
      "Free Space Optical (FSO) & VLC",
      "RF Energy Harvesting / Rectenna Systems",
      "Machine Learning in Optical Networks",
      "GMPLS & Optical Burst Switching (OBS)",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Tools & Software",
    skills: [
      "OptiSystem",
      "OptSim",
      "VPI Systems",
      "MATLAB",
      "Python (ML/AI applications)",
      "Qiskit (Quantum Computing)",
      "NetSim Simulator",
      "CST Microwave Studio",
    ],
  },
  {
    icon: Chalkboard,
    title: "Teaching Domains",
    skills: [
      "Digital & Analog Communication",
      "Wireless & Satellite Communication",
      "Artificial Neural Networks & Fuzzy Logic",
      "Data & Computer Communication Networks",
      "Electronic Devices & Digital Electronics",
      "Research Methodology",
      "Mobile & Cellular Communication",
      "Advanced Optical Communication",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Professional",
    skills: [
      "Research & Team Leadership",
      "Grant Writing & Project Management",
      "Academic Editorial & Peer Review (5 SCIE Journals)",
      "Ph.D / M.Tech / B.Tech Mentorship",
      "Conference Organization & TPC",
      "Entrepreneurship & Innovation Management",
      "IEEE Chapter Leadership",
      "Industrial Consulting",
    ],
  },
];

const IEEE_ROLES = [
  { role: "Vice Chair", body: "IEEE Photonics Society, Rajasthan Chapter", period: "Jan. 2026 – Present" },
  { role: "Elected Joint Secretary", body: "IEEE Delhi Section EXCOM 2026", period: "2026" },
  { role: "EXCOM Member", body: "IEEE Delhi Section", period: "Jan. 2025 – Present" },
  { role: "EXCOM Member", body: "IEEE Chandigarh Subsection", period: "Aug. 2024 – Present" },
  { role: "Secretary", body: "IEEE Photonics Society, Rajasthan Chapter", period: "Feb. 2024 – Jan. 2026" },
];

const revealVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad section-alt">
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="accent-line" />
          <h2 className="section-heading">Skills &amp; Expertise</h2>
          <p className="section-subheading" style={{ marginTop: "0.75rem" }}>
            Technical depth across optical systems, wireless communications, simulation tools, and institutional leadership.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "3rem" }} className="skills-grid">
          {SKILL_GROUPS.map(({ icon: Icon, title, skills }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="glass-card"
              style={{ padding: "1.75rem" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="var(--accent)" weight="fill" />
                </div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--white)", lineHeight: 1.3 }}>{title}</h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {skills.map((skill) => (
                  <span key={skill} className="badge" style={{ fontSize: "0.72rem" }}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* IEEE Leadership */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="ieee-grid">
          {/* IEEE roles */}
          <motion.div
            custom={4}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card"
            style={{ padding: "1.75rem" }}
          >
            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.25rem" }}>
              IEEE Leadership Roles
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {IEEE_ROLES.map((role) => (
                <div
                  key={role.role + role.body}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(226,232,240,0.85)",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.2rem" }}>{role.role}</div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-secondary)" }}>{role.body}</div>
                  </div>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{role.period}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* PEC Institutional */}
          <motion.div
            custom={5}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card"
            style={{ padding: "1.75rem" }}
          >
            <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--white)", marginBottom: "1.25rem" }}>
              Institutional Leadership — PEC
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { role: "President, IIC (Innovation Council)", period: "Sept. 2024 – Feb. 2026" },
                { role: "Coordinator, EIC & PEC Incubator", period: "Jan. 2024 – Present" },
                { role: "Co-coordinator, DoT 5G Use Case Lab (#1 Nationally)", period: "July 2024 – Present" },
                { role: "Expert, 6G Evaluation Committee — DoT, GoI", period: "Active" },
                { role: "Startup Advisor — RVKCS AI Services & Roboking", period: "Active" },
                { role: "External Consultant — HAL Korwa / SU-30 MKI", period: "2024–2025" },
              ].map(({ role, period }) => (
                <div
                  key={role}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(226,232,240,0.85)",
                  }}
                >
                  <div style={{ fontSize: "0.82rem", color: "var(--text-primary)", lineHeight: 1.4 }}>{role}</div>
                  <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          custom={6}
          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          {[
            { lang: "English", level: "Full Professional" },
            { lang: "Punjabi", level: "Native / Bilingual" },
            { lang: "Hindi", level: "Full Professional" },
          ].map(({ lang, level }) => (
            <div
              key={lang}
              className="glass-card"
              style={{ padding: "0.85rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.2rem", flex: 1, minWidth: "180px" }}
            >
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--white)" }}>{lang}</span>
              <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>{level}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          .ieee-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
