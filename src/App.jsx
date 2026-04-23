import { useState, useRef, useEffect } from "react";

// ─── Zeus's Master Resume Data ───
const MASTER_DATA = {
  name: "Joseph Iyanuoluwa Eyinade",
  location: "Vancouver, BC",
  email: "josephiyanu@gmail.com",
  phone: "+1 (236) 660-8515",
  linkedin: "linkedin.com/in/josephiyanu",
  education: [
    {
      degree: "Master of Science in Data Analytics",
      school: "Northeastern University, Vancouver, BC",
      dates: "Sep 2024 – Jun 2026",
      gpa: "3.8 / 4.0",
      coursework: "Machine Learning, Deep Learning, NLP, Predictive Analytics, Data Mining, Cloud Computing, AI Ethics, Cybersecurity Fundamentals"
    },
    {
      degree: "Bachelor of Engineering, Electrical & Electronic Engineering",
      school: "Obafemi Awolowo University, Nigeria",
      dates: "2015 – 2020",
      gpa: null,
      coursework: "Network Systems, Optimization, Applied Problem-Solving, Quantitative Methods"
    }
  ],
  skills: {
    languages: ["Python", "R", "SQL", "JavaScript", "VBA"],
    ml_analytics: ["Scikit-learn", "PyTorch", "TensorFlow", "fastai", "Pandas", "NumPy", "SciPy", "Statsmodels", "PySpark", "XGBoost", "SHAP"],
    visualization: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
    tools_platforms: ["Git", "Docker", "AWS (S3, Glue)", "Google Cloud Vision API", "ROS2", "Jupyter", "RStudio", "Excel (Advanced)", "Hugging Face"],
    databases: ["SQL Server", "Snowflake", "MS Access"],
    methods: ["Regression", "Classification", "Clustering", "NLP", "Time-Series Forecasting", "A/B Testing", "Deep Learning", "Computer Vision", "Object Detection", "Dimensionality Reduction", "Reinforcement Learning", "Optimization"]
  },
  experience: [
    {
      id: "freelance",
      title: "Freelance Data Analyst",
      company: "Remote",
      dates: "Jan 2021 – Present",
      always_include: true,
      bullets: [
        { id: "churn", text: "Built churn prediction models (Random Forest, Logistic Regression, GLM) in Python that reduced client risk exposure by 12% and informed data-driven retention strategies.", tags: ["ml", "python", "analytics", "business"] },
        { id: "dashboards", text: "Developed automated Power BI and Tableau dashboards for revenue forecasting, improving retail planning accuracy and reducing manual reporting effort by 25%.", tags: ["bi", "visualization", "dashboards", "reporting"] },
        { id: "sql", text: "Designed and optimized SQL pipelines for data extraction, transformation, and analysis across datasets of 500K+ records, accelerating reporting turnaround.", tags: ["sql", "data_engineering", "etl"] },
        { id: "scaleai", text: "Contributed to NLP/LLM evaluation pipelines at Scale AI (Balba project), applying statistical validation for production-grade language models.", tags: ["nlp", "llm", "ai"], conditional: "nlp_llm_ai" },
        { id: "vba", text: "Automated Excel reporting workflows with VBA macros, reducing manual effort for clients by 25% and improving data integrity.", tags: ["excel", "vba", "automation"] },
        { id: "timeseries", text: "Developed R-based time-series forecasting models and automated demand forecasts, improving financial forecasting accuracy for retail clients.", tags: ["r", "forecasting", "timeseries"] },
        { id: "presentations", text: "Prepared clear analytical summaries and presentations for non-technical stakeholders to guide financial strategy and business planning.", tags: ["communication", "stakeholder", "strategy"] }
      ]
    },
    {
      id: "huawei",
      title: "Field Engineering Intern",
      company: "Huawei Technologies, Nigeria",
      dates: "May 2019 – Aug 2019",
      always_include: true,
      bullets: [
        { id: "diagnostics", text: "Applied data-driven diagnostics to network subsystems, reducing system failures by 15% through root-cause analysis and preventive maintenance.", tags: ["analytics", "engineering", "diagnostics"] },
        { id: "reports", text: "Produced technical performance reports for senior leadership, translating complex metrics into actionable operational recommendations.", tags: ["communication", "reporting"] }
      ]
    },
    {
      id: "airtel",
      title: "Telecom Engineering Intern",
      company: "Airtel Nigeria",
      dates: "Jul 2019 – Dec 2019",
      always_include: false,
      bullets: [
        { id: "kpi", text: "Monitored KPIs and maintained incident logs for NOC/field teams, contributing to root-cause chronologies used in post-incident reviews.", tags: ["kpi", "monitoring", "analytics"] },
        { id: "briefs", text: "Produced concise status briefs for non-technical stakeholders, improving decision cycle time.", tags: ["communication", "reporting"] }
      ]
    }
  ],
  projects: [
    { id: "lidar", title: "LiDAR Point Cloud Smart Stitching — Capstone with Lumotive Inc.", dates: "Jan 2026 – Present", text: "Developing rain-scatter filtering algorithms for MD42 LiDAR sensor data across three echo return streams using Python and ROS2, improving 3D point cloud accuracy for autonomous systems.", tags: ["python", "computer_vision", "engineering", "ros2", "3d"] },
    { id: "fruitnet", title: "FruitNet — Object Detection Microservice", dates: "Mar 2026", text: "Built and deployed a Faster R-CNN fruit detection API (FastAPI + Docker) on Hugging Face Spaces; fine-tuned on Fruits 360 dataset with custom label correction mapping.", tags: ["ml", "deep_learning", "computer_vision", "docker", "api", "deployment"] },
    { id: "bikesharing", title: "Bike Sharing Demand Analysis — End-to-End ML Pipeline", dates: "Feb 2026", text: "Applied K-Means, PCA, Random Forest (R² > 0.91), Q-Learning, and neural networks on UCI Bike Sharing Dataset; delivered 13-slide executive presentation with 17 embedded visualizations.", tags: ["ml", "analytics", "visualization", "clustering", "regression"] },
    { id: "fruitvision", title: "Fruit Vision Classifier — Google Cloud Vision API", dates: "Mar 2026", text: "Evaluated Cloud Vision API for fruit classification; improved accuracy from 19.5% to 52.5% using custom synonym dictionaries. Deployed on Hugging Face.", tags: ["cloud", "computer_vision", "api", "google_cloud"] },
    { id: "creditrisk", title: "Customer Churn & Credit Risk Modelling", dates: "2024 – 2025", text: "Built classification and regression models (Logistic Regression, XGBoost, GLMs) on German Credit and retail datasets; applied SHAP for model interpretability and business-ready risk scoring.", tags: ["ml", "classification", "risk", "business", "interpretability"] },
    { id: "textclass", title: "Text Classification — ULMFiT & NLP Pipeline", dates: "Mar 2026", text: "Fine-tuned AWD-LSTM via ULMFiT (fastai) on AG News corpus; compared to TF-IDF + LinearSVC baseline. Achieved strong classification accuracy with transfer learning.", tags: ["nlp", "deep_learning", "fastai", "text"] },
    { id: "jobforge", title: "JobForge — AI-Powered Job Search Application", dates: "Apr 2026", text: "Built a full-featured React job search app with AI-powered job matching, skill gap analysis, Kanban tracker, and cover letter generation using a three-tier search system.", tags: ["react", "javascript", "fullstack", "ai", "product"] },
    { id: "streamlit", title: "Amazon Review Analytics Dashboard", dates: "Dec 2025", text: "Developed a Streamlit dashboard for Amazon movie review sentiment analysis, deployed on Streamlit Community Cloud with ~500K sampled rows.", tags: ["python", "streamlit", "nlp", "visualization", "cloud"] },
    { id: "heartdisease", title: "Heart Disease Prediction — Multi-Model Comparison", dates: "Feb 2026", text: "Evaluated 9 supervised learning algorithms and 5 neural network architectures on UCI Heart Disease dataset using modular PyCharm structure.", tags: ["ml", "deep_learning", "healthcare", "classification"] },
    { id: "mnist", title: "MNIST Digit Classification", dates: "Jan 2026", text: "Achieved 96% accuracy with MLP and 95.39% with Random Forest on MNIST; compared multiple model architectures.", tags: ["ml", "deep_learning", "classification", "computer_vision"] }
  ]
};

