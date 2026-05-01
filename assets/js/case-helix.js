(() => {
  window.CASE_DATA = {
    slug: "case-helix",
    year: "2024",
    tag: "AI \xB7 Compliance",
    duration: "20 weeks",
    title: "Helix: medical RAG that cleared HITRUST with zero findings.",
    facts: [["Client", "Helix"], ["Industry", "Healthtech / RCM"], ["Engagement", "AI + Compliance"], ["Team", "8 people"]],
    heroBg: "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.4 0.18 280))",
    metrics: [
      { v: "0", l: "HITRUST findings" },
      { v: "12 wk", l: "From kickoff to audit" },
      { v: "82%", l: "First-pass denial reversal" },
      { v: "$4.8M", l: "Annualized recovery" }
    ],
    sections: [
      {
        eyebrow: "The problem",
        title: "RAG demos die in healthcare.",
        body: [
          "Helix runs revenue-cycle management for a network of regional hospitals. They'd built a denial-letter response tool \u2014 a RAG system that drafts appeal letters from the patient's chart and the payer's policy library \u2014 and watched it stall in legal review for nine months.",
          "Three risks were blocking go-live: PHI exposure to the inference provider, hallucinated citations of payer policy, and an audit trail that couldn't survive a HITRUST inspection."
        ]
      },
      {
        eyebrow: "What we did",
        title: "Treat compliance like a product requirement.",
        body: [
          "<strong>Inference inside the trust boundary.</strong> We moved the LLM into a customer-tenant VPC with a BAA-covered provider, encrypted at rest and in transit, with no model-training opt-in. Every prompt and response is logged with a per-encounter trace ID.",
          "<strong>Citation-locked generation.</strong> The model can only quote payer-policy passages that exist verbatim in the retrieved corpus. A second pass validates every citation against the source document. Hallucinated cites \u2014 the legal team's main fear \u2014 became impossible by construction.",
          "<strong>An auditor in the room.</strong> A QSA-certified auditor joined the engagement at week three, attended every sprint review, and wrote the controls documentation alongside the engineering team. By the time we engaged the third-party assessor, the package was already complete."
        ],
        side: /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "20px 18px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-2)", letterSpacing: 1.6, textTransform: "uppercase" } }, "Controls covered"), /* @__PURE__ */ React.createElement("ul", { style: { margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 } }, /* @__PURE__ */ React.createElement("li", null, "HITRUST CSF v11"), /* @__PURE__ */ React.createElement("li", null, "HIPAA Security Rule"), /* @__PURE__ */ React.createElement("li", null, "SOC 2 Type II overlap"), /* @__PURE__ */ React.createElement("li", null, "PHI access logs"), /* @__PURE__ */ React.createElement("li", null, "Model output retention")))
      },
      {
        eyebrow: "From the field",
        title: "The hallucination we caught at the assessor.",
        pullAfter: true,
        body: [
          "Two days before the audit walkthrough, our citation validator flagged a single appeal letter where the model had paraphrased \u2014 not quoted \u2014 a payer rule. The letter was technically correct, but the citation didn't match the source verbatim. We caught it because the validator ran on every output, every time.",
          "We showed the failure to the assessor as evidence the controls worked. They flagged it as an asset, not a deficiency. The audit closed with zero findings."
        ]
      },
      {
        eyebrow: "The outcome",
        title: "Audit passed. Denials reversed.",
        body: [
          "Helix passed HITRUST with zero findings. The system now drafts appeals on roughly 11,000 denials per month. First-pass reversal rate climbed from 47% to 82% \u2014 humans review every letter, but the AI handles the load that used to require seasonal contract staff.",
          "Annualized recovered revenue is $4.8M. The compliance package \u2014 controls, evidence, runbooks \u2014 is reusable as the AI surface expands."
        ]
      },
      {
        eyebrow: "What's next",
        title: "Coding assistance, with the same trust ceiling.",
        body: [
          "Helix is now piloting AI-assisted medical coding on the same trust architecture. We're providing the eval rig and a part-time auditor; the build is fully in-house."
        ]
      }
    ],
    quote: {
      text: "Our legal team had two AI vendors blocked. Modx didn't ask them to lower the bar \u2014 they engineered the system to clear it.",
      name: "Karen Holm",
      role: "General Counsel \xB7 Helix",
      avatar: "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.4 0.18 280))"
    }
  };
})();
