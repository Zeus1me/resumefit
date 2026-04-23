import { useState, useRef, useEffect } from "react";

const MD = {
  name: "Joseph Iyanuoluwa Eyinade",
  location: "Vancouver, BC",
  email: "josephiyanu@gmail.com",
  phone: "+1 (236) 660-8515",
  linkedin: "linkedin.com/in/josephiyanu",
  education: [
    { degree: "Master of Science in Data Analytics", school: "Northeastern University, Vancouver, BC", dates: "Sep 2024 \u2013 Jun 2026", gpa: "3.8 / 4.0", coursework: "Machine Learning, Deep Learning, NLP, Predictive Analytics, Data Mining, Cloud Computing, AI Ethics, Cybersecurity Fundamentals" },
    { degree: "Bachelor of Engineering, Electrical & Electronic Engineering", school: "Obafemi Awolowo University, Nigeria", dates: "2015 \u2013 2020", gpa: null, coursework: "Network Systems, Optimization, Applied Problem-Solving, Quantitative Methods" }
  ],
  experience: [
    {
      id: "freelance", title: "Freelance Data Analyst", company: "Remote", dates: "Jan 2021 \u2013 Present",
      bullets: [
        { id: "churn", text: "Built churn prediction models (Random Forest, Logistic Regression, GLM) in Python that reduced client risk exposure by 12% and informed data-driven retention strategies." },
        { id: "dashboards", text: "Developed automated Power BI and Tableau dashboards for revenue forecasting, improving retail planning accuracy and reducing manual reporting effort by 25%." },
        { id: "sql", text: "Designed and optimized SQL pipelines for data extraction, transformation, and analysis across datasets of 500K+ records, accelerating reporting turnaround." },
        { id: "scaleai", text: "Contributed to NLP/LLM evaluation pipelines at Scale AI (Balba project), applying statistical validation for production-grade language models." },
        { id: "vba", text: "Automated Excel reporting workflows with VBA macros, reducing manual effort for clients by 25% and improving data integrity." },
        { id: "timeseries", text: "Developed R-based time-series forecasting models and automated demand forecasts, improving financial forecasting accuracy for retail clients." },
        { id: "presentations", text: "Prepared clear analytical summaries and presentations for non-technical stakeholders to guide financial strategy and business planning." }
      ]
    },
    {
      id: "huawei", title: "Field Engineering Intern", company: "Huawei Technologies, Nigeria", dates: "May 2019 \u2013 Aug 2019",
      bullets: [
        { id: "diagnostics", text: "Applied data-driven diagnostics to network subsystems, reducing system failures by 15% through root-cause analysis and preventive maintenance." },
        { id: "reports", text: "Produced technical performance reports for senior leadership, translating complex metrics into actionable operational recommendations." }
      ]
    },
    {
      id: "airtel", title: "Telecom Engineering Intern", company: "Airtel Nigeria", dates: "Jul 2019 \u2013 Dec 2019",
      bullets: [
        { id: "kpi", text: "Monitored KPIs and maintained incident logs for NOC/field teams, contributing to root-cause chronologies used in post-incident reviews." },
        { id: "briefs", text: "Produced concise status briefs for non-technical stakeholders, improving decision cycle time." }
      ]
    }
  ],
  projects: [
    { id: "lidar", title: "LiDAR Point Cloud Smart Stitching \u2014 Capstone with Lumotive Inc.", dates: "Jan 2026 \u2013 Present", text: "Developing rain-scatter filtering algorithms for MD42 LiDAR sensor data across three echo return streams using Python and ROS2, improving 3D point cloud accuracy for autonomous systems." },
    { id: "fruitnet", title: "FruitNet \u2014 Object Detection Microservice", dates: "Mar 2026", text: "Built and deployed a Faster R-CNN fruit detection API (FastAPI + Docker) on Hugging Face Spaces; fine-tuned on Fruits 360 dataset with custom label correction mapping." },
    { id: "bikesharing", title: "Bike Sharing Demand Analysis \u2014 End-to-End ML Pipeline", dates: "Feb 2026", text: "Applied K-Means, PCA, Random Forest (R\u00B2 > 0.91), Q-Learning, and neural networks on UCI Bike Sharing Dataset; delivered 13-slide executive presentation with 17 embedded visualizations." },
    { id: "fruitvision", title: "Fruit Vision Classifier \u2014 Google Cloud Vision API", dates: "Mar 2026", text: "Evaluated Cloud Vision API for fruit classification; improved accuracy from 19.5% to 52.5% using custom synonym dictionaries. Deployed on Hugging Face." },
    { id: "creditrisk", title: "Customer Churn & Credit Risk Modelling", dates: "2024 \u2013 2025", text: "Built classification and regression models (Logistic Regression, XGBoost, GLMs) on German Credit and retail datasets; applied SHAP for model interpretability and business-ready risk scoring." },
    { id: "textclass", title: "Text Classification \u2014 ULMFiT & NLP Pipeline", dates: "Mar 2026", text: "Fine-tuned AWD-LSTM via ULMFiT (fastai) on AG News corpus; compared to TF-IDF + LinearSVC baseline." },
    { id: "jobforge", title: "JobForge \u2014 AI-Powered Job Search Application", dates: "Apr 2026", text: "Built a full-featured React job search app with AI-powered job matching, skill gap analysis, Kanban tracker, and cover letter generation." },
    { id: "streamlit", title: "Amazon Review Analytics Dashboard", dates: "Dec 2025", text: "Developed a Streamlit dashboard for Amazon movie review sentiment analysis, deployed on Streamlit Community Cloud with ~500K sampled rows." },
    { id: "heartdisease", title: "Heart Disease Prediction \u2014 Multi-Model Comparison", dates: "Feb 2026", text: "Evaluated 9 supervised learning algorithms and 5 neural network architectures on UCI Heart Disease dataset." },
    { id: "mnist", title: "MNIST Digit Classification", dates: "Jan 2026", text: "Achieved 96% accuracy with MLP and 95.39% with Random Forest on MNIST; compared multiple model architectures." }
  ],
  skills: {
    languages: "Python, R, SQL, JavaScript, VBA",
    ml: "Scikit-learn, PyTorch, TensorFlow, fastai, Pandas, NumPy, SciPy, Statsmodels, PySpark, XGBoost, SHAP",
    viz: "Tableau, Power BI, Matplotlib, Seaborn, Plotly, Streamlit",
    tools: "Git, Docker, AWS (S3, Glue), Google Cloud Vision API, ROS2, Jupyter, RStudio, Excel (Advanced), Hugging Face",
    db: "SQL Server, Snowflake, MS Access",
    methods: "Regression, Classification, Clustering, NLP, Time-Series Forecasting, A/B Testing, Deep Learning, Computer Vision, Object Detection, Dimensionality Reduction, Reinforcement Learning, Optimization"
  }
};

