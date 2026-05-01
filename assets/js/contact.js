(() => {
  const { Glyph, Lockup, Mono, Eyebrow, Btn, PageShell, useViewport, clamp } = window;
  const EMPTY_FORM = { name: "", email: "", company: "", interest: "", budget: "", timeline: "", message: "" };
  const EMAILJS_PUBLIC_KEY = window.EMAILJS_PUBLIC_KEY || "Z4biuoLmPl0Ow_aj7";
  const EMAILJS_SERVICE_ID = "default_service";
  const EMAILJS_TEMPLATE_ID = "template_x49x28o";
  const ContactForm = () => {
    const { isMobile } = useViewport();
    const [form, setForm] = React.useState(EMPTY_FORM);
    const [sent, setSent] = React.useState(false);
    const [sending, setSending] = React.useState(false);
    const [error, setError] = React.useState("");
    const interests = ["Compliance & Trust", "Platform Engineering", "Product & Design", "AI & Applied ML", "Multiple / not sure"];
    const budgets = ["< $50K", "$50\u2013150K", "$150\u2013500K", "$500K+", "Need help scoping"];
    const timelines = ["This quarter", "Next quarter", "6+ months out", "Exploring"];
    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
    React.useEffect(() => {
      if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      }
    }, []);
    if (sent) return /* @__PURE__ */ React.createElement("div", { style: { padding: isMobile ? "44px 24px" : "60px 40px", textAlign: "center", background: "var(--paper)", borderRadius: 16, border: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(Glyph, { size: 48, color: "var(--signal)", weight: 6, gap: 8 }), /* @__PURE__ */ React.createElement("h3", { style: { margin: "20px 0 8px", fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 600, letterSpacing: -0.8 } }, "Got it."), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, color: "var(--ink-2)", fontSize: 15 } }, "An engagement lead will be in touch within one business day."));
    const Field = ({ label, children }) => /* @__PURE__ */ React.createElement("label", { style: { display: "flex", flexDirection: "column", gap: 8 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)", size: 10 }, label), children);
    const inputStyle = { padding: "12px 14px", border: "1px solid var(--line)", borderRadius: 8, fontFamily: "inherit", fontSize: 14, background: "var(--paper)", outline: "none" };
    const Pills = ({ value, options, onChange }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, options.map((o) => /* @__PURE__ */ React.createElement("button", { key: o, type: "button", onClick: () => onChange(o), style: { padding: "8px 14px", borderRadius: 999, border: `1px solid ${value === o ? "var(--ink)" : "var(--line)"}`, background: value === o ? "var(--ink)" : "var(--paper)", color: value === o ? "white" : "var(--ink)", fontSize: 13, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s" } }, o)));
    const handleSubmit = async (event) => {
      event.preventDefault();
      setError("");
      if (!window.emailjs) {
        setError("The email service failed to load. Refresh and try again.");
        return;
      }
      if (EMAILJS_PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY") {
        setError("Add your EmailJS public key in contact.jsx before publishing.");
        return;
      }
      setSending(true);
      try {
        await window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, event.currentTarget);
        setForm(EMPTY_FORM);
        setSent(true);
      } catch (err) {
        const detail = err && typeof err === "object" && "text" in err ? err.text : "EmailJS could not send the form.";
        setError(detail);
      } finally {
        setSending(false);
      }
    };
    return /* @__PURE__ */ React.createElement("form", { id: "form", onSubmit: handleSubmit, style: { background: "var(--paper)", padding: isMobile ? 24 : 40, borderRadius: 16, border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 } }, /* @__PURE__ */ React.createElement(Field, { label: "Name" }, /* @__PURE__ */ React.createElement("input", { required: true, name: "name", value: form.name, onChange: (e) => set("name", e.target.value), style: inputStyle })), /* @__PURE__ */ React.createElement(Field, { label: "Email" }, /* @__PURE__ */ React.createElement("input", { required: true, name: "email", type: "email", value: form.email, onChange: (e) => set("email", e.target.value), style: inputStyle }))), /* @__PURE__ */ React.createElement(Field, { label: "Company" }, /* @__PURE__ */ React.createElement("input", { required: true, name: "company", value: form.company, onChange: (e) => set("company", e.target.value), style: inputStyle })), /* @__PURE__ */ React.createElement(Field, { label: "What do you need help with?" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "interest", value: form.interest }), /* @__PURE__ */ React.createElement(Pills, { value: form.interest, options: interests, onChange: (v) => set("interest", v) }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 20 } }, /* @__PURE__ */ React.createElement(Field, { label: "Budget" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "budget", value: form.budget }), /* @__PURE__ */ React.createElement(Pills, { value: form.budget, options: budgets, onChange: (v) => set("budget", v) }))), /* @__PURE__ */ React.createElement(Field, { label: "Timeline" }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", { type: "hidden", name: "timeline", value: form.timeline }), /* @__PURE__ */ React.createElement(Pills, { value: form.timeline, options: timelines, onChange: (v) => set("timeline", v) })))), /* @__PURE__ */ React.createElement(Field, { label: "Tell us about it" }, /* @__PURE__ */ React.createElement("textarea", { name: "message", value: form.message, onChange: (e) => set("message", e.target.value), rows: 5, style: { ...inputStyle, resize: "vertical", fontFamily: "inherit" }, placeholder: "What are you trying to do? What's blocking?" })), error && /* @__PURE__ */ React.createElement("p", { style: { margin: "-8px 0 0", fontSize: 13, color: "oklch(0.55 0.2 28)", lineHeight: 1.5 } }, error), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "stretch" : "center", gap: 12, paddingTop: 8 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--muted)", size: 10 }, "Replies within 1 business day"), /* @__PURE__ */ React.createElement("button", { id: "button", type: "submit", disabled: sending, style: { padding: "14px 28px", borderRadius: 999, background: "var(--ink)", color: "white", border: 0, fontSize: 14, fontFamily: "inherit", fontWeight: 500, cursor: sending ? "wait" : "pointer", width: isMobile ? "100%" : "auto", opacity: sending ? 0.8 : 1 } }, sending ? "Sending..." : "Send Email")));
  };
  const Body = () => {
    const { isMobile, isTablet } = useViewport();
    return /* @__PURE__ */ React.createElement("section", { style: { background: "var(--bg)", padding: isMobile ? "72px 20px 88px" : "100px 32px 120px", minHeight: "calc(100vh - 100px)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1fr 1.4fr", gap: isMobile ? 36 : 80 } }, /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(Eyebrow, null, "Contact"), /* @__PURE__ */ React.createElement("h1", { style: { margin: "16px 0 24px", fontFamily: "'Space Grotesk', sans-serif", fontSize: clamp(40, "8vw", 64), fontWeight: 600, letterSpacing: clamp(-1.8, "-0.3vw", -2.5), lineHeight: 1 } }, "Tell us where it hurts."), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, fontSize: 17, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 440 } }, "Most engagements start with a 45-minute call and a written diagnosis. Yours to keep, even if you don't move forward."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 48, display: "flex", flexDirection: "column", gap: 20 } }, [
      ["General", "hello@modxgo.com"],
      ["Press", "press@modxgo.com"],
      ["Careers", "careers@modxgo.com"],
      ["Phone", "+1 (415) 555 \xB7 0146"]
    ].map(([k, v]) => /* @__PURE__ */ React.createElement("div", { key: k, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--line)" } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--ink-2)" }, k), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "var(--ink)" } }, v)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 40, display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, minmax(0, 1fr))" : "repeat(3, minmax(0, 1fr))", gap: 12 } }, [["San Francisco", "350 Mission St."], ["New York", "11 Madison Ave."], ["Lisbon", "R. Castilho 39"]].map(([city, addr]) => /* @__PURE__ */ React.createElement("div", { key: city, style: { padding: "16px 14px", background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 10 } }, /* @__PURE__ */ React.createElement(Mono, { color: "var(--signal)", size: 10 }, city), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 6, fontSize: 12, color: "var(--ink-2)", fontFamily: "'JetBrains Mono', monospace" } }, addr))))), /* @__PURE__ */ React.createElement("div", { "data-reveal": true }, /* @__PURE__ */ React.createElement(ContactForm, null))));
  };
  ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(PageShell, { navDark: true, current: "" }, /* @__PURE__ */ React.createElement(Body, null)));
})();
