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
    { id: "freelance", title: "Freelance Data Analyst", company: "Remote", dates: "Jan 2021 \u2013 Present",
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
    { id: "huawei", title: "Field Engineering Intern", company: "Huawei Technologies, Nigeria", dates: "May 2019 \u2013 Aug 2019",
      bullets: [
        { id: "diagnostics", text: "Applied data-driven diagnostics to network subsystems, reducing system failures by 15% through root-cause analysis and preventive maintenance." },
        { id: "reports", text: "Produced technical performance reports for senior leadership, translating complex metrics into actionable operational recommendations." }
      ]
    },
    { id: "airtel", title: "Telecom Engineering Intern", company: "Airtel Nigeria", dates: "Jul 2019 \u2013 Dec 2019",
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

const TIPS = [
  { cat: "ATS", icon: "\uD83E\uDD16", tip: "Most Canadian employers use ATS. Keep formatting simple \u2014 no tables, columns, or graphics in your resume file." },
  { cat: "Keywords", icon: "\uD83D\uDD11", tip: "Mirror exact phrases from the job posting. If they say 'data visualization,' don't write 'data viz' \u2014 ATS matches literal strings." },
  { cat: "Numbers", icon: "\uD83D\uDCCA", tip: "Quantify everything. '12% churn reduction' beats 'reduced churn significantly' every time." },
  { cat: "Length", icon: "\uD83D\uDCCF", tip: "1 page is standard for <10 years experience in Canada. Recruiters spend 6\u20137 seconds on first scan." },
  { cat: "Summary", icon: "\uD83C\uDFAF", tip: "Your professional summary should mirror the job title. If they want a 'Data Scientist,' lead with 'Data Scientist with...'" },
  { cat: "Skills", icon: "\u2699\uFE0F", tip: "Group skills by category and lead with the ones mentioned in the posting. Order matters \u2014 recruiters scan left to right." },
  { cat: "Projects", icon: "\uD83D\uDE80", tip: "Academic projects count. Frame them with impact: what you built, what tools you used, and what the result was." },
  { cat: "Cover Letter", icon: "\u2709\uFE0F", tip: "Never start with 'I am writing to express my interest.' Open with a specific hook about the company or role." },
  { cat: "Tailoring", icon: "\u2702\uFE0F", tip: "A generic resume gets generic results. Every application should feel like it was written specifically for that role." },
  { cat: "Action Verbs", icon: "\uD83D\uDCAA", tip: "Start bullets with strong verbs: Built, Designed, Optimized, Deployed, Reduced, Automated, Led, Delivered." },
  { cat: "Gaps", icon: "\uD83D\uDD52", tip: "Freelance work fills gaps perfectly. Frame it with client impact and deliverables, not just 'freelanced.'" },
  { cat: "LinkedIn", icon: "\uD83D\uDD17", tip: "Your LinkedIn should match your resume. Canadian recruiters will check \u2014 inconsistencies raise red flags." },
  { cat: "File Name", icon: "\uD83D\uDCC1", tip: "Name your file 'FirstName_LastName_Role_Company.pdf' \u2014 not 'resume_final_v3(2).docx'." },
  { cat: "PGWP", icon: "\uD83C\uDDE8\uD83C\uDDE6", tip: "For Canadian roles, mentioning work authorization (PGWP eligible) can remove a major screening concern upfront." },
  { cat: "GPA", icon: "\uD83C\uDF93", tip: "Include your GPA if it's 3.5+ (yours is 3.8). Drop it once you have 3+ years of full-time experience." },
  { cat: "Fonts", icon: "\uD83D\uDDA5\uFE0F", tip: "Stick to Calibri, Arial, or Garamond at 10\u201312pt. Creative fonts get mangled by ATS parsers." }
];

function makeResumeSys(pages) {
  const pageRule = pages === 1
    ? "CRITICAL: Select ONLY the most relevant content to fit on ONE page. Pick 3-4 bullets max per role, 3-4 projects max."
    : "This is a 2-page resume. Include more detail: 4-5 bullets per role, 5-6 projects, and expand the overview to 3-4 sentences.";
  return `You are a resume tailoring engine. Given a job posting and candidate data, produce JSON.\nCANDIDATE: ${JSON.stringify(MD)}\n\nRULES:\n1. 2-3 sentence overview matching job title and posting language.\n2. Top skills in 4 grouped lines, renamed to match posting.\n3. ${pageRule}\n4. include_scaleai only if NLP/LLM/AI. include_airtel only if telecom/KPI/engineering.\n5. Order projects by relevance.\n\nONLY valid JSON:\n{"overview":"str","target_title":"str","skills":[{"label":"str","items":"str"}],"include_scaleai":bool,"include_airtel":bool,"freelance_bullets":["id"],"huawei_bullets":["id"],"airtel_bullets":["id"],"projects":["id"],"filename_suffix":"str"}`;
}

const COVER_SYS = `You are an elite cover letter writer who creates highly specific, compelling cover letters that sound human and authentic. NEVER use generic phrases like "I am writing to express my interest" or "I am excited to apply."

CANDIDATE:
- Name: ${MD.name}, Location: ${MD.location}, Email: ${MD.email}, Phone: ${MD.phone}
- MS Data Analytics at Northeastern University Vancouver (GPA 3.8/4.0, graduating Jun 2026)
- B.Eng Electrical & Electronic Engineering, Obafemi Awolowo University
- 5+ years analytics: freelance data analyst (churn models -12% risk, automated dashboards, SQL 500K+ records, time-series forecasting), Huawei intern (diagnostics -15% failures), Scale AI NLP/LLM pipelines
- Projects: LiDAR with Lumotive, Faster R-CNN FruitNet, bike sharing ML (R\u00B2>0.91), credit risk SHAP, ULMFiT text classification, JobForge React app
- Skills: Python, R, SQL, PyTorch, TensorFlow, Scikit-learn, Docker, AWS, Tableau, Power BI

WRITING RULES:
1. OPENING (2-3 sentences): Bold specific hook. Reference something concrete about the company. NO generic openings ever.
2. BODY 1 (3-4 sentences): 2-3 most relevant experiences with specific numbers. Mirror exact keywords from the posting.
3. BODY 2 (2-3 sentences): Deeper fit \u2014 connect engineering + analytics background to the role's unique challenges.
4. CLOSING (2 sentences): Confident, forward-looking. Specific enthusiasm. Clear call to action. NO "I would welcome the opportunity."
5. 250-320 words MAX. Every sentence earns its place.
6. Tone: Confident, specific, human. Not a template.
7. Sign as "${MD.name}"

ONLY valid JSON:\n{"company_name":"str","role_title":"str","date":"April 23, 2026","salutation":"str","body":"str (\\n\\n for paragraphs)","closing":"Sincerely,"}`;

const C = {
  bg: "#06080F", surface: "#0F1219", surfaceR: "#151A24",
  border: "#1C2333", borderH: "#2A3347", borderF: "#3B82F6",
  accent: "#3B82F6", accentD: "#1D4ED8", accentS: "rgba(59,130,246,0.08)",
  text: "#E8ECF4", textM: "#8B95A9", textD: "#5A6478",
  success: "#10B981", error: "#EF4444", errorS: "rgba(239,68,68,0.06)",
  emerald: "#10B981", emeraldS: "rgba(16,185,129,0.08)"
};

export default function App() {
  const [mode, setMode] = useState("text");
  const [posting, setPosting] = useState("");
  const [url, setUrl] = useState("");
  const [instr, setInstr] = useState("");
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("idle");
  const [prog, setProg] = useState("");
  const [err, setErr] = useState("");
  const [res, setRes] = useState(null);
  const [cov, setCov] = useState(null);
  const [tab, setTab] = useState("resume");
  const [copied, setCopied] = useState(false);
  const [covLoading, setCovLoading] = useState(false);
  const [tipIdx, setTipIdx] = useState(Math.floor(Math.random() * TIPS.length));
  const rRef = useRef(null);
  const cRef = useRef(null);
  const taRef = useRef(null);

  useEffect(() => {
    if (taRef.current && mode === "text") {
      taRef.current.style.height = "auto";
      taRef.current.style.height = Math.min(taRef.current.scrollHeight, 400) + "px";
    }
  }, [posting, mode]);

  // Rotate tips every 6 seconds
  useEffect(() => {
    if (status !== "idle") return;
    const interval = setInterval(() => {
      setTipIdx(prev => (prev + 1) % TIPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [status]);

  async function apiCall(system, msg) {
    const r = await fetch("/api/tailor", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: pages === 2 ? 2000 : 1500, system, messages: [{ role: "user", content: msg }] })
    });
    const d = await r.json();
    if (d.error) throw new Error(d.error?.message || JSON.stringify(d.error));
    return (d.content?.map(i => i.text || "").join("\n") || "").replace(/```json|```/g, "").trim();
  }

  async function scrapeUrl(u) {
    const r = await fetch("/api/scrape", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: u }) });
    const d = await r.json();
    if (d.error) throw new Error(d.error);
    return d.text;
  }

  async function handleTailor() {
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
      const raw = await apiCall(makeResumeSys(pages), `Job posting:\n${txt}${extra}`);
      let p; try { p = JSON.parse(raw); } catch { throw new Error("Parse failed. Try again."); }
      setRes(p);
      setStatus("done"); setProg("");
    } catch (e) { setErr(e.message); setStatus("error"); setProg(""); }
  }

  async function handleCoverLetter() {
    setCovLoading(true); setErr("");
    try {
      const extra = instr.trim() ? `\nADDITIONAL INSTRUCTIONS: ${instr.trim()}` : "";
      const cRaw = await apiCall(COVER_SYS, `Job posting:\n${posting}${extra}\n\nTailored resume overview: ${res.overview}\nTarget role: ${res.target_title}`);
      let cp; try { cp = JSON.parse(cRaw); } catch { throw new Error("Cover letter parse failed. Try again."); }
      setCov(cp); setTab("cover");
    } catch (e) { setErr(e.message); }
    setCovLoading(false);
  }

  const getExp = id => MD.experience.find(e => e.id === id);
  const getBul = (eid, ids) => { const e = getExp(eid); return e ? ids.map(b => e.bullets.find(x => x.id === b)).filter(Boolean) : []; };
  const getProj = pid => MD.projects.find(p => p.id === pid);

  function reset() { setStatus("idle"); setRes(null); setCov(null); setPosting(""); setUrl(""); setErr(""); setProg(""); setInstr(""); setTab("resume"); setCopied(false); setCovLoading(false); }

  function doDownload(ref, filename) {
    if (!ref.current) return;
    const w = window.open("", "_blank");
    w.document.write(`<!DOCTYPE html><html><head><title>${filename}</title>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:'DM Sans',sans-serif;padding:40px 52px;color:#1a1a1a;line-height:1.5;max-width:800px;margin:0 auto}@media print{body{padding:0}@page{margin:0.4in 0.5in;size:letter}}</style>
    </head><body>${ref.current.innerHTML}</body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 600);
  }

  function doCopy(ref) {
    if (!ref.current) return;
    navigator.clipboard.writeText(ref.current.innerText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }

  const loading = ["fetching","analyzing"].includes(status);
  const canGo = mode === "url" ? url.trim() : posting.trim();
  const tip = TIPS[tipIdx];

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
          {status === "done" && <button onClick={reset} style={{ ...bSm(true), padding: "7px 18px" }}>+ New</button>}
        </div>
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "24px 20px" }}>

        {/* INPUT */}
        {status !== "done" && (
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

              {/* Extra instructions */}
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

              {/* Page toggle + submit */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16, flexWrap: "wrap", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, color: C.textM, marginRight: 4 }}>Pages:</span>
                  {[1, 2].map(n => (
                    <button key={n} onClick={() => setPages(n)} style={{
                      padding: "5px 14px", borderRadius: 7, border: `1.5px solid ${pages === n ? C.accent : C.border}`,
                      background: pages === n ? C.accentS : "transparent",
                      color: pages === n ? C.accent : C.textD,
                      fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}>{n}</button>
                  ))}
                  {pages === 2 && <span style={{ fontSize: 10.5, color: C.textD, marginLeft: 4 }}>More detail included</span>}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {posting.length > 0 && mode === "text" && (
                    <span style={{ fontSize: 11, color: C.textD, fontFamily: "'JetBrains Mono',monospace" }}>{posting.split(/\s+/).filter(Boolean).length}w</span>
                  )}
                  <button onClick={handleTailor} disabled={!canGo || loading}
                    style={{
                      padding: "10px 28px", borderRadius: 10, border: "none",
                      background: !canGo ? C.border : `linear-gradient(135deg,${C.accent},${C.accentD})`,
                      color: !canGo ? C.textD : "#fff",
                      fontSize: 13, fontWeight: 600, cursor: !canGo ? "not-allowed" : "pointer",
                      fontFamily: "inherit", minWidth: 150,
                      boxShadow: canGo && !loading ? "0 2px 12px rgba(59,130,246,0.25)" : "none"
                    }}>
                    {loading ? <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span className="rf-spin"/>{prog}</span> : "Tailor Resume"}
                  </button>
                </div>
              </div>

              {status === "error" && (
                <div style={{ marginTop: 14, padding: "11px 16px", borderRadius: 10, background: C.errorS, border: "1px solid rgba(239,68,68,0.15)", color: C.error, fontSize: 12.5, lineHeight: 1.5 }}>{err}</div>
              )}
            </div>
          </div>
        )}

        {/* TIPS & INSPIRATION — shown when idle */}
        {status === "idle" && (
          <div style={{ marginTop: 18, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 22px", position: "relative", overflow: "hidden", minHeight: 80 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ fontSize: 28, flexShrink: 0, lineHeight: 1 }}>{tip.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.06em", marginBottom: 4, textTransform: "uppercase" }}>{tip.cat}</div>
                <div style={{ fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>{tip.tip}</div>
              </div>
              <button onClick={() => setTipIdx((tipIdx + 1) % TIPS.length)}
                style={{ flexShrink: 0, padding: "6px 12px", borderRadius: 7, border: `1px solid ${C.border}`, background: "transparent", color: C.textD, fontSize: 11, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                Next tip \u2192
              </button>
            </div>
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 4, marginTop: 12, justifyContent: "center" }}>
              {TIPS.map((_, i) => (
                <div key={i} onClick={() => setTipIdx(i)} style={{
                  width: i === tipIdx ? 18 : 5, height: 5, borderRadius: 3,
                  background: i === tipIdx ? C.accent : C.border,
                  transition: "all 0.3s", cursor: "pointer"
                }}/>
              ))}
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
                  \u2713 {tab === "resume" ? res.target_title : (cov?.company_name || "")}
                </span>
                <button onClick={() => doCopy(tab === "resume" ? rRef : cRef)} style={bSm(false)}>{copied ? "Copied!" : "Copy"}</button>
                <button onClick={() => doDownload(tab === "resume" ? rRef : cRef, tab === "resume" ? `Resume_${res.filename_suffix}` : `CoverLetter_${cov?.company_name || ""}`)} style={{
                  ...bSm(false), background: "linear-gradient(135deg,#10B981,#059669)", border: "none"
                }}>
                  \u2B07 Download PDF
                </button>
              </div>
            </div>

            {/* Generate Cover Letter */}
            {tab === "resume" && !cov && (
              <div style={{ marginBottom: 16 }}>
                <button onClick={handleCoverLetter} disabled={covLoading}
                  style={{
                    width: "100%", padding: "14px 24px", borderRadius: 10,
                    border: `1.5px solid ${C.emerald}`, background: C.emeraldS,
                    color: C.emerald, fontSize: 14, fontWeight: 600,
                    cursor: covLoading ? "wait" : "pointer", fontFamily: "inherit",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10
                  }}>
                  {covLoading ? <><span className="rf-spin-green"/>Writing tailored cover letter...</> : <>\u270D\uFE0F Generate Cover Letter for {res.target_title}</>}
                </button>
              </div>
            )}

            {err && status === "done" && (
              <div style={{ marginBottom: 14, padding: "11px 16px", borderRadius: 10, background: C.errorS, border: "1px solid rgba(239,68,68,0.15)", color: C.error, fontSize: 12.5 }}>{err}</div>
            )}

            {/* RESUME */}
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

            {/* COVER LETTER */}
            {tab === "cover" && cov && (
              <div ref={cRef} style={paper}>
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: "#1E3A5F" }}>{MD.name}</div>
                  <div style={{ fontSize: 11.5, color: "#777" }}>{MD.location} | {MD.email} | {MD.phone}</div>
                </div>
                <div style={{ fontSize: 11.5, color: "#777", marginBottom: 18 }}>{cov.date}</div>
                <div style={{ fontSize: 11.5, color: "#333", marginBottom: 10, fontWeight: 600 }}>{cov.salutation}</div>
                {cov.body.split("\n\n").map((p,i) => <p key={i} style={{ fontSize: 11.5, color: "#333", lineHeight: 1.75, marginBottom: 14 }}>{p}</p>)}
                <div style={{ fontSize: 11.5, color: "#333", marginTop: 24 }}>
                  <div>{cov.closing}</div>
                  <div style={{ fontWeight: 600, marginTop: 6 }}>{MD.name}</div>
                </div>
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: C.textD }}>
              "Download PDF" opens your browser's save dialog \u2014 select "Save as PDF" as the destination
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes rfspin{to{transform:rotate(360deg)}}
        .rf-spin{width:13px;height:13px;border:2px solid rgba(255,255,255,.25);border-top-color:#fff;border-radius:50%;animation:rfspin .7s linear infinite;display:inline-block}
        .rf-spin-green{width:14px;height:14px;border:2px solid rgba(16,185,129,.25);border-top-color:#10B981;border-radius:50%;animation:rfspin .7s linear infinite;display:inline-block}
        textarea::placeholder,input::placeholder{color:#4B5563}
        *{box-sizing:border-box}
      `}</style>
    </div>
  );
}

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
