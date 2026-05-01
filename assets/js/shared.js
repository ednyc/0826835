(() => {
  const Glyph = ({ size = 28, color = "currentColor", weight, gap = 14 }) => {
    const w = weight != null ? weight : size * 0.13;
    const half = gap / 2;
    return /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", width: size, height: size, style: { display: "block", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("path", { d: `M 18 22 L ${50 - half} 50 L 18 78`, stroke: color, strokeWidth: w, fill: "none", strokeLinecap: "square", strokeLinejoin: "miter" }), /* @__PURE__ */ React.createElement("path", { d: `M 82 22 L ${50 + half} 50 L 82 78`, stroke: color, strokeWidth: w, fill: "none", strokeLinecap: "square", strokeLinejoin: "miter" }));
  };
  const Lockup = ({ size = 22, color = "currentColor", href = "index.html" }) => /* @__PURE__ */ React.createElement("a", { href, style: { textDecoration: "none", display: "flex", alignItems: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: size, color, letterSpacing: -size * 0.05, lineHeight: 1 } }, /* @__PURE__ */ React.createElement("span", null, "mod"), /* @__PURE__ */ React.createElement(Glyph, { size, color, gap: size * 0.14 }));
  const Mono = ({ children, color = "var(--muted)", size = 11 }) => /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: size, color, letterSpacing: 1.6, textTransform: "uppercase" } }, children);
  const Eyebrow = ({ dot = true, children, color = "var(--muted)" }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color, letterSpacing: 1.8, textTransform: "uppercase" } }, dot && /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--signal)" } }), children);
  const Btn = ({ variant = "solid", children, dark = false, href = "#", magnetic = false }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!magnetic || !ref.current || !window.gsap) return;
      const el = ref.current;
      const handleMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        window.gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power2.out" });
      };
      const handleLeave = () => window.gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }, [magnetic]);
    const styles = {
      solid: { background: dark ? "white" : "var(--ink)", color: dark ? "var(--ink)" : "white", border: 0 },
      ghost: { background: "transparent", color: dark ? "white" : "var(--ink)", border: `1px solid ${dark ? "rgba(255,255,255,0.22)" : "var(--line)"}` }
    }[variant];
    return /* @__PURE__ */ React.createElement("a", { ref, href, style: { ...styles, padding: "12px 22px", borderRadius: 999, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, textDecoration: "none", willChange: "transform" } }, children);
  };
  const BREAKPOINTS = { mobile: 768, tablet: 1100 };
  const clamp = (min, preferred, max) => `clamp(${min}px, ${preferred}, ${max}px)`;
  const useViewport = () => {
    const getWidth = () => typeof window === "undefined" ? 1280 : window.innerWidth;
    const [width, setWidth] = React.useState(getWidth);
    React.useEffect(() => {
      const onResize = () => setWidth(getWidth());
      window.addEventListener("resize", onResize, { passive: true });
      return () => window.removeEventListener("resize", onResize);
    }, []);
    return {
      width,
      isMobile: width < BREAKPOINTS.mobile,
      isTablet: width < BREAKPOINTS.tablet
    };
  };
  const NAV_ITEMS = [
    { label: "Services", mega: "services" },
    { label: "Industries", href: "industries.html" },
    { label: "Work", mega: "work" },
    { label: "About", href: "about.html" },
    { label: "Insights", href: "insights.html" }
  ];
  const SERVICE_PANELS = [
    { n: "01", label: "Compliance & Trust", href: "service-compliance.html", desc: "SOC 2 \xB7 ISO \xB7 HIPAA \xB7 pentests", accent: "var(--cobalt)", count: "12 active" },
    { n: "02", label: "Platform Engineering", href: "service-platform.html", desc: "Cloud \xB7 K8s \xB7 DevEx \xB7 IDPs", accent: "var(--forest)", count: "9 active" },
    { n: "03", label: "Product & Design", href: "service-product.html", desc: "0\u21921 \xB7 UX \xB7 brand \xB7 systems", accent: "var(--plum)", count: "11 active" },
    { n: "04", label: "AI & Applied ML", href: "service-ai.html", desc: "RAG \xB7 agents \xB7 evals \xB7 MLOps", accent: "var(--signal)", count: "8 active" }
  ];
  const RECENT_WORK = [
    { client: "Northwind Bank", tag: "Compliance \xB7 11 wk", href: "case-northwind.html", bg: "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.4 0.15 270))" },
    { client: "Polaris Health", tag: "AI \xB7 Product", href: "case-polaris.html", bg: "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.5 0.18 30))" },
    { client: "Lumen Energy", tag: "Platform \xB7 Data", href: "case-lumen.html", bg: "linear-gradient(135deg, oklch(0.55 0.13 155), oklch(0.35 0.1 165))" }
  ];
  const MegaPanel = ({ kind, dark, onClose }) => {
    const panelRef = React.useRef(null);
    const [hoverIdx, setHoverIdx] = React.useState(-1);
    React.useEffect(() => {
      if (!panelRef.current || !window.gsap) return;
      const gsap = window.gsap;
      gsap.set(panelRef.current, { autoAlpha: 0, y: -10 });
      gsap.to(panelRef.current, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" });
      const cards = panelRef.current.querySelectorAll("[data-mega-card]");
      gsap.set(cards, { y: 24, opacity: 0 });
      gsap.to(cards, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.05 });
    }, []);
    const bg = dark ? "oklch(0.16 0.012 250)" : "var(--paper)";
    const fg = dark ? "white" : "var(--ink)";
    const sub = dark ? "rgba(255,255,255,0.55)" : "var(--ink-2)";
    const line = dark ? "rgba(255,255,255,0.08)" : "var(--line)";
    const tile = dark ? "rgba(255,255,255,0.03)" : "var(--bg)";
    if (kind === "services") {
      return /* @__PURE__ */ React.createElement("div", { ref: panelRef, style: { position: "absolute", top: "100%", left: 0, right: 0, background: bg, borderBottom: `1px solid ${line}`, boxShadow: "0 24px 60px rgba(0,0,0,0.4)", zIndex: 60, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -100, right: -80, opacity: 0.04, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(Glyph, { size: 500, color: fg, weight: 32, gap: 70 })), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "44px 32px 48px", display: "grid", gridTemplateColumns: "1.4fr 2fr 1fr", gap: 56, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "data-mega-card": true }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: sub, letterSpacing: 1.6, textTransform: "uppercase" } }, "Services \xB7 04"), /* @__PURE__ */ React.createElement("h3", { style: { margin: "16px 0 14px", fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 600, letterSpacing: -1.3, lineHeight: 1, color: fg } }, "Four practices.", /* @__PURE__ */ React.createElement("br", null), "One delivery team."), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 13, color: sub, lineHeight: 1.55, maxWidth: 280 } }, "Senior practitioners stay through discovery, design, deliver, and operate. No vendor handoffs."), /* @__PURE__ */ React.createElement("a", { href: "services.html", style: { display: "inline-flex", alignItems: "center", gap: 8, marginTop: 22, fontSize: 13, fontWeight: 500, color: fg, textDecoration: "none" } }, "All services ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--signal)" } }, "\u2192"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, SERVICE_PANELS.map((s, i) => /* @__PURE__ */ React.createElement(
        "a",
        {
          key: s.n,
          "data-mega-card": true,
          href: s.href,
          onMouseEnter: () => setHoverIdx(i),
          onMouseLeave: () => setHoverIdx(-1),
          style: { position: "relative", display: "flex", flexDirection: "column", gap: 10, padding: "20px 22px", borderRadius: 12, background: tile, border: `1px solid ${hoverIdx === i ? s.accent : line}`, textDecoration: "none", color: fg, transition: "border-color 0.2s, transform 0.2s", transform: hoverIdx === i ? "translateY(-2px)" : "translateY(0)", overflow: "hidden" }
        },
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 14, right: 16, width: 6, height: 6, borderRadius: 999, background: s.accent, opacity: hoverIdx === i ? 1 : 0.5, boxShadow: hoverIdx === i ? `0 0 12px ${s.accent}` : "none", transition: "all 0.25s" } }),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: s.accent, letterSpacing: 1.4 } }, s.n), /* @__PURE__ */ React.createElement("span", { style: { width: 18, height: 1, background: line } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: sub, letterSpacing: 1.2, textTransform: "uppercase" } }, s.count)),
        /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 600, letterSpacing: -0.5 } }, s.label),
        /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: sub, letterSpacing: 0.5 } }, s.desc),
        /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", paddingTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: hoverIdx === i ? s.accent : sub, transition: "color 0.2s" } }, "Explore \u2192"))
      ))), /* @__PURE__ */ React.createElement("div", { "data-mega-card": true, style: { background: tile, borderRadius: 12, border: `1px solid ${line}`, padding: 20, display: "flex", flexDirection: "column", gap: 12, position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: "var(--signal)", letterSpacing: 1.4, textTransform: "uppercase" } }, "\u25CF Status"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 600, color: fg, letterSpacing: -0.3 } }, "Booking Q3 2026"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: sub, lineHeight: 1.5 } }, "3 senior teams available for new engagements starting July."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", flexDirection: "column", gap: 6 } }, [["Compliance", 0.6], ["Platform", 0.85], ["Product", 0.4], ["AI", 0.95]].map(([n, p]) => /* @__PURE__ */ React.createElement("div", { key: n, style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 60, fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: sub, letterSpacing: 0.8 } }, n), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: 4, background: line, borderRadius: 999, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${p * 100}%`, height: "100%", background: p > 0.8 ? "oklch(0.7 0.16 30)" : p > 0.6 ? "var(--signal)" : "var(--forest)", transition: "width 0.6s" } })), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: sub, width: 22, textAlign: "right" } }, Math.round(p * 100), "%")))))));
    }
    return /* @__PURE__ */ React.createElement("div", { ref: panelRef, style: { position: "absolute", top: "100%", left: 0, right: 0, background: bg, borderBottom: `1px solid ${line}`, boxShadow: "0 24px 60px rgba(0,0,0,0.4)", zIndex: 60, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: "44px 32px 48px", display: "grid", gridTemplateColumns: "1fr 2.4fr", gap: 48 } }, /* @__PURE__ */ React.createElement("div", { "data-mega-card": true }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: sub, letterSpacing: 1.6, textTransform: "uppercase" } }, "Recent work"), /* @__PURE__ */ React.createElement("h3", { style: { margin: "16px 0 14px", fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 600, letterSpacing: -1.2, lineHeight: 1, color: fg } }, "Outcomes,", /* @__PURE__ */ React.createElement("br", null), "not deliverables."), /* @__PURE__ */ React.createElement("a", { href: "work.html", style: { display: "inline-flex", alignItems: "center", gap: 8, marginTop: 14, fontSize: 13, fontWeight: 500, color: fg, textDecoration: "none" } }, "All case studies ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--signal)" } }, "\u2192"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 } }, RECENT_WORK.map((w) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: w.client,
        "data-mega-card": true,
        href: w.href,
        style: { borderRadius: 12, overflow: "hidden", textDecoration: "none", color: fg, background: tile, border: `1px solid ${line}`, display: "flex", flexDirection: "column", transition: "transform 0.25s" },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-3px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = "translateY(0)"
      },
      /* @__PURE__ */ React.createElement("div", { style: { height: 120, background: w.bg, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 12px)" } })),
      /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px", display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 9, color: sub, letterSpacing: 1.2, textTransform: "uppercase" } }, w.tag), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, letterSpacing: -0.3 } }, w.client))
    )))));
  };
  const Nav = ({ dark = true, current = "" }) => {
    const { isMobile } = useViewport();
    const [open, setOpen] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [closeTimer, setCloseTimer] = React.useState(null);
    const fg = dark ? "white" : "var(--ink)";
    const sub = dark ? "rgba(255,255,255,0.65)" : "var(--ink-2)";
    const border = dark ? "rgba(255,255,255,0.1)" : "var(--line)";
    React.useEffect(() => {
      if (isMobile) setOpen(null);
      else setMobileOpen(false);
    }, [isMobile]);
    const onEnter = (item) => {
      if (closeTimer) {
        clearTimeout(closeTimer);
        setCloseTimer(null);
      }
      setOpen(item.mega ? item.label : null);
    };
    const onLeave = () => {
      const t = setTimeout(() => setOpen(null), 120);
      setCloseTimer(t);
    };
    return /* @__PURE__ */ React.createElement("div", { style: { position: "sticky", top: 0, zIndex: 50, background: dark ? "var(--ink)" : "var(--paper)", borderBottom: `1px solid ${border}` } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: isMobile ? "16px 20px" : "18px 32px", display: "flex", alignItems: "center", gap: isMobile ? 16 : 40, position: "relative" } }, /* @__PURE__ */ React.createElement(Lockup, { size: 22, color: fg }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }), isMobile ? /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setMobileOpen((v) => !v),
        style: { border: `1px solid ${border}`, background: "transparent", color: fg, padding: "10px 14px", borderRadius: 999, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", cursor: "pointer" }
      },
      mobileOpen ? "Close" : "Menu"
    ) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 28, fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: sub } }, NAV_ITEMS.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.label, onMouseEnter: () => onEnter(item), onMouseLeave: onLeave, style: { paddingBottom: 18, marginBottom: -18 } }, /* @__PURE__ */ React.createElement("a", { href: item.href || (item.mega === "services" ? "services.html" : "work.html"), style: { cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: current === item.label || open === item.label ? fg : sub, textDecoration: "none", transition: "color 0.2s" } }, item.label, item.mega && /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", fontSize: 10, opacity: 0.5, transform: open === item.label ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s" } }, "\u25BE"))))), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: sub } }, "+1 (415) 555 \xB7 0146"), /* @__PURE__ */ React.createElement(Btn, { variant: "solid", dark, href: "contact.html", magnetic: true }, "Start a project \u2192"))), isMobile && mobileOpen && /* @__PURE__ */ React.createElement("div", { style: { borderTop: `1px solid ${border}`, padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 8 } }, NAV_ITEMS.map((item) => {
      const href = item.href || (item.mega === "services" ? "services.html" : "work.html");
      return /* @__PURE__ */ React.createElement("a", { key: item.label, href, onClick: () => setMobileOpen(false), style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: `1px solid ${border}`, color: current === item.label ? fg : sub, textDecoration: "none", fontSize: 16 } }, /* @__PURE__ */ React.createElement("span", null, item.label), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--signal)" } }, "\u2192"));
    }), /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 12, display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: sub } }, "+1 (415) 555 \xB7 0146"), /* @__PURE__ */ React.createElement(Btn, { variant: "solid", dark, href: "contact.html" }, "Start a project \u2192"))), !isMobile && open && /* @__PURE__ */ React.createElement("div", { onMouseEnter: () => {
      if (closeTimer) clearTimeout(closeTimer);
    }, onMouseLeave: onLeave, style: { position: "absolute", left: 0, right: 0 } }, /* @__PURE__ */ React.createElement(MegaPanel, { kind: NAV_ITEMS.find((i) => i.label === open).mega, dark, onClose: () => setOpen(null) })));
  };
  const Footer = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("footer", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "64px 20px 32px" : "80px 32px 40px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "2fr repeat(4, minmax(0, 1fr))", gap: isMobile ? 28 : 40, marginBottom: isMobile ? 40 : 60 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Lockup, { size: 28, color: "white" }), /* @__PURE__ */ React.createElement("p", { style: { margin: "20px 0 0", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: 280 } }, "Modx is a technology services firm. We partner with high-growth and enterprise teams across compliance, platform, product, and AI.")), [
      ["Services", [["Compliance & Trust", "service-compliance.html"], ["Platform Engineering", "service-platform.html"], ["Product & Design", "service-product.html"], ["AI & Applied ML", "service-ai.html"]]],
      ["Industries", [["Fintech", "industries.html"], ["Healthtech", "industries.html"], ["Climate", "industries.html"], ["Public sector", "industries.html"], ["Enterprise SaaS", "industries.html"]]],
      ["Company", [["About", "about.html"], ["Careers", "careers.html"], ["Insights", "insights.html"], ["Press", "press.html"], ["Contact", "contact.html"]]],
      ["Legal", [["Privacy", "privacy.html"], ["Terms", "terms.html"], ["Trust center", "trust.html"], ["DPA", "dpa.html"]]]
    ].map(([cat, items]) => /* @__PURE__ */ React.createElement("div", { key: cat }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, cat), /* @__PURE__ */ React.createElement("ul", { style: { margin: "16px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 } }, items.map(([label, href]) => /* @__PURE__ */ React.createElement("li", { key: label }, /* @__PURE__ */ React.createElement("a", { href, style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,0.85)", textDecoration: "none" } }, label))))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: 16, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, "\xA9 2026 Modx Technology Services \xB7 modxgo.com"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, "SOC 2 Type II"), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, "ISO 27001"), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, "HIPAA")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12 } }, ["LinkedIn", "GitHub", "X"].map((s) => /* @__PURE__ */ React.createElement("span", { key: s, style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)" } }, s))))));
  };
  const useReveal = () => {
    React.useEffect(() => {
      if (!window.gsap || !window.ScrollTrigger) return;
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 24, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
      document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
        gsap.fromTo(group.children, { y: 28, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: group, start: "top 85%", once: true }
        });
      });
      document.querySelectorAll("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        gsap.to(el, {
          y: () => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
        });
      });
      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            const v = obj.v >= 100 ? Math.round(obj.v) : obj.v.toFixed(1);
            el.textContent = prefix + v + suffix;
          },
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        });
      });
    }, []);
  };
  const PageShell = ({ children, navDark = true, current = "" }) => {
    useReveal();
    return /* @__PURE__ */ React.createElement("div", { style: { background: "var(--paper)", color: "var(--ink)", fontFamily: "'Space Grotesk', sans-serif", minHeight: "100vh", overflowX: "hidden" } }, /* @__PURE__ */ React.createElement(Nav, { dark: navDark, current }), children, /* @__PURE__ */ React.createElement(Footer, null));
  };
  const PageHero = ({ eyebrow, title, intro, accent = "var(--signal)" }) => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "72px 20px 88px" : "100px 32px 120px", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { "data-parallax": "0.3", style: { position: "absolute", top: 40, right: isMobile ? -140 : -100, opacity: 0.06, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 360 : 520, color: "white", weight: 36, gap: 70 })), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: accent } }), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.55)" }, eyebrow)), /* @__PURE__ */ React.createElement("h1", { "data-reveal": true, style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(40, "8vw", 76), fontWeight: 600, letterSpacing: clamp(-1.8, "-0.35vw", -3), lineHeight: 1, maxWidth: 1e3 } }, title), intro && /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "28px 0 0", fontSize: clamp(17, "2.8vw", 19), color: "rgba(255,255,255,0.7)", maxWidth: 660, lineHeight: 1.55 } }, intro)));
  };
  const CTAStrip = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "100px 32px" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { maxWidth: 1280, margin: "0 auto", padding: isMobile ? "36px 24px" : "70px 56px", borderRadius: 24, background: "var(--bg)", border: "1px solid var(--line)", display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1.6fr 1fr", gap: isMobile ? 24 : 40, alignItems: "center", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: -40, right: -40, opacity: 0.08 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 220 : 300, color: "var(--ink)", weight: 22, gap: 42 })), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Start a project"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "16px 0 12px", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(34, "5.2vw", 44), fontWeight: 600, letterSpacing: clamp(-1, "-0.18vw", -1.5), lineHeight: 1.05 } }, "Bring us a hard problem."), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 460 } }, "Most engagements start with a 45-minute call. We'll send back a written diagnosis within a week \u2014 yours to keep, even if you don't move forward.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10, position: "relative" } }, /* @__PURE__ */ React.createElement(Btn, { variant: "solid", href: "contact.html", magnetic: true }, "Book a discovery call \u2192"), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", href: "mailto:hello@modxgo.com" }, "hello@modxgo.com"))));
  };
  Object.assign(window, {
    Glyph,
    Lockup,
    Mono,
    Eyebrow,
    Btn,
    Nav,
    Footer,
    PageShell,
    PageHero,
    CTAStrip,
    useReveal,
    useViewport,
    clamp
  });
})();