const SYSTEM_PROMPT = `You are a resume tailoring engine. Given a job posting and a candidate's master resume data, produce a JSON object that tailors the resume to the job.

CANDIDATE DATA:
${JSON.stringify(MASTER_DATA, null, 2)}

RULES:
1. Write a 2-3 sentence professional overview/summary that mirrors the job posting's language and requirements. Start with a descriptor like "Data Scientist with..." or "Machine Learning Engineer with..." matching the job title. Mention years of experience, key matching skills, and the MS in Data Analytics.
2. Select and reorder the TOP skills (from all skill categories) that match the posting. Return them grouped into 4 lines max. Rename categories if needed to match the posting's language.
3. For experience: select the best 3-4 bullets per role that align with the posting. Rephrase bullets slightly to echo keywords from the posting. Set include_airtel to true only if the posting values telecom, engineering, monitoring, KPIs, or Canadian work experience.
4. Select the best 3-4 projects that align with the posting. Order by relevance.
5. include_scaleai should be true only if the posting mentions NLP, LLM, AI, language models, or generative AI.

Respond with ONLY valid JSON, no markdown fences, no preamble:
{
  "overview": "string",
  "target_title": "string (e.g. Data Analyst, ML Engineer)",
  "skills": [
    { "label": "string", "items": "string (comma-separated)" },
    { "label": "string", "items": "string" },
    { "label": "string", "items": "string" },
    { "label": "string", "items": "string" }
  ],
  "include_scaleai": boolean,
  "include_airtel": boolean,
  "freelance_bullets": ["bullet_id", ...],
  "huawei_bullets": ["bullet_id", ...],
  "airtel_bullets": ["bullet_id", ...],
  "projects": ["project_id", ...],
  "filename_suffix": "string (short, like 'data_analyst_rbc' or 'ml_engineer_amazon')"
}`;

