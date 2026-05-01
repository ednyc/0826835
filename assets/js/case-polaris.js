(() => {
  window.CASE_DATA = {
    slug: "case-polaris",
    year: "2025",
    tag: "AI \xB7 Product",
    duration: "16 weeks",
    title: "Polaris Health: a clinician copilot that drafts 60% of patient notes \u2014 and survives a HIPAA review.",
    facts: [["Client", "Polaris Health"], ["Industry", "Healthtech"], ["Engagement", "AI + Product"], ["Team", "9 people"]],
    heroBg: "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.5 0.18 30))",
    metrics: [
      { v: "60%", l: "Notes drafted by AI" },
      { v: "11 min", l: "Saved per encounter" },
      { v: "94%", l: "Clinician acceptance" },
      { v: "0", l: "PHI incidents" }
    ],
    sections: [
      {
        eyebrow: "The problem",
        title: "Charting was eating clinicians.",
        body: [
          "Polaris's 1,400 clinicians were spending 90 minutes a day on documentation \u2014 most of it after hours. Two prior AI vendors had shipped impressive demos that died in pilot: hallucinations on medications, vague summaries that increased liability, and an architecture that auditors flagged for HIPAA risk.",
          "The internal team had built a working prototype but couldn't get past the trust bar required for production. They'd tried three foundation models and were debating buying a vertical-AI startup."
        ]
      },
      {
        eyebrow: "What we did",
        title: "An ambient scribe with a real eval rig.",
        body: [
          "<strong>Retrieval over generation.</strong> Most of the work isn't in the LLM call \u2014 it's in pulling the right priors (last visit notes, problem list, current meds) into a tightly-scoped context. We built a deterministic retrieval layer and constrained generation to the structured SOAP format clinicians already use.",
          "<strong>Eval rig as a product.</strong> We hired two part-time clinicians as graders and built an internal eval app where they score 200 fresh encounters per week against a rubric. Every model change is gated on rubric scores and a hallucination test set.",
          "<strong>HIPAA from day zero.</strong> The compliance practice paired with the AI team for the first six weeks: BAA-covered inference, audit logs, scoped IAM, and a written architecture diagram that passed a third-party HITRUST review without modification."
        ],
        side: /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "20px 18px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-2)", letterSpacing: 1.6, textTransform: "uppercase" } }, "Engagement team"), /* @__PURE__ */ React.createElement("ul", { style: { margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 } }, /* @__PURE__ */ React.createElement("li", null, "1 engagement lead"), /* @__PURE__ */ React.createElement("li", null, "3 ML engineers"), /* @__PURE__ */ React.createElement("li", null, "2 product designers"), /* @__PURE__ */ React.createElement("li", null, "1 compliance lead"), /* @__PURE__ */ React.createElement("li", null, "2 clinical graders")))
      },
      {
        eyebrow: "From the field",
        title: "What grading taught us.",
        pullAfter: true,
        body: [
          "The first eval pass was humbling: our baseline model scored 4.1/10 on factual accuracy. The wins didn't come from a smarter model \u2014 they came from a smaller context, tighter prompting, and a refusal-to-answer mode for any field where retrieval confidence was below a threshold. By week 8 we were at 8.4/10. By go-live, 9.1.",
          "The product team rebuilt the clinician-facing UI four times. The shipping version is almost embarrassingly simple: a single review pane with hover-to-source citations. Everything fancy we tried \u2014 voice control, smart suggestions, autocomplete \u2014 got cut."
        ]
      },
      {
        eyebrow: "The outcome",
        title: "Faster notes, calmer clinicians, cleaner audits.",
        body: [
          "Six months post-launch, the copilot drafts 60% of notes without edits and supplies a starting draft for the rest. Clinician overtime is down 38%. Acceptance rate among the 1,400 users is 94%, and turnover among the early-adopter cohort is the lowest the network has seen since 2019.",
          "On the trust side: zero PHI incidents, two clean HITRUST reviews, and a documented architecture Polaris now uses as a reference for any future AI vendor evaluation."
        ]
      },
      {
        eyebrow: "What's next",
        title: "Order entry, then radiology.",
        body: [
          "Polaris is rolling the same retrieval + eval pattern into computerized order entry next quarter, then a radiology-report copilot. We're staying on as the AI partner of record, with a small embedded team and the eval rig as the long-lived asset."
        ]
      }
    ],
    quote: {
      text: "We'd been told AI couldn't ship in healthcare without three years of compliance work. Modx shipped it in four months and our auditors signed off without changes.",
      name: "Dr. Ravi Mehta",
      role: "CMIO \xB7 Polaris Health",
      avatar: "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.5 0.18 30))"
    }
  };
})();
