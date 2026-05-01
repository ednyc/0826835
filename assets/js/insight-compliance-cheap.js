(() => {
  window.INSIGHT_DATA = {
    tag: "Compliance \xB7 Long read",
    date: "Apr 2026",
    readTime: 11,
    title: "The compliance program that costs less than the auditor.",
    dek: "Most companies overspend on SOC 2 by 3\u20135\xD7. Here's the lean operating model we run for clients with under 200 employees \u2014 and the seven controls that account for 80% of audit findings.",
    author: { name: "Maya Khoury", role: "Compliance practice lead \xB7 Modx", avatar: "linear-gradient(135deg, oklch(0.7 0.18 40), oklch(0.5 0.18 30))" },
    body: [
      { type: "p", text: "The first SOC 2 audit a company runs is almost always the most expensive thing it ever buys, per dollar of value delivered. Not because the audit itself is expensive \u2014 auditors are mostly reasonable \u2014 but because the year of preparation that precedes the audit is wildly miscalibrated to what an auditor actually needs to see." },
      { type: "p", text: "We've prepared 38 companies for their first SOC 2 in the last three years. The median pre-engagement budget across those 38 was $410K. The median budget after we handed back the program was $96K. None of them failed an audit. Most got finished faster." },
      { type: "p", text: "This essay is about why the gap exists, what we cut, and the seven controls we'd never cut." },
      { type: "h2", text: "Why the bill is so high" },
      { type: "p", text: "Three reasons, in roughly this order:" },
      { type: "list", items: [
        "<strong>The compliance vendor sells you the rubric, not the discipline.</strong> Every monitoring tool ships with the same exhaustive control catalog, because none of them know which controls your auditor will care about. The default is to turn everything on.",
        "<strong>Internal teams interpret 'reasonable assurance' as 'no negative findings'.</strong> Auditors are humans, and they'll absolutely write up a finding for a missing access review. They will also accept a one-page document that says 'we don't do that, here's why' for things that genuinely don't apply.",
        "<strong>Policy work scales linearly with policy count.</strong> Every policy needs a review, an approval, and a 'last reviewed' stamp. Most companies have 30 policies when they need 11."
      ] },
      { type: "callout", label: "Field heuristic", text: "If your compliance program reads like it was written for a 5,000-person bank, and you have 80 employees, somebody is selling you the wrong product." },
      { type: "h2", text: "The seven controls that matter" },
      { type: "p", text: "We pulled the findings reports from the last 38 audits we observed. 81% of all findings \u2014 across every framework, every auditor, every company size \u2014 clustered into seven control families:" },
      { type: "list", items: [
        "<strong>Access reviews.</strong> Quarterly, documented, with evidence of who approved what.",
        "<strong>Change management.</strong> Not the policy. The actual deployment record showing who, when, why.",
        "<strong>Vendor risk.</strong> A list of every sub-processor with a current DPA. Most companies have at least three they forgot.",
        "<strong>Backup & recovery testing.</strong> A documented restore, not a documented backup. The restore is the control.",
        "<strong>Incident response.</strong> A runbook plus one tabletop per year. The tabletop write-up <em>is</em> the evidence.",
        "<strong>Logging integrity.</strong> Tamper-evident logs with a documented retention period. Three lines in your terraform module, usually.",
        "<strong>Onboarding/offboarding.</strong> The single highest-finding category, every year, every framework. Document the workflow and run a quarterly self-audit."
      ] },
      { type: "p", text: "Get those seven right, and you've covered four-fifths of the risk surface. Everything beyond is a question of which framework you're scoping for and how seriously your auditor takes the long tail." },
      { type: "h2", text: "What we cut" },
      { type: "p", text: "When we take over a stalled program, the first week is mostly subtractive. The most common cuts:" },
      { type: "h3", text: "Custom policies that mirror an out-of-the-box template" },
      { type: "p", text: "Most policies don't need to be original. The Vanta library, the Drata library, the templates your auditor will accept \u2014 they're fine. Spending six weeks on a custom Acceptable Use Policy because somebody wanted it to 'sound like us' is a tax." },
      { type: "h3", text: "Manual evidence collection" },
      { type: "p", text: "If a person has to remember to take a screenshot every quarter, you're going to fail that control eventually. Automate evidence at the source \u2014 terraform exports, IdP audit logs, backup attestations from the system itself \u2014 or scope the control out." },
      { type: "h3", text: "Controls for things you don't do" },
      { type: "p", text: "If you don't run a data center, you don't need a physical security control. If you don't process payments, you don't need PCI-adjacent controls. The number of companies running PCI-style logging because their compliance vendor turned it on by default is genuinely staggering." },
      { type: "pull", text: "The audit isn't measuring how rigorously you do everything. It's measuring whether you do the right things, consistently, with evidence." },
      { type: "h2", text: "The lean operating model" },
      { type: "p", text: "We give every program a single owner, part-time, supported by a documented runbook. The runbook is short \u2014 usually 14 pages \u2014 and lives in the same Notion or Confluence as the rest of engineering. It covers:" },
      { type: "list", items: [
        "The current scoped frameworks and the auditor's name.",
        "The control catalog (cut to fit), each with an evidence source and a frequency.",
        "A quarterly cadence: access review week 1, vendor refresh week 4, tabletop week 9.",
        "The evidence vault \u2014 a folder structure mapped one-to-one to controls. No drift.",
        "An escalation path: who calls the auditor when something genuinely breaks."
      ] },
      { type: "p", text: "That's it. The whole program. A senior compliance engineer can run it in four hours a week. The auditor walks the runbook and the evidence vault, ticks the boxes, and is gone in a week." },
      { type: "h2", text: "What an audit actually costs" },
      { type: "p", text: "On the lean program, here's what a typical year looks like for a 120-person company on SOC 2 Type II:" },
      { type: "code", text: "External audit fees           $42,000\nMonitoring tool (Vanta/Drata) $24,000\nInternal owner (0.4 FTE)      $96,000  \u2190 also runs ISO\nTotal                         $162,000" },
      { type: "p", text: "The same company, on the program they had when we walked in: $487K. Same auditor. Same outcome." },
      { type: "h2", text: "When to spend more" },
      { type: "p", text: "Two cases where the lean model isn't enough:" },
      { type: "list", items: [
        "<strong>Regulated workloads.</strong> HIPAA, PCI Level 1, HITRUST. The control surface is genuinely larger and the auditors are stricter. Budget 2\u20133\xD7 the lean baseline.",
        "<strong>Pre-IPO companies.</strong> Different audience. Spend on the controls that survive an S-1 review, not the ones that scrape past your customer's procurement form."
      ] },
      { type: "p", text: "Everything in between is a candidate for the lean program. If you'd like a second opinion on yours, our compliance practice does paid one-week reviews; we'll usually find $200\u2013400K of cuts. Often more." }
    ],
    related: [
      { slug: "insight-backstage.html", tag: "Platform", title: "Backstage is a graveyard. What to build instead." },
      { slug: "insight-evals.html", tag: "AI", title: "Evals are the moat." },
      { slug: "case-northwind.html", tag: "Case study", title: "Northwind Bank: spreadsheets to continuous SOC 2." }
    ]
  };
})();
