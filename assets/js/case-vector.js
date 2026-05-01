(() => {
  window.CASE_DATA = {
    slug: "case-vector",
    year: "2024",
    tag: "AI \xB7 Platform",
    duration: "10 weeks",
    title: "Vector Capital: cutting model spend 52% with a routing layer their analysts never see.",
    facts: [["Client", "Vector Capital"], ["Industry", "Financial services"], ["Engagement", "AI + Platform"], ["Team", "5 people"]],
    heroBg: "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.45 0.16 45))",
    metrics: [
      { v: "52%", l: "Model spend reduction" },
      { v: "180ms", l: "P95 routing overhead" },
      { v: "11", l: "Models behind one API" },
      { v: "0", l: "Quality regressions" }
    ],
    sections: [
      {
        eyebrow: "The problem",
        title: "GPT-4 for everything.",
        body: [
          "Vector's research desks had built dozens of internal tools on top of OpenAI: research summarization, transcript Q&A, code review, internal search. Every tool defaulted to the most expensive model available because nobody trusted a smaller one to be reliable. The bill was approaching $4.2M/year and growing 12% per quarter.",
          "Leadership wanted savings without telling 400 analysts to think about model selection."
        ]
      },
      {
        eyebrow: "What we did",
        title: "A router that's invisible until it isn't.",
        body: [
          "<strong>One API, eleven models.</strong> We built a thin proxy that exposes the same OpenAI-compatible endpoint analyst tools were already calling. Behind it, a classifier inspects each request and routes to the cheapest model that meets the quality bar for that intent.",
          "<strong>Quality before savings.</strong> For every routing decision, we keep a side-by-side eval against the previous default. If a smaller model degrades quality on a class of requests, traffic snaps back to the expensive one and an alert fires. The router is conservative by design.",
          "<strong>Per-desk dashboards.</strong> Each research desk sees its own spend, latency, and quality metrics. Heads of research compete on efficiency the same way they compete on returns; spend dropped another 11% in the second month from behavior change alone."
        ],
        side: /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "20px 18px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-2)", letterSpacing: 1.6, textTransform: "uppercase" } }, "Models behind the router"), /* @__PURE__ */ React.createElement("ul", { style: { margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 } }, /* @__PURE__ */ React.createElement("li", null, "GPT-4-class (3 vendors)"), /* @__PURE__ */ React.createElement("li", null, "Mid-tier (4 vendors)"), /* @__PURE__ */ React.createElement("li", null, "Open-weight (Llama, Mistral)"), /* @__PURE__ */ React.createElement("li", null, "In-house intent classifier"), /* @__PURE__ */ React.createElement("li", null, "Per-desk fallback policies")))
      },
      {
        eyebrow: "From the field",
        title: "The boring class of request that paid for the project.",
        pullAfter: true,
        body: [
          "70% of Vector's traffic was a single intent: pull the question out of an analyst chat message and search the internal corpus for it. A 7B open-weight model handled it as well as GPT-4 on the eval set. That single routing rule saved $1.8M annualized.",
          "The harder classes \u2014 code review, novel research questions \u2014 still go to frontier models. The router doesn't try to be clever where cleverness costs money."
        ]
      },
      {
        eyebrow: "The outcome",
        title: "52% out. Nobody noticed.",
        body: [
          "Total model spend dropped from $4.2M to $2.0M annualized inside ten weeks. Analyst satisfaction surveys came back unchanged \u2014 most users couldn't have told you a routing layer existed.",
          "P95 added latency from the routing layer is 180ms. Quality regressions caught by the eval harness so far: zero. The router itself is now an internal product owned by Vector's platform team; we sunset our access at handoff."
        ]
      },
      {
        eyebrow: "What's next",
        title: "Same pattern, different surface.",
        body: [
          "Vector is applying the same routing-and-eval pattern to embedding models and structured-extraction calls. We provide a quarterly review and a hotline; the build is theirs."
        ]
      }
    ],
    quote: {
      text: "We were one quarter from a 'use less AI' memo. Modx delivered the savings without us having to ask anyone to change behavior.",
      name: "Daniel Wu",
      role: "Head of Research Engineering \xB7 Vector Capital",
      avatar: "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.45 0.16 45))"
    }
  };
})();