const RESUME_SYS = `You are a resume tailoring engine. Given a job posting and candidate data, produce JSON.\nCANDIDATE: ${JSON.stringify(MD)}\n\nRULES:\n1. 2-3 sentence overview matching job title and posting language.\n2. Top skills in 4 grouped lines, renamed to match posting.\n3. Best 3-4 bullets per role. include_scaleai only if NLP/LLM/AI. include_airtel only if telecom/KPI/engineering.\n4. Best 3-4 projects by relevance.\n\nONLY valid JSON:\n{"overview":"str","target_title":"str","skills":[{"label":"str","items":"str"}],"include_scaleai":bool,"include_airtel":bool,"freelance_bullets":["id"],"huawei_bullets":["id"],"airtel_bullets":["id"],"projects":["id"],"filename_suffix":"str"}`;

const COVER_SYS = `Write a cover letter for ${MD.name}, ${MD.location}. MS Data Analytics at Northeastern (3.8 GPA). Under 350 words, company-specific, confident.\nONLY JSON:\n{"company_name":"str","date":"April 23, 2026","salutation":"str","body":"str (\\n\\n for paragraphs)","closing":"str"}`;

const C = {
  bg: "#06080F", surface: "#0F1219", surfaceR: "#151A24",
  border: "#1C2333", borderH: "#2A3347", borderF: "#3B82F6",
  accent: "#3B82F6", accentD: "#1D4ED8", accentS: "rgba(59,130,246,0.08)",
  text: "#E8ECF4", textM: "#8B95A9", textD: "#5A6478",
  success: "#10B981", error: "#EF4444", errorS: "rgba(239,68,68,0.06)",
  purple: "#8B5CF6", purpleS: "rgba(139,92,246,0.08)",
  amber: "#F59E0B", amberS: "rgba(245,158,11,0.08)"
};

