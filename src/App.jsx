import { useState, useRef, useEffect } from "react";

const MD = {
  name: "Joseph Iyanuoluwa Eyinade",
  location: "Vancouver, BC",
  email: "josephiyanu@gmail.com",
  phone: "+1 (236) 660-8515",
  linkedin: "linkedin.com/in/josephiyanu",
  github: "github.com/Zeus1me",
  portfolio: "zeus1m-fruit-detector-api.hf.space",
  certifications: [
    { id: "ai_practice", name: "AI in Professional Practice", issuer: "Northeastern University", date: "Jun 2025", tags: ["ai", "ml", "data_science"] },
    { id: "fin_accounting", name: "Financial Accounting", issuer: "University Canada West", date: "Jun 2024", tags: ["finance", "accounting", "banking", "analyst"] },
    { id: "semrush_seo", name: "Semrush SEO Toolkit Exam", issuer: "Semrush", date: "Aug 2022", tags: ["marketing", "seo", "digital_marketing", "content"] },
    { id: "linkedin_writing", name: "Writing Articles", issuer: "LinkedIn", date: "May 2022", tags: ["writing", "content", "communication", "technical_writing"] }
  ],
  education: [
    { degree: "Master of Science in Data Analytics", school: "Northeastern University, Vancouver, BC", dates: "Sep 2024 \u2013 Jun 2026", gpa: "3.8 / 4.0", coursework: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Predictive Analytics", "Data Mining", "Cloud Computing", "AI Ethics", "Cybersecurity", "Analytics Leadership", "Optimization", "Business Intelligence", "Computer Vision", "Statistical Modeling"] },
    { degree: "Bachelor of Engineering, Electrical & Electronic Engineering", school: "Obafemi Awolowo University, Nigeria", dates: "2015 \u2013 2020", gpa: null, coursework: "Network Systems, Optimization, Applied Problem-Solving, Quantitative Methods, Signal Processing" }
  ],
  experience: [
    { id: "freelance", title: "Freelance Data Analyst", company: "Remote", dates: "2019 \u2013 Present",
      bullets: [
        { id: "churn", text: "Engineered churn prediction models using Random Forest, Logistic Regression, and GLMs in Python (scikit-learn), reducing client risk exposure by 12% and informing retention strategies across 3 retail accounts." },
        { id: "dashboards", text: "Developed 8+ automated Power BI and Tableau dashboards for revenue forecasting and KPI tracking, improving retail planning accuracy and eliminating 25% of manual reporting effort (~10 hours/week)." },
        { id: "sql", text: "Optimized SQL-based ETL pipelines for data extraction, transformation, and analysis across datasets of 500K+ records, accelerating reporting turnaround by 40% and enabling real-time stakeholder access." },
        { id: "vba", text: "Automated Excel reporting workflows with VBA macros across 5 client accounts, reducing manual data entry effort by 25% and improving data integrity for monthly financial reports." },
        { id: "timeseries", text: "Built R-based time-series forecasting models (ARIMA, seasonal decomposition) for demand prediction, improving financial forecasting accuracy by 18% for retail clients." },
        { id: "presentations", text: "Delivered 15+ analytical presentations and executive summaries translating complex statistical findings into actionable business recommendations for non-technical stakeholders." }
      ]
    },
    { id: "jkl", title: "Data Analyst", company: "Jonathan Kings Limited, Nigeria", dates: "Jan 2021 \u2013 Dec 2023",
      bullets: [
        { id: "jkl_dashboards", text: "Designed and maintained 10+ Power BI and Tableau dashboards tracking sales revenue, inventory turnover, and supply chain KPIs, enabling data-driven procurement decisions that reduced stockout incidents by 20%." },
        { id: "jkl_reporting", text: "Built automated Excel and Google Sheets reporting systems for financial performance (P&L, budgets, cash flow), reducing month-end reporting time from 5 days to 2 days and improving accuracy." },
        { id: "jkl_python", text: "Developed Python (pandas, matplotlib) scripts to analyze 50K+ transaction records across retail and logistics operations, identifying $30K+ in cost-saving opportunities through procurement pattern analysis." },
        { id: "jkl_crm", text: "Analyzed customer purchase data and segmentation patterns to inform marketing campaigns, contributing to a 15% increase in repeat customer retention across 3 product lines." },
        { id: "jkl_supply", text: "Tracked and visualized end-to-end supply chain metrics (shipping times, vendor performance, freight costs) for international trade operations, improving vendor evaluation accuracy and reducing delivery delays by 18%." },
        { id: "jkl_stakeholder", text: "Presented weekly analytics reports and quarterly business reviews directly to the company director, translating complex data insights into strategic recommendations for inventory planning and market expansion." }
      ]
    },
    { id: "writer", title: "Freelance Technical Writer", company: "Upwork \u2014 Remote", dates: "2022 \u2013 Present",
      bullets: [
        { id: "wr_castlore", text: "Authored 5 strategy articles connecting classic card game mechanics to board game design for client Michael Long (Castlore), delivering SEO-optimized content on deadline." },
        { id: "wr_saas", text: "Produced 30+ technical and business content pieces across AI, data analytics, SaaS process optimization, blockchain/NFT, and nonprofit fundraising verticals." },
        { id: "wr_research", text: "Researched and synthesized complex technical topics into clear, audience-appropriate copy for blogs, case studies, lead magnets, YouTube scripts, and website content." }
      ]
    },
    { id: "huawei", title: "Field Engineering Intern", company: "Huawei Technologies, Nigeria", dates: "May 2019 \u2013 Aug 2019",
      bullets: [
        { id: "diagnostics", text: "Implemented data-driven diagnostic workflows across 12+ network subsystems, reducing system failures by 15% through root-cause analysis and preventive maintenance scheduling." },
        { id: "reports", text: "Produced weekly technical performance reports for senior leadership (audience of 20+), translating complex network metrics into actionable operational recommendations that improved uptime KPIs." }
      ]
    },
    { id: "airtel", title: "Telecom Engineering Intern", company: "Airtel Nigeria", dates: "Jul 2019 \u2013 Dec 2019",
      bullets: [
        { id: "kpi", text: "Tracked 10+ network KPIs and maintained incident logs for NOC/field teams across 3 regions, contributing to root-cause chronologies that reduced mean resolution time." },
        { id: "briefs", text: "Delivered concise daily status briefs to non-technical stakeholders, streamlining cross-team decision cycles and improving operational transparency." }
      ]
    }
  ],
  projects: [
    // --- CAPSTONE ---
    { id: "lidar", title: "LiDAR Point Cloud Smart Stitching \u2014 Capstone with Lumotive Inc.", dates: "Jan 2026 \u2013 Present", text: "Developing rain-scatter filtering algorithms for MD42 LiDAR sensor data across three echo return streams using Python and ROS2, improving 3D point cloud accuracy for autonomous systems. Running parallel workflows on M4 Mac (native Python with rosbags/pyntcloud) and UTM x86 Ubuntu VM (ROS2/RViz2).", tags: ["python","computer_vision","engineering","ros2","3d","autonomous"] },
    // --- FULL-STACK / PRODUCT ---
    { id: "jobforge", title: "JobForge \u2014 AI-Powered Job Search Application", dates: "Apr 2026", text: "Built a full-featured React job search app with AI-powered job matching, skill gap analysis, Kanban tracker, cover letter generation, and a three-tier search system using curated local database, Remotive API, and Claude-generated listings.", tags: ["react","javascript","fullstack","ai","product"] },
    { id: "resumefit", title: "ResumeFit \u2014 AI Resume Tailoring Web App", dates: "Apr 2026", text: "Built and deployed a Vite+React web app on Netlify with serverless Claude API integration that tailors resumes, generates cover letters, and answers application questions based on job postings. Features URL scraping, 1/2-page toggle, and PDF export.", url: "lazyzeus.netlify.app", tags: ["react","javascript","fullstack","ai","product","deployment"] },
    // --- DEEP LEARNING / COMPUTER VISION ---
    { id: "fruitnet", title: "FruitNet \u2014 Object Detection Microservice", dates: "Mar 2026", text: "Built and deployed a Faster R-CNN fruit detection API (FastAPI + Docker) on Hugging Face Spaces; fine-tuned on 4,485 images across 11 fruit classes with custom label correction mapping and bounding box detection.", url: "zeus1m-fruit-detector-api.hf.space", tags: ["ml","deep_learning","computer_vision","docker","api","deployment","pytorch"] },
    { id: "fruitvision", title: "Fruit Vision Classifier \u2014 Google Cloud Vision API", dates: "Mar 2026", text: "Evaluated Cloud Vision API for fruit classification; improved accuracy from 19.5% to 52.5% using custom synonym dictionaries and increased maxResults. Deployed on Hugging Face.", tags: ["cloud","computer_vision","api","google_cloud"] },
    { id: "intelcv", title: "Intel Image Classification \u2014 ResNet-18 Transfer Learning", dates: "Mar 2026", text: "Applied transfer learning with ResNet-18 on Intel Image Classification dataset (6 classes). Compared overfitting baseline, regularized model (macro F1 0.9353), and from-scratch baseline (macro F1 0.8453) using PyTorch.", tags: ["deep_learning","computer_vision","pytorch","transfer_learning"] },
    // --- NLP ---
    { id: "textclass", title: "Text Classification \u2014 ULMFiT & NLP Pipeline", dates: "Mar 2026", text: "Fine-tuned AWD-LSTM via ULMFiT (fastai) on 10,000 AG News samples (4 classes). Compared to TF-IDF + LinearSVC baseline using accuracy and macro-F1 on controlled 80/10/10 splits.", tags: ["nlp","deep_learning","fastai","text","classification"] },
    // --- ML / ANALYTICS ---
    { id: "bikesharing", title: "Bike Sharing Demand Analysis \u2014 End-to-End ML Pipeline", dates: "Feb 2026", text: "Applied K-Means, PCA, Random Forest (R\u00B2 > 0.91), Q-Learning, and neural networks on UCI Bike Sharing Dataset; delivered 13-slide executive presentation with 17 embedded visualizations.", tags: ["ml","analytics","visualization","clustering","regression","reinforcement_learning"] },
    { id: "heartdisease", title: "Heart Disease Prediction \u2014 Multi-Model Comparison", dates: "Feb 2026", text: "Evaluated 9 supervised learning algorithms and 5 neural network architectures on UCI Heart Disease dataset using modular PyCharm structure. Focused on classification, risk prediction, and model interpretability.", tags: ["ml","deep_learning","healthcare","classification"] },
    { id: "creditrisk", title: "Customer Churn & Credit Risk Modelling", dates: "2024 \u2013 2025", text: "Built classification and regression models (Logistic Regression, XGBoost, GLMs) on German Credit and retail datasets; applied SHAP for model interpretability and business-ready risk scoring.", tags: ["ml","classification","risk","business","interpretability"] },
    { id: "nashville", title: "Nashville Housing Price Prediction", dates: "Jan 2026", text: "Built and compared Linear Regression, Decision Tree, Random Forest, and Gradient Boosting models for housing price prediction, achieving R\u00B2=0.9481 with gradient boosting. Evaluated feature importance and predictive accuracy.", tags: ["ml","regression","real_estate","gradient_boosting"] },
    { id: "mnist", title: "MNIST Digit Classification", dates: "Jan 2026", text: "Developed a reproducible image classification pipeline comparing Random Forest (95.39%) and MLP (96.00%) on MNIST, including preprocessing, pixel scaling, zero-variance removal, and model evaluation.", tags: ["ml","deep_learning","classification","computer_vision"] },
    { id: "carloan", title: "Car Price Prediction \u2014 Multiple Linear Regression", dates: "2025", text: "Built multiple linear regression models to predict car prices, applying feature selection, multicollinearity diagnostics (VIF), and evaluation with R\u00B2, adjusted R\u00B2, and RMSE.", tags: ["ml","regression","statistics"] },
    { id: "personalloan", title: "Bank Personal Loan Approval Classification", dates: "2025", text: "Developed logistic regression classification model to predict personal loan acceptance, evaluating with confusion matrices, ROC analysis, precision, recall, and F1-score.", tags: ["ml","classification","finance","logistic_regression"] },
    { id: "marketing", title: "Marketing Campaign Response Prediction", dates: "2025", text: "Compared Logistic Regression and SVM for marketing response prediction, using SMOTE for class imbalance. Evaluated with ROC-AUC, average precision, F1-score, and accuracy.", tags: ["ml","classification","marketing","smote"] },
    { id: "subscription", title: "Magazine Subscription Renewal Prediction", dates: "2025", text: "Built logistic regression model for magazine subscription renewal prediction achieving 88.34% ROC-AUC. Applied feature engineering and business interpretation of churn signals.", tags: ["ml","classification","marketing","churn"] },
    // --- BI / DASHBOARDS ---
    { id: "streamlit", title: "Amazon Movie Review Analytics Dashboard", dates: "Dec 2025", text: "Developed and deployed an interactive Streamlit dashboard analyzing Amazon movie review trends using Python, pandas, and Parquet workflows. Built dynamic date/year filters, rating distribution visuals, and time-series analytics. Deployed on Streamlit Community Cloud with ~500K sampled rows.", tags: ["python","streamlit","visualization","dashboard","cloud","deployment"] },
    { id: "steeves", title: "Resource Allocation Analytics \u2014 Steeves & Associates", dates: "Sep \u2013 Nov 2025", text: "Conducted exploratory analysis of FY2019\u2013FY2025 resource-hour data for IT consulting sponsor project. Used R and ggplot2 to visualize allocation trends, HHI concentration analysis, and utilization/billability metrics for improving project delivery efficiency.", tags: ["r","analytics","consulting","visualization","eda","business"] },
    // --- DATA MINING ---
    { id: "titanic", title: "Titanic Survival Analysis \u2014 Data Mining", dates: "Oct 2025", text: "Conducted survival pattern analysis using R, dplyr, ggplot2, and gt tables, producing a clear report translating data mining results into accessible stakeholder insights.", tags: ["r","data_mining","eda","visualization"] },
    { id: "imdb", title: "IMDB Web Scraping & Analysis", dates: "Jan 2026", text: "Built a web scraping pipeline using BeautifulSoup to extract IMDB movie data, performed EDA and visualization in Python.", tags: ["python","web_scraping","eda"] },
    { id: "mlktext", title: "MLK Speech Text Mining \u2014 21 Visualizations", dates: "Jan 2026", text: "Conducted text mining analysis of Martin Luther King's 'I Have a Dream' speech using R, producing 21 visualizations including word frequencies, sentiment analysis, and n-gram patterns.", tags: ["r","nlp","text_mining","visualization"] },
    { id: "loanpred", title: "Loan Prediction Analysis \u2014 LASSO & Ensemble Methods", dates: "Feb 2026", text: "Built loan prediction models using LASSO logistic regression, Random Forest, XGBoost, and ensemble methods in R with caret. Compared model performance for credit risk assessment.", tags: ["r","ml","classification","ensemble","risk"] },
    { id: "bicycleaccidents", title: "Bicycle Accidents EDA Dashboard", dates: "Feb 2026", text: "Developed an interactive Python/Plotly dashboard analyzing 847K+ bicycle accident records with geospatial visualization, temporal patterns, and severity analysis.", tags: ["python","plotly","dashboard","eda","geospatial"] },
    // --- OPTIMIZATION ---
    { id: "optimization", title: "Workforce Scheduling & Energy Load Optimization", dates: "2025", text: "Designed and presented an optimization project using linear and nonlinear programming approaches to improve workforce scheduling and energy load distribution, translating mathematical models into operational recommendations.", tags: ["optimization","operations","mathematical_modeling"] },
    // --- CLOUD / BIG DATA ---
    { id: "awsglue", title: "AWS Glue PySpark Data Pipeline", dates: "Dec 2025", text: "Developed an AWS Glue PySpark assignment processing online retail dataset on S3, implementing ETL transformations and big data pipeline architecture.", tags: ["aws","pyspark","etl","cloud","big_data"] },
    // --- BUSINESS ANALYTICS ---
    { id: "cymax", title: "Demand Forecasting Framework \u2014 Cymax Group Technologies", dates: "2025", text: "Designed an analytics solution for a Vancouver-based eCommerce logistics company proposing integrated demand forecasting using historical sales, seasonal trends, freight costs, marketplace signals, and price elasticity modeling to reduce inventory imbalance.", tags: ["analytics","forecasting","ecommerce","business","leadership"] },
    // --- VISUALIZATION ---
    { id: "nigeriaelection", title: "Nigerian Presidential Election Dashboard", dates: "Mar 2026", text: "Built an interactive HTML dashboard comparing presidential election results across South-South and South-East geopolitical zones (2015, 2019, 2023) using Chart.js with regional breakdowns and trend analysis.", tags: ["javascript","visualization","dashboard","chartjs"] }
  ],
  skills: {
    languages: "Python, R, SQL, JavaScript, VBA, HTML/CSS",
    ml: "Scikit-learn, PyTorch, TensorFlow/Keras, fastai, Pandas, NumPy, SciPy, Statsmodels, PySpark, XGBoost, SHAP, SMOTE, torchvision",
    viz: "Tableau, Power BI, Matplotlib, Seaborn, Plotly, Streamlit, ggplot2, Chart.js, gt tables",
    tools: "Git, Docker, AWS (S3, Glue, EC2), Google Cloud Vision API, ROS2, Jupyter, PyCharm, RStudio, Excel (Advanced), Hugging Face, FastAPI, Quarto",
    db: "SQL Server, Snowflake, MS Access, MongoDB concepts, Parquet, DynamoDB concepts",
    methods: "Regression, Classification, Clustering, NLP, Time-Series Forecasting, A/B Testing, Deep Learning, Computer Vision, Object Detection, Transfer Learning, Dimensionality Reduction, Reinforcement Learning, Optimization, Text Mining, Web Scraping, RLHF, ETL Pipelines",
    reporting: "APA 7 formatting, Technical Reports, Business Proposals, Stakeholder Presentations, Dashboard Documentation, Academic Papers"
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
    ? "CRITICAL ONE-PAGE MODE: Select ONLY 3 bullets per experience role (freelance, jkl, huawei). Select ONLY 3 projects. Keep overview to exactly 3 sentences. Every word must earn its place. If in doubt, cut it."
    : "TWO PAGES: Include 4-5 bullets per role, 5-6 projects, expanded 3-4 sentence overview. Still be selective.";

  return `You are an elite ATS-optimized resume tailoring engine for the Canadian tech job market (2026). Your output must pass Workday, Taleo, Lever, and Greenhouse ATS parsers AND impress a human recruiter in their 6-second scan.

CANDIDATE DATA:
${JSON.stringify(MD)}

=== 2026 CANADIAN TECH RESUME RESEARCH (hard-coded rules) ===

ATS COMPLIANCE (90% of recruiters use ATS):
- Use standard section headings ONLY: "Professional Summary", "Technical Skills", "Education", "Professional Experience", "Projects"
- Mirror EXACT keywords from the job posting in skills and bullets (ATS matches literal strings)
- Distribute keywords across summary, skills, AND experience bullets (not just skills section)
- Never use icons, tables, columns, or non-standard formatting terms

BULLET POINT FORMULA (mandatory for ALL bullets):
[Strong Action Verb] + [What You Did] + [Tool/Method Used] + [Quantified Result/Business Impact]
- EVERY bullet MUST start with a different strong action verb: Developed, Engineered, Automated, Optimized, Deployed, Architected, Reduced, Accelerated, Designed, Implemented, Delivered, Built, Trained, Analyzed, Transformed, Extracted, Streamlined, Consolidated, Eliminated
- EVERY bullet MUST contain at least ONE metric: percentage, dollar amount, time saved, dataset size, accuracy score, number of users/records/models
- NEVER use weak verbs: Helped, Assisted, Worked on, Was responsible for, Participated in, Contributed to, Handled, Managed (without scope)
- NEVER write duty descriptions. Only achievements with quantified outcomes.
- Connect technical work to BUSINESS IMPACT: revenue, cost savings, efficiency gains, risk reduction, decision quality

PROFESSIONAL SUMMARY RULES:
- Start with the EXACT job title from the posting (e.g., "Data Analyst with..." or "Machine Learning Engineer with...")
- Include: years of experience, 3-5 top matching skills, strongest quantified achievement, and degree
- 2-3 sentences MAX. Every word must answer "Why should we interview this person?"
- Mirror 3-5 keywords from the posting naturally

SKILLS SECTION RULES:
- Group into exactly 4 lines with labels that match the posting's language
- Lead each line with the skills mentioned in the posting (order matters, recruiters scan left to right)
- Include the EXACT tool names (not generic categories): "Python" not "programming", "Tableau" not "visualization tools"
- Include specific libraries: pandas, NumPy, scikit-learn, PyTorch (not just "Python libraries")

PROJECT RULES:
- Each project bullet must follow the same action verb + tool + metric formula
- Frame academic projects as professional deliverables with business impact language
- Include deployment/production indicators where relevant (Docker, Hugging Face, Streamlit Cloud, Netlify)

METRIC ACCURACY (CRITICAL — NEVER VIOLATE):
- NEVER invent, inflate, or exaggerate metrics. Only use numbers that appear in the candidate data.
- These are the ONLY accurate metrics you may use:
  * 12% risk reduction (churn models)
  * 8+ dashboards (Power BI/Tableau)
  * 10 hours/week saved (manual reporting)
  * 25% manual effort reduction (dashboards and VBA)
  * 500K+ records (SQL pipelines)
  * 40% faster reporting turnaround (ETL)
  * 18% forecasting accuracy improvement (time-series)
  * 50K+ transactions (JKL Python analysis)
  * $30K cost savings identified (JKL procurement)
  * 20% stockout reduction (JKL dashboards)
  * 15% customer retention increase (JKL CRM)
  * 18% delivery delay reduction (JKL supply chain)
  * 15% system failure reduction (Huawei diagnostics)
  * R2 > 0.91 (bike sharing), R2 = 0.9481 (Nashville housing)
  * macro F1 0.9353 (Intel CV), 96% MLP / 95.39% RF (MNIST)
  * 4,485 images, 11 classes (FruitNet)
  * 847K+ records (bicycle accidents)
  * 500K rows (Streamlit dashboard)
  * 30+ content pieces (writing)
  * 15+ presentations (stakeholder)
- If you need a number not in this list, use the closest accurate one or omit the metric.
- NEVER combine metrics to create larger fake numbers (e.g., don't add 8 dashboards + 10 JKL dashboards to claim 18+).

TOOL/SKILL ACCURACY (CRITICAL):
- ONLY include tools and technologies that appear in the candidate's skills data above.
- NEVER add tools the candidate hasn't listed: no MATLAB, no Databricks, no Spark (unless PySpark), no Kubernetes, no Airflow, no dbt, no Looker, no BigQuery.
- If the posting asks for a tool not in the candidate's skills, do NOT add it. Instead, emphasize the closest matching tool the candidate actually has.

KEYWORD MIRRORING (CRITICAL):
- Extract 5-10 exact phrases from the job posting and weave them verbatim into bullets and summary
- If the posting says "data quality and reliability," use those exact words — not "data accuracy"
- If the posting says "structured and unstructured data," use that exact phrase
- If the posting says "production deployments," use that exact phrase
- The goal is 80%+ keyword match with the posting's specific language

CANADIAN MARKET SPECIFICS:
- 1 page for <10 years experience (this candidate)
- No photos, age, marital status, or religion
- Include city only (Vancouver, BC), not full address
- LinkedIn URL is expected (92% of Canadian recruiters check)
- PGWP eligibility can be mentioned if posting asks about work authorization

${pr}

SELECTION RULES:
- include_airtel: true ONLY if posting values telecom, engineering, monitoring, KPIs, or emphasizes Canadian work experience
- include_writer: true ONLY if posting mentions technical writing, content creation, communication, documentation, or copywriting
- certifications: select 1-3 most relevant from: ai_practice (AI/ML/data science roles), fin_accounting (finance/banking/analyst roles), semrush_seo (marketing/SEO/digital roles), linkedin_writing (writing/content roles). Always include ai_practice for any tech/data role.
- ALWAYS include freelance and jkl (Jonathan Kings Limited) — they are core experience
- ALWAYS include huawei — it shows engineering background
- For jkl: select 3-4 best bullets matching the posting from: jkl_dashboards, jkl_reporting, jkl_python, jkl_crm, jkl_supply, jkl_stakeholder
- Rewrite bullet text to echo the posting's exact terminology and keywords while keeping metrics accurate
- Order projects by relevance to the posting, not by date

=== ROLE-SPECIFIC TAILORING RULES (detect role type from posting and apply) ===

IF ROLE IS "DATA ANALYST" or "QUANTITATIVE ANALYST" or "ANALYTICS":
- Skills priority order: SQL (Advanced), Python (Advanced), Tableau/Power BI (Advanced), Excel, R, statistical analysis
- Must-use keywords: data analysis, dashboards, KPIs, stakeholder communication, data-driven decisions, ETL, data quality, reporting
- Lead with: JKL dashboards bullet, freelance SQL/dashboards bullets
- Best projects: Streamlit dashboard, bicycle accidents (847K records), Steeves, Nashville housing
- Emphasize: business impact, stakeholder communication, data visualization, cross-functional collaboration
- Avoid leading with: deep learning, neural networks, computer vision (too ML-heavy for analyst roles)

IF ROLE IS "DATA SCIENTIST":
- Skills priority: Python (Advanced), R (Proficient), scikit-learn, PyTorch, TensorFlow, statistical modeling, ML algorithms
- Must-use keywords: machine learning, predictive modeling, statistical analysis, A/B testing, feature engineering, model evaluation, hypothesis testing
- Lead with: freelance churn models bullet, time-series forecasting bullet
- Best projects: bike sharing (R2>0.91), credit risk SHAP, heart disease multi-model, Nashville housing (R2=0.9481)
- Emphasize: model building, experimentation, statistical rigor, research methodology
- Include coursework: Machine Learning, Statistical Modeling, Deep Learning, Predictive Analytics

IF ROLE IS "ML ENGINEER" or "MACHINE LEARNING ENGINEER" or "AI ENGINEER":
- Skills priority: Python (Advanced), PyTorch, TensorFlow, Docker, AWS, FastAPI, Git, CI/CD concepts
- Must-use keywords: model deployment, production ML, deep learning, computer vision, NLP, API development, containerization, MLOps
- Lead with: freelance churn models, JKL Python scripts
- Best projects: FruitNet (Faster R-CNN, Docker, HuggingFace), Intel ResNet-18, text classification ULMFiT, LiDAR capstone
- Emphasize: deployment, production systems, model serving, Docker, API design, scalability
- Show GitHub link prominently — ML engineers check code

IF ROLE IS "BUSINESS ANALYST" or "BI ANALYST" or "BUSINESS INTELLIGENCE":
- Skills priority: Tableau (Advanced), Power BI (Advanced), Excel (Advanced), SQL, requirements gathering, stakeholder communication
- Must-use keywords: business intelligence, requirements gathering, stakeholder alignment, cross-functional collaboration, KPI development, process improvement, data-driven decisions
- Lead with: JKL stakeholder/dashboards bullets, freelance dashboards/presentations bullets
- Best projects: Steeves (consulting), Cymax demand forecasting, Streamlit dashboard
- Emphasize: business problem solving, stakeholder communication, process improvement, reporting
- Include Financial Accounting certification

IF ROLE IS "FINANCIAL ANALYST" or "QUANT" or "INVESTMENT" or "FINANCE":
- Skills priority: Python (Advanced), SQL (Advanced), R (Proficient), Excel (Advanced, VBA), statistical modeling, time-series forecasting
- Must-use keywords: financial modeling, risk analysis, quantitative analysis, forecasting, data quality, investment analytics, portfolio analysis, regression analysis, time-series
- Lead with: JKL financial reporting bullet, freelance time-series bullet, freelance churn (risk modeling)
- Best projects: credit risk SHAP, Nashville housing (regression), bike sharing (forecasting)
- Include BOTH certifications: ai_practice AND fin_accounting
- Emphasize: financial data, risk reduction, forecasting accuracy, P&L, data quality, large datasets
- Mirror finance-specific language from posting (e.g., "alpha," "data assets," "investment engine," "data quality")

IF ROLE IS "DATA ENGINEER" or "ANALYTICS ENGINEER":
- Skills priority: SQL (Advanced), Python (Advanced), AWS (S3, Glue), PySpark, ETL, Docker, Git
- Must-use keywords: ETL pipelines, data pipelines, data quality, data validation, cloud infrastructure, big data, data modeling, production deployment
- Lead with: freelance SQL/ETL bullet, JKL Python scripts bullet
- Best projects: AWS Glue PySpark, Streamlit dashboard, LiDAR capstone (data processing)
- Emphasize: pipeline building, data quality, automation, cloud, scalability, reliability

IF ROLE IS "MARKETING ANALYST" or "PRODUCT ANALYST" or "GROWTH ANALYST":
- Skills priority: SQL, Python, Tableau, A/B testing, Google Analytics concepts, Excel
- Must-use keywords: A/B testing, customer segmentation, conversion rates, campaign performance, funnel analysis, cohort analysis, user behavior, retention
- Lead with: freelance churn bullet, JKL CRM bullet, freelance dashboards
- Best projects: credit risk (churn), marketing campaign response, subscription renewal
- Include semrush_seo certification
- Emphasize: customer analytics, retention, segmentation, campaign optimization

IF ROLE IS "TECHNICAL WRITER" or "CONTENT" or "DOCUMENTATION":
- include_writer: true
- Skills priority: Technical writing, documentation, APA formatting, Quarto, Markdown, stakeholder communication
- Lead with: writer bullets, freelance presentations bullet
- Best projects: Steeves (consulting documentation), Cymax (business proposal)
- Include linkedin_writing certification

DEFAULT (if role type unclear):
- Balance between analyst and scientist positioning
- Include a mix of SQL, Python, visualization, and ML skills
- Select projects that show breadth: one dashboard, one ML model, one deployment

OVERVIEW RULES (mandatory — this is CRITICAL):
- The overview describes the CANDIDATE, not the job. NEVER describe what the role requires. NEVER start with "This role requires" or "The candidate needs."
- MUST be written in FIRST PERSON PERSPECTIVE about Joseph. It is HIS summary, selling HIM.
- MUST start with: "[Exact Job Title from posting] with 6+ years of experience in [2-3 matching skill areas]."
- SECOND sentence: strongest quantified achievement that matches the posting (e.g., "Built predictive models reducing client risk by 12% and automated dashboards eliminating 10+ hours/week of manual reporting.")
- THIRD sentence: education + what sets him apart (e.g., "Currently completing MS in Data Analytics (GPA 3.8) at Northeastern University with hands-on experience across [1-2 posting-relevant domains].")
- NEVER exceed 3 sentences. NEVER describe job requirements. ONLY describe the candidate.
- BAD example: "This role requires deep quantitative analysis and financial domain expertise." 
- GOOD example: "Data Analyst with 6+ years of experience in Python, SQL, and financial analytics. Engineered predictive models reducing client risk exposure by 12% and built 10+ automated Power BI dashboards for revenue forecasting. Currently completing MS in Data Analytics (GPA 3.8) at Northeastern University with expertise in machine learning and business intelligence."

COURSEWORK SELECTION:
- Select 6-8 most relevant courses from the candidate's coursework array that match the posting
- Return as coursework array in JSON

KEY HIGHLIGHTS:
- Generate exactly 3 bullet-point highlights — the candidate's top quantified wins most relevant to the posting
- Format: short, punchy, numbers-forward (e.g., "Reduced client risk 12% through ML prediction models")

SKILLS PROFICIENCY:
- For the top 3-5 most important skills, add proficiency level in parentheses: (Advanced), (Proficient), or (Intermediate)
- Python (Advanced), SQL (Advanced), R (Proficient), Tableau (Advanced), Power BI (Advanced) are the defaults — adjust if posting emphasizes different tools
- This helps ATS match keywords like "advanced SQL" or "proficient in Python"

MATCH SCORE:
- Count how many required skills/qualifications from the posting are matched by the candidate
- Return as match_score (0-100) and matched_keywords (array of matched terms)

RESPOND WITH ONLY VALID JSON (no markdown, no explanation):
{"overview":"string","target_title":"string","skills":[{"label":"string","items":"string"}],"coursework":["string"],"key_highlights":["string","string","string"],"match_score":number,"matched_keywords":["string"],"include_airtel":boolean,"include_writer":boolean,"certifications":["cert_id"],"freelance_bullets":["bullet_id"],"jkl_bullets":["bullet_id"],"huawei_bullets":["bullet_id"],"airtel_bullets":["bullet_id"],"writer_bullets":["bullet_id"],"projects":["project_id"],"filename_suffix":"string"}`;
}

// Research-backed cover letter system prompt (2026 best practices)
// Sources: ResumeLab/UVA 2025, Resume Genius 2025, Interview Guys 2026, Kickresume 2026
// Format: Problem-Solution (gold standard per Interview Guys 2026 analysis)
// Length: 250-350 words (70% of HMs prefer 250-400, 49% prefer half-page)
// Structure: 5-block (Header, Greeting, Hook, Body, Close)
const COVER_SYS = `You are an elite cover letter writer using the PROBLEM-SOLUTION format, the gold standard for 2026 (per Interview Guys research of 80+ studies). 94% of hiring managers say cover letters influence decisions. 80% detect and reject generic AI content. Every word must be authentic and specific.

CANDIDATE:
- Name: ${MD.name} | ${MD.location} | ${MD.email} | ${MD.phone}
- LinkedIn: ${MD.linkedin} | GitHub: ${MD.github}
- Authorized to work in Canada (PGWP eligible)
- MS Data Analytics, Northeastern University Vancouver (GPA 3.8/4.0, graduating Jun 2026)
- B.Eng Electrical & Electronic Engineering, Obafemi Awolowo University Nigeria
- 6+ years analytics: Full-time Data Analyst at Jonathan Kings Limited (logistics/retail/international business, 2021-2023: dashboards, Python analysis of 50K+ transactions, financial reporting, supply chain KPIs, $30K savings identified), freelance data analyst since 2019 (churn models -12% risk, Power BI/Tableau dashboards -25% manual effort, SQL pipelines 500K+ records, R time-series forecasting +18%), Huawei intern (diagnostics -15% failures)
- Key projects: LiDAR point cloud with Lumotive (ROS2), Faster R-CNN FruitNet (4485 imgs, 11 classes, Docker+HuggingFace), bike sharing ML (R2>0.91, K-Means, PCA, Q-Learning), credit risk SHAP, ULMFiT text classification, Intel ResNet-18 transfer learning (F1=0.935), Nashville housing gradient boosting (R2=0.9481), JobForge React app, ResumeFit Netlify app, Amazon review Streamlit dashboard (500K rows), Steeves & Associates resource allocation (R/ggplot2), Nigerian election Chart.js dashboard, bicycle accidents Plotly dashboard (847K records), AWS Glue PySpark ETL, Cymax demand forecasting, workforce scheduling optimization
- Skills: Python, R, SQL, JavaScript, PyTorch, TensorFlow, Scikit-learn, fastai, Docker, AWS, Tableau, Power BI, Streamlit, ggplot2, Git, FastAPI, ROS2

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
- Authorized to work in Canada (PGWP eligible)
- Data Analyst at Jonathan Kings Limited (logistics/retail, 2021-2023): Power BI/Tableau dashboards, Python analysis of 50K+ transactions, financial reporting, supply chain KPIs, $30K savings, reported to director
- Freelance Data Analyst since 2019: churn models (-12% risk), Power BI/Tableau dashboards (-25% manual effort), SQL pipelines (500K+ records), R time-series forecasting (+18%)
- Freelance Technical Writer (Upwork): 30+ articles on AI, SaaS, blockchain, nonprofit
- Huawei intern: diagnostics (-15% failures)
- Projects: LiDAR with Lumotive, Faster R-CNN FruitNet, bike sharing ML (R2>0.91), credit risk SHAP, ULMFiT, JobForge React app, ResumeFit Netlify app, Streamlit dashboard, Nashville housing (R2=0.9481), bicycle accidents Plotly (847K records)
- Skills: Python, R, SQL, JavaScript, PyTorch, TensorFlow, Scikit-learn, Docker, AWS, Tableau, Power BI, Git
- GitHub: ${MD.github}

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
        html,body{background:#ffffff;background-color:#ffffff}
        body{font-family:'DM Sans',sans-serif;padding:40px 52px;color:#1a1a1a;line-height:1.5;max-width:800px;margin:0 auto;background:#ffffff}
        a{color:#1E3A5F;text-decoration:none}
        @media print{
          html,body{background:#ffffff!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
          body{padding:0}
          @page{margin:0.5in 0.5in 0.5in 0.5in;size:letter}
          a{color:#1E3A5F!important}
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

            {/* MATCH SCORE BADGE */}
            {tab === "resume" && res.match_score && (
              <div style={{ marginBottom: 16, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: `conic-gradient(${res.match_score >= 80 ? C.success : res.match_score >= 60 ? "#F59E0B" : C.error} ${res.match_score * 3.6}deg, ${C.border} 0deg)`,
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: res.match_score >= 80 ? C.success : res.match_score >= 60 ? "#F59E0B" : C.error }}>
                      {res.match_score}%
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>ATS Match Score</div>
                    <div style={{ fontSize: 11, color: C.textD }}>{res.matched_keywords?.length || 0} keywords matched</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                  {(res.matched_keywords || []).slice(0, 8).map((kw, i) => (
                    <span key={i} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "rgba(16,185,129,0.1)", color: C.success, border: "1px solid rgba(16,185,129,0.2)" }}>{kw}</span>
                  ))}
                  {(res.matched_keywords || []).length > 8 && <span style={{ fontSize: 10, color: C.textD }}>+{res.matched_keywords.length - 8} more</span>}
                </div>
              </div>
            )}

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
            {/* RESUME */}
            {tab === "resume" && (
              <div ref={rRef} style={paper}>
                <div style={{ textAlign: "center", marginBottom: 2 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#1E3A5F", letterSpacing: "0.05em" }}>{MD.name.toUpperCase()}</div>
                </div>
                <div style={{ textAlign: "center", fontSize: 10.5, color: "#777", marginBottom: 1 }}>
                  {MD.location} {" | "} {MD.email} {" | "} {MD.phone}
                </div>
                <div style={{ textAlign: "center", fontSize: 10.5, marginBottom: 1 }}>
                  <a href={"https://www." + MD.linkedin} style={{ color: "#1E3A5F", textDecoration: "underline" }}>{MD.linkedin}</a>
                  {" | "}
                  <a href={"https://" + MD.github} style={{ color: "#1E3A5F", textDecoration: "underline" }}>{MD.github}</a>
                </div>
                <div style={{ textAlign: "center", fontSize: 9.5, color: "#555", fontStyle: "italic", marginBottom: 8 }}>
                  {"Authorized to work in Canada (PGWP eligible)"}
                </div>
                <SH t="PROFESSIONAL SUMMARY"/>
                <p style={{ fontSize: 10.5, color: "#333", margin: "3px 0 2px", lineHeight: 1.5 }}>{res.overview}</p>
                {res.key_highlights && res.key_highlights.length > 0 && (
                  <div style={{ margin: "2px 0 4px", paddingLeft: 10 }}>
                    {res.key_highlights.map((h, i) => (
                      <div key={i} style={{ fontSize: 10, color: "#333", lineHeight: 1.4 }}>{"• " + h}</div>
                    ))}
                  </div>
                )}
                <SH t="TECHNICAL SKILLS"/>
                <div style={{ margin: "3px 0 4px" }}>
                  {res.skills?.map((s,i) => <div key={i} style={{ fontSize: 10.5, marginBottom: 1 }}><span style={{ fontWeight: 600 }}>{s.label}: </span><span style={{ color: "#333" }}>{s.items}</span></div>)}
                </div>
                <SH t="EDUCATION"/>
                {MD.education.map((ed,i) => (
                  <div key={i} style={{ marginBottom: 3 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5 }}>
                      <span style={{ fontWeight: 600 }}>{ed.degree}</span><span style={{ color: "#777" }}>{ed.dates}</span>
                    </div>
                    <div style={{ fontSize: 10, color: "#777", fontStyle: "italic", display: "flex", justifyContent: "space-between" }}>
                      <span>{ed.school}</span>{ed.gpa && <span>GPA: {ed.gpa}</span>}
                    </div>
                    {i === 0 && res.coursework && (
                      <div style={{ fontSize: 9.5, color: "#666", marginTop: 1 }}>{"Relevant Coursework: " + res.coursework.join(", ")}</div>
                    )}
                  </div>
                ))}
                {res.certifications && res.certifications.length > 0 && (
                  <>
                    <SH t="CERTIFICATIONS"/>
                    <div style={{ fontSize: 10.5, color: "#333", margin: "2px 0 4px" }}>
                      {res.certifications.map(cid => {
                        const cert = MD.certifications.find(c => c.id === cid);
                        if (!cert) return null;
                        return <div key={cid} style={{ marginBottom: 1 }}><span style={{ fontWeight: 600 }}>{cert.name}</span><span style={{ color: "#777" }}>{" — " + cert.issuer + " (" + cert.date + ")"}</span></div>;
                      })}
                    </div>
                  </>
                )}
                <SH t="PROFESSIONAL EXPERIENCE"/>
                <EB exp={getExp("freelance")} bul={getBul("freelance", res.freelance_bullets||[])}/>
                <EB exp={getExp("jkl")} bul={getBul("jkl", res.jkl_bullets||[])}/>
                {res.include_writer && <EB exp={getExp("writer")} bul={getBul("writer", res.writer_bullets||[])}/>}
                <EB exp={getExp("huawei")} bul={getBul("huawei", res.huawei_bullets||[])}/>
                {res.include_airtel && <EB exp={getExp("airtel")} bul={getBul("airtel", res.airtel_bullets||[])}/>}
                <SH t="PROJECTS"/>
                {(res.projects||[]).map(pid => {
                  const p = getProj(pid); if (!p) return null;
                  return (<div key={pid} style={{ marginBottom: 3 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5 }}>
                      <span>
                        <span style={{ fontWeight: 600 }}>{p.title}</span>
                        {p.url && <>{" | "}<a href={"https://" + p.url} style={{ color: "#1E3A5F", textDecoration: "underline", fontSize: 9.5 }}>{p.url}</a></>}
                      </span>
                      <span style={{ color: "#777", flexShrink: 0, marginLeft: 8 }}>{p.dates}</span>
                    </div>
                    <div style={{ fontSize: 10, color: "#333", marginTop: 1, paddingLeft: 10 }}>{"• " + p.text}</div>
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
                  <div style={{ fontSize: 11.5, color: "#777" }}>{MD.linkedin} | {MD.github}</div>
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
              {"When saving as PDF: uncheck \"Headers and footers\" and check \"Background graphics\" in print settings"}
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

function SH({ t }) { return <div style={{ fontSize: 11, fontWeight: 700, color: "#1E3A5F", letterSpacing: "0.06em", borderBottom: "1.5px solid #1E3A5F", paddingBottom: 1, marginTop: 7, marginBottom: 3 }}>{t}</div>; }

function EB({ exp, bul }) {
  if (!exp) return null;
  return (<div style={{ marginBottom: 5 }}>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10.5 }}>
      <span><span style={{ fontWeight: 600 }}>{exp.title}</span><span style={{ color: "#777" }}>{" | " + exp.company}</span></span>
      <span style={{ color: "#777", flexShrink: 0, marginLeft: 10 }}>{exp.dates}</span>
    </div>
    {bul.map((b,i) => <div key={i} style={{ fontSize: 10, color: "#333", marginTop: 1, paddingLeft: 10, lineHeight: 1.45 }}>{"• " + b.text}</div>)}
  </div>);
}

const paper = { background: "#ffffff", backgroundColor: "#ffffff", borderRadius: 12, padding: "28px 36px", color: "#1a1a1a", fontFamily: "'DM Sans','Segoe UI',sans-serif", lineHeight: 1.4, boxShadow: "0 2px 20px rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" };
const taS = { width: "100%", minHeight: 150, maxHeight: 400, background: "#06080F", border: "1px solid #1C2333", borderRadius: 10, padding: "12px 14px", fontSize: 13, fontFamily: "'JetBrains Mono',monospace", color: "#E8ECF4", resize: "none", outline: "none", lineHeight: 1.6, boxSizing: "border-box" };
const fB = e => { e.target.style.borderColor = "#3B82F6"; };
const bB = e => { e.target.style.borderColor = "#1C2333"; };
function bSm(p) { return { padding: "7px 14px", borderRadius: 7, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", border: p ? "none" : "1px solid #1C2333", background: p ? "linear-gradient(135deg,#3B82F6,#1D4ED8)" : "#0F1219", color: "#E8ECF4" }; }
