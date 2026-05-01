(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, CTAStrip, useViewport, clamp } = window;
  const { WordReveal, CursorGlyph, Scramble, SpotlightCard, FloatingProgress, SignalField, HeroDepthScene } = window;
  const Hero = () => {
    const { width, isPhone, isMobile, isTablet } = useViewport();
    const isHeroStacked = isTablet || width < 1560;
    const sectionRef = React.useRef(null);
    const glowRef = React.useRef(null);
    const haloRef = React.useRef(null);
    const glyphRef = React.useRef(null);
    const gridRef = React.useRef(null);
    const copyRef = React.useRef(null);
    const panelRef = React.useRef(null);
    React.useEffect(() => {
      if (isMobile || !window.gsap || !sectionRef.current) return void 0;
      const gsap = window.gsap;
      const section = sectionRef.current;
      const copy = copyRef.current;
      const panel = panelRef.current;
      const glyph = glyphRef.current;
      const grid = gridRef.current;
      const glow = glowRef.current;
      const halo = haloRef.current;
      const motionX = isHeroStacked ? 9 : 14;
      const motionY = isHeroStacked ? 7 : 10;
      const handleMove = (event) => {
        const rect = section.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        if (glow) {
          gsap.to(glow, {
            x: px * (isHeroStacked ? 110 : 160),
            y: py * (isHeroStacked ? 64 : 96),
            opacity: 0.42,
            duration: 0.45,
            ease: "power2.out"
          });
        }
        if (halo) {
          gsap.to(halo, {
            x: px * (isHeroStacked ? 38 : 58),
            y: py * (isHeroStacked ? 28 : 42),
            scale: 1.03,
            opacity: 0.18,
            duration: 0.5,
            ease: "power2.out"
          });
        }
        if (grid) {
          gsap.to(grid, {
            x: px * -10,
            y: py * -8,
            duration: 0.8,
            ease: "power3.out"
          });
        }
        if (glyph) {
          gsap.to(glyph, {
            x: px * (isHeroStacked ? 18 : 26),
            y: py * (isHeroStacked ? 12 : 18),
            rotation: px * -4,
            duration: 0.9,
            ease: "power3.out"
          });
        }
        if (copy) {
          gsap.to(copy, {
            x: px * -motionX,
            y: py * -motionY,
            duration: 0.45,
            ease: "power3.out"
          });
        }
        if (panel) {
          gsap.to(panel, {
            x: px * motionX,
            y: py * motionY,
            rotationY: px * (isHeroStacked ? 1.8 : 2.8),
            rotationX: py * (isHeroStacked ? -1.2 : -2),
            scale: isHeroStacked ? 1.004 : 1.008,
            duration: 0.55,
            ease: "power3.out",
            transformPerspective: 1200,
            transformOrigin: "50% 50%"
          });
        }
      };
      const handleLeave = () => {
        if (glow) gsap.to(glow, { x: 0, y: 0, opacity: 0.22, duration: 0.6, ease: "power2.out" });
        if (halo) gsap.to(halo, { x: 0, y: 0, scale: 1, opacity: 0.1, duration: 0.65, ease: "power2.out" });
        if (grid) gsap.to(grid, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
        if (glyph) gsap.to(glyph, { x: 0, y: 0, rotation: 0, duration: 0.95, ease: "power3.out" });
        if (copy) gsap.to(copy, { x: 0, y: 0, duration: 0.55, ease: "power3.out" });
        if (panel) gsap.to(panel, { x: 0, y: 0, rotationY: 0, rotationX: 0, scale: 1, duration: 0.6, ease: "power3.out" });
      };
      section.addEventListener("pointermove", handleMove);
      section.addEventListener("pointerleave", handleLeave);
      return () => {
        section.removeEventListener("pointermove", handleMove);
        section.removeEventListener("pointerleave", handleLeave);
      };
    }, [isHeroStacked, isMobile]);
    return /* @__PURE__ */ React.createElement("section", { ref: sectionRef, "data-section": "Hero", style: { background: "var(--ink)", color: "white", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement(HeroDepthScene, { scopeRef: sectionRef, stacked: isHeroStacked, enabled: !isMobile }), /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: glowRef,
        style: {
          position: "absolute",
          left: isHeroStacked ? "56%" : "52%",
          top: isHeroStacked ? "30%" : "42%",
          width: isHeroStacked ? 420 : 620,
          height: isHeroStacked ? 420 : 620,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(82,122,255,0.16), rgba(255,255,255,0.04) 32%, transparent 68%)",
          filter: "blur(64px)",
          opacity: 0.22,
          pointerEvents: "none"
        }
      }
    ), /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: haloRef,
        style: {
          position: "absolute",
          left: isHeroStacked ? "35%" : "44%",
          top: isHeroStacked ? "36%" : "34%",
          width: isHeroStacked ? 260 : 360,
          height: isHeroStacked ? 260 : 360,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          background: "radial-gradient(circle, rgba(255,255,255,0.05), transparent 72%)",
          opacity: 0.1,
          pointerEvents: "none"
        }
      }
    ), /* @__PURE__ */ React.createElement("div", { ref: glyphRef, "data-parallax": "0.4", style: { position: "absolute", top: 80, right: isMobile ? -200 : -120, opacity: 0.035, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 420 : 680, color: "white", weight: 42, gap: 90 })), /* @__PURE__ */ React.createElement("div", { ref: gridRef, style: { position: "absolute", inset: "-4%", backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", padding: isPhone ? "72px 16px 88px" : isMobile ? "84px 20px 96px" : "120px 32px 140px", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 28, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,0.55)" } }, /* @__PURE__ */ React.createElement(Scramble, { text: "Modx \xB7 Technology Services", trigger: "mount", duration: 1 })), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 14, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,0.4)" } }, /* @__PURE__ */ React.createElement(Scramble, { text: "est. 2026 \xB7 SOC 2 Type II", trigger: "mount", duration: 1.4, delay: 0.2 }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isHeroStacked ? "1fr" : "minmax(0, 1.05fr) minmax(500px, 0.95fr)", gap: isHeroStacked ? isMobile ? 34 : 48 : 40, alignItems: isHeroStacked ? "start" : "center" } }, /* @__PURE__ */ React.createElement("div", { ref: copyRef, style: { minWidth: 0 } }, /* @__PURE__ */ React.createElement(WordReveal, { text: "Where engineering, design, and", size: isPhone ? 38 : isMobile ? 44 : isTablet ? 72 : 96, delay: 0.3 }), /* @__PURE__ */ React.createElement("h1", { style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: isPhone ? 38 : isMobile ? 44 : isTablet ? 72 : 96, fontWeight: 600, letterSpacing: isMobile ? -2 : -4, lineHeight: 0.96, color: "white", display: "flex", alignItems: "flex-end", gap: isMobile ? 12 : 18, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", overflow: "hidden", paddingBottom: "0.05em" } }, /* @__PURE__ */ React.createElement("span", { className: "security-word", style: { display: "inline-block" } }, "security")), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "flex-end", transform: "translateY(-0.04em)" } }, /* @__PURE__ */ React.createElement(CursorGlyph, { size: isPhone ? 42 : isMobile ? 48 : isTablet ? 64 : 84, color: "var(--signal)" })), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", overflow: "hidden", paddingBottom: "0.05em" } }, /* @__PURE__ */ React.createElement("span", { className: "meet-word", style: { display: "inline-block" } }, "meet."))), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "32px 0 0", fontSize: clamp(17, "2.8vw", 19), color: "rgba(255,255,255,0.7)", maxWidth: 620, lineHeight: 1.55 } }, "Modx is a technology services firm partnering with high-growth and enterprise teams across the disciplines a modern product needs \u2014 compliance, platform, design, and AI."), /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", flexDirection: isMobile ? "column" : "row", gap: 12, marginTop: 40, alignItems: isMobile ? "stretch" : "center" } }, /* @__PURE__ */ React.createElement(Btn, { variant: "solid", dark: true, href: "contact.html", magnetic: true, fullOnMobile: true }, "Start a project \u2192"), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", dark: true, href: "work.html", fullOnMobile: true }, "See work"))), /* @__PURE__ */ React.createElement("div", { ref: panelRef, "data-reveal": true, style: { minWidth: 0, maxWidth: isHeroStacked ? 760 : "none", width: "100%", justifySelf: isHeroStacked ? "center" : "stretch", margin: isHeroStacked ? "0 auto" : 0 } }, /* @__PURE__ */ React.createElement(SignalField, null))), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { marginTop: isMobile ? 48 : 72, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)", display: "grid", gridTemplateColumns: isPhone ? "1fr" : isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))", gap: 24 } }, [
      { n: "120", suffix: "+", label: "Engineers, designers, and auditors" },
      { n: "40", suffix: "+", label: "Active enterprise engagements" },
      { n: "18", suffix: "", label: "Industries served" },
      { n: "2.4", prefix: "$", suffix: "B", label: "Client value delivered in 2025" }
    ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label }, /* @__PURE__ */ React.createElement("div", { "data-count": s.n, "data-prefix": s.prefix || "", "data-suffix": s.suffix || "", style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(34, "5vw", 48), fontWeight: 600, letterSpacing: -2, color: "white" } }, (s.prefix || "") + "0" + (s.suffix || "")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4, lineHeight: 1.4 } }, s.label))))));
  };
  const Trusted = () => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "32px 20px" : "48px 32px", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: 24, justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--muted)" }, "Selected experience across"), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "flex", gap: 24, flex: 1, justifyContent: "space-around", flexWrap: "wrap", width: "100%" } }, ["Workforce tech", "Payments", "Creative production", "Health", "Fintech", "Climate", "Enterprise SaaS"].map((l) => /* @__PURE__ */ React.createElement("span", { key: l, style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 500, color: "var(--ink-2)", opacity: 0.6, letterSpacing: -0.3 } }, l)))));
  };
  const services = [
    { n: "01", title: "Compliance & Trust", sub: "SOC 2 \xB7 ISO 27001 \xB7 HIPAA \xB7 PCI", desc: "Get audit-ready in weeks, not quarters. We staff the controls work, document the evidence, and keep the program running long after the certificate ships.", items: ["Audit prep & remediation", "Continuous monitoring", "Vendor risk programs", "Penetration testing"], accent: "var(--cobalt)", href: "service-compliance.html" },
    { n: "02", title: "Platform Engineering", sub: "Cloud \xB7 Kubernetes \xB7 Data \xB7 DevEx", desc: "Reduce time-to-production for everything your engineers ship. We build the developer platforms, internal tools, and golden paths that turn velocity into a habit.", items: ["Cloud migrations", "Internal developer platforms", "Data infrastructure", "Reliability engineering"], accent: "var(--forest)", href: "service-platform.html" },
    { n: "03", title: "Product & Design", sub: "Strategy \xB7 UX \xB7 Brand \xB7 Research", desc: "From zero-to-one product launches to enterprise UX retrofits. Our design team works alongside engineering \u2014 the same people through discovery, design, and ship.", items: ["0\u21921 product design", "UX audits & redesigns", "Design systems", "Brand & identity"], accent: "var(--plum)", href: "service-product.html" },
    { n: "04", title: "AI & Applied ML", sub: "RAG \xB7 Agents \xB7 Evals \xB7 Inference", desc: "Production-grade AI that holds up to compliance review. We design retrieval pipelines, agent systems, and the eval rigs that keep them honest in front of customers.", items: ["RAG & retrieval systems", "Agent architectures", "Eval & observability", "Model cost engineering"], accent: "var(--signal)", href: "service-ai.html" }
  ];
  const ServiceCard = ({ s }) => {
    const { isMobile } = useViewport();
    const [hover, setHover] = React.useState(false);
    return /* @__PURE__ */ React.createElement(SpotlightCard, null, /* @__PURE__ */ React.createElement(
      "a",
      {
        href: s.href,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: { textDecoration: "none", padding: isMobile ? "28px 24px" : "36px 32px", background: hover ? "var(--ink)" : "var(--paper)", color: hover ? "white" : "var(--ink)", border: "1px solid var(--line)", borderRadius: 16, transition: "all 0.3s ease", cursor: "pointer", display: "flex", flexDirection: "column", gap: 18, minHeight: isMobile ? 0 : 380, position: "relative", overflow: "hidden" }
      },
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 24, right: 24, opacity: hover ? 0.15 : 0.06, transition: "all 0.3s", transform: hover ? "rotate(15deg) scale(1.1)" : "rotate(0)" } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 92 : 120, color: hover ? "white" : "var(--ink)", weight: 14, gap: 20 })),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: hover ? "rgba(255,255,255,0.5)" : "var(--muted)" }, s.n), /* @__PURE__ */ React.createElement("span", { style: { width: 24, height: 1, background: hover ? "rgba(255,255,255,0.3)" : "var(--line)" } }), /* @__PURE__ */ React.createElement(Mono, { color: hover ? "rgba(255,255,255,0.55)" : "var(--ink-2)", size: 10 }, s.sub)),
      /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(28, "4vw", 32), fontWeight: 600, letterSpacing: -1, lineHeight: 1.05 } }, s.title),
      /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14, color: hover ? "rgba(255,255,255,0.7)" : "var(--ink-2)", lineHeight: 1.55 } }, s.desc),
      /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", flexWrap: "wrap", gap: 8 } }, s.items.map((it) => /* @__PURE__ */ React.createElement("span", { key: it, style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, padding: "5px 10px", border: `1px solid ${hover ? "rgba(255,255,255,0.2)" : "var(--line)"}`, borderRadius: 999, color: hover ? "rgba(255,255,255,0.7)" : "var(--ink-2)", letterSpacing: 0.5 } }, it))),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: hover ? s.accent : "var(--ink)", marginTop: 4 } }, /* @__PURE__ */ React.createElement("span", null, "Explore service"), /* @__PURE__ */ React.createElement("span", { style: { transform: hover ? "translateX(6px)" : "translateX(0)", transition: "transform 0.25s" } }, "\u2192"))
    ));
  };
  const Services = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--bg)", padding: isMobile ? "72px 20px" : "120px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 2fr", gap: 32, marginBottom: 40, alignItems: "end" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "What we do"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "16px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(36, "6vw", 60), fontWeight: 600, letterSpacing: -2, lineHeight: 1 } }, "Four practices.", /* @__PURE__ */ React.createElement("br", null), "One delivery team.")), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: 0, fontSize: 17, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 540 } }, "Most firms hand you off between disciplines. We don't. The same engagement leads stay through compliance, platform, design, and AI \u2014 so context never gets lost in translation.")), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: 14 } }, services.map((s) => /* @__PURE__ */ React.createElement(ServiceCard, { key: s.n, s })))));
  };
  const capabilities = [
    ["Compliance", ["SOC 2 Type I & II", "ISO 27001 / 27018", "HIPAA / HITRUST", "PCI DSS", "GDPR / CCPA", "Vendor risk", "Pentests"]],
    ["Platform", ["AWS / GCP / Azure", "Kubernetes", "Terraform", "CI/CD", "Observability", "Cost optimization", "Internal tools"]],
    ["Data & AI", ["Snowflake / Databricks", "RAG pipelines", "Agent systems", "Vector stores", "ML evaluation", "MLOps", "LLM serving"]],
    ["Product", ["Discovery & strategy", "0\u21921 design", "Design systems", "User research", "Brand", "Web", "Mobile"]],
    ["Engineering", ["Backend (Go / Python / Rust)", "Frontend (React / TS)", "iOS / Android", "API design", "Embedded", "Game", "Web3"]],
    ["Industries", ["Fintech", "Healthtech", "Climate", "Public sector", "Defense", "Media", "Enterprise SaaS"]]
  ];
  const Capabilities = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "120px 32px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Capabilities")), /* @__PURE__ */ React.createElement("h2", { "data-reveal": true, style: { margin: "16px 0 40px", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(36, "6vw", 56), fontWeight: 600, letterSpacing: -2, lineHeight: 1, maxWidth: 800 } }, "A full-stack technology partner \u2014 engineering through go-to-market."), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 14 } }, capabilities.map(([cat, items]) => /* @__PURE__ */ React.createElement("div", { key: cat, style: { border: "1px solid var(--line)", borderRadius: 16, padding: "28px 24px", background: "var(--paper)", minHeight: isMobile ? 0 : 240 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 20 } }, /* @__PURE__ */ React.createElement(Glyph, { size: 16, color: "var(--signal)", gap: 3, weight: 2.5 }), /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)" }, cat)), /* @__PURE__ */ React.createElement("ul", { style: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 } }, items.map((it) => /* @__PURE__ */ React.createElement("li", { key: it, style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: "var(--ink)", letterSpacing: -0.2 } }, it))))))));
  };
  const work = (window.WORK_ITEMS || []).slice(0, 3);
  const WorkCard = ({ w }) => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement(
      "a",
      {
        href: w.href,
        style: { textDecoration: "none", borderRadius: 16, overflow: "hidden", background: "var(--ink)", color: "white", display: "flex", flexDirection: "column", minHeight: isMobile ? 0 : 460, position: "relative", cursor: "pointer", transition: "transform 0.3s" },
        onMouseEnter: (e) => e.currentTarget.style.transform = "translateY(-4px)",
        onMouseLeave: (e) => e.currentTarget.style.transform = "translateY(0)"
      },
      /* @__PURE__ */ React.createElement("div", { style: { height: isMobile ? 190 : 220, background: w.bg, position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: 24 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 64 : 80, color: "rgba(255,255,255,0.4)", weight: 9, gap: 12 }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 12px)" } })),
      /* @__PURE__ */ React.createElement("div", { style: { padding: isMobile ? "24px 20px" : "28px 28px 32px", display: "flex", flexDirection: "column", gap: 14, flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, w.tag), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, color: "white" } }, w.client)), /* @__PURE__ */ React.createElement("h4", { style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 500, letterSpacing: -0.6, lineHeight: 1.25 } }, w.title), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)", gap: 12, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(30, "5vw", 36), fontWeight: 600, letterSpacing: -1, color: "var(--signal)" } }, w.metric), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)", size: 10 }, w.metricLabel)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13 } }, "Read case \u2192")))
    );
  };
  const Work = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--bg)", padding: isMobile ? "72px 20px" : "120px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: isTablet ? "column" : "row", alignItems: isTablet ? "flex-start" : "end", justifyContent: "space-between", gap: 20, marginBottom: 40 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Work"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "16px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(36, "6vw", 56), fontWeight: 600, letterSpacing: -2, lineHeight: 1 } }, "Selected launches, anonymized where needed.")), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", href: "work.html" }, "All work \u2192")), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 14 } }, work.map((w) => /* @__PURE__ */ React.createElement(WorkCard, { key: w.client, w })))));
  };
  const phases = [
    { n: "01", title: "Discovery", time: "1\u20132 wk", desc: "Workshops, audit, and a written diagnosis. You leave with a roadmap whether or not we work together." },
    { n: "02", title: "Design", time: "2\u20134 wk", desc: "Architecture, controls, and prototypes. We pressure-test against your team and your auditors." },
    { n: "03", title: "Deliver", time: "4\u201324 wk", desc: "Embedded squad of senior engineers, designers, and auditors. Weekly demos, no monthly status decks." },
    { n: "04", title: "Operate", time: "Ongoing", desc: "We don't disappear at handoff. Monitoring, optimization, and on-call rotations stay with us as long as you want." }
  ];
  const Approach = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "120px 32px", borderTop: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 2fr", gap: 32, marginBottom: 40, alignItems: "end" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "How we work"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "16px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(36, "6vw", 56), fontWeight: 600, letterSpacing: -2, lineHeight: 1 } }, "One team. Four phases. No handoffs.")), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: 0, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 540 } }, "Most firms split discovery, design, and delivery across three vendors. We staff senior practitioners across the whole arc \u2014 the people in your discovery workshop are the ones writing production code three weeks later.")), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))", gap: 14 } }, phases.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.n, style: { padding: "28px 24px", background: "var(--bg)", borderRadius: 14, border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 14, minHeight: isMobile ? 0 : 240, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--muted)" }, p.n), /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)" }, p.time)), /* @__PURE__ */ React.createElement("h4", { style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 600, letterSpacing: -0.6 } }, p.title), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 } }, p.desc), !isTablet && i < phases.length - 1 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 32, right: -10, color: "var(--muted)", fontSize: 14 } }, "\u2192"))))));
  };
  const Quote = () => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "88px 20px" : "140px 32px", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { "data-parallax": "0.25", style: { position: "absolute", top: 60, left: -80, opacity: 0.06 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 320 : 520, color: "white", weight: 32, gap: 70 })), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1100, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, "From the field")), /* @__PURE__ */ React.createElement("h2", { "data-reveal": true, style: { margin: "28px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(28, "5vw", 44), fontWeight: 500, letterSpacing: -1.2, lineHeight: 1.18 } }, "Clients usually call us when the story, the surface, and the implementation have drifted apart."), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "24px 0 0", maxWidth: 760, fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 } }, "The public work page is organized by problem type rather than by logo. That keeps the examples honest while still showing the kind of systems, funnels, and product surfaces we actually ship.")));
  };
  const HeroSecondLine = () => {
    React.useEffect(() => {
      if (!window.gsap) return;
      window.gsap.set(".security-word, .meet-word", { yPercent: 110 });
      window.gsap.to(".security-word, .meet-word", { yPercent: 0, duration: 0.9, ease: "power3.out", delay: 0.7, stagger: 0.08 });
    }, []);
    return null;
  };
  const MarqueeStrip = () => {
    const { isMobile } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "32px 20px" : "40px 32px", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" } }, ["Compliance", "Platform", "Product", "Applied AI", "Engineering", "Design"].map((item) => /* @__PURE__ */ React.createElement("span", { key: item, style: { padding: isMobile ? "10px 14px" : "12px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", fontFamily: "'JetBrains Mono', monospace", fontSize: isMobile ? 11 : 12, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.68)" } }, item)))));
  };
  const Site = () => /* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "" }, /* @__PURE__ */ React.createElement(HeroSecondLine, null), /* @__PURE__ */ React.createElement(FloatingProgress, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(Trusted, null), /* @__PURE__ */ React.createElement(MarqueeStrip, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Capabilities, null), /* @__PURE__ */ React.createElement(Work, null), /* @__PURE__ */ React.createElement(Approach, null), /* @__PURE__ */ React.createElement(Quote, null), /* @__PURE__ */ React.createElement(CTAStrip, null));
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(Site, null));
})();
