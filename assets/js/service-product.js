(() => {
  const data = {
    n: "03",
    title: "Product & Design.",
    accent: "var(--plum)",
    intro: "Discovery through ship \u2014 product strategy, UX research, design systems, and brand. Same designers in workshops as in code review.",
    problem: "Most agencies hand you a Figma file and disappear. Most consultancies hand you a deck. We build the actual thing \u2014 research, prototypes, a working product, and the design system that keeps your team moving after we leave.",
    offerings: [
      { n: "01", title: "0\u21921 product design", desc: "From customer discovery to launched v1. We pair designers with engineers from week one \u2014 no over-the-wall handoffs.", items: ["Discovery sprints", "Concept validation", "Prototyping", "Launch"] },
      { n: "02", title: "UX audits & redesigns", desc: "Heuristic, behavioral, and accessibility audits. Then a phased redesign that doesn't break the funnel mid-flight.", items: ["Heuristic audit", "Analytics review", "Phased rollouts", "A/B testing"] },
      { n: "03", title: "Design systems", desc: "Tokenized, themable, code-first design systems. Figma library + React components shipped as one source of truth.", items: ["Tokens", "Component library", "Documentation site", "Adoption coaching"] },
      { n: "04", title: "Brand & identity", desc: "Verbal and visual identity for technology companies. Logos, type systems, brand guidelines, and the marketing site to launch them.", items: ["Naming", "Identity systems", "Guidelines", "Marketing site"] }
    ],
    proofs: [
      { metric: "12 wk", label: "0\u21921 launch with Polaris Health" },
      { metric: "3.4\xD7", label: "Activation lift after Quantix UX rebuild" },
      { metric: "94%", label: "Design system adoption across 18 product teams" }
    ],
    faqs: [
      ["Will you work with our existing design team?", "Yes. We integrate into your rituals \u2014 standups, reviews, retros \u2014 and explicitly mentor your team if you want."],
      ["Do you do research, or just design?", "Research is most of the value. Generative interviews, usability studies, behavioral analytics \u2014 every project starts here."],
      ["Can you ship the engineering too?", "Yes. Our product engineers pair with our designers for the full arc, especially on 0\u21921 work."],
      ["What's your design system stack?", "Figma + React + Tokens Studio is our default. We adapt to Web Components, SwiftUI, or Jetpack Compose if needed."]
    ]
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(window.ServiceDetail, { data }));
})();
