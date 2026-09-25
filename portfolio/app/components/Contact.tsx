"use client";

import { motion } from "motion/react";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  LinkedinLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

const CONTACT_ITEMS = [
  {
    icon: EnvelopeSimple,
    label: "Institutional Email",
    value: "simranjit@pec.edu.in",
    href: "mailto:simranjit@pec.edu.in",
  },
  {
    icon: EnvelopeSimple,
    label: "Personal Email",
    value: "simrankatron@gmail.com",
    href: "mailto:simrankatron@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone (Work)",
    value: "+91-9872552898",
    href: "tel:+919872552898",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Dept. of ECE, Punjab Engineering College (PEC), Chandigarh, India",
    href: "https://maps.google.com/?q=Punjab+Engineering+College+Chandigarh",
  },
];

const ACADEMIC_PROFILES = [
  {
    label: "Google Scholar",
    sublabel: "H-20 · 1,305 Citations",
    href: "https://scholar.google.com/citations?user=1ZjokGwAAAAJ",
    color: "#4285F4",
  },
  {
    label: "ResearchGate",
    sublabel: "Simranjit_Singh10",
    href: "https://www.researchgate.net/profile/Simranjit_Singh10",
    color: "#00CCBB",
  },
  {
    label: "ORCID",
    sublabel: "0000-0002-6245-1590",
    href: "https://orcid.org/0000-0002-6245-1590",
    color: "#A6CE39",
  },
  {
    label: "Scopus",
    sublabel: "ID: 54981173800",
    href: "https://www.scopus.com/authid/detail.uri?authorId=54981173800",
    color: "#f97316",
  },
  {
    label: "LinkedIn",
    sublabel: "simranjitsinghpec",
    href: "https://www.linkedin.com/in/simranjitsinghpec",
    color: "#0A66C2",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-xl">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
          <span className="accent-line" style={{ margin: "0 auto 1.25rem" }} />
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading" style={{ margin: "0.75rem auto 0", textAlign: "center" }}>
            Open to research collaborations, keynote invitations, PhD co-supervision, and industry consultancy.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", maxWidth: "900px", margin: "0 auto" }} className="contact-grid">
          {/* Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Direct Contact
            </h3>
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="glass-card"
                style={{
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} color="var(--accent)" weight="fill" />
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.2rem" }}>
                    {label}
                  </div>
                  <div style={{ fontSize: "0.84rem", color: "var(--text-primary)", lineHeight: 1.45 }}>{value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Academic profiles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Academic Profiles
            </h3>
            {ACADEMIC_PROFILES.map(({ label, sublabel, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="glass-card"
                style={{
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: color,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--white)" }}>{label}</div>
                    <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>{sublabel}</div>
                  </div>
                </div>
                <ArrowUpRight size={16} color="var(--text-muted)" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "5rem",
          borderTop: "1px solid rgba(226, 232, 240, 0.9)",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          textAlign: "center",
        }}
      >
        <div className="container-xl">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--white)" }}>Dr. Simranjit Singh</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                Associate Professor · Dept. of ECE · Punjab Engineering College, Chandigarh
              </div>
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Fellow IETE · Senior Member IEEE · Top 2% Most-Cited Scientists (Stanford/Elsevier, 2025)
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
