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
  { cat: "ATS", tip: "Most Canadian employers use ATS. Keep formatting simple \u2014 no tables, columns, or graphics in your resume file." },
  { cat: "Keywords", tip: "Mirror exact phrases from the job posting. If they say 'data visualization,' don't write 'data viz' \u2014 ATS matches literal strings." },
  { cat: "Numbers", tip: "Quantify everything. '12% churn reduction' beats 'reduced churn significantly' every time." },
  { cat: "Length", tip: "1 page is standard for <10 years experience in Canada. Recruiters spend 6-7 seconds on first scan." },
  { cat: "Summary", tip: "Your professional summary should mirror the job title. If they want a 'Data Scientist,' lead with 'Data Scientist with...'" },
  { cat: "Skills", tip: "Group skills by category and lead with the ones mentioned in the posting. Order matters \u2014 recruiters scan left to right." },
  { cat: "Projects", tip: "Academic projects count. Frame them with impact: what you built, what tools you used, and what the result was." },
  { cat: "Cover Letter", tip: "94% of hiring managers say cover letters influence interview decisions. The Problem-Solution format is the gold standard for 2026." },
  { cat: "Tailoring", tip: "80% of hiring managers view generic AI content negatively. Always personalize \u2014 swap at least 30% of the content per application." },
  { cat: "Action Verbs", tip: "Start bullets with strong verbs: Built, Designed, Optimized, Deployed, Reduced, Automated, Led, Delivered." },
  { cat: "Cover Letter Hook", tip: "Never start with 'I am writing to express my interest.' Open with a quantified achievement or company-specific insight." },
  { cat: "LinkedIn", tip: "Your LinkedIn should match your resume. Canadian recruiters will check \u2014 inconsistencies raise red flags." },
  { cat: "File Name", tip: "Name your file 'FirstName_LastName_Role_Company.pdf' \u2014 not 'resume_final_v3(2).docx'." },
  { cat: "PGWP", tip: "For Canadian roles, mentioning work authorization (PGWP eligible) can remove a major screening concern upfront." },
  { cat: "Cover Letter Length", tip: "70% of hiring managers prefer 250-400 words. 49% prefer half-page. Every sentence must answer 'Why hire me?'" },
  { cat: "Fonts", tip: "Stick to Calibri, Arial, or Garamond at 10-12pt. Creative fonts get mangled by ATS parsers." }
];

function makeResumeSys(pages) {
  const pr = pages === 1
    ? "CRITICAL: Select ONLY the most relevant content for ONE page. 3-4 bullets max per role, 3-4 projects max."
    : "2-page resume: include more detail. 4-5 bullets per role, 5-6 projects, 3-4 sentence overview.";
  return `You are a resume tailoring engine. Candidate data: ${JSON.stringify(MD)}\n\nRULES:\n1. 2-3 sentence overview matching job title.\n2. Top skills in 4 lines, renamed to match posting.\n3. ${pr}\n4. include_scaleai only if NLP/LLM/AI. include_airtel only if telecom/KPI/engineering.\n5. Order projects by relevance.\n\nONLY valid JSON:\n{"overview":"str","target_title":"str","skills":[{"label":"str","items":"str"}],"include_scaleai":bool,"include_airtel":bool,"freelance_bullets":["id"],"huawei_bullets":["id"],"airtel_bullets":["id"],"projects":["id"],"filename_suffix":"str"}`;
}

