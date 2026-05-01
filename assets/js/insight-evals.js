(() => {
  window.INSIGHT_DATA = {
    tag: "AI \xB7 Essay",
    date: "Mar 2026",
    readTime: 8,
    title: "Evals are the moat.",
    dek: "Anyone can ship an LLM demo. Almost nobody can tell you whether it's getting better. The eval rig is where defensibility lives.",
    author: { name: "Sasha Lim", role: "AI practice lead \xB7 Modx", avatar: "linear-gradient(135deg, oklch(0.55 0.18 250), oklch(0.4 0.18 280))" },
    body: [
      { type: "p", text: "Two years into the production LLM era, a clear pattern has emerged in the AI engagements we run: the teams shipping reliably aren't the ones with the cleverest prompts or the largest fine-tuning budgets. They're the ones with a working eval rig." },
      { type: "p", text: "The rig is unsexy. It is also the asset that compounds." },
      { type: "h2", text: "What we mean by an eval rig" },
      { type: "p", text: "Not a benchmark. Not a HumanEval score. We mean the daily-driver internal system that:" },
      { type: "list", items: [
        "Runs your model under test against a curated, growing dataset of real production examples.",
        "Scores each output against a rubric you maintain \u2014 with humans, with LLMs as graders, or both.",
        "Tracks regressions across model versions, prompt versions, and retrieval changes.",
        "Gates production deploys on a measurable bar."
      ] },
      { type: "p", text: "If you can't change a prompt, see a graph go up or down, and decide whether to ship \u2014 you don't have an eval rig. You have intuition and hope." },
      { type: "h2", text: "Why teams skip it" },
      { type: "p", text: "Three reasons, in declining order of how reasonable they sound:" },
      { type: "list", items: [
        "<strong>'We don't know what to grade.'</strong> Fair, on day one. Build the rubric from the first 50 production failures. The rubric is a living document; v1 is always rough.",
        "<strong>'Graders are too expensive.'</strong> LLM-as-judge is genuinely cheap now, and a small human-grader pool of 2-3 part-time domain experts catches what the LLM grader misses. Budget for both.",
        "<strong>'Our team is too small for this.'</strong> The eval rig is the highest-leverage hire on a 4-person AI team. Skipping it to ship faster is the cheapest-looking, most expensive decision you can make."
      ] },
      { type: "callout", label: "The hard truth", text: "If you don't know whether your AI is getting better, you have no idea whether you're shipping a product or a slot machine." },
      { type: "h2", text: "What a good rig looks like" },
      { type: "p", text: "The eval rigs that survive contact with shipping engineers share a few properties:" },
      { type: "h3", text: "It runs on every PR" },
      { type: "p", text: "Gated CI is the only way the rig survives. If running evals is a chore that someone has to remember, it stops happening within six weeks." },
      { type: "h3", text: "It has a real UI" },
      { type: "p", text: "Not a notebook. A web UI where graders can see the input, the model output, the gold answer, and click a score. Investing in the UI is investing in your data quality." },
      { type: "h3", text: "It treats graders as users" },
      { type: "p", text: "If the grading workflow is painful, your data goes bad. We've seen rubrics with 17 dimensions that no human can hold in their head. Cut to 3-5. Calibrate quarterly. Pay graders well." },
      { type: "h3", text: "Failures become test cases" },
      { type: "p", text: "Every production hallucination, every angry user, every 'why did it do that' moment goes into the eval set. The set grows with the product. By month six, your rig is the institutional memory of every mistake the system has ever made \u2014 and the most valuable artifact your team owns." },
      { type: "pull", text: "The rig is what makes the model swap-able. Without it, you are married to your current model. With it, you are the buyer in every conversation with every vendor." },
      { type: "h2", text: "Eval-as-leverage" },
      { type: "p", text: "Once a rig is in place, a few things happen that don't happen otherwise:" },
      { type: "list", items: [
        "Model swaps stop being scary. New release? Run it through the rig overnight. Decide on data, not vibes.",
        "Vendor negotiations get sharper. You can prove that model A is 8 points better on the rubric that matters to <em>you</em>.",
        "Smaller models become viable. The rig tells you which classes of request a 7B model handles as well as a frontier model. Routing follows.",
        "PR reviews get less religious. 'I think this prompt is better' becomes 'this prompt is +3.1 on the rubric'.",
        "Onboarding gets faster. New engineers can ship prompt changes without breaking production because the rig catches their regressions."
      ] },
      { type: "h2", text: "The build, in four weeks" },
      { type: "p", text: "Our default playbook for getting from zero to a working rig:" },
      { type: "code", text: "Week 1  Curate v1 dataset (200 examples) from production.\n        Draft 5-dim rubric. Calibrate with 2 graders.\n\nWeek 2  Build grading UI (we like Streamlit + Postgres).\n        Wire LLM-as-judge as second grader.\n        Backfill scores on the last 4 model versions.\n\nWeek 3  CI integration. Block deploy on regression.\n        Per-dimension dashboards. Alerting on drift.\n\nWeek 4  Hand off ownership. Document the runbook.\n        First quarterly recalibration scheduled." },
      { type: "p", text: "Four weeks. One engineer, half-time. The asset compounds for years." },
      { type: "h2", text: "The thing we tell every new engagement" },
      { type: "p", text: "If you only do one thing in your AI program this year, build the rig. Not the next prompt. Not the next fine-tune. The rig. Everything else gets better when you can measure it." }
    ],
    related: [
      { slug: "insight-backstage.html", tag: "Platform", title: "Backstage is a graveyard. What to build instead." },
      { slug: "insight-compliance-cheap.html", tag: "Compliance", title: "The compliance program that costs less than the auditor." },
      { slug: "case-vector.html", tag: "Case study", title: "Vector Capital: 52% AI cost reduction with a routing layer." }
    ]
  };
})();
