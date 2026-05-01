(() => {
  window.LEGAL_DATA = {
    kind: "Terms of service",
    title: "Terms of service.",
    subtitle: "The agreement that governs your use of modxgo.com. Engagement-specific terms live in our master services agreement.",
    effective: "April 1, 2026",
    version: "2.1",
    contact: "legal@modxgo.com",
    sections: [
      { id: "agreement", label: "1. Agreement", body: [
        'These terms (the "Terms") govern your use of modxgo.com and any free-tier resources we publish (collectively, the "Site"). By accessing the Site you agree to these Terms.',
        'Paid services are governed by a separately-signed master services agreement ("MSA") and statement of work ("SOW"). Where the MSA conflicts with these Terms, the MSA controls.'
      ] },
      { id: "use", label: "2. Acceptable use", body: [
        "You agree not to:",
        { type: "list", items: [
          "Use the Site for any unlawful purpose or in violation of any applicable law.",
          "Attempt to access non-public portions of the Site or our infrastructure.",
          'Probe, scan, or test the vulnerability of the Site without prior written authorization (see <a href="trust.html" style="color:var(--ink)">trust center</a> for our coordinated disclosure policy).',
          "Use automated means to scrape, mirror, or harvest content beyond what is permitted in our robots.txt.",
          "Reproduce, copy, or republish substantial portions of our written essays without attribution."
        ] }
      ] },
      { id: "ip", label: "3. Intellectual property", body: [
        "All Site content \u2014 code, copy, photography, illustrations, logos \u2014 is owned by Modx or licensed to us. The Modx wordmark and the bracket glyph are trademarks of Modx Technology Services, Inc.",
        "We grant you a non-exclusive, non-transferable, revocable license to view the Site for personal and non-commercial purposes. Press use of the Modx wordmark for editorial coverage is permitted under the brand guidelines published on our press page.",
        "Insights, essays, and field notes published on the Site may be quoted with attribution. Wholesale reproduction requires written permission."
      ] },
      { id: "feedback", label: "4. Feedback", body: [
        "If you send us feedback, suggestions, or ideas, we may use them without obligation to you. We will not use your name or company in marketing without your written consent."
      ] },
      { id: "third-party", label: "5. Third-party content", body: [
        "The Site may link to third-party websites. We are not responsible for the content, privacy practices, or accuracy of any site we don't operate."
      ] },
      { id: "warranties", label: "6. Disclaimers", body: [
        `The Site is provided "as is" and "as available". We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We don't warrant that the Site will be uninterrupted, error-free, or secure.`,
        "Note: this disclaimer applies only to the marketing site. Service-level commitments for paid engagements live in your MSA and are robust."
      ] },
      { id: "liability", label: "7. Limitation of liability", body: [
        "To the maximum extent permitted by law, Modx will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of the Site. Our total liability for any claim arising out of these Terms is limited to $100 USD.",
        "This cap does not apply to obligations under a separately-signed MSA, which carries its own (much higher) liability framework negotiated per engagement."
      ] },
      { id: "indemnity", label: "8. Indemnification", body: [
        "You agree to defend and indemnify Modx from claims arising out of your violation of these Terms or your misuse of the Site."
      ] },
      { id: "termination", label: "9. Termination", body: [
        "We may suspend or terminate your access to the Site at any time, for any reason, with or without notice. Sections that by their nature should survive termination (IP, disclaimers, liability, dispute resolution) survive."
      ] },
      { id: "law", label: "10. Governing law & disputes", body: [
        "These Terms are governed by the laws of the State of California, excluding its conflict-of-laws rules. Disputes that cannot be resolved through good-faith negotiation are subject to binding arbitration in San Francisco under JAMS rules, except that either party may seek injunctive relief in court for IP violations.",
        "If any provision is found unenforceable, the rest remain in effect."
      ] },
      { id: "contact", label: "11. Contact", body: [
        'Questions, notices, or service of process: <a href="mailto:legal@modxgo.com" style="color:var(--ink)">legal@modxgo.com</a> \xB7 Modx Technology Services, Inc. \xB7 350 Mission St., San Francisco, CA 94105.'
      ] }
    ]
  };
})();