// Research-backed cover letter system prompt (2026 best practices)
// Sources: ResumeLab/UVA 2025, Resume Genius 2025, Interview Guys 2026, Kickresume 2026
// Format: Problem-Solution (gold standard per Interview Guys 2026 analysis)
// Length: 250-350 words (70% of HMs prefer 250-400, 49% prefer half-page)
// Structure: 5-block (Header, Greeting, Hook, Body, Close)
const COVER_SYS = `You are an elite cover letter writer using the PROBLEM-SOLUTION format, the gold standard for 2026 (per Interview Guys research of 80+ studies). 94% of hiring managers say cover letters influence decisions. 80% detect and reject generic AI content. Every word must be authentic and specific.

CANDIDATE:
- Name: ${MD.name} | ${MD.location} | ${MD.email} | ${MD.phone}
- MS Data Analytics, Northeastern University Vancouver (GPA 3.8/4.0, graduating Jun 2026)
- B.Eng Electrical & Electronic Engineering, Obafemi Awolowo University Nigeria
- 5+ years analytics: freelance (churn models -12% risk, Power BI/Tableau dashboards -25% manual effort, SQL pipelines 500K+ records, R time-series forecasting), Huawei intern (diagnostics -15% failures), Scale AI NLP/LLM pipelines
- Key projects: LiDAR point cloud with Lumotive, Faster R-CNN FruitNet on HuggingFace, bike sharing ML pipeline R2>0.91, credit risk SHAP, ULMFiT text classification, JobForge React app, Streamlit analytics dashboard
- Skills: Python, R, SQL, PyTorch, TensorFlow, Scikit-learn, Docker, AWS, Tableau, Power BI, Git

PROBLEM-SOLUTION FORMAT (mandatory structure):

PARAGRAPH 1 - THE HOOK (2-3 sentences):
Identify a specific PROBLEM or CHALLENGE the company faces based on the job posting (their growth area, technical challenge, or business need). Show you understand it. Reference something concrete about the company. NEVER use "I am writing to express my interest" or "I am excited to apply" or any variation. Start with the company's challenge or an achievement.

PARAGRAPH 2 - THE SOLUTION (3-4 sentences):
Present yourself as the solution. Connect your 2-3 most relevant experiences DIRECTLY to their stated needs. Use specific metrics (12% risk reduction, 15% failure reduction, R2>0.91, 500K+ records). Mirror exact keywords from the job posting naturally.

PARAGRAPH 3 - THE FIT (2-3 sentences):
Explain WHY you specifically (not just anyone with these skills) are right for THIS company. Connect your engineering + analytics background to their unique challenges. Show genuine understanding of what the team does or the company's mission.

PARAGRAPH 4 - THE CLOSE (1-2 sentences):
Confident, forward-looking. Reference a specific aspect of the role you're eager to tackle. End with clear next step. NEVER use "I would welcome the opportunity" or "Thank you for considering my application."

RULES:
- 250-350 words TOTAL (70% of HMs prefer this range)
- Every sentence answers "Why should we hire this person?"
- Mirror 3-5 keywords from the posting naturally
- Tone: Confident, specific, human. Like a sharp colleague wrote it, not a template
- Sign as "${MD.name}"

ONLY valid JSON, no markdown:
{"company_name":"str","role_title":"str","date":"April 23, 2026","salutation":"Dear [name or Hiring Manager],","body":"str (use \\n\\n between paragraphs)","closing":"Sincerely,"}`;

