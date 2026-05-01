(() => {
  window.CASE_DATA = {
    slug: "case-lumen",
    year: "2025",
    tag: "Platform \xB7 Data",
    duration: "22 weeks",
    title: "Lumen Energy: cutting $3.1M of grid forecasting compute without slowing the model.",
    facts: [["Client", "Lumen Energy"], ["Industry", "Climate / Utilities"], ["Engagement", "Platform + Data"], ["Team", "7 people"]],
    heroBg: "linear-gradient(135deg, oklch(0.55 0.13 155), oklch(0.35 0.1 165))",
    metrics: [
      { v: "$3.1M", l: "Annual savings" },
      { v: "61%", l: "Compute reduction" },
      { v: "1.3\xD7", l: "Forecast iteration speed" },
      { v: "0", l: "SLO violations" }
    ],
    sections: [
      {
        eyebrow: "The problem",
        title: "A grid model that scaled with the bill.",
        body: [
          "Lumen runs the day-ahead and intra-day forecasts that 14 utilities use to balance their grids. Their core model \u2014 a hybrid physics + ML pipeline \u2014 was correct, fast enough, and getting more expensive every quarter. Compute spend had crossed $5M/year and was projected to double inside 18 months. Two cloud-cost vendors had been hired and quietly let go.",
          "The data science team didn't want a rewrite. They wanted the same notebooks, the same iteration speed, and a smaller bill."
        ]
      },
      {
        eyebrow: "What we did",
        title: "Rewrite the runtime, not the model.",
        body: [
          "<strong>Profile first, refactor second.</strong> Two weeks of profiling showed 71% of compute went to feature engineering \u2014 re-running the same windowed aggregations across 30M sensor rows for every retrain. We built a feature store with materialized rollups; the model code was unchanged.",
          "<strong>Right-sized inference.</strong> The team had been running on perpetual GPU clusters for a workload that bursts at the day-ahead boundary. We moved to a Ray + autoscaling-Kubernetes pattern with spot instances for offline training and reserved capacity for the SLO-bound forecast.",
          "<strong>A cost dashboard the modelers actually look at.</strong> Per-experiment cost attribution, surfaced in the same Jupyter UI the team uses, with a soft budget cap and a Slack ping when an experiment is on track to overspend."
        ],
        side: /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "20px 18px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-2)", letterSpacing: 1.6, textTransform: "uppercase" } }, "Stack"), /* @__PURE__ */ React.createElement("ul", { style: { margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 } }, /* @__PURE__ */ React.createElement("li", null, "GCP + Anthos"), /* @__PURE__ */ React.createElement("li", null, "Ray on Kubernetes"), /* @__PURE__ */ React.createElement("li", null, "Feast feature store"), /* @__PURE__ */ React.createElement("li", null, "BigQuery"), /* @__PURE__ */ React.createElement("li", null, "OpenCost")))
      },
      {
        eyebrow: "From the field",
        title: "The savings nobody clapped for.",
        pullAfter: true,
        body: [
          "Most of the win came from boring work: feature deduplication, region right-sizing, and turning off three abandoned BigQuery scheduled queries that had been silently running for 14 months. The model team's biggest reaction wasn't applause \u2014 it was relief that nothing had broken.",
          "The dashboard turned out to matter more than any single optimization. Once each experiment had a price tag, the team self-policed: cluster sizes shrank, sweep ranges tightened, and the team's own ideas closed half the remaining gap in the second quarter."
        ]
      },
      {
        eyebrow: "The outcome",
        title: "$3.1M out, forecast quality unchanged.",
        body: [
          "Annualized savings landed at $3.1M against a target of $2M. Forecast quality is statistically unchanged \u2014 actually marginally better, because the iteration speed-up let the team try more architectures. Day-ahead SLO compliance held at 100%.",
          "Lumen's CFO has since asked us to apply the same playbook to two adjacent teams. We declined to scale the engagement and instead trained a Lumen platform engineer to own the dashboard."
        ]
      },
      {
        eyebrow: "What's next",
        title: "A real-time line-loss model.",
        body: [
          "With headroom in the budget, Lumen is investing in a real-time line-loss estimator that needs sub-second inference at the edge. We're consulting on the architecture but the team itself owns the build."
        ]
      }
    ],
    quote: {
      text: "We'd burned six figures on cost-cutting consultants who didn't know our model. Modx came in, profiled it like engineers, and didn't ask us to change a line of model code.",
      name: "Priya Anand",
      role: "VP Engineering \xB7 Lumen Energy",
      avatar: "linear-gradient(135deg, oklch(0.55 0.13 155), oklch(0.35 0.1 165))"
    }
  };
})();
