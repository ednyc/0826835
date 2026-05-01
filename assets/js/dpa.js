(() => {
  window.LEGAL_DATA = {
    kind: "Data processing addendum",
    title: "Data processing addendum.",
    subtitle: "How Modx processes personal data on your behalf when we act as a processor under GDPR, UK GDPR, and analogous laws.",
    effective: "April 1, 2026",
    version: "4.0",
    contact: "dpa@modxgo.com",
    sections: [
      { id: "scope", label: "1. Scope & roles", body: [
        'This Data Processing Addendum ("DPA") forms part of the Master Services Agreement ("MSA") between you (the "Controller") and Modx Technology Services, Inc. (the "Processor"). It applies whenever Modx processes personal data on your behalf in connection with the services.',
        'Where the MSA refers to a DPA, this document is the DPA. To execute, you may countersign the cover sheet provided with your MSA, or request a fully-executable PDF from <a href="mailto:dpa@modxgo.com" style="color:var(--ink)">dpa@modxgo.com</a>.'
      ] },
      { id: "subject", label: "2. Subject matter & duration", body: [
        "<strong>Subject matter:</strong> the processing activities described in your SOW.",
        "<strong>Duration:</strong> the term of the MSA, plus any retention period required by law.",
        "<strong>Nature & purpose:</strong> delivering the services contracted under the MSA, which may include compliance work, platform engineering, product design, or AI development.",
        "<strong>Data subjects:</strong> typically your employees, contractors, end-users, and customers.",
        "<strong>Categories of personal data:</strong> as listed in Annex A, customized per engagement."
      ] },
      { id: "obligations", label: "3. Processor obligations", body: [
        "Modx will:",
        { type: "list", items: [
          "Process personal data only on documented instructions from the Controller.",
          "Ensure persons authorized to process the data are bound by confidentiality.",
          "Implement appropriate technical and organizational measures (Annex B).",
          "Engage sub-processors only with prior authorization (Section 5).",
          "Assist the Controller with data subject requests, DPIAs, and breach notifications.",
          "Delete or return all personal data at the end of the engagement.",
          "Make available all information necessary to demonstrate compliance, including audit cooperation."
        ] }
      ] },
      { id: "security", label: "4. Security measures (Annex B)", body: [
        "Modx maintains an information security program aligned to SOC 2 Type II and ISO 27001. Specific controls include:",
        { type: "table", cols: ["Domain", "Control"], rows: [
          ["Access", "SSO + MFA, role-based access, quarterly reviews"],
          ["Encryption", "TLS 1.3 in transit; AES-256 at rest"],
          ["Logging", "Centralized audit logs, 1-year retention, tamper-evident"],
          ["Endpoints", "MDM-enforced disk encryption, EDR, screen lock"],
          ["Network", "Zero-trust access, no flat networks, segmentation per engagement"],
          ["People", "Background checks, annual security training, signed NDAs"],
          ["Incident", "24/7 on-call, documented IR runbook, 24-hour notification"]
        ] }
      ] },
      { id: "subprocessors", label: "5. Sub-processors", body: [
        "The Controller authorizes Modx to engage the sub-processors listed in our trust center. Modx will give 30 days' notice of any new sub-processor; the Controller may object on reasonable grounds, in which case the parties will work in good faith to find a substitute.",
        "Modx remains liable for the acts and omissions of its sub-processors."
      ] },
      { id: "transfers", label: "6. International transfers", body: [
        "Where personal data is transferred outside the EEA, UK, or Switzerland, the parties rely on the EU Standard Contractual Clauses (SCCs) and the UK International Data Transfer Addendum, incorporated by reference. The Controller is the data exporter; Modx is the data importer.",
        "Modx supplements the SCCs with the technical and organizational measures in Annex B and a documented transfer impact assessment, available on request."
      ] },
      { id: "breach", label: "7. Personal data breach", body: [
        "Modx will notify the Controller of a confirmed personal data breach without undue delay and in any case within 24 hours of confirmation. Notification will include the nature of the breach, the categories and approximate volume of data and data subjects, the likely consequences, and the measures taken or proposed.",
        "Modx will assist the Controller in meeting its own breach-notification obligations."
      ] },
      { id: "audit", label: "8. Audit rights", body: [
        "On 30 days' notice and no more than once per 12-month period (except after a confirmed breach), the Controller may audit Modx's compliance with this DPA, in person or via written questionnaire. In lieu of an on-site audit, Modx may provide its current SOC 2 Type II report and ISO 27001 certificate, which the Controller agrees to accept as sufficient under normal circumstances."
      ] },
      { id: "deletion", label: "9. Return & deletion", body: [
        "Within 90 days of termination of the MSA, Modx will, at the Controller's choice, delete or return all personal data and certify deletion in writing. Backups containing personal data will be deleted on their normal rotation cycle and are isolated from production systems in the meantime."
      ] },
      { id: "annex-a", label: "10. Annex A \u2014 categories", body: [
        "The categories of personal data and data subjects are as specified in your SOW. A blank Annex A is appended to every executed MSA for completion at engagement kickoff. Common categories include: name, work email, role/title, IP address, employment metadata, end-user identifiers, and (where contracted) protected health information under a separate BAA."
      ] },
      { id: "contact", label: "11. Contact", body: [
        'DPA questions: <a href="mailto:dpa@modxgo.com" style="color:var(--ink)">dpa@modxgo.com</a> \xB7 Data Protection Officer: Maya Khoury \xB7 Modx Technology Services, Inc. \xB7 350 Mission St., San Francisco, CA 94105.'
      ] }
    ]
  };
})();
