(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, CTAStrip, useViewport, clamp } = window;
  const data = window.LEGAL_DATA;
  const LegalDoc = () => {
    const { isMobile, isTablet } = useViewport();
    const navRef = React.useRef(null);
    const linkRefs = React.useRef({});
    const [active, setActive] = React.useState(() => {
      const hash = typeof window === "undefined" ? "" : window.location.hash.replace(/^#/u, "");
      return data.sections.some((section) => section.id === hash) ? hash : data.sections[0].id;
    });
    const getScrollOffset = React.useCallback(() => {
      const siteNav = document.querySelector("[data-site-nav]");
      const siteNavHeight = siteNav ? siteNav.getBoundingClientRect().height : 72;
      return siteNavHeight + (isTablet ? 20 : 28);
    }, [isTablet]);
    const syncHash = React.useCallback((id, mode = "replace") => {
      const nextHash = `#${id}`;
      if (window.location.hash === nextHash) return;
      const method = mode === "push" ? "pushState" : "replaceState";
      window.history[method](null, "", nextHash);
    }, []);
    const scrollToSection = React.useCallback((id, behavior = "smooth", hashMode = "replace") => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = window.scrollY + el.getBoundingClientRect().top - getScrollOffset();
      window.scrollTo({ top, behavior });
      syncHash(id, hashMode);
    }, [getScrollOffset, syncHash]);
    React.useEffect(() => {
      const hash = window.location.hash.replace(/^#/u, "");
      if (!hash || !data.sections.some((section) => section.id === hash)) return;
      setActive(hash);
      window.requestAnimationFrame(() => scrollToSection(hash, "auto", "replace"));
    }, [scrollToSection]);
    React.useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash.replace(/^#/u, "");
        if (!hash || !data.sections.some((section) => section.id === hash)) return;
        setActive(hash);
        scrollToSection(hash, "smooth", "replace");
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }, [scrollToSection]);
    React.useEffect(() => {
      const offset = getScrollOffset();
      const elements = data.sections.map((section) => document.getElementById(section.id)).filter(Boolean);
      if (!elements.length) return void 0;
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio || a.boundingClientRect.top - b.boundingClientRect.top);
          if (!visible.length) return;
          const nextId = visible[0].target.id;
          setActive((current) => {
            if (current === nextId) return current;
            syncHash(nextId, "replace");
            return nextId;
          });
        },
        {
          rootMargin: `-${offset}px 0px -55% 0px`,
          threshold: [0.12, 0.24, 0.48, 0.72]
        }
      );
      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }, [getScrollOffset, syncHash]);
    React.useEffect(() => {
      const activeLink = linkRefs.current[active];
      if (!activeLink) return;
      activeLink.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
    }, [active]);
    const contentsTop = isTablet ? getScrollOffset() - 8 : 88;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "72px 20px 56px" : "80px 32px 60px", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 20, right: -80, opacity: 0.04 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 280 : 420, color: "white", weight: 28, gap: 56 })), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)" }, data.kind), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 12, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, "Effective ", data.effective), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 12, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, "Version ", data.version)), /* @__PURE__ */ React.createElement("h1", { "data-reveal": true, style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(38, "7vw", 60), fontWeight: 600, letterSpacing: clamp(-1.2, "-0.2vw", -2.2), lineHeight: 1, maxWidth: 900 } }, data.title), data.subtitle && /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "20px 0 0", fontSize: clamp(17, "2.8vw", 18), color: "rgba(255,255,255,0.7)", maxWidth: 700, lineHeight: 1.55 } }, data.subtitle))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "56px 20px 72px" : "60px 32px 120px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isTablet ? "1fr" : "240px 1fr", gap: isMobile ? 32 : 60, alignItems: "start" } }, /* @__PURE__ */ React.createElement("nav", { style: { position: "sticky", top: contentsTop, alignSelf: "start", zIndex: 5, background: "var(--paper)", paddingBottom: isTablet ? 8 : 0 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, "Contents"), /* @__PURE__ */ React.createElement(
      "ul",
      {
        ref: navRef,
        style: {
          margin: "16px 0 0",
          padding: 0,
          listStyle: "none",
          display: isTablet ? "flex" : "grid",
          gridTemplateColumns: isTablet ? void 0 : "1fr",
          gap: 8,
          overflowX: isTablet ? "auto" : "visible",
          paddingBottom: isTablet ? 6 : 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }
      },
      data.sections.map((s) => /* @__PURE__ */ React.createElement("li", { key: s.id }, /* @__PURE__ */ React.createElement(
        "a",
        {
          ref: (node) => {
            if (node) linkRefs.current[s.id] = node;
          },
          href: `#${s.id}`,
          "aria-current": active === s.id ? "true" : "false",
          onClick: (event) => {
            event.preventDefault();
            setActive(s.id);
            scrollToSection(s.id, "smooth", "push");
          },
          style: {
            display: "block",
            padding: isMobile ? "10px 12px" : "8px 12px",
            borderRadius: 10,
            fontSize: 13,
            whiteSpace: isTablet ? "nowrap" : "normal",
            color: active === s.id ? "var(--ink)" : "var(--ink-2)",
            background: active === s.id ? "var(--bg)" : "transparent",
            textDecoration: "none",
            border: isTablet ? `1px solid ${active === s.id ? "var(--ink)" : "var(--line)"}` : "1px solid transparent",
            borderLeft: isTablet ? void 0 : active === s.id ? "2px solid var(--signal)" : "2px solid transparent",
            transition: "all 0.15s"
          }
        },
        s.label
      )))
    ), data.contact && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32, padding: "16px 14px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, "Questions?"), /* @__PURE__ */ React.createElement("a", { href: `mailto:${data.contact}`, style: { display: "block", marginTop: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--ink)", textDecoration: "none" } }, data.contact))), /* @__PURE__ */ React.createElement("article", { style: { maxWidth: isTablet ? "100%" : 720 } }, data.sections.map((s) => /* @__PURE__ */ React.createElement("section", { key: s.id, id: s.id, style: { marginBottom: 56, scrollMarginTop: isTablet ? 140 : 112 } }, /* @__PURE__ */ React.createElement("h2", { style: { margin: "0 0 16px", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(24, "4vw", 28), fontWeight: 600, letterSpacing: -0.8, lineHeight: 1.15 } }, s.label), s.body.map((b, i) => {
      if (typeof b === "string") return /* @__PURE__ */ React.createElement("p", { key: i, dangerouslySetInnerHTML: { __html: b }, style: { margin: "0 0 14px", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" } });
      if (b.type === "list") return /* @__PURE__ */ React.createElement("ul", { key: i, style: { margin: "0 0 18px", paddingLeft: 20, fontSize: 15, lineHeight: 1.7, color: "var(--ink)" } }, b.items.map((it, j) => /* @__PURE__ */ React.createElement("li", { key: j, style: { marginBottom: 6 }, dangerouslySetInnerHTML: { __html: it } })));
      if (b.type === "table") return isMobile ? /* @__PURE__ */ React.createElement("div", { key: i, style: { margin: "8px 0 22px", display: "grid", gap: 10 } }, b.rows.map((row, ri) => /* @__PURE__ */ React.createElement("div", { key: ri, style: { padding: "16px 14px", background: "var(--bg)", borderRadius: 12, border: "1px solid var(--line)", display: "grid", gap: 10 } }, row.map((cell, ci) => /* @__PURE__ */ React.createElement("div", { key: ci, style: { display: "grid", gridTemplateColumns: "92px 1fr", gap: 12, alignItems: "start" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, b.cols[ci]), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5 } }, cell)))))) : /* @__PURE__ */ React.createElement("div", { key: i, style: { margin: "8px 0 22px", border: "1px solid var(--line)", borderRadius: 10, overflowX: "auto" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: b.cols.map(() => "1fr").join(" "), background: "var(--bg)", padding: "12px 16px", borderBottom: "1px solid var(--line)" } }, b.cols.map((c) => /* @__PURE__ */ React.createElement(Mono, { key: c, color: "var(--ink-2)", size: 10 }, c))), b.rows.map((row, ri) => /* @__PURE__ */ React.createElement("div", { key: ri, style: { display: "grid", gridTemplateColumns: b.cols.map(() => "1fr").join(" "), padding: "12px 16px", borderBottom: ri < b.rows.length - 1 ? "1px solid var(--line)" : "none", fontSize: 13.5, color: "var(--ink)" } }, row.map((cell, ci) => /* @__PURE__ */ React.createElement("span", { key: ci }, cell))))));
      return null;
    })))))));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "" }, /* @__PURE__ */ React.createElement(LegalDoc, null), /* @__PURE__ */ React.createElement(CTAStrip, null)));
})();
