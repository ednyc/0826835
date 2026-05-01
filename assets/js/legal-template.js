(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, CTAStrip, useViewport, clamp } = window;
  const data = window.LEGAL_DATA;
  const LegalDoc = () => {
    const { isMobile, isTablet } = useViewport();
    const navRef = React.useRef(null);
    const linkRefs = React.useRef({});
    const desktopRailRef = React.useRef(null);
    const desktopNavShellRef = React.useRef(null);
    const articleRef = React.useRef(null);
    const [active, setActive] = React.useState(() => {
      const hash = typeof window === "undefined" ? "" : window.location.hash.replace(/^#/u, "");
      return data.sections.some((section) => section.id === hash) ? hash : data.sections[0].id;
    });
    const [desktopRailHeight, setDesktopRailHeight] = React.useState(null);
    const [desktopNavMode, setDesktopNavMode] = React.useState("static");
    const [desktopNavMetrics, setDesktopNavMetrics] = React.useState({ left: 0, width: 240 });
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
      const targetTop = window.scrollY + el.getBoundingClientRect().top - getScrollOffset();
      const maxScrollTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const top = Math.max(0, Math.min(targetTop, maxScrollTop));
      window.scrollTo({ top, behavior });
      syncHash(id, hashMode);
    }, [getScrollOffset, syncHash]);
    React.useEffect(() => {
      const hash = window.location.hash.replace(/^#/u, "");
      if (!hash || !data.sections.some((section) => section.id === hash)) return;
      setActive(hash);
    }, []);
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
      const elements = data.sections.map((section) => document.getElementById(section.id)).filter(Boolean);
      if (!elements.length) return void 0;
      let raf = 0;
      const updateActiveFromScroll = () => {
        raf = 0;
        const offset = getScrollOffset() + 12;
        const scrollPosition = window.scrollY + offset;
        const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6;
        let nextId = elements[0].id;
        for (const element of elements) {
          if (element.offsetTop <= scrollPosition) nextId = element.id;
          else break;
        }
        if (pageBottom) nextId = elements[elements.length - 1].id;
        setActive((current) => {
          if (current === nextId) return current;
          syncHash(nextId, "replace");
          return nextId;
        });
      };
      const scheduleUpdate = () => {
        if (raf) return;
        raf = window.requestAnimationFrame(updateActiveFromScroll);
      };
      scheduleUpdate();
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      return () => {
        if (raf) window.cancelAnimationFrame(raf);
        window.removeEventListener("scroll", scheduleUpdate);
        window.removeEventListener("resize", scheduleUpdate);
      };
    }, [getScrollOffset, syncHash]);
    const contentsTop = isTablet ? getScrollOffset() - 8 : 88;
    const desktopTop = 88;
    React.useEffect(() => {
      if (isTablet) {
        setDesktopNavMode("static");
        return void 0;
      }
      let raf = 0;
      const updateDesktopNav = () => {
        raf = 0;
        const rail = desktopRailRef.current;
        const article = articleRef.current;
        if (!rail || !article) return;
        const railRect = rail.getBoundingClientRect();
        const articleRect = article.getBoundingClientRect();
        const scrollY = window.scrollY;
        const railTopDoc = scrollY + railRect.top;
        const articleBottomDoc = scrollY + articleRect.bottom;
        const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
        const nextRailHeight = Math.max(article.offsetHeight, navHeight);
        const start = railTopDoc - desktopTop;
        const end = articleBottomDoc - navHeight - desktopTop;
        setDesktopRailHeight((current) => current === nextRailHeight ? current : nextRailHeight);
        setDesktopNavMetrics((current) => {
          const next = { left: railRect.left, width: railRect.width };
          return current.left === next.left && current.width === next.width ? current : next;
        });
        const nextMode = scrollY <= start ? "static" : scrollY >= end ? "bottom" : "fixed";
        setDesktopNavMode((current) => current === nextMode ? current : nextMode);
      };
      const scheduleUpdate = () => {
        if (raf) return;
        raf = window.requestAnimationFrame(updateDesktopNav);
      };
      scheduleUpdate();
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
      return () => {
        if (raf) window.cancelAnimationFrame(raf);
        window.removeEventListener("scroll", scheduleUpdate);
        window.removeEventListener("resize", scheduleUpdate);
      };
    }, [desktopTop, isTablet]);
    const desktopNavShellStyle = desktopNavMode === "fixed" ? { position: "fixed", top: desktopTop, left: desktopNavMetrics.left, width: desktopNavMetrics.width, zIndex: 6 } : desktopNavMode === "bottom" ? { position: "absolute", left: 0, right: 0, bottom: 0 } : { position: "relative" };
    const contentsNav = /* @__PURE__ */ React.createElement("nav", { ref: navRef, style: { position: isTablet ? "sticky" : "relative", top: isTablet ? contentsTop : void 0, alignSelf: "start", zIndex: 5, background: "var(--paper)", paddingBottom: isTablet ? 8 : 0, marginBottom: isTablet ? 24 : 0 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, "Contents"), /* @__PURE__ */ React.createElement(
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
    ), data.contact && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 32, padding: "16px 14px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, "Questions?"), /* @__PURE__ */ React.createElement("a", { href: `mailto:${data.contact}`, style: { display: "block", marginTop: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--ink)", textDecoration: "none" } }, data.contact)));
    const articleContent = /* @__PURE__ */ React.createElement("article", { ref: articleRef, style: { maxWidth: isTablet ? "100%" : 720, paddingBottom: isTablet ? 140 : 180 } }, data.sections.map((s) => /* @__PURE__ */ React.createElement("section", { key: s.id, id: s.id, style: { marginBottom: 56, scrollMarginTop: isTablet ? 140 : 112 } }, /* @__PURE__ */ React.createElement("h2", { style: { margin: "0 0 16px", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(24, "4vw", 28), fontWeight: 600, letterSpacing: -0.8, lineHeight: 1.15 } }, s.label), s.body.map((b, i) => {
      if (typeof b === "string") return /* @__PURE__ */ React.createElement("p", { key: i, dangerouslySetInnerHTML: { __html: b }, style: { margin: "0 0 14px", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" } });
      if (b.type === "list") return /* @__PURE__ */ React.createElement("ul", { key: i, style: { margin: "0 0 18px", paddingLeft: 20, fontSize: 15, lineHeight: 1.7, color: "var(--ink)" } }, b.items.map((it, j) => /* @__PURE__ */ React.createElement("li", { key: j, style: { marginBottom: 6 }, dangerouslySetInnerHTML: { __html: it } })));
      if (b.type === "table") return isMobile ? /* @__PURE__ */ React.createElement("div", { key: i, style: { margin: "8px 0 22px", display: "grid", gap: 10 } }, b.rows.map((row, ri) => /* @__PURE__ */ React.createElement("div", { key: ri, style: { padding: "16px 14px", background: "var(--bg)", borderRadius: 12, border: "1px solid var(--line)", display: "grid", gap: 10 } }, row.map((cell, ci) => /* @__PURE__ */ React.createElement("div", { key: ci, style: { display: "grid", gridTemplateColumns: "92px 1fr", gap: 12, alignItems: "start" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, b.cols[ci]), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5 } }, cell)))))) : /* @__PURE__ */ React.createElement("div", { key: i, style: { margin: "8px 0 22px", border: "1px solid var(--line)", borderRadius: 10, overflowX: "auto" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: b.cols.map(() => "1fr").join(" "), background: "var(--bg)", padding: "12px 16px", borderBottom: "1px solid var(--line)" } }, b.cols.map((c) => /* @__PURE__ */ React.createElement(Mono, { key: c, color: "var(--ink-2)", size: 10 }, c))), b.rows.map((row, ri) => /* @__PURE__ */ React.createElement("div", { key: ri, style: { display: "grid", gridTemplateColumns: b.cols.map(() => "1fr").join(" "), padding: "12px 16px", borderBottom: ri < b.rows.length - 1 ? "1px solid var(--line)" : "none", fontSize: 13.5, color: "var(--ink)" } }, row.map((cell, ci) => /* @__PURE__ */ React.createElement("span", { key: ci }, cell))))));
      return null;
    }))));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "72px 20px 56px" : "80px 32px 60px", position: "relative", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 20, right: -80, opacity: 0.04 } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 280 : 420, color: "white", weight: 28, gap: 56 })), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)" }, data.kind), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 12, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, "Effective ", data.effective), /* @__PURE__ */ React.createElement("span", { style: { width: 1, height: 12, background: "rgba(255,255,255,0.2)" } }), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.5)" }, "Version ", data.version)), /* @__PURE__ */ React.createElement("h1", { "data-reveal": true, style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(38, "7vw", 60), fontWeight: 600, letterSpacing: clamp(-1.2, "-0.2vw", -2.2), lineHeight: 1, maxWidth: 900 } }, data.title), data.subtitle && /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "20px 0 0", fontSize: clamp(17, "2.8vw", 18), color: "rgba(255,255,255,0.7)", maxWidth: 700, lineHeight: 1.55 } }, data.subtitle))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "56px 20px 72px" : "60px 32px 120px" } }, isTablet ? /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, contentsNav, articleContent) : /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "240px 1fr", gap: 60, alignItems: "start" } }, /* @__PURE__ */ React.createElement("aside", { ref: desktopRailRef, style: { position: "relative", alignSelf: "start", minHeight: desktopRailHeight || 1 } }, /* @__PURE__ */ React.createElement("div", { ref: desktopNavShellRef, style: desktopNavShellStyle }, contentsNav)), articleContent)));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "" }, /* @__PURE__ */ React.createElement(LegalDoc, null), /* @__PURE__ */ React.createElement(CTAStrip, null)));
})();