function buildPrompt(posting, instructions, wantCover) {
  const sk = Object.entries(MD.skills).map(([k,v]) => `  ${k}: ${v}`).join("\n");
  const ex = MD.experience.map(e => `${e.title} | ${e.company} | ${e.dates}\n` + e.bullets.map(b => `  - [${b.id}] ${b.text}`).join("\n")).join("\n\n");
  const pr = MD.projects.map(p => `  - [${p.id}] ${p.title} (${p.dates}): ${p.text}`).join("\n");

  let prompt = `RESUMEFIT TAILORING REQUEST \u2014 Please generate a tailored 1-page resume as a .docx file for the following job posting.

===== JOB POSTING =====
${posting.trim()}

===== MY MASTER RESUME DATA =====
CONTACT: ${MD.name} | ${MD.location} | ${MD.email} | ${MD.phone} | ${MD.linkedin}

EDUCATION:
  ${MD.education[0].degree} \u2014 ${MD.education[0].school} (${MD.education[0].dates}, GPA: ${MD.education[0].gpa})
  Coursework: ${MD.education[0].coursework}
  ${MD.education[1].degree} \u2014 ${MD.education[1].school} (${MD.education[1].dates})

SKILLS:
${sk}

EXPERIENCE:
${ex}

PROJECTS:
${pr}

===== TAILORING RULES =====
1. Write a 2-3 sentence PROFESSIONAL SUMMARY matching the job title and mirroring the posting's language.
2. Select & reorder the TOP skills into 4 grouped lines. Rename categories to match the posting.
3. Pick the best 3-4 bullets per experience role. Include Scale AI bullet ONLY if posting mentions NLP/LLM/AI. Include Airtel ONLY if relevant.
4. Pick the best 3-4 projects ordered by relevance.
5. Generate as a professional .docx file, 1 page, clean ATS-friendly formatting.`;

  if (instructions.trim()) prompt += `\n\n===== EXTRA INSTRUCTIONS =====\n${instructions.trim()}`;
  if (wantCover) prompt += `\n\n===== ALSO GENERATE =====\nA tailored cover letter (.docx) for this same posting. Under 350 words, company-specific, confident. Sign as "${MD.name}".`;
  return prompt;
}