export default function App() {
  const [jobPosting, setJobPosting] = useState("");
  const [status, setStatus] = useState("idle");
  const [tailored, setTailored] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [progress, setProgress] = useState("");
  const textareaRef = useRef(null);
  const resumeRef = useRef(null);

  const colors = {
    bg: "#0A0E17", surface: "#111827", surfaceHover: "#1A2235",
    border: "#1E293B", borderFocus: "#3B82F6", accent: "#3B82F6",
    accentDim: "#2563EB", text: "#F1F5F9", textMuted: "#94A3B8",
    textDim: "#64748B", success: "#10B981", error: "#EF4444",
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 400) + "px";
    }
  }, [jobPosting]);

  async function handleTailor() {
    if (!jobPosting.trim()) return;
    setStatus("analyzing");
    setProgress("Analyzing job posting...");
    setTailored(null);
    setErrorMsg("");

    try {
      const response = await fetch("/api/tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [
            { role: "user", content: `Here is the job posting to tailor the resume for:\n\n${jobPosting}` }
          ]
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error?.message || data.error || "API request failed");
      }

      const text = data.content?.map(i => i.text || "").join("\n") || "";
      const clean = text.replace(/```json|```/g, "").trim();

      setProgress("Building tailored resume...");
      setStatus("generating");

      let parsed;
      try {
        parsed = JSON.parse(clean);
      } catch (e) {
        throw new Error("Failed to parse AI response. Please try again.");
      }

      setTailored(parsed);
      setStatus("done");
      setProgress("");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong");
      setStatus("error");
      setProgress("");
    }
  }

  function getExperience(id) {
    return MASTER_DATA.experience.find(e => e.id === id);
  }

  function getBullets(expId, bulletIds) {
    const exp = getExperience(expId);
    if (!exp) return [];
    return bulletIds.map(bid => exp.bullets.find(b => b.id === bid)).filter(Boolean);
  }

  function getProject(pid) {
    return MASTER_DATA.projects.find(p => p.id === pid);
  }

  function handleReset() {
    setStatus("idle");
    setTailored(null);
    setJobPosting("");
    setErrorMsg("");
    setProgress("");
  }

  function handleCopyText() {
    if (!resumeRef.current) return;
    const text = resumeRef.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert("Resume text copied to clipboard!");
    });
  }

  function handlePrint() {
    const content = resumeRef.current;
    if (!content) return;
    const win = window.open("", "_blank");
    win.document.write(`
      <!DOCTYPE html><html><head><title>Resume - ${MASTER_DATA.name}</title>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; padding: 36px 48px; color: #1a1a1a; line-height: 1.5; max-width: 800px; margin: 0 auto; }
        @media print { body { padding: 0; } @page { margin: 0.4in 0.5in; } }
      </style></head><body>${content.innerHTML}</body></html>
    `);
    win.document.close();
    setTimeout(() => { win.print(); }, 500);
  }

  return (
    <div style={{ minHeight: "100vh", background: colors.bg, color: colors.text, fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ borderBottom: `1px solid ${colors.border}`, padding: "20px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentDim})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 700, color: "#fff"
          }}>R</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>ResumeFit</div>
            <div style={{ fontSize: 12, color: colors.textDim }}>AI-powered resume tailoring</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>

        {/* Input */}
        {status !== "done" && (
          <div style={{
            background: colors.surface, border: `1px solid ${colors.border}`,
            borderRadius: 16, padding: 28, marginBottom: 24
          }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>Paste Job Posting</div>
            <div style={{ fontSize: 13, color: colors.textDim, marginBottom: 16 }}>
              Drop the full job description below. The AI will extract keywords, match your skills, and generate a tailored 1-page resume.
            </div>
            <textarea
              ref={textareaRef}
              value={jobPosting}
              onChange={e => setJobPosting(e.target.value)}
              disabled={status === "analyzing" || status === "generating"}
              placeholder={"Paste the full job posting here...\n\nInclude the job title, company name, responsibilities, qualifications, and nice-to-haves for best results."}
              style={{
                width: "100%", minHeight: 180, maxHeight: 400, background: colors.bg,
                border: `1px solid ${colors.border}`, borderRadius: 10, padding: "14px 16px",
                fontSize: 14, fontFamily: "'JetBrains Mono', monospace", color: colors.text,
                resize: "none", outline: "none", lineHeight: 1.6, boxSizing: "border-box",
              }}
              onFocus={e => e.target.style.borderColor = colors.borderFocus}
              onBlur={e => e.target.style.borderColor = colors.border}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
              <div style={{ fontSize: 13, color: colors.textDim }}>
                {jobPosting.length > 0 ? `${jobPosting.split(/\s+/).filter(Boolean).length} words` : ""}
              </div>
              <button onClick={handleTailor}
                disabled={!jobPosting.trim() || status === "analyzing" || status === "generating"}
                style={{
                  padding: "10px 28px", borderRadius: 10, border: "none",
                  background: !jobPosting.trim() ? colors.border : `linear-gradient(135deg, ${colors.accent}, ${colors.accentDim})`,
                  color: !jobPosting.trim() ? colors.textDim : "#fff",
                  fontSize: 14, fontWeight: 600,
                  cursor: !jobPosting.trim() ? "not-allowed" : "pointer", fontFamily: "inherit"
                }}
              >
                {(status === "analyzing" || status === "generating") ? (
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span className="spinner" />
                    {progress}
                  </span>
                ) : "Tailor Resume"}
              </button>
            </div>
            {status === "error" && (
              <div style={{
                marginTop: 16, padding: "12px 16px", borderRadius: 10,
                background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
                color: colors.error, fontSize: 13
              }}>{errorMsg}</div>
            )}
          </div>
        )}

        {/* Results */}
        {status === "done" && tailored && (
          <div>
            {/* Success + actions bar */}
            <div style={{
              background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)",
              borderRadius: 12, padding: "16px 20px", marginBottom: 24,
              display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 20, color: colors.success }}>✓</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: colors.success }}>Resume Tailored</div>
                  <div style={{ fontSize: 12, color: colors.textMuted }}>
                    Targeting: {tailored.target_title}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <ActionBtn label="Copy Text" onClick={handleCopyText} />
                <ActionBtn label="Print / PDF" onClick={handlePrint} />
                <ActionBtn label="New Resume" onClick={handleReset} primary />
              </div>
            </div>

            {/* Resume Preview */}
            <div ref={resumeRef} style={{
              background: "#FFFFFF", borderRadius: 12, padding: "40px 48px",
              color: "#1a1a1a", fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
              lineHeight: 1.5, boxShadow: "0 4px 24px rgba(0,0,0,0.4)"
            }}>
              {/* Name */}
              <div style={{ textAlign: "center", marginBottom: 4 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#1E3A5F", letterSpacing: "0.04em" }}>
                  {MASTER_DATA.name.toUpperCase()}
                </div>
              </div>
              <div style={{ textAlign: "center", fontSize: 11.5, color: "#666", marginBottom: 16 }}>
                {MASTER_DATA.location} &nbsp;|&nbsp; {MASTER_DATA.email} &nbsp;|&nbsp; {MASTER_DATA.phone} &nbsp;|&nbsp; {MASTER_DATA.linkedin}
              </div>

              {/* Overview */}
              <ResSection title="PROFESSIONAL SUMMARY" />
              <p style={{ fontSize: 12, color: "#333", margin: "6px 0 12px", lineHeight: 1.65 }}>
                {tailored.overview}
              </p>

              {/* Skills */}
              <ResSection title="TECHNICAL SKILLS" />
              <div style={{ margin: "6px 0 12px" }}>
                {tailored.skills?.map((s, i) => (
                  <div key={i} style={{ fontSize: 12, marginBottom: 3 }}>
                    <span style={{ fontWeight: 600 }}>{s.label}: </span>
                    <span style={{ color: "#333" }}>{s.items}</span>
                  </div>
                ))}
              </div>

              {/* Education */}
              <ResSection title="EDUCATION" />
              {MASTER_DATA.education.map((ed, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                    <span style={{ fontWeight: 600 }}>{ed.degree}</span>
                    <span style={{ color: "#666" }}>{ed.dates}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: "#666", fontStyle: "italic", display: "flex", justifyContent: "space-between" }}>
                    <span>{ed.school}</span>
                    {ed.gpa && <span>GPA: {ed.gpa}</span>}
                  </div>
                  {i === 0 && (
                    <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>
                      Coursework: {ed.coursework}
                    </div>
                  )}
                </div>
              ))}

              {/* Experience */}
              <ResSection title="PROFESSIONAL EXPERIENCE" />
              <ExpBlock
                exp={getExperience("freelance")}
                bullets={getBullets("freelance", tailored.freelance_bullets || [])}
              />
              <ExpBlock
                exp={getExperience("huawei")}
                bullets={getBullets("huawei", tailored.huawei_bullets || [])}
              />
              {tailored.include_airtel && (
                <ExpBlock
                  exp={getExperience("airtel")}
                  bullets={getBullets("airtel", tailored.airtel_bullets || [])}
                />
              )}

              {/* Projects */}
              <ResSection title="PROJECTS" />
              {(tailored.projects || []).map(pid => {
                const proj = getProject(pid);
                if (!proj) return null;
                return (
                  <div key={pid} style={{ marginBottom: 8 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
                      <span style={{ fontWeight: 600 }}>{proj.title}</span>
                      <span style={{ color: "#666", flexShrink: 0, marginLeft: 12 }}>{proj.dates}</span>
                    </div>
                    <div style={{ fontSize: 11.5, color: "#333", marginTop: 2, paddingLeft: 12 }}>
                      • {proj.text}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: colors.textDim }}>
              Use "Print / PDF" to save as PDF, or "Copy Text" to paste into a Word template.
            </div>
          </div>
        )}

        {/* How it works */}
        {status === "idle" && !tailored && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8 }}>
            {[
              { icon: "📋", title: "Paste Posting", desc: "Drop any job description — data analyst, ML engineer, data scientist" },
              { icon: "🧠", title: "AI Tailors", desc: "Claude analyzes keywords, matches your skills, rewrites your overview" },
              { icon: "📄", title: "Get Resume", desc: "A tailored 1-page resume with the right skills, bullets, and projects" }
            ].map((step, i) => (
              <div key={i} style={{
                background: colors.surface, border: `1px solid ${colors.border}`,
                borderRadius: 12, padding: "20px 18px", textAlign: "center"
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{step.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{step.title}</div>
                <div style={{ fontSize: 12, color: colors.textDim, lineHeight: 1.5 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner {
          width: 14px; height: 14px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.8s linear infinite;
          display: inline-block;
        }
        textarea::placeholder { color: #64748B; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}

function ResSection({ title }) {
  return (
    <div style={{
      fontSize: 12.5, fontWeight: 700, color: "#1E3A5F", letterSpacing: "0.05em",
      borderBottom: "1.5px solid #1E3A5F", paddingBottom: 3, marginTop: 14, marginBottom: 6
    }}>{title}</div>
  );
}

function ExpBlock({ exp, bullets }) {
  if (!exp) return null;
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
        <span>
          <span style={{ fontWeight: 600 }}>{exp.title}</span>
          <span style={{ color: "#666" }}> | {exp.company}</span>
        </span>
        <span style={{ color: "#666", flexShrink: 0, marginLeft: 12 }}>{exp.dates}</span>
      </div>
      {bullets.map((b, i) => (
        <div key={i} style={{ fontSize: 11.5, color: "#333", marginTop: 3, paddingLeft: 12, lineHeight: 1.55 }}>
          • {b.text}
        </div>
      ))}
    </div>
  );
}

function ActionBtn({ label, onClick, primary }) {
  return (
    <button onClick={onClick} style={{
      padding: "8px 16px", borderRadius: 8, fontSize: 13, fontWeight: 500,
      cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s",
      border: primary ? "none" : "1px solid #1E293B",
      background: primary ? "linear-gradient(135deg, #3B82F6, #2563EB)" : "#111827",
      color: "#F1F5F9"
    }}>{label}</button>
  );
}
