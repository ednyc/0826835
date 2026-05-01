(() => {
  const { Glyph, Mono, useViewport } = window;
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
    const words = String(text || "").split(" ");
    React.useEffect(() => {
      if (!ref.current) return;
      const wordNodes = ref.current.querySelectorAll(".wr-inner");
      if (!window.gsap) return;
      window.gsap.set(wordNodes, { yPercent: 110 });
      window.gsap.to(wordNodes, { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power3.out", delay });
    }, []);
    return /* @__PURE__ */ React.createElement("h1", { ref, style: { margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontSize: size, fontWeight: weight, letterSpacing, lineHeight, color, maxWidth: "100%" } }, words.map((word, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: `${word}-${i}` }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.05em" } }, /* @__PURE__ */ React.createElement("span", { className: "wr-inner", style: { display: "inline-block" } }, word)), i < words.length - 1 ? " " : null)));
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
  const HeroDepthScene = ({ scopeRef, stacked = false, enabled = true }) => {
    const { isMobile } = useViewport();
    const rootRef = React.useRef(null);
    const stageRef = React.useRef(null);
    const planeARef = React.useRef(null);
    const planeBRef = React.useRef(null);
    const planeCRef = React.useRef(null);
    const prismRef = React.useRef(null);
    const ringRef = React.useRef(null);
    const beamARef = React.useRef(null);
    const beamBRef = React.useRef(null);
    const scanRef = React.useRef(null);
    React.useEffect(() => {
      if (!enabled || isMobile || !window.gsap || !rootRef.current) return void 0;
      const gsap = window.gsap;
      const scope = (scopeRef == null ? void 0 : scopeRef.current) || rootRef.current.parentElement;
      if (!scope) return void 0;
      const stage = stageRef.current;
      const planeA = planeARef.current;
      const planeB = planeBRef.current;
      const planeC = planeCRef.current;
      const prism = prismRef.current;
      const ring = ringRef.current;
      const beamA = beamARef.current;
      const beamB = beamBRef.current;
      const scan = scanRef.current;
      const nodes = rootRef.current.querySelectorAll("[data-depth-node]");
      const layers = [planeA, planeB, planeC, prism, ring, beamA, beamB, scan].filter(Boolean);
      gsap.set(stage, { transformPerspective: 1800, transformStyle: "preserve-3d" });
      gsap.set(planeA, { z: 68, rotationX: 12, rotationY: -12, x: 0, y: 0 });
      gsap.set(planeB, { z: -26, rotationX: -8, rotationY: 16, x: 0, y: 0 });
      gsap.set(planeC, { z: 18, rotationX: 8, rotationY: 6, x: 0, y: 0 });
      gsap.set(prism, { z: 28, rotationX: 46, rotationZ: 14, x: 0, y: 0 });
      gsap.set(ring, { z: 12, x: 0, y: 0 });
      gsap.set([beamA, beamB, scan], { x: 0, y: 0 });
      gsap.fromTo(
        [stage, ...layers],
        { autoAlpha: 0, scale: 0.96, y: 22 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 1.1, stagger: 0.04, ease: "power3.out", delay: 0.18 }
      );
      const float = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
      float.to(planeA, { y: -8, x: 7, rotationY: -8, rotationX: 14, z: 82, duration: 8.4 }, 0).to(planeB, { y: 10, x: -9, rotationY: 20, rotationX: -6, z: -12, duration: 9.4 }, 0.1).to(planeC, { y: -7, x: 6, rotationY: 2, rotationX: 10, z: 28, duration: 8.8 }, 0.25).to(prism, { y: 8, x: -6, rotationZ: 20, rotationX: 52, z: 36, duration: 10.2 }, 0.2).to(ring, { y: -5, x: 4, z: 18, duration: 9.6 }, 0.15);
      const orbit = gsap.to(ring, { rotation: 360, duration: stacked ? 70 : 56, repeat: -1, ease: "none" });
      const beamLoopA = gsap.to(beamA, { xPercent: 12, opacity: 0.2, duration: 6.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      const beamLoopB = gsap.to(beamB, { xPercent: -10, opacity: 0.14, duration: 7.9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      const scanLoop = gsap.to(scan, { x: stacked ? 104 : 146, opacity: 0.24, duration: 6.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
      const nodePulse = gsap.to(nodes, { scale: 1.08, opacity: 0.72, duration: 2.8, stagger: 0.28, repeat: -1, yoyo: true, ease: "sine.inOut" });
      const handleMove = (event) => {
        const rect = scope.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        gsap.to(stage, {
          rotationY: px * (stacked ? 5 : 8),
          rotationX: py * (stacked ? -3 : -5),
          x: px * (stacked ? 10 : 16),
          y: py * (stacked ? 8 : 12),
          duration: 0.65,
          ease: "power3.out"
        });
        gsap.to(planeA, { x: px * -28, y: py * -16, duration: 0.72, ease: "power3.out" });
        gsap.to(planeB, { x: px * 22, y: py * 12, duration: 0.74, ease: "power3.out" });
        gsap.to(planeC, { x: px * -14, y: py * 10, duration: 0.76, ease: "power3.out" });
        gsap.to(prism, { x: px * 18, y: py * -12, rotationZ: 16 + px * 8, duration: 0.72, ease: "power3.out" });
        gsap.to(ring, { x: px * 14, y: py * 10, duration: 0.7, ease: "power3.out" });
        gsap.to(beamA, { y: py * -12, duration: 0.68, ease: "power3.out" });
        gsap.to(beamB, { y: py * 10, duration: 0.68, ease: "power3.out" });
        gsap.to(scan, { y: py * 12, duration: 0.62, ease: "power3.out" });
      };
      const handleLeave = () => {
        gsap.to(stage, { rotationY: 0, rotationX: 0, x: 0, y: 0, duration: 0.7, ease: "power3.out" });
        gsap.to(planeA, { x: 0, y: 0, duration: 0.7, ease: "power3.out" });
        gsap.to(planeB, { x: 0, y: 0, duration: 0.72, ease: "power3.out" });
        gsap.to(planeC, { x: 0, y: 0, duration: 0.74, ease: "power3.out" });
        gsap.to(prism, { x: 0, y: 0, rotationZ: 22, duration: 0.72, ease: "power3.out" });
        gsap.to(ring, { x: 0, y: 0, duration: 0.68, ease: "power3.out" });
        gsap.to([beamA, beamB, scan], { y: 0, duration: 0.6, ease: "power3.out" });
      };
      scope.addEventListener("pointermove", handleMove);
      scope.addEventListener("pointerleave", handleLeave);
      return () => {
        float.kill();
        orbit.kill();
        beamLoopA.kill();
        beamLoopB.kill();
        scanLoop.kill();
        nodePulse.kill();
        scope.removeEventListener("pointermove", handleMove);
        scope.removeEventListener("pointerleave", handleLeave);
      };
    }, [enabled, isMobile, scopeRef, stacked]);
    if (!enabled || isMobile) return null;
    return /* @__PURE__ */ React.createElement("div", { ref: rootRef, style: { position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 0 } }, /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: stageRef,
        style: {
          position: "absolute",
          left: "50%",
          top: stacked ? "50%" : "48%",
          width: stacked ? "108%" : "122%",
          height: stacked ? "92%" : "108%",
          transform: "translate(-50%, -50%)",
          transformStyle: "preserve-3d"
        }
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: planeARef,
          style: {
            position: "absolute",
            left: stacked ? "8%" : "6%",
            top: stacked ? "8%" : "12%",
            width: stacked ? 300 : 420,
            height: stacked ? 164 : 210,
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.06)",
            background: "linear-gradient(180deg, rgba(82,122,255,0.08), rgba(255,255,255,0.015))",
            boxShadow: "0 16px 52px rgba(0,0,0,0.14)",
            backdropFilter: "blur(18px)",
            clipPath: "polygon(4% 0%, 100% 0%, 92% 100%, 0% 84%)",
            opacity: 0.24
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: planeBRef,
          style: {
            position: "absolute",
            right: stacked ? "4%" : "8%",
            top: stacked ? "8%" : "4%",
            width: stacked ? 320 : 430,
            height: stacked ? 196 : 250,
            borderRadius: 30,
            border: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.012))",
            clipPath: "polygon(12% 0%, 100% 8%, 100% 88%, 44% 100%, 0% 62%)",
            opacity: 0.18
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: planeCRef,
          style: {
            position: "absolute",
            left: stacked ? "18%" : "26%",
            bottom: stacked ? "6%" : "10%",
            width: stacked ? 240 : 320,
            height: stacked ? 136 : 170,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.012))",
            clipPath: "polygon(0% 18%, 72% 0%, 100% 34%, 54% 100%, 0% 82%)",
            opacity: 0.14
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: prismRef,
          style: {
            position: "absolute",
            left: stacked ? "50%" : "54%",
            top: stacked ? "52%" : "42%",
            width: stacked ? 180 : 230,
            height: stacked ? 180 : 230,
            transform: "translate(-50%, -50%)",
            borderRadius: 34,
            border: "1px solid rgba(255,255,255,0.06)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.008))",
            clipPath: "polygon(50% 0%, 100% 26%, 100% 74%, 50% 100%, 0% 74%, 0% 26%)",
            opacity: 0.12
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: ringRef,
          style: {
            position: "absolute",
            left: stacked ? "46%" : "50%",
            top: stacked ? "48%" : "50%",
            width: stacked ? 420 : 580,
            height: stacked ? 420 : 580,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
            opacity: 0.18
          }
        },
        [
          { top: "6%", left: "49%" },
          { top: "49%", right: "6%" },
          { bottom: "6%", left: "49%" },
          { top: "49%", left: "6%" }
        ].map((node, index) => /* @__PURE__ */ React.createElement(
          "div",
          {
            key: index,
            "data-depth-node": true,
            style: {
              position: "absolute",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: index % 2 === 0 ? "rgba(82,122,255,0.58)" : "rgba(255,255,255,0.48)",
              boxShadow: index % 2 === 0 ? "0 0 12px rgba(82,122,255,0.22)" : "0 0 12px rgba(255,255,255,0.16)",
              opacity: 0.52,
              ...node
            }
          }
        )),
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: "24%", borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.04)" } })
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: beamARef,
          style: {
            position: "absolute",
            left: stacked ? "12%" : "18%",
            right: stacked ? "16%" : "22%",
            top: stacked ? "40%" : "38%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(82,122,255,0.2), transparent)",
            opacity: 0.12
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: beamBRef,
          style: {
            position: "absolute",
            left: stacked ? "18%" : "30%",
            right: stacked ? "12%" : "14%",
            bottom: stacked ? "30%" : "26%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
            opacity: 0.08
          }
        }
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: scanRef,
          style: {
            position: "absolute",
            left: stacked ? "16%" : "22%",
            top: stacked ? "14%" : "12%",
            bottom: stacked ? "18%" : "14%",
            width: 1,
            background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12), rgba(82,122,255,0.18), transparent)",
            opacity: 0.12,
            filter: "blur(0.4px)"
          }
        }
      )
    ));
  };
  const SIGNAL_ITEMS = [
    {
      key: "compliance",
      label: "Compliance",
      eyebrow: "Trust lane",
      metric: "94%",
      metricLabel: "controls automated",
      desc: "Controls, evidence, remediation, and procurement responses move in one lane instead of four disconnected spreadsheets.",
      chips: ["Evidence", "Policies", "Auditor sync"],
      accent: "var(--cobalt)"
    },
    {
      key: "platform",
      label: "Platform",
      eyebrow: "Runtime lane",
      metric: "4x",
      metricLabel: "faster path to prod",
      desc: "Golden paths, internal tooling, and infrastructure defaults reduce the number of manual decisions teams have to make on every release.",
      chips: ["Cloud", "Observability", "IDP"],
      accent: "var(--forest)"
    },
    {
      key: "product",
      label: "Product",
      eyebrow: "Surface lane",
      metric: "0\u21921",
      metricLabel: "launch patterns",
      desc: "Positioning, UX, and implementation land together, so the public surface reads like the product actually works underneath it.",
      chips: ["Research", "UX", "Brand"],
      accent: "var(--plum)"
    },
    {
      key: "ai",
      label: "AI",
      eyebrow: "Model lane",
      metric: "Eval",
      metricLabel: "gated iteration",
      desc: "Retrieval, evals, and routing keep the AI surface useful, measurable, and cheap enough to survive contact with production.",
      chips: ["RAG", "Agents", "Routing"],
      accent: "var(--signal)"
    }
  ];
  const SIGNAL_POINTS = [
    { x: 18, y: 18, style: { top: 0, left: 0 } },
    { x: 82, y: 18, style: { top: 0, right: 0 } },
    { x: 18, y: 82, style: { bottom: 0, left: 0 } },
    { x: 82, y: 82, style: { bottom: 0, right: 0 } }
  ];
  const SIGNAL_POINTS_TIGHT = [
    { x: 20, y: 19, style: { top: 0, left: 0 } },
    { x: 80, y: 19, style: { top: 0, right: 0 } },
    { x: 20, y: 80, style: { bottom: 0, left: 0 } },
    { x: 80, y: 80, style: { bottom: 0, right: 0 } }
  ];
  const SIGNAL_DESKTOP_SLOTS = [
    { itemIndex: 0, gridColumn: "1", gridRow: "1", alignSelf: "start" },
    { itemIndex: 1, gridColumn: "3", gridRow: "1", alignSelf: "start" },
    { itemIndex: 2, gridColumn: "1", gridRow: "3", alignSelf: "end" },
    { itemIndex: 3, gridColumn: "3", gridRow: "3", alignSelf: "end" }
  ];
  const SignalField = () => {
    const { isMobile } = useViewport();
    const rootRef = React.useRef(null);
    const coreRef = React.useRef(null);
    const glowRef = React.useRef(null);
    const gridRef = React.useRef(null);
    const beaconRef = React.useRef(null);
    const manualRef = React.useRef(0);
    const hoverLaneRef = React.useRef(0);
    const [fieldWidth, setFieldWidth] = React.useState(0);
    const [active, setActive] = React.useState(0);
    const activeItem = SIGNAL_ITEMS[active];
    const isCompactField = fieldWidth > 0 ? fieldWidth < 620 : true;
    const isTightCross = !isCompactField && fieldWidth < 780;
    const signalPoints = isTightCross ? SIGNAL_POINTS_TIGHT : SIGNAL_POINTS;
    const cueText = isMobile ? "Tap modules" : isCompactField ? "Move or tap" : "Hover or tap";
    const shardSize = isMobile ? 220 : isCompactField ? 260 : isTightCross ? 320 : 380;
    const glyphSize = isMobile ? 180 : isCompactField ? 220 : isTightCross ? 290 : 360;
    const crossInsetTop = isTightCross ? 78 : 86;
    const crossInsetSide = isTightCross ? 18 : 24;
    const crossInsetBottom = isTightCross ? 20 : 26;
    const crossGap = isTightCross ? 14 : 18;
    const crossRowGap = isTightCross ? 16 : 20;
    const crossCoreMaxWidth = isTightCross ? 330 : 360;
    const crossColumns = isTightCross ? "minmax(0, 0.88fr) minmax(0, 1.38fr) minmax(0, 0.88fr)" : "minmax(0, 0.94fr) minmax(0, 1.48fr) minmax(0, 0.94fr)";
    const setActiveManual = (index) => {
      manualRef.current = Date.now();
      hoverLaneRef.current = index;
      setActive(index);
    };
    React.useEffect(() => {
      if (!rootRef.current) return void 0;
      const root = rootRef.current;
      const measure = () => setFieldWidth(root.getBoundingClientRect().width);
      measure();
      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(measure);
        observer.observe(root);
        return () => observer.disconnect();
      }
      window.addEventListener("resize", measure, { passive: true });
      return () => window.removeEventListener("resize", measure);
    }, []);
    React.useEffect(() => {
      if (!window.gsap || !rootRef.current) return;
      const gsap = window.gsap;
      const root = rootRef.current;
      const nodes = root.querySelectorAll("[data-signal-node]");
      const core = root.querySelector("[data-signal-core]");
      const intro = root.querySelectorAll("[data-signal-intro]");
      const beacon = beaconRef.current;
      const grid = gridRef.current;
      const shards = root.querySelectorAll("[data-signal-shard]");
      const glyph = root.querySelector("[data-signal-glyph]");
      gsap.fromTo(
        [...intro, core, ...nodes],
        { autoAlpha: 0, y: 28, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.85, stagger: 0.06, ease: "power3.out", delay: 0.12 }
      );
      const drift = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
      nodes.forEach((node, i) => {
        drift.to(node, { scale: i % 2 === 0 ? 1.008 : 0.994, rotationZ: i % 2 === 0 ? -0.5 : 0.5, duration: 2.8 + i * 0.18 }, i * 0.12);
      });
      if (!isMobile) {
        const handleMove = (event) => {
          const rect = root.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          const laneIndex = px < 0 ? py < 0 ? 0 : 2 : py < 0 ? 1 : 3;
          if (!isCompactField && laneIndex !== hoverLaneRef.current) {
            hoverLaneRef.current = laneIndex;
            setActive(laneIndex);
          }
          gsap.to(core, {
            x: px * (isCompactField ? 8 : isTightCross ? 10 : 14),
            y: py * (isCompactField ? 6 : isTightCross ? 7 : 10),
            rotationY: px * (isCompactField ? 5 : isTightCross ? 5.5 : 7),
            rotationX: py * (isCompactField ? -4 : isTightCross ? -4 : -5),
            duration: 0.45,
            ease: "power3.out",
            transformPerspective: 900,
            transformOrigin: "50% 50%"
          });
          if (glowRef.current) {
            gsap.to(glowRef.current, {
              x: px * (isCompactField ? 28 : isTightCross ? 30 : 36),
              y: py * (isCompactField ? 28 : isTightCross ? 34 : 42),
              opacity: isCompactField ? 0.36 : isTightCross ? 0.38 : 0.42,
              duration: 0.35,
              ease: "power2.out"
            });
          }
          if (!isCompactField) {
            nodes.forEach((node) => {
              const nodeIndex = Number(node.dataset.signalIndex || 0);
              const dirX = nodeIndex % 2 === 0 ? -1 : 1;
              const dirY = nodeIndex < 2 ? -1 : 1;
              const isNodeActive = nodeIndex === laneIndex;
              gsap.to(node, {
                x: px * dirX * (isTightCross ? 6 : 8),
                y: py * dirY * (isTightCross ? 5 : 7),
                rotationY: px * dirX * 5,
                rotationX: py * dirY * -4,
                scale: isNodeActive ? 1.035 : 0.992,
                duration: 0.35,
                ease: "power3.out",
                transformPerspective: 900,
                transformOrigin: "50% 50%"
              });
            });
            if (beacon) {
              gsap.to(beacon, {
                x: px * (isTightCross ? 132 : 156),
                y: py * (isTightCross ? 118 : 138),
                scale: 1,
                opacity: 0.9,
                duration: 0.28,
                ease: "power2.out"
              });
            }
            if (grid) {
              gsap.to(grid, {
                x: px * -18,
                y: py * -18,
                duration: 0.45,
                ease: "power3.out"
              });
            }
            shards.forEach((shard, index) => {
              gsap.to(shard, {
                x: px * (index === 0 ? 24 : -18),
                y: py * (index === 0 ? 18 : -14),
                rotation: index === 0 ? -3 + px * 8 : -8 + px * -6,
                duration: 0.6,
                ease: "power3.out"
              });
            });
            if (glyph) {
              gsap.to(glyph, {
                x: px * 22,
                y: py * 18,
                rotation: px * -8,
                duration: 0.55,
                ease: "power3.out"
              });
            }
          }
        };
        const handleLeave = () => {
          gsap.to(core, { x: 0, y: 0, rotationY: 0, rotationX: 0, duration: 0.6, ease: "power3.out" });
          if (glowRef.current) gsap.to(glowRef.current, { x: 0, y: 0, opacity: 0.24, duration: 0.5, ease: "power2.out" });
          gsap.to(nodes, { x: 0, y: 0, rotationY: 0, rotationX: 0, scale: 1, duration: 0.45, ease: "power3.out" });
          if (beacon) gsap.to(beacon, { x: 0, y: 0, scale: 0.88, opacity: 0.22, duration: 0.4, ease: "power2.out" });
          if (grid) gsap.to(grid, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
          shards.forEach((shard, index) => {
            gsap.to(shard, {
              x: 0,
              y: 0,
              rotation: index === 0 ? -3 : -8,
              duration: 0.55,
              ease: "power3.out"
            });
          });
          if (glyph) gsap.to(glyph, { x: 0, y: 0, rotation: -7, duration: 0.55, ease: "power3.out" });
        };
        root.addEventListener("pointermove", handleMove);
        root.addEventListener("pointerleave", handleLeave);
        return () => {
          drift.kill();
          root.removeEventListener("pointermove", handleMove);
          root.removeEventListener("pointerleave", handleLeave);
        };
      }
      return () => {
        drift.kill();
      };
    }, [isCompactField, isMobile, isTightCross]);
    React.useEffect(() => {
      if (!window.gsap || !rootRef.current) return;
      const gsap = window.gsap;
      const root = rootRef.current;
      const core = root.querySelector("[data-signal-core]");
      const nodes = root.querySelectorAll("[data-signal-node]");
      if (core) gsap.set(core, { x: 0, y: 0, rotationX: 0, rotationY: 0 });
      if (nodes.length) gsap.set(nodes, { x: 0, y: 0, rotationX: 0, rotationY: 0 });
      if (glowRef.current) gsap.set(glowRef.current, { x: 0, y: 0, opacity: 0.24 });
      if (gridRef.current) gsap.set(gridRef.current, { x: 0, y: 0 });
      if (beaconRef.current) gsap.set(beaconRef.current, { x: 0, y: 0, scale: isCompactField ? 1 : 0.88, opacity: isCompactField ? 0 : 0.22 });
    }, [isCompactField]);
    React.useEffect(() => {
      if (!isCompactField) return void 0;
      const intervalId = window.setInterval(() => {
        if (Date.now() - manualRef.current < 6e3) return;
        setActive((current) => (current + 1) % SIGNAL_ITEMS.length);
      }, 2600);
      return () => window.clearInterval(intervalId);
    }, [isCompactField]);
    React.useEffect(() => {
      if (!window.gsap || !coreRef.current) return;
      const copy = coreRef.current.querySelector("[data-signal-copy]");
      if (!copy) return;
      window.gsap.fromTo(copy, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" });
    }, [active]);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        ref: rootRef,
        style: {
          position: "relative",
          minHeight: isMobile ? 500 : isCompactField ? 540 : isTightCross ? 620 : 660,
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.1)",
          background: "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015)), rgba(8,12,20,0.56)",
          boxShadow: "0 28px 80px rgba(0,0,0,0.32)"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 35%, rgba(255,116,40,0.16), transparent 34%), radial-gradient(circle at 78% 18%, rgba(82,122,255,0.12), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))" } }),
      /* @__PURE__ */ React.createElement("div", { ref: gridRef, style: { position: "absolute", inset: "-4%", backgroundImage: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)", backgroundSize: isMobile ? "42px 42px" : isCompactField ? "46px 46px" : isTightCross ? "50px 50px" : "54px 54px", maskImage: "linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.4))" } }),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(
        "div",
        {
          "data-signal-shard": true,
          style: {
            position: "absolute",
            top: isMobile ? 34 : isCompactField ? 42 : 30,
            right: isMobile ? -14 : isCompactField ? -10 : 8,
            width: shardSize,
            height: shardSize * 1.08,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.03))",
            clipPath: "polygon(44% 0%, 100% 0%, 100% 82%, 58% 100%, 26% 100%, 0% 58%, 18% 22%)",
            opacity: isCompactField ? 0.28 : 0.38,
            filter: "blur(0.2px)",
            transform: isCompactField ? "rotate(2deg)" : "rotate(-3deg)"
          }
        }
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          "data-signal-shard": true,
          style: {
            position: "absolute",
            bottom: isMobile ? 34 : 28,
            left: isMobile ? -46 : isCompactField ? -42 : -16,
            width: shardSize * 0.58,
            height: shardSize * 0.72,
            border: "1px solid rgba(255,255,255,0.05)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.015))",
            clipPath: "polygon(0% 18%, 60% 0%, 100% 30%, 44% 100%, 0% 82%)",
            opacity: 0.16,
            transform: "rotate(-8deg)"
          }
        }
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          "data-signal-glyph": true,
          style: {
            position: "absolute",
            top: isMobile ? 42 : isCompactField ? 46 : 26,
            right: isMobile ? 18 : 22,
            opacity: isCompactField ? 0.09 : 0.12,
            transform: isCompactField ? "rotate(-4deg)" : "rotate(-7deg)"
          }
        },
        /* @__PURE__ */ React.createElement(Glyph, { size: glyphSize, color: "white", weight: glyphSize * 0.09, gap: glyphSize * 0.16 })
      )),
      /* @__PURE__ */ React.createElement("div", { ref: glowRef, style: { position: "absolute", left: "50%", top: "50%", width: isMobile ? 180 : 260, height: isMobile ? 180 : 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent 68%)", filter: "blur(22px)", transform: "translate(-50%, -50%)", opacity: 0.24, pointerEvents: "none" } }),
      !isCompactField ? /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: beaconRef,
          style: {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: isTightCross ? 112 : 132,
            height: isTightCross ? 112 : 132,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.16)",
            background: "radial-gradient(circle, rgba(255,255,255,0.18), rgba(82,122,255,0.08) 38%, transparent 72%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05) inset, 0 0 42px rgba(82,122,255,0.14)",
            transform: "translate(-50%, -50%)",
            opacity: 0.22,
            pointerEvents: "none",
            zIndex: 2
          }
        },
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: "50%", width: "38%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)", transform: "translate(-50%, -50%)" } }),
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: "50%", width: 1, height: "38%", background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.5), transparent)", transform: "translate(-50%, -50%)" } }),
        /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: "50%", width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.75)", transform: "translate(-50%, -50%)", boxShadow: "0 0 18px rgba(255,255,255,0.45)" } })
      ) : null,
      /* @__PURE__ */ React.createElement("div", { style: { position: "relative", zIndex: 1, padding: isMobile ? "18px" : "22px", height: "100%" } }, /* @__PURE__ */ React.createElement("div", { "data-signal-intro": true, style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: isCompactField ? 18 : 0, position: "relative", zIndex: 8 } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.55)" }, "Interactive System View"), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.36)" }, cueText)), isCompactField ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "div",
        {
          ref: coreRef,
          "data-signal-core": true,
          style: {
            position: "relative",
            padding: isMobile ? "22px 18px" : "24px 22px",
            borderRadius: 20,
            background: "rgba(6,10,18,0.84)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.24)"
          }
        },
        /* @__PURE__ */ React.createElement("div", { "data-signal-copy": true, key: activeItem.key }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "start", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Mono, { color: activeItem.accent }, activeItem.eyebrow), /* @__PURE__ */ React.createElement("h3", { style: { margin: "12px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: 30, fontWeight: 600, letterSpacing: -1, lineHeight: 1.02 } }, activeItem.label)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 600, letterSpacing: -0.9, color: activeItem.accent } }, activeItem.metric), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, activeItem.metricLabel))), /* @__PURE__ */ React.createElement("p", { style: { margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.76)" } }, activeItem.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 } }, activeItem.chips.map((chip) => /* @__PURE__ */ React.createElement("span", { key: chip, style: { padding: "7px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 0.8, textTransform: "uppercase", color: "rgba(255,255,255,0.72)" } }, chip))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 6, marginTop: 18 } }, SIGNAL_ITEMS.map((item, index) => /* @__PURE__ */ React.createElement(
          "button",
          {
            key: item.key,
            type: "button",
            onMouseEnter: () => setActiveManual(index),
            onFocus: () => setActiveManual(index),
            onClick: () => setActiveManual(index),
            style: {
              appearance: "none",
              height: 8,
              padding: 0,
              border: 0,
              borderRadius: 999,
              cursor: "pointer",
              background: active === index ? item.accent : "rgba(255,255,255,0.12)",
              boxShadow: active === index ? `0 0 18px ${item.accent}` : "none",
              transition: "all 0.25s"
            }
          }
        ))))
      ), /* @__PURE__ */ React.createElement("div", { "data-signal-intro": true, style: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, marginTop: 14 } }, SIGNAL_ITEMS.map((item, index) => {
        const isActive = active === index;
        return /* @__PURE__ */ React.createElement(
          "button",
          {
            key: item.key,
            type: "button",
            "data-signal-node": true,
            "data-signal-index": index,
            onMouseEnter: () => setActiveManual(index),
            onFocus: () => setActiveManual(index),
            onClick: () => setActiveManual(index),
            style: {
              appearance: "none",
              textAlign: "left",
              padding: "14px 14px 16px",
              minHeight: 118,
              display: "flex",
              flexDirection: "column",
              borderRadius: 16,
              cursor: "pointer",
              border: `1px solid ${isActive ? item.accent : "rgba(255,255,255,0.1)"}`,
              background: isActive ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.03)",
              color: "white",
              transition: "all 0.25s"
            }
          },
          /* @__PURE__ */ React.createElement(Mono, { color: isActive ? item.accent : "rgba(255,255,255,0.5)", size: 10 }, item.eyebrow),
          /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, letterSpacing: -0.4 } }, item.label),
          /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 12.5, color: "rgba(255,255,255,0.64)", lineHeight: 1.45 } }, item.metricLabel)
        );
      }))) : /* @__PURE__ */ React.createElement(
        "div",
        {
          style: {
            position: "absolute",
            top: crossInsetTop,
            left: crossInsetSide,
            right: crossInsetSide,
            bottom: crossInsetBottom,
            zIndex: 3,
            display: "grid",
            gridTemplateColumns: crossColumns,
            gridTemplateRows: "auto 1fr auto",
            columnGap: crossGap,
            rowGap: crossRowGap,
            alignItems: "stretch"
          }
        },
        /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 100 100", width: "100%", height: "100%", preserveAspectRatio: "none", style: { position: "absolute", inset: 0, pointerEvents: "none" } }, signalPoints.map((point, index) => {
          const item = SIGNAL_ITEMS[index];
          const isActive = active === index;
          return /* @__PURE__ */ React.createElement("g", { key: item.key }, /* @__PURE__ */ React.createElement(
            "line",
            {
              x1: "50",
              y1: "50",
              x2: point.x,
              y2: point.y,
              stroke: isActive ? item.accent : "rgba(255,255,255,0.12)",
              strokeWidth: isActive ? "1.8" : "1",
              strokeDasharray: isActive ? "4 4" : "0",
              opacity: isActive ? 0.9 : 0.8,
              style: { transition: "stroke 0.25s, stroke-width 0.25s, opacity 0.25s" }
            }
          ), /* @__PURE__ */ React.createElement("circle", { cx: point.x, cy: point.y, r: isActive ? "1.6" : "1.2", fill: isActive ? item.accent : "rgba(255,255,255,0.4)", style: { transition: "all 0.25s" } }));
        })),
        SIGNAL_DESKTOP_SLOTS.map(({ itemIndex, gridColumn, gridRow, alignSelf }) => {
          const item = SIGNAL_ITEMS[itemIndex];
          const isActive = active === itemIndex;
          return /* @__PURE__ */ React.createElement(
            "button",
            {
              key: item.key,
              type: "button",
              "data-signal-node": true,
              "data-signal-index": itemIndex,
              onMouseEnter: () => setActiveManual(itemIndex),
              onFocus: () => setActiveManual(itemIndex),
              onClick: () => setActiveManual(itemIndex),
              style: {
                gridColumn,
                gridRow,
                width: "100%",
                minWidth: 0,
                minHeight: isTightCross ? 104 : 114,
                padding: isTightCross ? "14px 14px 16px" : "16px 16px 18px",
                borderRadius: 18,
                border: `1px solid ${isActive ? item.accent : "rgba(255,255,255,0.1)"}`,
                background: isActive ? "rgba(18,24,34,0.96)" : "rgba(18,24,34,0.88)",
                color: "white",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignSelf,
                justifySelf: "stretch",
                overflow: "hidden",
                position: "relative",
                zIndex: isActive ? 3 : 2,
                boxShadow: isActive ? `0 0 0 1px ${item.accent} inset, 0 12px 30px rgba(0,0,0,0.18)` : "0 12px 24px rgba(0,0,0,0.16)",
                backdropFilter: "blur(16px)",
                transition: "all 0.25s"
              }
            },
            /* @__PURE__ */ React.createElement(Mono, { color: isActive ? item.accent : "rgba(255,255,255,0.5)", size: 10 }, item.eyebrow),
            /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: isTightCross ? 18 : 20, fontWeight: 600, letterSpacing: -0.45, lineHeight: 1.05 } }, item.label),
            /* @__PURE__ */ React.createElement("div", { style: { marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: isTightCross ? 20 : 22, fontWeight: 600, letterSpacing: -0.6, color: isActive ? item.accent : "white", lineHeight: 1 } }, item.metric), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12.5, color: "rgba(255,255,255,0.62)", lineHeight: 1.35 } }, item.metricLabel))
          );
        }),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            ref: coreRef,
            "data-signal-core": true,
            style: {
              gridColumn: "2",
              gridRow: "2",
              alignSelf: "center",
              justifySelf: "center",
              width: "100%",
              maxWidth: crossCoreMaxWidth,
              minWidth: 0,
              padding: isTightCross ? "20px 18px 18px" : "22px 20px 20px",
              borderRadius: 20,
              background: "rgba(6,10,18,0.84)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 20px 46px rgba(0,0,0,0.28)",
              zIndex: 4
            }
          },
          /* @__PURE__ */ React.createElement("div", { "data-signal-copy": true, key: activeItem.key }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "start", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Mono, { color: activeItem.accent }, activeItem.eyebrow), /* @__PURE__ */ React.createElement("h3", { style: { margin: "12px 0 0", fontFamily: "'Space Grotesk', sans-serif", fontSize: 34, fontWeight: 600, letterSpacing: -1.15, lineHeight: 1.02 } }, activeItem.label)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 600, letterSpacing: -1, color: activeItem.accent } }, activeItem.metric), /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, activeItem.metricLabel))), /* @__PURE__ */ React.createElement("p", { style: { margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.65, color: "rgba(255,255,255,0.76)" } }, activeItem.desc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 } }, activeItem.chips.map((chip) => /* @__PURE__ */ React.createElement("span", { key: chip, style: { padding: "7px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 0.8, textTransform: "uppercase", color: "rgba(255,255,255,0.72)" } }, chip))))
        )
      ))
    );
  };
  Object.assign(window, { AnimatedLockup, Scramble, CursorGlyph, WordReveal, Marquee, SpotlightCard, DrawGlyph, FloatingProgress, HeroDepthScene, SignalField });
})();