export default function App() {
  const [mode, setMode] = useState("text");
  const [posting, setPosting] = useState("");
  const [url, setUrl] = useState("");
  const [instr, setInstr] = useState("");
  const [wantCover, setWantCover] = useState(false);
  const [genMode, setGenMode] = useState("api");
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState("idle");
  const [prog, setProg] = useState("");
  const [err, setErr] = useState("");
  const [res, setRes] = useState(null);
  const [cov, setCov] = useState(null);
  const [tab, setTab] = useState("resume");
  const [copied, setCopied] = useState(false);
  const rRef = useRef(null);
  const cRef = useRef(null);
  const taRef = useRef(null);

  useEffect(() => {
    if (taRef.current && mode === "text") {
      taRef.current.style.height = "auto";
      taRef.current.style.height = Math.min(taRef.current.scrollHeight, 400) + "px";
    }
  }, [posting, mode]);

  async function apiCall(system, msg) {
    const r = await fetch("/api/tailor", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1500, system, messages: [{ role: "user", content: msg }] })
    });
    const d = await r.json();
    if (d.error) throw new Error(d.error?.message || JSON.stringify(d.error));
    return (d.content?.map(i => i.text || "").join("\n") || "").replace(/```json|```/g, "").trim();
  }

  async function scrapeUrl(u) {
    const r = await fetch("/api/scrape", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: u })
    });
    const d = await r.json();
    if (d.error) throw new Error(d.error);
    return d.text;
  }

  async function goApi() {
    let txt = posting;
    setRes(null); setCov(null); setErr(""); setTab("resume"); setCopied(false);
    try {
      if (mode === "url") {
        if (!url.trim()) return;
        setStatus("fetching"); setProg("Fetching job posting...");
        txt = await scrapeUrl(url.trim());
        setPosting(txt);
      }
      if (!txt.trim()) { setErr("No text extracted. Try pasting manually."); setStatus("error"); return; }

      setStatus("analyzing"); setProg("Tailoring resume...");
      const extra = instr.trim() ? `\nADDITIONAL INSTRUCTIONS: ${instr.trim()}` : "";
      const raw = await apiCall(RESUME_SYS, `Job posting:\n${txt}${extra}`);
      let p; try { p = JSON.parse(raw); } catch { throw new Error("Parse failed. Try again."); }
      setRes(p);

      if (wantCover) {
        setStatus("cover"); setProg("Writing cover letter...");
        const cRaw = await apiCall(COVER_SYS, `Job posting:\n${txt}${extra}\nOverview: ${p.overview}\nCandidate: ${MD.name}, ${MD.location}`);
        let cp; try { cp = JSON.parse(cRaw); } catch { throw new Error("Cover letter parse failed."); }
        setCov(cp);
      }
      setStatus("done"); setProg("");
    } catch (e) { setErr(e.message); setStatus("error"); setProg(""); }
  }

  function goChat() {
    let txt = posting;
    if (!txt.trim()) return;
    const prompt = buildPrompt(txt, instr, wantCover);
    setSent(true);
    if (typeof window !== "undefined" && typeof window.sendPrompt === "function") {
      window.sendPrompt(prompt);
    } else {
      navigator.clipboard.writeText(prompt).then(() => {});
    }
  }

  function handleGo() { if (genMode === "chat") goChat(); else goApi(); }

  const getExp = id => MD.experience.find(e => e.id === id);
  const getBul = (eid, ids) => { const e = getExp(eid); return e ? ids.map(b => e.bullets.find(x => x.id === b)).filter(Boolean) : []; };
  const getProj = pid => MD.projects.find(p => p.id === pid);

  function reset() { setStatus("idle"); setRes(null); setCov(null); setSent(false); setPosting(""); setUrl(""); setErr(""); setProg(""); setInstr(""); setTab("resume"); setCopied(false); }

  function doPrint(ref, title) {
    if (!ref.current) return;
    const w = window.open("", "_blank");
    w.document.write(`<!DOCTYPE html><html><head><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:'DM Sans',sans-serif;padding:36px 48px;color:#1a1a1a;line-height:1.5;max-width:800px;margin:0 auto}@media print{body{padding:0}@page{margin:0.4in 0.5in}}</style></head><body>${ref.current.innerHTML}</body></html>`);
    w.document.close(); setTimeout(() => w.print(), 500);
  }

  function doCopy(ref) {
    if (!ref.current) return;
    navigator.clipboard.writeText(ref.current.innerText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }

  const loading = ["fetching","analyzing","cover"].includes(status);
  const canGo = mode === "url" ? url.trim() : posting.trim();
  const showInput = status !== "done" && !sent;

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* HEADER */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 20px", background: C.surface }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <div style={{ width: 34, height: 34, borderRadius: 9, background: `linear-gradient(135deg,${C.accent},${C.accentD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#fff" }}>Rf</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.025em" }}>ResumeFit</div>
              <div style={{ fontSize: 10.5, color: C.textD, letterSpacing: "0.02em" }}>RESUME & COVER LETTER TAILORING</div>
            </div>
          </div>
          {(status === "done" || sent) && <button onClick={reset} style={{ ...bSm(true), padding: "7px 18px" }}>+ New</button>}
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "24px 20px" }}>

        {/* INPUT */}
        {showInput && (
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "flex", borderBottom: `1px solid ${C.border}` }}>
              {[["text","Paste Text"],["url","From URL"]].map(([m,l]) => (
                <button key={m} onClick={() => setMode(m)} style={{
                  flex: 1, padding: "12px 0", border: "none", fontSize: 13, fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit",
                  background: mode === m ? C.accentS : "transparent",
                  color: mode === m ? C.accent : C.textD,
                  borderBottom: mode === m ? `2px solid ${C.accent}` : "2px solid transparent"
                }}>{l}</button>
              ))}
            </div>

            <div style={{ padding: "20px 24px" }}>
              {mode === "text" && (
                <textarea ref={taRef} value={posting} onChange={e => setPosting(e.target.value)}
                  disabled={loading}
                  placeholder={"Paste the full job posting here...\n\nInclude job title, company, responsibilities, qualifications, and nice-to-haves."}
                  style={taS} onFocus={fB} onBlur={bB} />
              )}

              {mode === "url" && (
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: C.textD }}>🔗</span>
                  <input value={url} onChange={e => setUrl(e.target.value)} disabled={loading}
                    placeholder="https://careers.company.com/job/data-analyst-12345"
                    style={{ width: "100%", background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, padding: "13px 16px 13px 36px", fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: C.text, outline: "none", boxSizing: "border-box" }}
                    onFocus={fB} onBlur={bB} />
                </div>
              )}

              <div style={{ marginTop: 14 }}>
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 5, display: "flex", gap: 6 }}>
                  <span>Extra Instructions</span>
                  <span style={{ color: C.textD, fontWeight: 400, fontSize: 11 }}>optional</span>
                </div>
                <textarea value={instr} onChange={e => setInstr(e.target.value)} disabled={loading}
                  placeholder='e.g. "Emphasize Python & cloud", "Highlight Lumotive capstone", "Mention available immediately"'
                  style={{ ...taS, minHeight: 48, maxHeight: 100, fontSize: 12.5, fontFamily: "'DM Sans',sans-serif", lineHeight: 1.5 }}
                  onFocus={fB} onBlur={bB} />
              </div>

              {/* Gen mode */}
              <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
                {[
                  { key: "api", icon: "\u26A1", label: "Instant Preview", desc: "Live API call, renders in-app (needs API key in env vars)" },
                  { key: "chat", icon: "\uD83D\uDCCB", label: "Copy Prompt", desc: "Copies tailoring prompt to clipboard for use in Claude chat" }
                ].map(g => (
                  <button key={g.key} onClick={() => setGenMode(g.key)}
                    style={{
                      flex: 1, padding: "12px 14px", borderRadius: 10,
                      border: `1.5px solid ${genMode === g.key ? (g.key === "api" ? C.accent : C.purple) : C.border}`,
                      background: genMode === g.key ? (g.key === "api" ? C.accentS : C.purpleS) : "transparent",
                      cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all 0.15s"
                    }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                      <span style={{ fontSize: 16 }}>{g.icon}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: genMode === g.key ? C.text : C.textM }}>{g.label}</span>
                    </div>
                    <div style={{ fontSize: 11, color: C.textD, lineHeight: 1.4, paddingLeft: 24 }}>{g.desc}</div>
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, flexWrap: "wrap", gap: 10 }}>
                <label style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 13, userSelect: "none", color: C.textM }}>
                  <div onClick={() => setWantCover(!wantCover)} style={{
                    width: 18, height: 18, borderRadius: 5, border: `2px solid ${wantCover ? C.accent : C.borderH}`,
                    background: wantCover ? C.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.15s", cursor: "pointer", flexShrink: 0
                  }}>
                    {wantCover && <svg width="11" height="9" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span onClick={() => setWantCover(!wantCover)}>Also generate cover letter</span>
                </label>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {posting.length > 0 && mode === "text" && (
                    <span style={{ fontSize: 11, color: C.textD, fontFamily: "'JetBrains Mono',monospace" }}>{posting.split(/\s+/).filter(Boolean).length}w</span>
                  )}
                  <button onClick={handleGo} disabled={!canGo || loading}
                    style={{
                      padding: "10px 28px", borderRadius: 10, border: "none",
                      background: !canGo ? C.border : genMode === "api" ? `linear-gradient(135deg,${C.accent},${C.accentD})` : `linear-gradient(135deg,${C.purple},#6D28D9)`,
                      color: !canGo ? C.textD : "#fff",
                      fontSize: 13, fontWeight: 600, cursor: !canGo ? "not-allowed" : "pointer",
                      fontFamily: "inherit", minWidth: 150,
                      boxShadow: canGo && !loading ? `0 2px 12px ${genMode === "api" ? "rgba(59,130,246,0.25)" : "rgba(139,92,246,0.25)"}` : "none"
                    }}>
                    {loading ? <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span className="rf-spin"/>{prog}</span>
                      : genMode === "api" ? (wantCover ? "Generate Both" : "Tailor Resume") : "Copy Prompt"}
                  </button>
                </div>
              </div>

              {status === "error" && (
                <div style={{ marginTop: 14, padding: "11px 16px", borderRadius: 10, background: C.errorS, border: "1px solid rgba(239,68,68,0.15)", color: C.error, fontSize: 12.5, lineHeight: 1.5 }}>{err}</div>
              )}
            </div>
          </div>
        )}

        {/* SENT confirmation */}
        {sent && status !== "done" && (
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: "32px 28px", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Prompt Copied to Clipboard</div>
            <div style={{ fontSize: 13, color: C.textM, lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
              Paste it into a Claude chat to generate your tailored .docx resume{wantCover ? " and cover letter" : ""}. Click "+ New" to tailor another.
            </div>
          </div>
        )}

        {/* RESULTS */}
        {status === "done" && res && (
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
              <div style={{ display: "flex", gap: 0, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: 3 }}>
                {[["resume","Resume"], ...(cov ? [["cover","Cover Letter"]] : [])].map(([k,l]) => (
                  <button key={k} onClick={() => { setTab(k); setCopied(false); }} style={{
                    padding: "8px 22px", borderRadius: 7, border: "none", fontSize: 13, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit",
                    background: tab === k ? C.accent : "transparent", color: tab === k ? "#fff" : C.textD
                  }}>{l}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: C.success, fontWeight: 600, marginRight: 4 }}>
                  ✓ {tab === "resume" ? res.target_title : cov?.company_name}
                </span>
                <button onClick={() => doCopy(tab === "resume" ? rRef : cRef)} style={bSm(false)}>{copied ? "Copied!" : "Copy"}</button>
                <button onClick={() => doPrint(tab === "resume" ? rRef : cRef, tab === "resume" ? "Resume" : "Cover Letter")} style={bSm(false)}>Print / PDF</button>
              </div>
            </div>

            {tab === "resume" && (
              <div ref={rRef} style={paper}>
                <div style={{ textAlign: "center", marginBottom: 3 }}>
                  <div style={{ fontSize: 21, fontWeight: 700, color: "#1E3A5F", letterSpacing: "0.05em" }}>{MD.name.toUpperCase()}</div>
                </div>
                <div style={{ textAlign: "center", fontSize: 11, color: "#777", marginBottom: 14 }}>
                  {MD.location} &nbsp;|&nbsp; {MD.email} &nbsp;|&nbsp; {MD.phone} &nbsp;|&nbsp; {MD.linkedin}
                </div>
                <SH t="PROFESSIONAL SUMMARY"/>
                <p style={{ fontSize: 11.5, color: "#333", margin: "5px 0 8px", lineHeight: 1.65 }}>{res.overview}</p>
                <SH t="TECHNICAL SKILLS"/>
                <div style={{ margin: "5px 0 8px" }}>
                  {res.skills?.map((s,i) => <div key={i} style={{ fontSize: 11.5, marginBottom: 2 }}><span style={{ fontWeight: 600 }}>{s.label}: </span><span style={{ color: "#333" }}>{s.items}</span></div>)}
                </div>
                <SH t="EDUCATION"/>
                {MD.education.map((ed,i) => (
                  <div key={i} style={{ marginBottom: 5 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
                      <span style={{ fontWeight: 600 }}>{ed.degree}</span><span style={{ color: "#777" }}>{ed.dates}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#777", fontStyle: "italic", display: "flex", justifyContent: "space-between" }}>
                      <span>{ed.school}</span>{ed.gpa && <span>GPA: {ed.gpa}</span>}
                    </div>
                    {i === 0 && <div style={{ fontSize: 10, color: "#666", marginTop: 1 }}>Coursework: {ed.coursework}</div>}
                  </div>
                ))}
                <SH t="PROFESSIONAL EXPERIENCE"/>
                <EB exp={getExp("freelance")} bul={getBul("freelance", res.freelance_bullets||[])}/>
                <EB exp={getExp("huawei")} bul={getBul("huawei", res.huawei_bullets||[])}/>
                {res.include_airtel && <EB exp={getExp("airtel")} bul={getBul("airtel", res.airtel_bullets||[])}/>}
                <SH t="PROJECTS"/>
                {(res.projects||[]).map(pid => {
                  const p = getProj(pid); if (!p) return null;
                  return (<div key={pid} style={{ marginBottom: 5 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
                      <span style={{ fontWeight: 600 }}>{p.title}</span>
                      <span style={{ color: "#777", flexShrink: 0, marginLeft: 10 }}>{p.dates}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "#333", marginTop: 1, paddingLeft: 10 }}>{"\u2022"} {p.text}</div>
                  </div>);
                })}
              </div>
            )}

            {tab === "cover" && cov && (
              <div ref={cRef} style={paper}>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: "#1E3A5F" }}>{MD.name}</div>
                  <div style={{ fontSize: 11.5, color: "#777" }}>{MD.location} | {MD.email} | {MD.phone}</div>
                </div>
                <div style={{ fontSize: 11.5, color: "#777", marginBottom: 18 }}>{cov.date}</div>
                <div style={{ fontSize: 11.5, color: "#333", marginBottom: 8, fontWeight: 600 }}>{cov.salutation}</div>
                {cov.body.split("\n\n").map((p,i) => <p key={i} style={{ fontSize: 11.5, color: "#333", lineHeight: 1.7, marginBottom: 12 }}>{p}</p>)}
                <div style={{ fontSize: 11.5, color: "#333", marginTop: 20 }}>
                  <div>{cov.closing}</div>
                  <div style={{ fontWeight: 600, marginTop: 5 }}>{MD.name}</div>
                </div>
              </div>
            )}
            <div style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: C.textD }}>Use "Print / PDF" to save as PDF</div>
          </div>
        )}

        {/* HOW IT WORKS */}
        {status === "idle" && !sent && (
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
              {[
                { icon: "📋", t: "Input", d: "Paste text or job URL" },
                { icon: "🎯", t: "Instruct", d: "Add custom emphasis" },
                { icon: "🧠", t: "AI Tailors", d: "Skills & bullets matched" },
                { icon: "📄", t: "Export", d: "Resume + cover as PDF" }
              ].map((s,i) => (
                <div key={i} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 11, padding: "16px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, marginBottom: 5 }}>{s.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{s.t}</div>
                  <div style={{ fontSize: 10.5, color: C.textD, lineHeight: 1.4 }}>{s.d}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 11, padding: "14px 20px" }}>
              <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8, color: C.textM }}>Try a sample:</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {samples.map((s,i) => (
                  <button key={i} onClick={() => { setPosting(s.text); setMode("text"); }}
                    style={{ padding: "7px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", border: `1px solid ${C.borderH}`, background: C.surfaceR, color: C.textM, transition: "all 0.15s" }}
                    onMouseEnter={e => { e.target.style.borderColor = C.accent; e.target.style.color = C.accent; }}
                    onMouseLeave={e => { e.target.style.borderColor = C.borderH; e.target.style.color = C.textM; }}
                  >{s.label}</button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes rfspin{to{transform:rotate(360deg)}}
        .rf-spin{width:13px;height:13px;border:2px solid rgba(255,255,255,.25);border-top-color:#fff;border-radius:50%;animation:rfspin .7s linear infinite;display:inline-block}
        textarea::placeholder,input::placeholder{color:#4B5563}
        *{box-sizing:border-box}
      `}</style>
    </div>
  );
}

const samples = [
  { label: "Data Analyst \u2014 RBC", text: "Data Analyst, Royal Bank of Canada, Vancouver BC.\n\nResponsibilities: Analyze large datasets using SQL and Python. Build dashboards in Tableau and Power BI. Collaborate with stakeholders to translate data into insights. Support predictive modeling.\n\nQualifications: Bachelor's or Master's in Statistics, CS, Data Science. SQL, Python, BI tools. Statistical analysis and visualization. Communication skills.\n\nNice to have: Cloud (AWS, GCP). ML knowledge. Financial services experience." },
  { label: "ML Engineer \u2014 Amazon", text: "Machine Learning Engineer, Amazon, Vancouver BC.\n\nResponsibilities: Design and implement ML models for production. Build ML pipelines with Python and cloud. Deploy models at scale with Docker and CI/CD.\n\nQualifications: MS in CS/Data Science. Python, PyTorch/TensorFlow. Docker, AWS. Deep learning and NLP. Production deployment.\n\nNice to have: Computer vision. A/B testing. Open source contributions." },
  { label: "Data Scientist \u2014 Shopify", text: "Data Scientist, Shopify, Remote Canada.\n\nResponsibilities: Build predictive models. Design A/B tests. Create dashboards. Work with large-scale pipelines.\n\nQualifications: Master's quantitative field. Python, R, SQL. ML (regression, classification, clustering). Visualization and communication. A/B testing.\n\nNice to have: NLP. Spark/big data. E-commerce domain." }
];

function SH({ t }) { return <div style={{ fontSize: 12, fontWeight: 700, color: "#1E3A5F", letterSpacing: "0.06em", borderBottom: "1.5px solid #1E3A5F", paddingBottom: 2, marginTop: 10, marginBottom: 4 }}>{t}</div>; }

function EB({ exp, bul }) {
  if (!exp) return null;
  return (<div style={{ marginBottom: 7 }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5 }}>
      <span><span style={{ fontWeight: 600 }}>{exp.title}</span><span style={{ color: "#777" }}> | {exp.company}</span></span>
      <span style={{ color: "#777", flexShrink: 0, marginLeft: 10 }}>{exp.dates}</span>
    </div>
    {bul.map((b,i) => <div key={i} style={{ fontSize: 11, color: "#333", marginTop: 2, paddingLeft: 10, lineHeight: 1.55 }}>{"\u2022"} {b.text}</div>)}
  </div>);
}

const paper = { background: "#fff", borderRadius: 12, padding: "36px 44px", color: "#1a1a1a", fontFamily: "'DM Sans','Segoe UI',sans-serif", lineHeight: 1.5, boxShadow: "0 4px 30px rgba(0,0,0,0.5)" };
const taS = { width: "100%", minHeight: 150, maxHeight: 400, background: "#06080F", border: "1px solid #1C2333", borderRadius: 10, padding: "12px 14px", fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: "#E8ECF4", resize: "none", outline: "none", lineHeight: 1.6, boxSizing: "border-box" };
const fB = e => { e.target.style.borderColor = "#3B82F6"; };
const bB = e => { e.target.style.borderColor = "#1C2333"; };
function bSm(p) { return { padding: "7px 14px", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", border: p ? "none" : "1px solid #1C2333", background: p ? "linear-gradient(135deg,#3B82F6,#1D4ED8)" : "#0F1219", color: "#E8ECF4" }; }
