"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Globe,
  Buildings,
  IdentificationCard,
} from "@phosphor-icons/react";

const EDUCATION = [
  {
    degree: "Ph.D. — Electronics & Communication Engineering",
    institution: "Thapar Institute of Engineering & Technology (T.I.E.T.), Patiala",
    year: "2011 – 2014",
    note: "Thesis: Performance Optimization of Hybrid Optical Amplifiers for DWDM System",
  },
  {
    degree: "M.Tech — Computer Science & Engineering",
    institution: "Punjabi University, Patiala",
    year: "2020 – 2023",
    note: "University Medalist · Thesis: Performance Prediction of NG-PON Using Machine Learning",
  },
  {
    degree: "M.E. — Electronics & Communication Engineering",
    institution: "T.I.E.T., Patiala",
    year: "2008 – 2010",
    note: "Thesis: Performance Evaluation of Hybrid Optical Amplifier for WDM Systems",
  },
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    institution: "Guru Nanak Dev Engineering College, Ludhiana",
    year: "2004 – 2008",
    note: "",
  },
];

const IDENTIFIERS = [
  { label: "ORCID", value: "0000-0002-6245-1590", href: "https://orcid.org/0000-0002-6245-1590" },
  { label: "Scopus ID", value: "54981173800", href: "https://www.scopus.com/authid/detail.uri?authorId=54981173800" },
  { label: "Google Scholar", value: "H-20 · 1,305 Citations", href: "https://scholar.google.com/citations?user=1ZjokGwAAAAJ" },
  { label: "ResearchGate", value: "Simranjit_Singh10", href: "https://www.researchgate.net/profile/Simranjit_Singh10" },
];

const revealVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  return (
    <section id="about" className="section-pad section-alt">
      <div className="container-xl">
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="accent-line" />
          <h2 className="section-heading">About &amp; Biography</h2>
          <p className="section-subheading" style={{ marginTop: "0.75rem" }}>
            A career at the intersection of optical communications, wireless systems, and academic leadership.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }} className="about-grid">
          {/* Biography */}
          <div>
            <motion.p
              custom={0}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.25rem" }}
            >
              Dr. Simranjit Singh is an Associate Professor in the Department of Electronics and Communication
              Engineering at <strong style={{ color: "var(--text-primary)" }}>Punjab Engineering College (PEC), Chandigarh</strong>,
              where he has served since May 2023. He began his academic career at Punjabi University, Patiala in
              December 2011, rising through all stages of the assistant professor scale before joining PEC.
            </motion.p>

            <motion.p
              custom={1}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.25rem" }}
            >
              Between July 2016 and July 2017, he completed a prestigious postdoctoral fellowship at{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                The Institute of Optics, University of Rochester, NY, USA
              </strong>{" "}
              under the UGC Raman Fellowship — conducting research on all-optical information security under
              Prof. Govind P. Agrawal (a leading authority in nonlinear optics globally).
            </motion.p>

            <motion.p
              custom={2}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "1.25rem" }}
            >
              His research spans optical fiber communication, photonics, MIMO antennas for 5G/6G, and machine
              learning applications in optical networks. He has authored 73 SCI-indexed journal papers with a
              cumulative impact factor exceeding 108, and has been named among the{" "}
              <strong style={{ color: "var(--accent)" }}>Top 2% Most-Cited Scientists</strong> by Stanford
              University and Elsevier in both 2021 and 2025.
            </motion.p>

            <motion.p
              custom={3}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ color: "var(--text-secondary)", lineHeight: 1.85 }}
            >
              As PI or Co-PI, he has secured over <strong style={{ color: "var(--text-primary)" }}>₹3.9 crore</strong> in
              research grants from SERB, DST, MeitY, UGC, ANRF, and RUSA. He coordinates PEC&rsquo;s DoT-sponsored 5G Use
              Case Lab — ranked <strong style={{ color: "var(--accent)" }}>#1 nationally among 100 labs</strong> in 2025 —
              and serves as President of PEC&rsquo;s Institution&rsquo;s Innovation Council (IIC).
            </motion.p>

            {/* Profile links */}
            <motion.div
              custom={4}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "2rem" }}
            >
              {IDENTIFIERS.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    padding: "0.9rem 1rem",
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}
                >
                  <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {label}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 500 }}>{value}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--white)", marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <GraduationCap size={20} color="var(--accent)" weight="fill" />
              Education &amp; Qualifications
            </h3>

            <div style={{ position: "relative", paddingLeft: "1.75rem" }}>
              <div className="timeline-line" />

              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  custom={i}
                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  style={{
                    position: "relative",
                    marginBottom: i < EDUCATION.length - 1 ? "2rem" : 0,
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Dot — positioned in the left gutter */}
                  <div
                    className="timeline-dot"
                    style={{ position: "absolute", left: "-1.97rem", top: "4px" }}
                  />

                  <div className="glass-card" style={{ padding: "1.1rem 1.25rem", flex: 1 }}>
                    <div style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.04em", marginBottom: "0.35rem" }}>
                      {edu.year}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--white)", marginBottom: "0.3rem", lineHeight: 1.4 }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: edu.note ? "0.4rem" : 0 }}>
                      {edu.institution}
                    </div>
                    {edu.note && (
                      <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.5 }}>
                        {edu.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Memberships */}
            <motion.div
              custom={5}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card"
              style={{ padding: "1.25rem", marginTop: "1.5rem" }}
            >
              <h4 style={{ fontSize: "0.8rem", color: "var(--accent)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <IdentificationCard size={16} weight="fill" />
                Professional Memberships
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {[
                  "Fellow IETE", "Senior Member IEEE", "Member SPIE",
                  "Member OSA/OPTICA", "Member IEI", "Raman Fellow UGC",
                  "IEEE Photonics Society", "Punjab Science Academy",
                ].map((m) => (
                  <span key={m} className="badge" style={{ fontSize: "0.7rem" }}>{m}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
