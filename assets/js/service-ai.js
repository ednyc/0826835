(() => {
  const data = {
    n: "04",
    title: "AI & Applied ML.",
    accent: "var(--signal)",
    intro: "Production-grade retrieval, agents, and evaluation rigs. AI that holds up under compliance review and stays cheap at scale.",
    problem: "Demos are easy. Production is the hard part. The gap between a 90% prototype and a 99.5% deployment is six months, an evals harness, and an opinion about cost. We build all three.",
    offerings: [
      { n: "01", title: "RAG & retrieval systems", desc: "Hybrid search, re-ranking, and citation-aware generation. Built for high-stakes domains \u2014 legal, medical, financial \u2014 where hallucinations get you sued.", items: ["Hybrid search", "Re-ranking", "Citation enforcement", "Knowledge graphs"] },
      { n: "02", title: "Agent architectures", desc: "Multi-step agents with tool use, memory, and human-in-the-loop checkpoints. Designed to fail gracefully when the model is wrong.", items: ["Tool use", "Planning loops", "HITL gates", "Trajectory replay"] },
      { n: "03", title: "Evals & observability", desc: "The thing nobody builds and everyone needs. Offline eval suites, online experiments, regression catches, and prompt CI.", items: ["Offline evals", "Online A/B", "Prompt CI", "Drift detection"] },
      { n: "04", title: "Model cost engineering", desc: "Routing, caching, distillation, and quantization. Cut inference spend by half without giving up quality.", items: ["Model routing", "Semantic caching", "Distillation", "Quantization"] }
    ],
    proofs: [
      { metric: "RAG", label: "Citation-aware retrieval systems for high-stakes workflows" },
      { metric: "Eval", label: "Regression harnesses that gate prompt and model changes" },
      { metric: "Route", label: "Model routing and caching to keep inference costs in bounds" }
    ],
    faqs: [
      ["What models do you use?", "Whatever the workload demands. Frontier models for hard reasoning, open-weight for cheap throughput, fine-tunes for narrow domains. We benchmark before we commit."],
      ["Can you work with our security team?", "Yes \u2014 most of our AI work is in regulated industries (health, finance, gov). We design for SOC 2 / HIPAA / FedRAMP from day one."],
      ["How do you handle hallucinations?", "Citation enforcement, structured outputs, evals against ground truth, and HITL on high-stakes paths. We don't pretend they go away \u2014 we make them detectable."],
      ["Do you build models or use APIs?", "Mostly the latter. We fine-tune when the data and the economics justify it. We don't pretrain."]
    ]
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(window.ServiceDetail, { data }));
})();
