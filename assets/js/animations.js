(() => {
  const { Glyph } = window;
  const AnimatedLockup = ({ size = 96, color = "white" }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!window.gsap || !ref.current) return;
      const gsap = window.gsap;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(ref.current.querySelectorAll(".al-letter"), { y: 80, opacity: 0, stagger: 0.06, duration: 0.7 }).from(ref.current.querySelector(".al-left"), { x: -120, opacity: 0, duration: 0.8 }, "-=0.4").from(ref.current.querySelector(".al-right"), { x: 120, opacity: 0, duration: 0.8 }, "<");
    }, []);
    const w = size * 0.13;
    return /* @__PURE__ */ React.createElement("div", { ref, style: { display: "inline-flex", alignItems: "center", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: size, color, letterSpacing: -size * 0.05, lineHeight: 1 } }, "mod".split("").map((c, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "al-letter", style: { display: "inline-block" } }, c)), /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", width: size, height: size, style: { display: "block", marginLeft: 2 } }, /* @__PURE__ */ React.createElement("path", { className: "al-left", d: `M 18 22 L ${50 - 7} 50 L 18 78`, stroke: color, strokeWidth: w, fill: "none", strokeLinecap: "square" }), /* @__PURE__ */ React.createElement("path", { className: "al-right", d: `M 82 22 L ${50 + 7} 50 L 82 78`, stroke: color, strokeWidth: w, fill: "none", strokeLinecap: "square" })));
  };
  const Scramble = ({ text, trigger = "self", duration = 1.2, delay = 0, charset = "abcdefghijklmnopqrstuvwxyz0123456789\xB7/<>" }) => {
    const ref = React.useRef(null);
    const target = String(text || "");
    React.useEffect(() => {
      if (!ref.current) return;
      const el = ref.current;
      el.textContent = target;
      let frame, started = false;
      const start = () => {
        if (started) return;
        started = true;
        const len = target.length;
        const startT = performance.now() + delay * 1e3;
        const tick = () => {
          const now = performance.now();
          const t = Math.max(0, Math.min(1, (now - startT) / (duration * 1e3)));
          let out = "";
          for (let i = 0; i < len; i++) {
            const cp = t * 1.5 - i / len * 0.5;
            if (cp >= 1) out += target[i];
            else out += target[i] === " " ? " " : charset[Math.floor(Math.random() * charset.length)];
          }
          el.textContent = out;
          if (t < 1) frame = requestAnimationFrame(tick);
          else el.textContent = target;
        };
        frame = requestAnimationFrame(tick);
      };
      if (trigger === "mount") setTimeout(start, 50);
      else if (window.ScrollTrigger) {
        window.ScrollTrigger.create({ trigger: el, start: "top 85%", once: true, onEnter: start });
      }
      return () => cancelAnimationFrame(frame);
    }, []);
    return /* @__PURE__ */ React.createElement("span", { ref }, target);
  };
  const CursorGlyph = ({ size = 84, color = "var(--signal)" }) => {
    const ref = React.useRef(null);
    const [gap, setGap] = React.useState(14);
    React.useEffect(() => {
      if (!ref.current) return;
      const el = ref.current;
      const handle = (e) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const dx = e.clientX - cx;
        const dist = Math.min(400, Math.abs(dx));
        const newGap = 14 + dist / 400 * 26;
        setGap(newGap);
      };
      window.addEventListener("mousemove", handle);
      return () => window.removeEventListener("mousemove", handle);
    }, []);
    const w = size * 0.13;
    const half = gap / 2;
    return /* @__PURE__ */ React.createElement("svg", { ref, viewBox: "0 0 100 100", width: size, height: size, style: { display: "inline-block", verticalAlign: "middle" } }, /* @__PURE__ */ React.createElement("path", { d: `M 18 22 L ${50 - half} 50 L 18 78`, stroke: color, strokeWidth: w, fill: "none", strokeLinecap: "square", style: { transition: "all 0.15s cubic-bezier(0.2, 0.9, 0.3, 1.4)" } }), /* @__PURE__ */ React.createElement("path", { d: `M 82 22 L ${50 + half} 50 L 82 78`, stroke: color, strokeWidth: w, fill: "none", strokeLinecap: "square", style: { transition: "all 0.15s cubic-bezier(0.2, 0.9, 0.3, 1.4)" } }));
  };
  const WordReveal = ({ text, size = 96, weight = 600, lineHeight = 0.96, color = "white", letterSpacing = -4, delay = 0 }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!ref.current) return;
      const words = ref.current.querySelectorAll(".wr-inner");
      if (!window.gsap) return;
      window.gsap.set(words, { yPercent: 110 });
      window.gsap.to(words, { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power3.out", delay });
    }, []);
    return /* @__PURE__ */ React.createElement("h1", { ref, style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: size, fontWeight: weight, letterSpacing, lineHeight, color, maxWidth: 1100 } }, text.split(" ").map((w, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.05em" } }, /* @__PURE__ */ React.createElement("span", { className: "wr-inner", style: { display: "inline-block" } }, w, i < text.split(" ").length - 1 ? "\xA0" : ""))));
  };
  const Marquee = ({ items, speed = 40, color = "white", opacity = 0.3 }) => {
    const doubled = [...items, ...items];
    return /* @__PURE__ */ React.createElement("div", { style: { overflow: "hidden", width: "100%", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: 64,
      whiteSpace: "nowrap",
      animation: `marquee ${speed}s linear infinite`
    } }, doubled.map((it, i) => /* @__PURE__ */ React.createElement("span", { key: i, style: { display: "flex", alignItems: "center", gap: 18, fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 600, letterSpacing: -2, color, opacity, flexShrink: 0 } }, it, /* @__PURE__ */ React.createElement(Glyph, { size: 36, color, weight: 4.5, gap: 6 })))), /* @__PURE__ */ React.createElement("style", null, `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `));
  };
  const SpotlightCard = ({ children, ...props }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!ref.current) return;
      const el = ref.current;
      const move = (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      el.addEventListener("mousemove", move);
      return () => el.removeEventListener("mousemove", move);
    }, []);
    return /* @__PURE__ */ React.createElement("div", { ref, ...props, style: {
      ...props.style,
      position: "relative",
      "--mx": "50%",
      "--my": "50%"
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      pointerEvents: "none",
      background: "radial-gradient(400px circle at var(--mx) var(--my), rgba(255,116,40,0.18), transparent 50%)"
    } }), children);
  };
  const DrawGlyph = ({ size = 600, color = "white", weight = 36, gap = 70 }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!ref.current || !window.gsap || !window.ScrollTrigger) return;
      const paths = ref.current.querySelectorAll("path");
      paths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
      });
      window.gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true }
      });
    }, []);
    const w = weight;
    const half = gap / 2;
    return /* @__PURE__ */ React.createElement("svg", { ref, viewBox: "0 0 100 100", width: size, height: size, style: { display: "block" } }, /* @__PURE__ */ React.createElement("path", { d: `M 18 22 L ${50 - half / 100 * 100} 50 L 18 78`, stroke: color, strokeWidth: w / (size / 100), fill: "none", strokeLinecap: "square" }), /* @__PURE__ */ React.createElement("path", { d: `M 82 22 L ${50 + half / 100 * 100} 50 L 82 78`, stroke: color, strokeWidth: w / (size / 100), fill: "none", strokeLinecap: "square" }));
  };
  const FloatingProgress = () => {
    const [progress, setProgress] = React.useState(0);
    const [section, setSection] = React.useState("");
    const [isCompact, setIsCompact] = React.useState(() => typeof window === "undefined" ? false : window.innerWidth < 900);
    React.useEffect(() => {
      const onResize = () => setIsCompact(window.innerWidth < 900);
      const onScroll = () => {
        const h = document.documentElement;
        const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
        setProgress(p);
        const sections = document.querySelectorAll("[data-section]");
        let cur = "";
        sections.forEach((s) => {
          const r = s.getBoundingClientRect();
          if (r.top < 200 && r.bottom > 200) cur = s.dataset.section;
        });
        setSection(cur);
      };
      window.addEventListener("resize", onResize, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      onResize();
      onScroll();
      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
    if (isCompact || progress < 0.05 || progress > 0.97) return null;
    return /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", right: 28, bottom: 28, zIndex: 40, display: "flex", alignItems: "center", gap: 14, padding: "10px 14px 10px 18px", background: "rgba(15,18,28,0.92)", color: "white", borderRadius: 999, backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.12)", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", transition: "opacity 0.3s" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,0.55)" } }, section || "Modx"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", width: 32, height: 32 } }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 32 32", width: 32, height: 32, style: { transform: "rotate(-90deg)" } }, /* @__PURE__ */ React.createElement("circle", { cx: "16", cy: "16", r: "13", stroke: "rgba(255,255,255,0.15)", strokeWidth: "2", fill: "none" }), /* @__PURE__ */ React.createElement(
      "circle",
      {
        cx: "16",
        cy: "16",
        r: "13",
        stroke: "oklch(0.7 0.18 40)",
        strokeWidth: "2",
        fill: "none",
        strokeDasharray: `${2 * Math.PI * 13}`,
        strokeDashoffset: `${2 * Math.PI * 13 * (1 - progress)}`,
        strokeLinecap: "round",
        style: { transition: "stroke-dashoffset 0.1s" }
      }
    )), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "white" } }, Math.round(progress * 100))));
  };
  Object.assign(window, { AnimatedLockup, Scramble, CursorGlyph, WordReveal, Marquee, SpotlightCard, DrawGlyph, FloatingProgress });
})();
