(() => {
  window.INSIGHT_DATA = {
    tag: "Platform \xB7 Essay",
    date: "Apr 2026",
    readTime: 9,
    title: "Backstage is a graveyard. What to build instead.",
    dek: "Internal developer platforms fail when they're treated as products built for the platform team, not the developers. Here's the operating model that makes them stick.",
    author: { name: "Wei Tanaka", role: "Platform practice lead \xB7 Modx", avatar: "linear-gradient(135deg, oklch(0.55 0.13 155), oklch(0.35 0.1 165))" },
    body: [
      { type: "p", text: "Every other quarter, a director of platform engineering tells us their Backstage instance is a graveyard. Service catalog half-populated. Templates last touched eleven months ago. Three tabs nobody opens. They want to know whether to rip it out or recommit." },
      { type: "p", text: "The answer is almost always neither. The tool isn't broken \u2014 the operating model around it is." },
      { type: "h2", text: "The failure mode" },
      { type: "p", text: "Most platforms get built like this: a platform team is given a budget, picks a framework (Backstage is fashionable, the answer might also be Cortex or a homegrown thing), spends six months building the surface, and then announces it. Adoption is enforced via a memo. Six months later the catalog is stale, the templates are broken on the latest stack, and the platform team is busy fielding tickets about the platform itself." },
      { type: "callout", label: "The pattern", text: "A platform built as <em>infrastructure</em> rots. A platform built as a <em>product</em> ships." },
      { type: "h2", text: "What works" },
      { type: "p", text: "Three patterns we see in platforms that thrive past year two:" },
      { type: "h3", text: "1. The platform has a PM. Seriously." },
      { type: "p", text: "Not a tech lead. Not a staff engineer who 'also does product'. A real product manager who interviews developers, runs surveys, builds a roadmap based on adoption metrics, and kills features that nobody uses. The best platforms we've worked with have a 1:8 PM-to-engineer ratio. The worst have zero PMs." },
      { type: "h3", text: "2. The first surface is a paved path, not a portal" },
      { type: "p", text: "If your developers' first interaction with the platform is logging into a web UI to find their service, you've already lost. The first surface should be the path of least resistance for the most common task: bootstrapping a new service. <code>plat new svc</code> is the platform. The portal is supplemental." },
      { type: "h3", text: "3. Adoption is measured, weekly" },
      { type: "p", text: "Every platform we've revived had stopped measuring adoption. Once we put a dashboard in front of leadership \u2014 DAU, template runs per week, services in catalog with fresh metadata, time-to-first-deploy for new joiners \u2014 the conversation shifted from 'should we keep building?' to 'why is module X stuck?'." },
      { type: "pull", text: "The dashboard is the product the platform team owes the rest of the org. Hide it and you'll be defunded by the second budget cycle." },
      { type: "h2", text: "What to actually build, in order" },
      { type: "p", text: "When we start a platform engagement from zero, this is the build order. Skip steps at your peril." },
      { type: "list", items: [
        "<strong>Service template.</strong> One blessed way to start a new service. Includes CI, observability hooks, secrets, deploy. Two days of work for an engineer to go from idea to staging.",
        "<strong>Service catalog.</strong> Auto-populated from the templates. Hand-edited entries are a smell.",
        "<strong>Deploy pipeline.</strong> Standardized, opinionated, opt-out instead of opt-in.",
        "<strong>Observability defaults.</strong> Logs, metrics, traces wired by the template. Dashboards generated, not hand-rolled.",
        "<strong>Secrets and identity.</strong> Workload identity, no long-lived keys. The template handles this; the developer never sees it.",
        "<strong>Cost dashboard, per service.</strong> The single feature with the highest ROI we've ever shipped on a platform.",
        "<strong>Self-service IAM.</strong> Developers grant access via PR, with policy-as-code. No more Slack DMs to platform team."
      ] },
      { type: "p", text: "Notice what's not on the list: a unified UI, ChatOps integration, custom plugins. Build those when you've earned them, after the bottom of the list is rock solid." },
      { type: "h2", text: "When to rip and replace" },
      { type: "p", text: "Sometimes the existing platform genuinely is unsalvageable: a Backstage fork two minor versions behind that nobody owns, written in a language nobody on the team speaks, with no tests. In those cases we usually:" },
      { type: "list", items: [
        "Keep the catalog data. It's the asset. Migrate it.",
        "Rebuild the templates from the latest blessed stack, not a port of the old ones.",
        "Cut the UI surface by 60% on day one. Add it back only when adoption justifies it.",
        "Set a hard 12-week cap on the rebuild. Anything that doesn't fit, doesn't ship."
      ] },
      { type: "h2", text: "The thing nobody wants to hear" },
      { type: "p", text: "Most platforms don't fail because of the tool. They fail because the platform team doesn't have product instincts and isn't measured on adoption. Hire a PM, write down the metrics that matter, kill the surface that nobody uses, and ship the paved path. The graveyard turns back into a product." }
    ],
    related: [
      { slug: "insight-evals.html", tag: "AI", title: "Evals are the moat." },
      { slug: "insight-compliance-cheap.html", tag: "Compliance", title: "The compliance program that costs less than the auditor." },
      { slug: "case-lumen.html", tag: "Case study", title: "Lumen Energy: cutting $3.1M of grid forecasting compute." }
    ]
  };
})();
