(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, CTAStrip, useViewport, clamp } = window;
  const Hero = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "72px 20px 0" : "100px 32px 0", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { "data-parallax": "0.3", style: { position: "absolute", top: 60, right: -100, opacity: 0.05 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 340 : 520, color: "white", weight: 36, gap: 70 })), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 28 } }, /* @__PURE__ */ React.createElement("a", { href: "work.html", style: { color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 13 } }, "\u2190 All case studies")), /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 28 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)" }, "Case study \xB7 2025"), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 14, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, "Compliance \xB7 Platform \xB7 11 weeks")), /* @__PURE__ */ React.createElement("h1", { "data-reveal": true, style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(40, "7vw", 76), fontWeight: 600, letterSpacing: clamp(-1.4, "-0.22vw", -3), lineHeight: 1, maxWidth: 1100 } }, "Northwind Bank: from compliance spreadsheets to continuous SOC 2 in eleven weeks."), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { marginTop: 48, display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))", gap: isMobile ? 20 : 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)", paddingBottom: isMobile ? 48 : 80 } }, [
      ["Client", "Northwind Bank"],
      ["Industry", "Fintech"],
      ["Engagement", "Compliance + Platform"],
      ["Team", "8 people"]
    ].map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, k), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 500 } }, v))))));
  };
  const HeroImage = () => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { padding: isMobile ? "0 20px" : "0 32px", marginTop: isMobile ? -24 : -40, marginBottom: isMobile ? 56 : 80, position: "relative", zIndex: 1 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { maxWidth: 1280, margin: "0 auto", height: isMobile ? 260 : 420, borderRadius: 20, background: "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.4 0.15 270))", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 16px)" } }), /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 104 : 160, color: "rgba(255,255,255,0.6)", weight: 18, gap: 22 })));
  };
  const Metrics = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "0 20px 72px" : "0 32px 100px" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))", gap: 14 } }, [
      { v: "11 wk", l: "Time to audit-ready" },
      { v: "0", l: "Auditor findings" },
      { v: "$240K", l: "Annual savings vs. in-house" },
      { v: "94%", l: "Controls automated" }
    ].map((m) => /* @__PURE__ */ React.createElement("div", { key: m.l, style: { padding: "32px 28px", background: "var(--bg)", borderRadius: 14, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(38, "7vw", 52), fontWeight: 600, letterSpacing: clamp(-1, "-0.18vw", -2), color: "var(--ink)" } }, m.v), /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, m.l)))));
  };
  const Section = ({ eyebrow, title, body, side }) => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "48px 20px" : "60px 32px", borderTop: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 2fr", gap: isMobile ? 28 : 80, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, eyebrow), /* @__PURE__ */ React.createElement("h2", { style: { margin: "16px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(30, "4.6vw", 36), fontWeight: 600, letterSpacing: clamp(-0.8, "-0.12vw", -1.2), lineHeight: 1.05 } }, title), side), /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { fontSize: 17, color: "var(--ink)", lineHeight: 1.65 } }, body)));
  };
  const Pull = () => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--bg)", padding: isMobile ? "72px 20px" : "100px 32px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { maxWidth: 1100, margin: "0 auto" } }, /* @__PURE__ */ React.createElement(Glyph, { size: 48, color: "var(--signal)", weight: 6, gap: 8 }), /* @__PURE__ */ React.createElement("blockquote", { style: { margin: "32px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(28, "5vw", 36), fontWeight: 500, letterSpacing: clamp(-0.6, "-0.1vw", -1), lineHeight: 1.25, color: "var(--ink)" } }, '"Modx replaced three vendors. Our SOC 2, our platform migration, and our AI roadmap now run through one room \u2014 and that room actually talks to itself."'), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32, display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 44, height: 44, borderRadius: 999, background: "linear-gradient(135deg, var(--signal), oklch(0.5 0.18 30))" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16 } }, "Maya Okafor"), /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)" }, "CTO \xB7 Northwind Bank")))));
  };
  const Body = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(HeroImage, null), /* @__PURE__ */ React.createElement(Metrics, null), /* @__PURE__ */ React.createElement(
    Section,
    {
      eyebrow: "The problem",
      title: "A bank running compliance on Google Sheets.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Northwind had grown from 12 people to 240 in three years. Their original SOC 2 readiness \u2014 a Google Sheet maintained by their head of finance \u2014 had become a strategic liability. Two enterprise deals stalled in procurement review. Their auditor was asking for evidence the team couldn't produce in less than a week."), /* @__PURE__ */ React.createElement("p", null, "The internal proposal was to hire a head of GRC, two compliance engineers, and run an 18-month program. We presented an 11-week alternative: drop in a senior team, retire the spreadsheet, and leave behind a continuous program their existing engineers could maintain."))
    }
  ), /* @__PURE__ */ React.createElement(
    Section,
    {
      eyebrow: "What we did",
      title: "Three workstreams. One squad.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Controls & evidence."), " We mapped Northwind's existing practices to SOC 2 Type II controls, identified 47 gaps, and built automation pipelines for 94% of them \u2014 pulling evidence directly from AWS, Okta, GitHub, and Jamf instead of asking humans for screenshots."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Platform hardening."), " The audit forced overdue infra work: centralized logging, secrets rotation, MFA enforcement, and a real backup/restore runbook. We did all of it in parallel with the controls work, not after."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Auditor relationship."), " We brought our own auditor \u2014 a Big Four boutique we've worked with on six prior engagements \u2014 and ran weekly sync calls so there were no surprises in the report.")),
      side: /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "20px 18px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, "Engagement team"), /* @__PURE__ */ React.createElement("ul", { style: { margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 } }, /* @__PURE__ */ React.createElement("li", null, "1 engagement lead"), /* @__PURE__ */ React.createElement("li", null, "2 compliance engineers"), /* @__PURE__ */ React.createElement("li", null, "3 platform engineers"), /* @__PURE__ */ React.createElement("li", null, "1 designer (trust center)"), /* @__PURE__ */ React.createElement("li", null, "1 QSA-certified auditor")))
    }
  ), /* @__PURE__ */ React.createElement(Pull, null), /* @__PURE__ */ React.createElement(
    Section,
    {
      eyebrow: "The outcome",
      title: "Audit-ready, and staying that way.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "Northwind passed their SOC 2 Type II audit with zero findings. Both stalled procurement deals closed within 30 days. The trust center we built shipped publicly in week 9 and is now part of every customer security review."), /* @__PURE__ */ React.createElement("p", null, "Eight months in, controls are still 94% automated. Compliance work consumes about 1.5 days/week of one engineer's time \u2014 down from a full-time role they were about to hire. We retain a small monthly retainer to handle quarterly reviews and the next year's Type II."))
    }
  ), /* @__PURE__ */ React.createElement(
    Section,
    {
      eyebrow: "What's next",
      title: "Onto the platform migration.",
      body: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, "The compliance work surfaced a separate, larger opportunity: their Heroku and Snowflake spend was growing faster than revenue. We're now mid-engagement on a multi-region GCP migration with the same squad \u2014 same trust, same context, same room."))
    }
  ), /* @__PURE__ */ React.createElement(CTAStrip, null));
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "Work" }, /* @__PURE__ */ React.createElement(Body, null)));
})();
