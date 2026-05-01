(() => {
  window.CASE_DATA = {
    slug: "case-quantix",
    year: "2024",
    tag: "Product \xB7 Design",
    duration: "14 weeks",
    title: "Quantix: an enterprise UX rebuild that lifted activation 3.4\xD7 \u2014 and sales cycles by half.",
    facts: [["Client", "Quantix"], ["Industry", "Enterprise SaaS"], ["Engagement", "Product + Design"], ["Team", "6 people"]],
    heroBg: "linear-gradient(135deg, oklch(0.5 0.16 320), oklch(0.35 0.13 310))",
    metrics: [
      { v: "3.4\xD7", l: "30-day activation lift" },
      { v: "47%", l: "Shorter sales cycle" },
      { v: "\u221262%", l: "Support tickets / seat" },
      { v: "9.2", l: "Post-onboarding NPS" }
    ],
    sections: [
      {
        eyebrow: "The problem",
        title: "Powerful product, miserable first hour.",
        body: [
          "Quantix sells a quantitative analytics platform to mid-market hedge funds. Their product was demonstrably better than the incumbents, and their sales team could prove it on a tailored demo. New customers, left alone, churned through the trial in confused silence \u2014 only 14% activated within 30 days.",
          "Three years of incremental UX work had turned the app into a settings museum. Every feature was reachable; nothing was discoverable. The internal team knew the diagnosis but couldn't get a redesign past the engineering backlog."
        ]
      },
      {
        eyebrow: "What we did",
        title: "A guided first hour. A simpler everything.",
        body: [
          "<strong>Cut, then rebuild.</strong> We mapped every feature to the three jobs new users actually run in week one. 64% of the surface area got hidden behind progressive disclosure. Nothing was deleted \u2014 but the default mode shrank to one well-lit path.",
          "<strong>A real onboarding.</strong> Most enterprise tools get a checklist and a video. We designed a guided first analysis where the user runs a real backtest on their own data within ten minutes. The tutorial is the product, not a tour over it.",
          "<strong>Design system, late.</strong> We held off on systematizing until the new patterns were proven. By week 12 we had a reusable token set, a Figma library, and a documented contribution model the in-house team owns."
        ],
        side: /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, padding: "20px 18px", background: "var(--bg)", borderRadius: 10, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--ink-2)", letterSpacing: 1.6, textTransform: "uppercase" } }, "Deliverables"), /* @__PURE__ */ React.createElement("ul", { style: { margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 13 } }, /* @__PURE__ */ React.createElement("li", null, "Onboarding flow (8 steps)"), /* @__PURE__ */ React.createElement("li", null, "Re-architected nav"), /* @__PURE__ */ React.createElement("li", null, "Design system v1"), /* @__PURE__ */ React.createElement("li", null, "14 user-research syntheses"), /* @__PURE__ */ React.createElement("li", null, "Adoption telemetry plan")))
      },
      {
        eyebrow: "From the field",
        title: "The rule we kept fighting.",
        pullAfter: true,
        body: [
          "Halfway in, the product team kept asking us to put back features hidden behind progressive disclosure. Power users were vocal; the new-user data was quiet. We held the line on a hard rule: if a feature wasn't used by 60% of users in week one, it didn't go on the home screen.",
          "Three of those features got built into the onboarding flow as discoverable side quests. Two never came back at all and nobody noticed."
        ]
      },
      {
        eyebrow: "The outcome",
        title: "Activation 3.4\xD7. Sales cycle in half.",
        body: [
          "30-day activation jumped from 14% to 48%. Average enterprise sales cycle dropped from 91 to 48 days \u2014 procurement teams stopped asking for paid pilots because trial users were converting on their own.",
          "Support volume per seat dropped 62%. The CS team redeployed three FTEs from onboarding to expansion accounts."
        ]
      },
      {
        eyebrow: "What's next",
        title: "Workflows for the long-tail jobs.",
        body: [
          "The redesign cleared the runway for four new vertical workflows the product team had been blocked on. Quantix's design lead now runs design reviews using the system we left behind; we drop in for monthly critiques."
        ]
      }
    ],
    quote: {
      text: "We'd lost three product hires to UX paralysis. Modx came in, made the calls we couldn't, and shipped a product the engineers actually defend in interviews.",
      name: "Jesse Liang",
      role: "Co-founder \xB7 Quantix",
      avatar: "linear-gradient(135deg, oklch(0.5 0.16 320), oklch(0.35 0.13 310))"
    }
  };
})();
