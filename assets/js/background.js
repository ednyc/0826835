(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, PageHero, CTAStrip, useViewport, clamp } = window;
  const PORTFOLIO_PASSWORD_PLACEHOLDER = "CHANGE_ME_PORTFOLIO_PASSWORD";
  const PORTFOLIO_PASSWORD = window.PORTFOLIO_PASSWORD || "AboutM3";
  const PORTFOLIO_SESSION_KEY = "modx_background_unlocked_v1";
  const proof = [
    { value: "18+", label: "Years across software, infrastructure, and embedded systems" },
    { value: "300+", label: "Client suites supported with network, AP, firewall, and VPN setups" },
    { value: "20k+", label: "Products synced across MSSQL, MySQL, and ecommerce systems" },
    { value: "CTO", label: "Leadership across payments, PCI, AWS, networking, and internal operations" }
  ];
  const focusAreas = [
    {
      title: "Custom business systems",
      body: "CRM, ERP, inventory, invoicing, estimate calculators, and reporting flows shaped around real operator workflows."
    },
    {
      title: "Web, ecommerce, and growth",
      body: "Marketing websites, storefront builds, payment plugins, OpenCart and WordPress work, and practical conversion improvements."
    },
    {
      title: "Cloud and infrastructure",
      body: "AWS, Linux, Apache, Nginx, SFTP, backup strategy, server hardening, and the practical automation that keeps systems stable."
    },
    {
      title: "Networking and security",
      body: "Network rooms, APs, firewall rules, VPN configurations, patch management, and PCI-minded operational baselines."
    },
    {
      title: "Analytics and reporting",
      body: "Operational dashboards, product sync pipelines, pricing feeds, and reporting systems that reduce manual work for teams."
    },
    {
      title: "Embedded and industrial systems",
      body: "Microcontrollers, motor control, PCB design, sensors, CNC, robotics, and factory-facing testing environments with custom UIs."
    }
  ];
  const leadershipRoles = [
    {
      role: "Independent Consultant \xB7 Tech Lead",
      company: "Private client engagements",
      location: "Remote \xB7 US",
      period: "Ongoing",
      summary: "Delivered custom software and IT consulting work for private clients and companies across operations, commerce, marketing, analytics, infrastructure, and networking.",
      bullets: [
        "Built custom CRM and ERP workflows, inventory systems, and internal reporting tools.",
        "Handled AWS, networking, websites, ecommerce, and marketing-oriented technical delivery.",
        "Worked directly with operators and owners to turn rough ideas into practical systems teams can run day to day."
      ],
      accent: "var(--signal)"
    },
    {
      role: "Chief Technology Officer",
      company: "Full-service merchant services provider",
      location: "Payments \xB7 US",
      period: "2016 - Current",
      summary: "Led the technical direction of a merchant services business across infrastructure, networking, application delivery, PCI-minded security, and company operating systems.",
      bullets: [
        "Built and maintained network, UPS, server, PBX, SFTP, and AWS-connected systems for payment operations.",
        "Developed company websites, technical process flows, firewall strategy, and server security policies.",
        "Structured policies and procedures around PCI compliance to support end-to-end merchant solutions."
      ],
      accent: "var(--cobalt)"
    },
    {
      role: "Full Stack Web Developer",
      company: "Retail ecommerce operator",
      location: "Commerce \xB7 US",
      period: "2015\u20132016",
      summary: "Built ecommerce and synchronization systems for a product-heavy retail operation with thousands of SKUs and cross-database relationships.",
      bullets: [
        "Developed a PHP, HTML, CSS, and JavaScript ecommerce website.",
        "Built a .NET synchronization script to move 20,000+ products and pricing from MSSQL into MySQL.",
        "Maintained item and category relationships between store software and the public ecommerce surface."
      ],
      accent: "var(--forest)"
    }
  ];
  const engagements = [
    {
      client: "Shared office operator",
      location: "Confidential client",
      title: "Network infrastructure for a 300+ client environment",
      body: "Set up the network room, APs, firewall rules, and VPN configurations for a large shared-office footprint supporting more than 300 clients."
    },
    {
      client: "Regional construction firm",
      location: "Confidential client",
      title: "Operational tooling for construction workflows",
      body: "Worked on emailing, invoicing, reporting, and custom estimate calculators to make back-office execution faster and less manual."
    },
    {
      client: "Luxury fashion retailer",
      location: "Confidential client",
      title: "OpenCart fixes and custom payment work",
      body: "Resolved bugs and added custom payment plugins to an existing OpenCart ecommerce platform."
    },
    {
      client: "Creative services studio",
      location: "Confidential client",
      title: "UI, WordPress, web, and email delivery",
      body: "Provided UI work plus WordPress, web, and email solutions across client-facing surfaces."
    }
  ];
  const projects = [
    {
      name: "Automotive R&D test platform",
      tag: "Industrial R&D",
      body: "Used pressure transducers, encoders, temperature sensors, AC and DC motor control drivers, and a .NET UI to support a testing environment in an R&D factory setting."
    },
    {
      name: "3-axis CNC Router",
      tag: "Hardware + Software",
      body: "Designed the 3D CAD model in SolidWorks and proceeded to build both the hardware and software stack."
    },
    {
      name: "Solar Car",
      tag: "Control systems",
      body: "Designed the control PCB board and programmed the microcontroller for the vehicle system."
    },
    {
      name: "Elevator Control Board",
      tag: "Embedded systems",
      body: "Designed and built control-board logic for a dedicated hardware environment."
    },
    {
      name: "Robotics systems",
      tag: "Hardware + Firmware",
      body: "Built line-following and self-balancing robots with both hardware and software components."
    },
    {
      name: "Race track automation system",
      tag: "Integrated system",
      body: "Delivered hardware and software together for a custom automation environment."
    }
  ];
  const certificates = [
    "International robotics competition certificate",
    "Line-following car challenge certificate",
    "University inventor competition award for Multirob",
    "Java programming and Linux certificate program"
  ];
  const BRAND_CARD_HEIGHT = 178;
  const brandMarks = [
    { src: "brandsWorkedWith/FISV_BIG.svg", label: "Fiserv" },
    { src: "brandsWorkedWith/LexisNexis_logo.svg", label: "LexisNexis" },
    { src: "brandsWorkedWith/Mastercard-logo.svg", label: "Mastercard" },
    { src: "brandsWorkedWith/TOST_BIG.svg", label: "Toast" },
    { src: "brandsWorkedWith/TransUnion_logo.svg", label: "TransUnion" },
    { src: "brandsWorkedWith/erctree_inc_logo.jpeg", label: "ERC Tree", frameWidth: "100%", frameHeight: 130 },
    { src: "brandsWorkedWith/findproai_logo.jpeg", label: "FindPros AI", frameWidth: "78%", frameHeight: 130 },
    { src: "brandsWorkedWith/linga-pos-logo.png", label: "Linga POS", frameWidth: "78%", frameHeight: 120 },
    { src: "brandsWorkedWith/Clover_Logo.svg", label: "Clover" }
  ];
  const skillGroups = [
    {
      title: "Languages and frameworks",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Node.js", "Express", "PHP", "Laravel", "CodeIgniter", "Python", "C++", "C#", "Java", "Shell", "ASPx", ".NET"]
    },
    {
      title: "Commerce and CMS",
      items: ["WordPress", "OpenCart", "Magento", "EJS", "jQuery", "Ajax", "Bootstrap", "Material UI", "Firebase"]
    },
    {
      title: "Data and infrastructure",
      items: ["MySQL", "MSSQL", "MongoDB", "SQL", "AWS", "EC2", "Lambda", "S3", "SES", "Cognito", "Elasticsearch", "Apache", "Nginx", "Linux", "Docker"]
    },
    {
      title: "Virtualization and systems",
      items: ["VMware", "VirtualBox", "Parallels", "Windows Server", "Ubuntu", "Debian", "Splunk", "GFI"]
    },
    {
      title: "Design, CAD, and hardware",
      items: ["Fusion 360", "SolidWorks", "AutoCAD", "SketchUp", "Altium Designer", "Proteus", "Eagle", "Adobe Photoshop", "Illustrator", "XD", "After Effects", "Microcontrollers", "3D printing"]
    }
  ];
  const traits = [
    {
      title: "Quick to learn",
      body: "I keep learning new tools and systems so the implementation stays current instead of frozen in an outdated stack."
    },
    {
      title: "Patient problem solver",
      body: "I stay with the issue until it is solved, especially when the system is messy, legacy, or cross-disciplinary."
    },
    {
      title: "Detail-focused",
      body: "I pay close attention to the small things, especially when debugging, integrating systems, or hardening production workflows."
    }
  ];
  const ProofCard = ({ item }) => /* @__PURE__ */ React.createElement("div", { style: { padding: "22px 20px", borderRadius: 16, background: "var(--paper)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(30, "5vw", 42), fontWeight: 600, letterSpacing: -1.2, color: "var(--signal)" } }, item.value), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 } }, item.label));
  const FocusCard = ({ item }) => /* @__PURE__ */ React.createElement("div", { style: { padding: "28px 24px", borderRadius: 16, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(Glyph, { size: 18, color: "var(--signal)", gap: 4, weight: 2.6 }), /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: -0.5 } }, item.title), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65 } }, item.body));
  const RoleCard = ({ item }) => /* @__PURE__ */ React.createElement("div", { style: { padding: "30px 28px", borderRadius: 18, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement(Mono, { color: item.accent }, item.period), /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)" }, item.location)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: clamp(28, "4.4vw", 34), fontWeight: 600, letterSpacing: -0.9, lineHeight: 1.06 } }, item.role), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 15, color: "var(--ink-2)" } }, item.company)), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 15, color: "var(--ink-2)", lineHeight: 1.65 } }, item.summary), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, item.bullets.map((bullet) => /* @__PURE__ */ React.createElement("div", { key: bullet, style: { display: "flex", gap: 10, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, marginTop: 7, borderRadius: "50%", background: item.accent, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: "var(--ink)", lineHeight: 1.6 } }, bullet)))));
  const EngagementCard = ({ item }) => /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 22px", borderRadius: 16, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)" }, item.location), /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)" }, "Client work")), /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: -0.5 } }, item.client), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: "var(--ink)", lineHeight: 1.45 } }, item.title), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65 } }, item.body));
  const ProjectCard = ({ item }) => /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 22px", borderRadius: 16, background: "var(--bg)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 10, minHeight: 220 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)" }, item.tag), /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: -0.5 } }, item.name), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 14.5, color: "var(--ink-2)", lineHeight: 1.65 } }, item.body));
  const SkillGroup = ({ group }) => /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 22px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" } }, /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: -0.4, color: "white" } }, group.title), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 } }, group.items.map((item) => /* @__PURE__ */ React.createElement("span", { key: item, style: { padding: "8px 10px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", fontSize: 12.5, color: "rgba(255,255,255,0.78)" } }, item))));
  const BrandCard = ({ item, style }) => /* @__PURE__ */ React.createElement("div", { style: { width: "100%", height: BRAND_CARD_HEIGHT, padding: "24px 22px", borderRadius: 16, background: "var(--paper)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxSizing: "border-box", ...style } }, /* @__PURE__ */ React.createElement("div", { style: { width: item.frameWidth || "78%", height: item.frameHeight || 54, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: item.src,
      alt: item.label,
      style: { width: "100%", height: "100%", objectFit: "contain", display: "block" }
    }
  )));
  const BackgroundGate = ({ children }) => {
    const { isMobile, isPhone } = useViewport();
    const configured = PORTFOLIO_PASSWORD !== PORTFOLIO_PASSWORD_PLACEHOLDER;
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");
    const [unlocked, setUnlocked] = React.useState(() => {
      try {
        return configured && window.sessionStorage.getItem(PORTFOLIO_SESSION_KEY) === "1";
      } catch (e) {
        return false;
      }
    });
    const unlock = (event) => {
      event.preventDefault();
      if (!configured) {
        setError("Password not configured yet. Replace the placeholder in background.jsx before publishing.");
        return;
      }
      if (value === PORTFOLIO_PASSWORD) {
        try {
          window.sessionStorage.setItem(PORTFOLIO_SESSION_KEY, "1");
        } catch (e) {
        }
        setUnlocked(true);
        setError("");
        setValue("");
        return;
      }
      setError("Incorrect password.");
    };
    if (unlocked) return children;
    return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: "var(--ink)", color: "white", position: "relative", overflow: "hidden", fontFamily: "'Space Grotesk', sans-serif" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: isPhone ? "44px 44px" : "72px 72px", pointerEvents: "none" } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: isMobile ? -80 : -120, right: isMobile ? -120 : -60, opacity: 0.06, pointerEvents: "none" } }, /* @__PURE__ */ React.createElement(Glyph, { size: isMobile ? 320 : 520, color: "white", weight: 32, gap: 64 })), /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", display: "grid", placeItems: "center", padding: isPhone ? "24px 16px" : isMobile ? "32px 20px" : "40px 32px", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", maxWidth: 520, padding: isPhone ? "28px 22px" : "36px 32px", borderRadius: 24, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(8,12,20,0.82)", boxShadow: "0 28px 80px rgba(0,0,0,0.32)", backdropFilter: "blur(18px)" } }, /* @__PURE__ */ React.createElement(Lockup, { size: 28, color: "white", href: "index.html" }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement(Eyebrow, { color: "rgba(255,255,255,0.5)" }, "Private page"), /* @__PURE__ */ React.createElement("h1", { style: { margin: "16px 0 12px", fontSize: clamp(34, "6vw", 46), fontWeight: 600, letterSpacing: -1.4, lineHeight: 1.02 } }, "Background access."), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.65 } }, "Enter the password to view this page.")), /* @__PURE__ */ React.createElement("form", { onSubmit: unlock, style: { display: "grid", gap: 12, marginTop: 28 } }, /* @__PURE__ */ React.createElement("label", { style: { display: "grid", gap: 8 } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)", size: 10 }, "Password"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "password",
        value,
        onChange: (event) => {
          setValue(event.target.value);
          if (error) setError("");
        },
        autoComplete: "current-password",
        style: {
          width: "100%",
          padding: "14px 16px",
          borderRadius: 14,
          border: `1px solid ${error ? "rgba(255,116,40,0.6)" : "rgba(255,255,255,0.14)"}`,
          background: "rgba(255,255,255,0.04)",
          color: "white",
          fontSize: 15,
          outline: "none"
        }
      }
    )), error ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "rgba(255,166,122,0.95)" } }, error) : null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        style: {
          appearance: "none",
          border: 0,
          padding: "12px 18px",
          borderRadius: 999,
          background: "white",
          color: "var(--ink)",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: 14,
          cursor: "pointer"
        }
      },
      "Unlock \u2192"
    ), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", dark: true, href: "index.html" }, "Back to site"))))));
  };
  const Body = () => {
    const { isMobile, isTablet } = useViewport();
    const brandColumns = isMobile ? 2 : isTablet ? 3 : 4;
    const brandRemainder = brandMarks.length % brandColumns;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
      PageHero,
      {
        eyebrow: "Background",
        title: "Software, infrastructure, and embedded systems work across more than a decade.",
        intro: "A private background page spanning CTO work, private consulting, ecommerce, network architecture, industrial testing environments, robotics, and custom internal systems."
      }
    ), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "96px 32px", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1.15fr 0.85fr", gap: 28, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Profile")), /* @__PURE__ */ React.createElement("h2", { "data-reveal": true, style: { margin: "18px 0 18px", fontSize: clamp(34, "5.4vw", 52), fontWeight: 600, letterSpacing: -1.6, lineHeight: 1.03 } }, "Full-stack engineering with equal comfort in code, infrastructure, and hardware."), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: 0, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.72, maxWidth: 760 } }, "I am a full-stack engineer and tech lead with more than ten years of experience building web applications, custom software, internal business systems, payment-oriented infrastructure, and embedded hardware solutions. My work has covered ecommerce, reporting and marketing tools, CRM, industrial R&D testing environments, IoT, robotics, and the infrastructure that keeps those systems running."), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "18px 0 0", fontSize: 16, color: "var(--ink-2)", lineHeight: 1.72, maxWidth: 760 } }, "The through-line is practical execution: understand the workflow, remove friction, and build something that makes people's lives easier to operate day after day."), /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 26 } }, /* @__PURE__ */ React.createElement(Btn, { variant: "solid", href: "work.html", magnetic: true, fullOnMobile: true }, "See work \u2192"), /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", href: "case-studies.html", fullOnMobile: true }, "Case studies \u2192"))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))", gap: 12 } }, proof.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.label, "data-reveal": true }, /* @__PURE__ */ React.createElement(ProofCard, { item })))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--bg)", padding: isMobile ? "72px 20px" : "96px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isTablet ? "1fr" : "0.95fr 1.05fr", gap: 28, alignItems: "start", marginBottom: 36 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Core focus"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "18px 0 0", fontSize: clamp(34, "5vw", 50), fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.03 } }, "Consulting that spans business systems, cloud, networking, and product delivery.")), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: 0, fontSize: 16, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 640 } }, "The consulting side of my work is broad by design. I have handled private freelance projects, internal tools, ecommerce, inventory, reporting, AWS, networking, and marketing-oriented systems for both companies and owner-led teams.")), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 14 } }, focusAreas.map((item) => /* @__PURE__ */ React.createElement(FocusCard, { key: item.title, item }))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "100px 32px", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Roles")), /* @__PURE__ */ React.createElement("h2", { "data-reveal": true, style: { margin: "18px 0 38px", fontSize: clamp(36, "5.6vw", 54), fontWeight: 600, letterSpacing: -1.8, lineHeight: 1.02 } }, "Leadership, delivery, and hands-on implementation."), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: "1fr", gap: 14 } }, leadershipRoles.map((item) => /* @__PURE__ */ React.createElement(RoleCard, { key: item.role + item.company, item }))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--bg)", padding: isMobile ? "72px 20px" : "96px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isTablet ? "1fr" : "0.9fr 1.1fr", gap: 28, alignItems: "start", marginBottom: 34 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Selected client engagements"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "18px 0 0", fontSize: clamp(34, "5vw", 48), fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.04 } }, "Private client work across operations, commerce, and infrastructure.")), /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { padding: isMobile ? "24px 22px" : "28px 26px", borderRadius: 16, background: "var(--paper)", border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("h3", { style: { margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: -0.5 } }, "How I work"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14, marginTop: 18 } }, traits.map((item) => /* @__PURE__ */ React.createElement("div", { key: item.title, style: { display: "flex", gap: 12, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, marginTop: 7, borderRadius: "50%", background: "var(--signal)", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600 } }, item.title), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 } }, item.body))))))), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))", gap: 14 } }, engagements.map((item) => /* @__PURE__ */ React.createElement(EngagementCard, { key: item.client, item }))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "100px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Engineering systems")), /* @__PURE__ */ React.createElement("h2", { "data-reveal": true, style: { margin: "18px 0 18px", fontSize: clamp(36, "5.4vw", 52), fontWeight: 600, letterSpacing: -1.7, lineHeight: 1.02 } }, "Hardware, robotics, and industrial project work."), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: "0 0 34px", fontSize: 16, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 760 } }, "Beyond websites and business systems, my background includes control boards, robotics, sensor-driven test environments, CAD, prototyping, and custom hardware/software builds."), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 14 } }, projects.map((item) => /* @__PURE__ */ React.createElement(ProjectCard, { key: item.name, item }))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--ink)", color: "white", padding: isMobile ? "72px 20px" : "100px 32px" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isTablet ? "1fr" : "0.78fr 1.22fr", gap: 28, alignItems: "start", marginBottom: 34 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, { color: "rgba(255,255,255,0.5)" }, "Credentials"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "18px 0 0", fontSize: clamp(36, "5.4vw", 50), fontWeight: 600, letterSpacing: -1.6, lineHeight: 1.03 } }, "Certificates, toolchain, and working stack.")), /* @__PURE__ */ React.createElement("div", { "data-reveal": true, style: { padding: isMobile ? "24px 22px" : "28px 26px", borderRadius: 18, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" } }, /* @__PURE__ */ React.createElement(Mono, { color: "rgba(255,255,255,0.45)" }, "Certificates"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12, marginTop: 18 } }, certificates.map((item) => /* @__PURE__ */ React.createElement("div", { key: item, style: { display: "flex", gap: 12, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { width: 8, height: 8, marginTop: 7, borderRadius: "50%", background: "var(--signal)", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14.5, color: "rgba(255,255,255,0.78)", lineHeight: 1.6 } }, item)))))), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(2, minmax(0, 1fr))", gap: 14 } }, skillGroups.map((group) => /* @__PURE__ */ React.createElement(SkillGroup, { key: group.title, group }))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--paper)", padding: isMobile ? "72px 20px" : "100px 32px", borderTop: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isTablet ? "1fr" : "0.9fr 1.1fr", gap: 28, alignItems: "end", marginBottom: 34 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Brands worked with"), /* @__PURE__ */ React.createElement("h2", { style: { margin: "18px 0 0", fontSize: clamp(34, "5vw", 48), fontWeight: 600, letterSpacing: -1.5, lineHeight: 1.04 } }, "A few of the brands and platforms worked with.")), /* @__PURE__ */ React.createElement("p", { "data-reveal": true, style: { margin: 0, fontSize: 15.5, color: "var(--ink-2)", lineHeight: 1.7, maxWidth: 660 } }, "This is a selective visual snapshot rather than a full client list. Some work was direct, some through partner teams, and some under private delivery arrangements.")), /* @__PURE__ */ React.createElement("div", { "data-reveal-stagger": true, style: { display: "grid", gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : isTablet ? "repeat(3, minmax(0, 1fr))" : "repeat(4, minmax(0, 1fr))", gap: 14 } }, brandMarks.map((item, index) => {
      const isSingleLastRowCard = brandRemainder === 1 && index === brandMarks.length - 1;
      const wrapperStyle = isSingleLastRowCard ? isMobile ? { gridColumn: "1 / -1", display: "flex", justifyContent: "center" } : { gridColumn: "2 / span 2", display: "flex", justifyContent: "center" } : void 0;
      const cardStyle = isSingleLastRowCard ? { maxWidth: isMobile ? 260 : 320 } : void 0;
      return /* @__PURE__ */ React.createElement("div", { key: item.label, style: wrapperStyle }, /* @__PURE__ */ React.createElement(BrandCard, { item, style: cardStyle }));
    })))), /* @__PURE__ */ React.createElement(CTAStrip, null));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(
    /* @__PURE__ */ React.createElement(BackgroundGate, null, /* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "Work" }, /* @__PURE__ */ React.createElement(Body, null)))
  );
})();
