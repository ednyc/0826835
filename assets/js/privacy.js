(() => {
  window.LEGAL_DATA = {
    kind: "Privacy policy",
    title: "Privacy policy.",
    subtitle: "How we collect, use, and protect personal information across modxgo.com and our engagements.",
    effective: "April 1, 2026",
    version: "3.2",
    // Direct email contact intentionally hidden.
    contact: null,
    sections: [
      { id: "overview", label: "1. Overview", body: [
        'Modx Technology Services, Inc. ("Modx", "we", "us") provides technology services to enterprise clients. This policy explains what personal information we collect when you visit modxgo.com, contact us, attend an event, or interact with us during an engagement.',
        // Direct privacy email intentionally hidden.
        "We treat personal information conservatively. We collect what we need, store it for as long as we need it, and never sell it. If you have a question about data we hold about you, use the website contact form and we'll respond within 30 days."
      ] },
      { id: "what", label: "2. What we collect", body: [
        "We collect three categories of personal information:",
        { type: "list", items: [
          "<strong>Information you give us</strong> \u2014 name, email, company, phone, role, project context. Submitted via our contact form, by email, or in conversation.",
          "<strong>Information from your device</strong> \u2014 IP address, browser, device type, pages viewed, referrer. Collected via standard server logs and minimal analytics.",
          "<strong>Engagement data</strong> \u2014 for active client engagements only, we may receive personal data about your employees, customers, or end-users under a separate Data Processing Addendum (DPA). That data is processed under your instructions, not ours."
        ] }
      ] },
      { id: "use", label: "3. How we use it", body: [
        "Marketing-site data is used to respond to inquiries, route conversations to the right team, and (rarely, with consent) send you our newsletter. Engagement data is used only to deliver the services contracted under your agreement.",
        "We do not use your data to train any machine learning model \u2014 ours or anyone else's \u2014 without explicit written authorization."
      ] },
      { id: "sharing", label: "4. Sharing & sub-processors", body: [
        "We share personal information with a small set of vetted vendors. The current sub-processor list is published on our trust center and updated when changes occur.",
        { type: "table", cols: ["Vendor", "Purpose", "Region"], rows: [
          ["Google Workspace", "Email, docs", "US"],
          ["HubSpot", "CRM, contact form", "US"],
          ["AWS", "Hosting, application infrastructure", "US-East / EU-West"],
          ["Okta", "SSO and access management", "US"],
          ["Vanta", "Compliance monitoring", "US"]
        ] },
        "We do not sell personal information. We do not share it with advertisers. We respond to lawful subpoenas after attempting to notify you, where legally permitted."
      ] },
      { id: "rights", label: "5. Your rights", body: [
        // Direct privacy email intentionally hidden.
        "Depending on where you live, you may have rights to access, correct, delete, restrict, or port the personal information we hold about you. To exercise any of these rights, use the website contact form. We respond within 30 days. We won't ask for more identifying information than necessary to verify the request.",
        'California residents have additional rights under CCPA. EU/UK residents have rights under GDPR/UK GDPR. We do not engage in activity that would qualify as the "sale" or "sharing" of personal information under CCPA.'
      ] },
      { id: "cookies", label: "6. Cookies & tracking", body: [
        "We use a single first-party session cookie for our marketing site and one analytics cookie (privacy-preserving, no cross-site tracking). We do not run advertising pixels or third-party retargeting scripts.",
        "Your browser's Do Not Track signal is honored."
      ] },
      { id: "security", label: "7. Security", body: [
        "Modx maintains a documented information security program aligned to SOC 2 Type II and ISO 27001. Controls are continuously monitored and audited annually by an independent third party. Our most recent attestation is available under NDA via our trust center.",
        // Direct security email intentionally hidden.
        "Despite our controls, no system is perfectly secure. If you believe you've found a vulnerability in our systems, use the website contact form and we will route it internally."
      ] },
      { id: "retention", label: "8. Retention", body: [
        "Marketing-site contact data is retained for 24 months from last interaction, then deleted. Engagement data is retained per the term of your master services agreement and deleted within 90 days of termination unless legally required to retain longer."
      ] },
      { id: "international", label: "9. International transfers", body: [
        "Modx operates as a distributed company. EU/UK personal data we receive is transferred under Standard Contractual Clauses and supplemented with the technical and organizational measures described in our DPA."
      ] },
      { id: "changes", label: "10. Changes & contact", body: [
        "We update this policy when our practices change. The version and effective date are stamped at the top. Material changes are emailed to active contacts.",
        // Direct privacy email intentionally hidden.
        "Questions? Use the website contact form."
      ] }
    ]
  };
})();
