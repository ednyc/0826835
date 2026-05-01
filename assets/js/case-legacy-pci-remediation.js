(() => {
  window.CASE_DATA = {
    slug: "case-legacy-pci-remediation",
    collection: "work",
    entryLabel: "Work profile",
    year: "Prior",
    tag: "Security \xB7 PCI",
    duration: "Completed engagement",
    title: "PCI remediation on a legacy ASPx stack for a literacy nonprofit.",
    facts: [["Client", "Confidential"], ["Industry", "Nonprofit / literacy"], ["Engagement", "PCI remediation"], ["Environment", "Legacy ASPx"]],
    heroBg: "linear-gradient(135deg, oklch(0.66 0.14 95), oklch(0.45 0.12 60))",
    metrics: [
      { v: "PCI", l: "remediation scope" },
      { v: "ASPx", l: "legacy environment" },
      { v: "Web", l: "public and operational surface" },
      { v: "Done", l: "project status" }
    ],
    sections: [
      {
        eyebrow: "The brief",
        title: "Security work on a live legacy system is mostly risk management.",
        body: [
          "This project involved PCI remediation work for a literacy nonprofit running on a legacy ASPx environment. The site had to remain usable while the payment-adjacent surface and surrounding controls were tightened up.",
          "That kind of engagement is different from greenfield work. You are not redesigning from scratch. You are reducing exposure, cleaning up weak points, and making an older stack behave more predictably under current expectations."
        ]
      },
      {
        eyebrow: "What the work focused on",
        title: "Bringing a legacy payment-adjacent surface closer to modern trust requirements.",
        body: [
          "<strong>PCI-oriented remediation.</strong> The main objective was to address compliance and security issues around the web environment rather than treat the project like a visual rebuild.",
          "<strong>Legacy stack constraints.</strong> In an ASPx codebase, even straightforward remediation work can require careful handling because security fixes often touch brittle forms, old integrations, and established administrative habits.",
          "<strong>Operational continuity.</strong> The work had to respect the reality that nonprofit systems often support day-to-day donations, ordering, and staff processes without a large in-house engineering team behind them."
        ]
      },
      {
        eyebrow: "Why this kind of project matters",
        title: "Older systems still carry real risk, even when the organization is small.",
        body: [
          "Security and compliance work is often treated as something only venture-backed or enterprise teams need. In practice, nonprofits and smaller organizations can be running equally sensitive web flows on much older infrastructure.",
          "That makes remediation work valuable not because it is flashy, but because it reduces downside on systems that have usually been quietly carrying risk for years."
        ]
      },
      {
        eyebrow: "What it demonstrates",
        title: "Pragmatic remediation work in a legacy environment.",
        body: [
          "This entry is here to show a different category of work from the newer product and marketing surfaces: legacy-stack security remediation where the job is to stabilize, harden, and document rather than reinvent.",
          "The client name stays private, but the useful public detail is clear: PCI-focused remediation on an older ASPx environment for a mission-driven organization that still needed the site to keep working."
        ]
      }
    ]
  };
})();
