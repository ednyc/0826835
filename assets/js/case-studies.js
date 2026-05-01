(() => {
  const { Glyph, Mono, Eyebrow, PageShell, PageHero, CTAStrip, useViewport, clamp } = window;
  const cases = window.CASE_STUDIES || [];
  const Card = ({ c }) => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href: c.href,
        "data-reveal": true,
        style: { textDecoration: "none", borderRadius: 16, overflow: "hidden", background: "var(--ink)", color: "white", display: "flex", flexDirection: "column", minHeight: isMobile ? 0 : 480, position: "relative", cursor: "pointer", transition: "transform 0.3s" },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-4px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = "translateY(0)"
      },
      /* @__PURE__ */ React.createElement("div", { style: { height: isMobile ? 190 : 240, background: c.bg, position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 24 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 64 : 88, color: "rgba(255,255,255,0.4)", weight: 10, gap: 14 }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 12px)" } })),
      /* @__PURE__ */ React.createElement("div", { style: { padding: isMobile ? "24px 20px 24px" : "28px 28px 32px", display: "flex", flexDirection: "column", gap: 14, flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, c.tag), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.4)" }, c.year)), /* @__PURE__ */ React.createElement("h4", { style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(22, "3vw", 24), fontWeight: 500, letterSpacing: -0.6, lineHeight: 1.25 } }, c.title), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" } }, c.client), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap", paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(30, "5vw", 36), fontWeight: 600, letterSpacing: -1, color: "var(--signal)" } }, c.metric), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)", size: 10 }, c.metricLabel)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13 } }, "Read \u2192")))
    );
  };
  const Body = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHero, { eyebrow: "Case studies", title: "Detailed writeups from selected engagements.", intro: "A smaller subset of the broader work portfolio: the projects that merit a fuller narrative, tradeoffs included." }), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "100px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 14 } }, cases.map((c) => /* @__PURE__ */ React.createElement(Card, { key: c.client + c.year, c }))))), /* @__PURE__ */ React.createElement(CTAStrip, null));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "Work" }, /* @__PURE__ */ React.createElement(Body, null)));
})();
