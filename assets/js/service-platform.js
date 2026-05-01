(() => {
  const data = {
    n: "02",
    title: "Platform Engineering.",
    accent: "var(--forest)",
    intro: "Cloud platforms, internal developer platforms, and the golden paths that make your engineers faster. Built once, owned by you.",
    problem: "Engineering velocity stalls when each team rebuilds the same primitives. CI breaks differently in every repo. On-call drains your senior engineers. We replace ad-hoc plumbing with paved roads \u2014 and write the runbooks so the platform survives turnover.",
    offerings: [
      { n: "01", title: "Cloud migrations", desc: "AWS, GCP, or Azure \u2014 full lift-and-improve from on-prem or competing clouds. Zero-downtime cutovers, IaC from day one.", items: ["Discovery & mapping", "IaC (Terraform/Pulumi)", "Network design", "Cutover playbooks"] },
      { n: "02", title: "Internal developer platforms", desc: "Backstage, Port, or custom. Service catalogs, golden paths, and self-serve infra so product teams stop opening platform tickets.", items: ["Service catalog", "Scaffolders", "Self-serve infra", "Cost guardrails"] },
      { n: "03", title: "Reliability engineering", desc: "SLOs, observability, and an on-call rotation we can run with you \u2014 or for you. We bring our own pager.", items: ["SLO design", "Observability (OTel)", "Incident response", "Postmortem culture"] },
      { n: "04", title: "Data infrastructure", desc: "Data lakes, lakehouses, and streaming. Snowflake, Databricks, Kafka, or open-source \u2014 pragmatic stacks, not vendor pitches.", items: ["Data lakehouse", "ETL/ELT", "Streaming (Kafka)", "Governance"] }
    ],
    proofs: [
      { metric: "80%", label: "Faster deploy times at Lumen Energy" },
      { metric: "$3.1M", label: "Annual cloud spend reduction" },
      { metric: "9 mo", label: "On-prem to multi-region cutover" }
    ],
    faqs: [
      ["Do you bring opinions or take orders?", "Both. We come with strong defaults \u2014 Terraform, OTel, GitOps \u2014 but adapt to your stack. We don't insist on Kubernetes if you don't need it."],
      ["Can you embed with our existing platform team?", "Yes. About half our platform engagements are augmentations, not greenfield. We sit inside your org chart for the duration."],
      ["What does success look like?", "Your engineers stop filing platform tickets and start using the paved road. Deploys go from hours to minutes. On-call sleeps."],
      ["Will this lock us into your tooling?", "No. Everything we build is standard, open, and documented. Most of our clients run the platform without us within 18 months."]
    ]
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(window.ServiceDetail, { data }));
})();