const C = {
  bg: "#06080F", surface: "#0F1219", surfaceR: "#151A24",
  border: "#1C2333", borderH: "#2A3347",
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
  const [genType, setGenType] = useState("resume"); // resume | both
  const [status, setStatus] = useState("idle");
  const [prog, setProg] = useState("");
  const [err, setErr] = useState("");
  const [res, setRes] = useState(null);
  const [cov, setCov] = useState(null);
  const [tab, setTab] = useState("resume");
  const [copied, setCopied] = useState(false);
  const [covLoading, setCovLoading] = useState(false);
  const [refineText, setRefineText] = useState("");
  const [refining, setRefining] = useState(false);
  const [questions, setQuestions] = useState([{ q: "", a: "" }]);
  const [qaLoading, setQaLoading] = useState(false);
  const [qaGenerated, setQaGenerated] = useState(false);
  const qaRef = useRef(null);
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

  useEffect(() => {
    if (status !== "idle") return;
    const iv = setInterval(() => setTipIdx(p => (p + 1) % TIPS.length), 6000);
    return () => clearInterval(iv);
  }, [status]);

  async function apiCall(system, msg, maxTok) {
    const r = await fetch("/api/tailor", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: maxTok || 1500, system, messages: [{ role: "user", content: msg }] })
    });
    const d = await r.json();
    if (d.error) throw new Error(d.error?.message || JSON.stringify(d.error));
    return (d.content?.map(i => i.text || "").join("\n") || "").replace(/```json|```/g, "").trim();
  }

  async function scrapeUrl(u) {
    const r = await fetch("/api/scrape", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: u }) });
    const d = await r.json(); if (d.error) throw new Error(d.error); return d.text;
  }

  async function handleSubmit() {
    let txt = posting;
    setRes(null); setCov(null); setErr(""); setTab("resume"); setCopied(false);
    try {
      if (mode === "url") {
        if (!url.trim()) return;
        setStatus("fetching"); setProg("Fetching job posting...");
        txt = await scrapeUrl(url.trim()); setPosting(txt);
      }
      if (!txt.trim()) { setErr("No text extracted. Try pasting manually."); setStatus("error"); return; }
      const extra = instr.trim() ? `\nADDITIONAL INSTRUCTIONS: ${instr.trim()}` : "";

      // Resume
      setStatus("analyzing"); setProg("Tailoring resume...");
      const raw = await apiCall(makeResumeSys(pages), `Job posting:\n${txt}${extra}`, pages === 2 ? 2000 : 1500);
      let p; try { p = JSON.parse(raw); } catch { throw new Error("Resume parse failed. Try again."); }
      setRes(p);

      // Cover letter (if selected)
      if (genType === "both") {
        setStatus("cover"); setProg("Writing cover letter...");
        const cRaw = await apiCall(COVER_SYS, `Job posting:\n${txt}${extra}\n\nTailored resume overview: ${p.overview}\nTarget role: ${p.target_title}`, 1500);
        let cp; try { cp = JSON.parse(cRaw); } catch { throw new Error("Cover letter parse failed. Try again."); }
        setCov(cp);
      }

      setStatus("done"); setProg("");
    } catch (e) { setErr(e.message); setStatus("error"); setProg(""); }
  }

  async function handleCoverLetterAfter() {
    setCovLoading(true); setErr("");
    try {
      const extra = instr.trim() ? `\nADDITIONAL INSTRUCTIONS: ${instr.trim()}` : "";
      const cRaw = await apiCall(COVER_SYS, `Job posting:\n${posting}${extra}\n\nTailored resume overview: ${res.overview}\nTarget role: ${res.target_title}`, 1500);
      let cp; try { cp = JSON.parse(cRaw); } catch { throw new Error("Cover letter parse failed."); }
      setCov(cp); setTab("cover");
    } catch (e) { setErr(e.message); }
    setCovLoading(false);
  }

  async function handleRefine() {
    if (!refineText.trim()) return;
    setRefining(true); setErr("");
    const allInstr = (instr.trim() ? instr.trim() + "\n" : "") + refineText.trim();
    try {
      if (tab === "resume" || !cov) {
        // Regenerate resume
        const raw = await apiCall(makeResumeSys(pages), `Job posting:\n${posting}\nADDITIONAL INSTRUCTIONS: ${allInstr}`, pages === 2 ? 2000 : 1500);
        let p; try { p = JSON.parse(raw); } catch { throw new Error("Resume parse failed. Try again."); }
        setRes(p);
        // Also regenerate cover letter if it exists
        if (cov) {
          const cRaw = await apiCall(COVER_SYS, `Job posting:\n${posting}\nADDITIONAL INSTRUCTIONS: ${allInstr}\n\nTailored resume overview: ${p.overview}\nTarget role: ${p.target_title}`, 1500);
          let cp; try { cp = JSON.parse(cRaw); } catch { throw new Error("Cover letter parse failed."); }
          setCov(cp);
        }
      } else {
        // Regenerate cover letter only
        const cRaw = await apiCall(COVER_SYS, `Job posting:\n${posting}\nADDITIONAL INSTRUCTIONS: ${allInstr}\n\nTailored resume overview: ${res.overview}\nTarget role: ${res.target_title}`, 1500);
        let cp; try { cp = JSON.parse(cRaw); } catch { throw new Error("Cover letter parse failed."); }
        setCov(cp);
      }
      setInstr(allInstr);
      setRefineText("");
    } catch (e) { setErr(e.message); }
    setRefining(false);
  }

  function addQuestion() { setQuestions([...questions, { q: "", a: "" }]); }
  function removeQuestion(idx) { setQuestions(questions.filter((_, i) => i !== idx)); }
  function updateQuestion(idx, val) { const nq = [...questions]; nq[idx] = { ...nq[idx], q: val }; setQuestions(nq); }

  async function handleGenerateAnswers() {
    const qs = questions.filter(q => q.q.trim());
    if (qs.length === 0) return;
    setQaLoading(true); setErr("");

    const QA_SYS = `You answer job application screening questions on behalf of a candidate. Be specific, authentic, and concise. Use the candidate's real experience and numbers. Match the tone of the posting.

CANDIDATE:
- ${MD.name}, ${MD.location}
- MS Data Analytics, Northeastern University Vancouver (GPA 3.8, graduating Jun 2026)
- B.Eng Electrical & Electronic Engineering
- Freelance Data Analyst 2021-present: churn models (-12% risk), Power BI/Tableau dashboards (-25% manual effort), SQL pipelines (500K+ records), R time-series forecasting, Scale AI NLP/LLM pipelines
- Huawei intern: diagnostics (-15% failures)
- Projects: LiDAR with Lumotive, Faster R-CNN FruitNet, bike sharing ML (R2>0.91), credit risk SHAP, ULMFiT, JobForge React app, Streamlit dashboard
- Skills: Python, R, SQL, PyTorch, TensorFlow, Scikit-learn, Docker, AWS, Tableau, Power BI

RULES:
- Answer each question in 2-5 sentences unless the question asks for a simple value (like salary, yes/no, date)
- Be specific with numbers and examples from the candidate's background
- Sound human and confident, not robotic
- If the question is about salary expectations, answer with a range appropriate for the role and Vancouver market
- If the question is about availability, mention graduating June 2026 and PGWP eligibility
- If the question is yes/no, give the answer then a brief supporting sentence

Respond ONLY valid JSON array, no markdown:
[{"question":"str","answer":"str"}, ...]`;

    try {
      const qList = qs.map(q => q.q.trim()).join("\n- ");
      const extra = instr.trim() ? `\nContext: ${instr.trim()}` : "";
      const raw = await apiCall(QA_SYS, `Job posting:\n${posting}\n\nQuestions to answer:\n- ${qList}${extra}\n\nTarget role: ${res?.target_title || ""}`, 2000);
      let parsed;
      try { parsed = JSON.parse(raw); } catch { throw new Error("Q&A parse failed. Try again."); }

      const updated = questions.map(q => {
        if (!q.q.trim()) return q;
        const match = parsed.find(a => a.question.toLowerCase().includes(q.q.trim().toLowerCase().slice(0, 30)) || q.q.trim().toLowerCase().includes(a.question.toLowerCase().slice(0, 30)));
        return match ? { q: q.q, a: match.answer } : q;
      });
      // If matching failed, just assign in order
      let orderIdx = 0;
      const final = updated.map(q => {
        if (q.a || !q.q.trim()) return q;
        if (parsed[orderIdx]) { const ans = parsed[orderIdx].answer; orderIdx++; return { q: q.q, a: ans }; }
        return q;
      });
      setQuestions(final);
      setQaGenerated(true);
      setTab("qa");
    } catch (e) { setErr(e.message); }
    setQaLoading(false);
  }

  const getExp = id => MD.experience.find(e => e.id === id);
  const getBul = (eid, ids) => { const e = getExp(eid); return e ? ids.map(b => e.bullets.find(x => x.id === b)).filter(Boolean) : []; };
  const getProj = pid => MD.projects.find(p => p.id === pid);
  function reset() { setStatus("idle"); setRes(null); setCov(null); setPosting(""); setUrl(""); setErr(""); setProg(""); setInstr(""); setTab("resume"); setCopied(false); setCovLoading(false); setGenType("resume"); setRefineText(""); setRefining(false); setQuestions([{ q: "", a: "" }]); setQaGenerated(false); setQaLoading(false); }

  function doDownload(ref, filename) {
    if (!ref.current) return;
    const w = window.open("", "_blank");
    w.document.write(`<!DOCTYPE html><html><head><title>${filename}</title>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:'DM Sans',sans-serif;padding:40px 52px;color:#1a1a1a;line-height:1.5;max-width:800px;margin:0 auto}
        @media print{
          body{padding:0}
          @page{margin:0.5in 0.5in 0.5in 0.5in;size:letter}
        }
      </style>
    </head><body>${ref.current.innerHTML}</body></html>`);
    w.document.close();
    setTimeout(() => w.print(), 600);
  }

  function doCopy(ref) {
    if (!ref.current) return;
    navigator.clipboard.writeText(ref.current.innerText).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }

  const loading = ["fetching","analyzing","cover"].includes(status);
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
              {mode === "text" ? (
                <textarea ref={taRef} value={posting} onChange={e => setPosting(e.target.value)}
                  disabled={loading}
                  placeholder={"Paste the full job posting here...\n\nInclude job title, company, responsibilities, qualifications, and nice-to-haves."}
                  style={taS} onFocus={fB} onBlur={bB} />
              ) : (
                <div style={{ position: "relative" }}>
                  <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: C.textD }}>{"🔗"}</span>
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

              {/* Options row: pages + generate type */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16, flexWrap: "wrap" }}>
                {/* Pages */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, color: C.textM }}>Pages:</span>
                  {[1, 2].map(n => (
                    <button key={n} onClick={() => setPages(n)} style={{
                      padding: "5px 14px", borderRadius: 7, border: `1.5px solid ${pages === n ? C.accent : C.border}`,
                      background: pages === n ? C.accentS : "transparent",
                      color: pages === n ? C.accent : C.textD,
                      fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}>{n}</button>
                  ))}
                </div>

                {/* Generate type */}
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 12, color: C.textM }}>Generate:</span>
                  {[["resume","Resume Only"],["both","Resume + Cover Letter"]].map(([k,l]) => (
                    <button key={k} onClick={() => setGenType(k)} style={{
                      padding: "5px 14px", borderRadius: 7,
                      border: `1.5px solid ${genType === k ? (k === "both" ? C.emerald : C.accent) : C.border}`,
                      background: genType === k ? (k === "both" ? C.emeraldS : C.accentS) : "transparent",
                      color: genType === k ? (k === "both" ? C.emerald : C.accent) : C.textD,
                      fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}>{l}</button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginTop: 16, gap: 10 }}>
                {posting.length > 0 && mode === "text" && (
                  <span style={{ fontSize: 11, color: C.textD, fontFamily: "'JetBrains Mono',monospace", marginRight: "auto" }}>{posting.split(/\s+/).filter(Boolean).length}w</span>
                )}
                <button onClick={handleSubmit} disabled={!canGo || loading}
                  style={{
                    padding: "10px 28px", borderRadius: 10, border: "none",
                    background: !canGo ? C.border : `linear-gradient(135deg,${C.accent},${C.accentD})`,
                    color: !canGo ? C.textD : "#fff",
                    fontSize: 13, fontWeight: 600, cursor: !canGo ? "not-allowed" : "pointer",
                    fontFamily: "inherit", minWidth: 160,
                    boxShadow: canGo && !loading ? "0 2px 12px rgba(59,130,246,0.25)" : "none"
                  }}>
                  {loading ? <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span className="rf-spin"/>{prog}</span>
                    : genType === "both" ? "Generate Both" : "Tailor Resume"}
                </button>
              </div>

              {status === "error" && (
                <div style={{ marginTop: 14, padding: "11px 16px", borderRadius: 10, background: C.errorS, border: "1px solid rgba(239,68,68,0.15)", color: C.error, fontSize: 12.5, lineHeight: 1.5 }}>{err}</div>
              )}
            </div>
          </div>
        )}

        {/* TIPS */}
        {status === "idle" && (
          <div style={{ marginTop: 18, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "18px 22px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: "0.06em", marginBottom: 4, textTransform: "uppercase" }}>{tip.cat}</div>
                <div style={{ fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>{tip.tip}</div>
              </div>
              <button onClick={() => setTipIdx((tipIdx + 1) % TIPS.length)}
                style={{ flexShrink: 0, padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.border}`, background: "transparent", color: C.textD, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
                Next →
              </button>
            </div>
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
            {/* Tabs + actions */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
              <div style={{ display: "flex", gap: 0, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: 3 }}>
                {[["resume","Resume"], ...(cov ? [["cover","Cover Letter"]] : []), ...(qaGenerated ? [["qa","Q&A"]] : [])].map(([k,l]) => (
                  <button key={k} onClick={() => { setTab(k); setCopied(false); }} style={{
                    padding: "8px 22px", borderRadius: 7, border: "none", fontSize: 13, fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit",
                    background: tab === k ? C.accent : "transparent", color: tab === k ? "#fff" : C.textD
                  }}>{l}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: C.success, fontWeight: 600, marginRight: 4 }}>
                  {"✓ "}{tab === "resume" ? res.target_title : tab === "cover" ? (cov?.company_name || "") : "Q&A"}
                </span>
                <button onClick={() => doCopy(tab === "resume" ? rRef : tab === "cover" ? cRef : qaRef)} style={bSm(false)}>{copied ? "Copied!" : "Copy"}</button>
                <button onClick={() => {
                  const company = (cov?.company_name || res.filename_suffix || "company").replace(/[^a-zA-Z0-9]/g, "_");
                  const role = (res.target_title || "role").replace(/[^a-zA-Z0-9]/g, "_");
                  const base = `Joseph_Eyinade_${role}_${company}`;
                  const fname = tab === "resume" ? base : tab === "cover" ? `Cover_Letter_${company}` : `QA_Answers_${company}`;
                  doDownload(tab === "resume" ? rRef : tab === "cover" ? cRef : qaRef, fname);
                }}
                  style={{ ...bSm(false), background: "linear-gradient(135deg,#10B981,#059669)", border: "none" }}>
                  {"⬇ Download PDF"}
                </button>
              </div>
            </div>

            {/* Generate Cover Letter button (after resume, if not already generated) */}
            {tab === "resume" && !cov && (
              <div style={{ marginBottom: 16 }}>
                <button onClick={handleCoverLetterAfter} disabled={covLoading}
                  style={{
                    width: "100%", padding: "14px 24px", borderRadius: 10,
                    border: `1.5px solid ${C.emerald}`, background: C.emeraldS,
                    color: C.emerald, fontSize: 14, fontWeight: 600,
                    cursor: covLoading ? "wait" : "pointer", fontFamily: "inherit",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10
                  }}>
                  {covLoading ? <><span className="rf-spin-green"/>{"Writing tailored cover letter..."}</> : <>{"✍️ Generate Cover Letter for " + res.target_title}</>}
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
                  {MD.location} {" | "} {MD.email} {" | "} {MD.phone} {" | "} {MD.linkedin}
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
                    <div style={{ fontSize: 11, color: "#333", marginTop: 1, paddingLeft: 10 }}>{"• " + p.text}</div>
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

            {/* Q&A TAB — answers display */}
            {tab === "qa" && qaGenerated && (
              <div ref={qaRef} style={paper}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#1E3A5F", marginBottom: 16 }}>Application Questions</div>
                {questions.filter(q => q.q.trim()).map((q, i) => (
                  <div key={i} style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: "#1E3A5F", marginBottom: 4 }}>{"Q: " + q.q}</div>
                    <div style={{ fontSize: 12, color: "#333", lineHeight: 1.65, paddingLeft: 12, borderLeft: "2px solid #3B82F6" }}>{q.a || "No answer generated"}</div>
                  </div>
                ))}
              </div>
            )}

            {/* APPLICATION QUESTIONS — input panel (shows after first output, when not on Q&A tab with results) */}
            {!(tab === "qa" && qaGenerated) && (
              <div style={{ marginTop: 20, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 20px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{"❓ Application Questions"}</div>
                  <div style={{ fontSize: 11, color: C.textD }}>Paste screening questions from LinkedIn, Indeed, etc.</div>
                </div>
                <div style={{ padding: "4px 20px 16px" }}>
                  {questions.map((q, i) => (
                    <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                      <span style={{ fontSize: 11, color: C.textD, fontWeight: 600, width: 20, flexShrink: 0 }}>{i + 1}.</span>
                      <input value={q.q} onChange={e => updateQuestion(i, e.target.value)}
                        disabled={qaLoading}
                        placeholder="e.g. Why are you interested in this role?"
                        style={{
                          flex: 1, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8,
                          padding: "9px 12px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif",
                          color: C.text, outline: "none", boxSizing: "border-box"
                        }}
                        onFocus={fB} onBlur={bB} />
                      {questions.length > 1 && (
                        <button onClick={() => removeQuestion(i)}
                          style={{ padding: "6px 10px", borderRadius: 6, border: `1px solid ${C.border}`, background: "transparent", color: C.textD, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
                          {"✕"}
                        </button>
                      )}
                    </div>
                  ))}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                    <button onClick={addQuestion}
                      style={{ padding: "6px 14px", borderRadius: 7, border: `1px solid ${C.border}`, background: "transparent", color: C.textM, fontSize: 12, cursor: "pointer", fontFamily: "inherit" }}>
                      {"+ Add Question"}
                    </button>
                    <button onClick={handleGenerateAnswers} disabled={!questions.some(q => q.q.trim()) || qaLoading}
                      style={{
                        padding: "9px 20px", borderRadius: 8, border: "none",
                        background: !questions.some(q => q.q.trim()) ? C.border : "linear-gradient(135deg,#8B5CF6,#6D28D9)",
                        color: !questions.some(q => q.q.trim()) ? C.textD : "#fff",
                        fontSize: 12, fontWeight: 600, cursor: !questions.some(q => q.q.trim()) ? "not-allowed" : "pointer",
                        fontFamily: "inherit"
                      }}>
                      {qaLoading ? <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="rf-spin"/>{"Generating answers..."}</span> : "Generate Answers"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* REFINE PANEL */}
            <div style={{ marginTop: 20, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 20px 6px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{"🔄 Refine"}</div>
                <div style={{ fontSize: 11, color: C.textD }}>
                  {tab === "resume" && cov ? "Regenerates resume + cover letter" : tab === "cover" ? "Regenerates cover letter only" : "Regenerates resume"}
                </div>
              </div>
              <div style={{ padding: "6px 20px 16px" }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <textarea value={refineText} onChange={e => setRefineText(e.target.value)}
                    disabled={refining}
                    placeholder='e.g. "Make the summary more concise", "Add more Python emphasis", "Stronger opening hook", "Mention PGWP eligibility"'
                    style={{
                      flex: 1, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8,
                      padding: "10px 12px", fontSize: 12.5, fontFamily: "'DM Sans',sans-serif",
                      color: C.text, resize: "none", outline: "none", minHeight: 44, maxHeight: 80,
                      lineHeight: 1.5, boxSizing: "border-box"
                    }}
                    onFocus={fB} onBlur={bB} />
                  <button onClick={handleRefine} disabled={!refineText.trim() || refining}
                    style={{
                      padding: "10px 20px", borderRadius: 8, border: "none",
                      background: !refineText.trim() ? C.border : "linear-gradient(135deg,#F59E0B,#D97706)",
                      color: !refineText.trim() ? C.textD : "#fff",
                      fontSize: 12, fontWeight: 600, cursor: !refineText.trim() ? "not-allowed" : "pointer",
                      fontFamily: "inherit", whiteSpace: "nowrap", alignSelf: "flex-end"
                    }}>
                    {refining ? <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="rf-spin"/>{"Refining..."}</span> : "Refine"}
                  </button>
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: C.textD }}>
              {"When saving as PDF: uncheck \"Headers and footers\" in the print dialog for a clean output"}
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
      <span><span style={{ fontWeight: 600 }}>{exp.title}</span><span style={{ color: "#777" }}>{" | " + exp.company}</span></span>
      <span style={{ color: "#777", flexShrink: 0, marginLeft: 10 }}>{exp.dates}</span>
    </div>
    {bul.map((b,i) => <div key={i} style={{ fontSize: 11, color: "#333", marginTop: 2, paddingLeft: 10, lineHeight: 1.55 }}>{"• " + b.text}</div>)}
  </div>);
}

const paper = { background: "#fff", borderRadius: 12, padding: "36px 44px", color: "#1a1a1a", fontFamily: "'DM Sans','Segoe UI',sans-serif", lineHeight: 1.5, boxShadow: "0 4px 30px rgba(0,0,0,0.5)" };
const taS = { width: "100%", minHeight: 150, maxHeight: 400, background: "#06080F", border: "1px solid #1C2333", borderRadius: 10, padding: "12px 14px", fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: "#E8ECF4", resize: "none", outline: "none", lineHeight: 1.6, boxSizing: "border-box" };
const fB = e => { e.target.style.borderColor = "#3B82F6"; };
const bB = e => { e.target.style.borderColor = "#1C2333"; };
function bSm(p) { return { padding: "7px 14px", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", border: p ? "none" : "1px solid #1C2333", background: p ? "linear-gradient(135deg,#3B82F6,#1D4ED8)" : "#0F1219", color: "#E8ECF4" }; }
