(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, PageHero, CTAStrip, useViewport, clamp } = window;
  const services = [
    { n: "01", title: "Compliance & Trust", sub: "SOC 2 \xB7 ISO \xB7 HIPAA \xB7 PCI", desc: "Audit prep, continuous monitoring, vendor risk, and pentests. We take you from spreadsheets to a living trust program \u2014 with auditors who already know us.", outcomes: ["SOC 2 Type II in 11 weeks", "Continuous control monitoring", "Audit-ready by default"], accent: "var(--cobalt)", href: "service-compliance.html" },
    { n: "02", title: "Platform Engineering", sub: "Cloud \xB7 K8s \xB7 DevEx \xB7 IDPs", desc: "Cloud platforms, internal developer platforms, and the golden paths that make your engineers faster. Built once, owned by you.", outcomes: ["80% faster deploys", "Multi-cloud abstractions", "On-call you can keep"], accent: "var(--forest)", href: "service-platform.html" },
    { n: "03", title: "Product & Design", sub: "0\u21921 \xB7 UX \xB7 Brand \xB7 Systems", desc: "Discovery through ship \u2014 product strategy, UX research, design systems, and brand. Same designers in workshops as in code review.", outcomes: ["0\u21921 launches in 12 weeks", "Design systems that survive", "Research that ships"], accent: "var(--plum)", href: "service-product.html" },
    { n: "04", title: "AI & Applied ML", sub: "RAG \xB7 Agents \xB7 Evals \xB7 MLOps", desc: "Production-grade retrieval, agents, and evaluation rigs. AI that holds up under compliance review and stays cheap at scale.", outcomes: ["RAG with provable evals", "Agent orchestration", "60% cost reduction"], accent: "var(--signal)", href: "service-ai.html" }
  ];
  const ServiceRow = ({ s, i }) => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href: s.href,
        "data-reveal": true,
        style: { textDecoration: "none", color: "inherit", display: "grid", gridTemplateColumns: isTablet ? "1fr" : "auto 1.2fr 1fr auto", gap: isMobile ? 20 : 40, padding: isMobile ? "28px 0" : "44px 0", borderTop: i === 0 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)", alignItems: "center", transition: "background 0.25s, padding-left 0.25s" },
        onMouseEnter: (e) => {
          e.currentTarget.style.background = "var(--bg)";
          e.currentTarget.style.paddingLeft = isTablet ? "0" : "16px";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.paddingLeft = "0";
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 18, minWidth: 0 } }, /* @__PURE__ */ React.createElement(Glyph, { size: 36, color: s.accent, weight: 4.5, gap: 6 }), /* @__PURE__ */ React.createElement(Mono, { color: "var(--muted)" }, s.n, " \xB7 ", s.sub)),
      /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(30, "4vw", 40), fontWeight: 600, letterSpacing: -1.2, lineHeight: 1 } }, s.title),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.55 } }, s.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, s.outcomes.map((item) => /* @__PURE__ */ React.createElement("span", { key: item, style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: "4px 8px", border: "1px solid var(--line)", borderRadius: 999, color: "var(--ink-2)", letterSpacing: 0.5 } }, item)))),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 500 } }, "Explore ", /* @__PURE__ */ React.createElement("span", null, "\u2192"))
    );
  };
  const Body = () => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageHero, { eyebrow: "Services", title: "Four practices, one delivery team.", intro: "We staff senior practitioners across compliance, platform, product, and AI \u2014 and keep the same engagement leads from discovery through operate." }), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "100px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, services.map((s, i) => /* @__PURE__ */ React.createElement(ServiceRow, { key: s.n, s, i })))), /* @__PURE__ */ React.createElement(CTAStrip, null));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "Services" }, /* @__PURE__ */ React.createElement(Body, null)));
})();
