<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<title>Marvis Osazuwa CV</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&amp;family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet">
<style>
  :root {
    --ink: #1a1a1a;
    --ink-muted: #555;
    --rule: #d6d3ce;
    --accent: #D4471F;
    --paper: #fff;
    --serif: "Source Serif 4", "Source Serif Pro", Georgia, serif;
    --sans: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif;
    --mono: "JetBrains Mono", "Consolas", monospace;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { font-family: var(--serif); color: var(--ink); background: var(--paper); }
  body { font-size: 8.5pt; line-height: 1.25; }
  @page { size: A4; margin: 0.85cm 1.1cm; }
  h1, h2, h3, h4 { font-family: var(--sans); color: var(--ink); }
  h1 { font-size: 15pt; font-weight: 600; letter-spacing: -0.01em; }
  h2 {
    font-size: 9pt; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;
    color: var(--accent);
    border-bottom: 1px solid var(--accent);
    padding-bottom: 1px;
    margin: 6pt 0 3pt 0;
  }
  h3 { font-size: 9pt; font-weight: 600; margin-top: 4pt; }
  h4 { font-size: 8.5pt; font-weight: 500; color: var(--ink-muted); margin-top: 1pt; }
  p, li { font-size: 8.5pt; line-height: 1.28; }
  ul { padding-left: 1.05em; margin-top: 1pt; }
  li { margin-bottom: 1pt; }
  a { color: var(--accent); text-decoration: none; }
  .header-tagline { font-family: var(--sans); font-size: 9.5pt; color: var(--ink-muted); margin-top: 1pt; font-weight: 500; }
  .contact { font-family: var(--sans); font-size: 8pt; margin-top: 2pt; color: var(--ink-muted); line-height: 1.4; }
  .contact a { color: var(--ink); }
  .contact .sep { color: var(--rule); margin: 0 5px; }
  .role-line { font-family: var(--sans); font-size: 9pt; font-weight: 500; color: var(--ink); }
  .role-meta { font-family: var(--sans); font-size: 8pt; color: var(--ink-muted); font-weight: 500; margin-bottom: 1pt; }
  .stack { font-family: var(--mono); font-size: 7.5pt; color: var(--ink-muted); margin-top: 1pt; }
  .stack-label { color: var(--accent); font-weight: 600; }
  .project-tags { font-family: var(--mono); font-size: 7.5pt; color: var(--ink-muted); margin-top: 1pt; }
  .project-tags .tag {
    display: inline-block; background: #f5f3ee; padding: 0pt 4pt; margin-right: 2pt; margin-bottom: 1pt;
    border-radius: 2px; font-size: 7pt;
  }
  .project-meta { font-family: var(--sans); font-size: 8pt; color: var(--accent); font-weight: 600; }
  .skills-grid { font-size: 8.5pt; line-height: 1.35; }
  .skills-grid b { font-family: var(--sans); font-weight: 600; color: var(--ink); }
  .skills-grid p { margin-bottom: 0pt; }
  strong { font-weight: 600; }
  section { break-inside: auto; }
</style>
</head>
<body>

<header>
  <h1>Marvis Osazuwa</h1>
  <p class="header-tagline">Analytics Engineer · Data Scientist</p>
  <p class="contact">
    Manchester, UK
    <span class="sep">·</span> <a href="mailto:marvis.osazuwa@hotmail.com">marvis.osazuwa@hotmail.com</a>
    <span class="sep">·</span> <a href="https://linkedin.com/in/marvisosazuwa">linkedin.com/in/marvisosazuwa</a>
    <span class="sep">·</span> <a href="https://github.com/marz1307">github.com/marz1307</a>
    <span class="sep">·</span> <a href="https://marz1307.github.io">marz1307.github.io</a>
  </p>
</header>

<section>
  <h2>Profile</h2>
  <p>Analytics Engineer and Data Scientist with seven years across retail banking, mortgage analytics, healthcare marketing, and a current Analytics Engineer role at a SaaS company. I design dimensional models in SQL, transform with dbt, orchestrate with Dagster, and ship ML pipelines that explain themselves. I care about Kimball modelling, CI/CD for data, and making the analysts and product teams downstream of me faster. Open to roles in Germany, EMEA, the UK, or remote across EMEA time zones.</p>
</section>

<section>
  <h2>Experience</h2>

  <h3>Analytics Engineer · Force24 · Leeds, UK (Hybrid)</h3>
  <p class="role-meta">January 2026 – April 2026</p>
  <p>Marketing automation SaaS. Lead engineer on a 3-tier customer intelligence platform — sole architect and author of the data layer, primary author across 8 backend domains, and owner of the customer + actions surface area on the frontend.</p>
  <ul>
    <li>Sole architect and author of a dbt + Dagster data pipeline consolidating 4 disconnected business systems into one analytics-ready warehouse on a deduplicated account spine — 39 dbt models, 5 daily schedules, ~93% solo commit share. Established a single canonical customer ID across the business, eliminating UUID-casing mismatches that previously made CSM books unjoinable.</li>
    <li>Cut daily pipeline compute by ~95% by re-architecting high-volume revenue models as incremental on top of an append-only raw layer with SHA-1 deterministic hash IDs. Productionised the platform on Oracle Cloud Always Free with idempotent bootstrap, Caddy TLS + VPN IP allowlist, systemd, logrotate, and operator SETUP.md plus three-level ROLLBACK.md runbooks — 24/7 platform at zero infra cost.</li>
    <li>Engineered a 10-step deterministic attribution chain that explicitly classified 47.8% attributed, 9.8% automated noise, and 42.4% unmapped — replacing a black-box best-guess join. Support metrics now defensible to auditors and CSMs.</li>
    <li>Locked correctness end-to-end with 123 dbt tests and 82 pytest tests after surfacing and fixing 22 data-quality bugs (UUID casing, SFTP empty strings, invoice duplication, billing-only parents) during the first production build. Silent metric drift caught in CI instead of the boardroom.</li>
    <li>Built the customer-facing backend and Angular UI: customer list with 10 server-side filters, dashboard and reporting endpoints, the Action Tracker page (sole author) with full CRUD and 7-outcome structured capture, and the Dagster GraphQL client with audit-logged admin redirects. Centralised health_thresholds and standing_aliases modules I authored keep "healthy" and "churned" defined identically across the stack. Action Tracker designed on the principle that dashboards should drive action, not just display data — captured outcomes form labelled training data for a future causal-model layer.</li>
  </ul>
  <p class="stack"><span class="stack-label">Stack:</span> Dagster, dbt, PostgreSQL, Python, FastAPI, Redis, Angular, Docker, Caddy, Oracle Cloud, Git.</p>

  <h3>CRM Data Specialist · Natural Clinic · Istanbul, Türkiye</h3>
  <p class="role-meta">June 2024 – January 2025</p>
  <p>Healthcare marketing operation. CRM data and analytics ownership across patient acquisition, conversion, and retention.</p>
  <ul>
    <li>Rebuilt the CRM data layer end to end as the single source of truth for sales, marketing, and clinical operations. Lead response time dropped 30%; conversion rose 15%; duplicates and data errors fell 40%; email engagement rose 25%.</li>
    <li>Designed and shipped real-time Power BI dashboards and exec-ready reports that replaced weekly manual spreadsheets, giving leadership live visibility for the first time.</li>
    <li>Integrated the CRM with the marketing automation stack (email, SMS, paid funnels) and engineered customer data flows between CRM, patient management, and marketing tooling, eliminating three days a week of manual reconciliation.</li>
    <li>Partnered daily with marketing, clinical operations, and customer service to translate ambiguous business questions into structured data models and measurable outcomes.</li>
  </ul>
  <p class="stack"><span class="stack-label">Stack:</span> SQL, Python, Power BI, Zoho CRM, marketing automation, workflow automation.</p>

  <h3>Strategic Data Insights Analyst · Federal Mortgage Bank of Nigeria · Abuja, Nigeria</h3>
  <p class="role-meta">December 2018 – November 2019</p>
  <p>Federal mortgage institution managing Nigeria's national housing fund. Loan portfolio analytics and IT-governance reporting.</p>
  <ul>
    <li>Ran a data-integrity overhaul that improved core dataset accuracy by 40% in six months, materially reducing the risk of faulty loan approvals.</li>
    <li>Built Python and SQL analytics models on top of Tableau to track loan repayment behaviour, lifting repayment-monitoring efficiency by 15% and cutting manual data entry by 25%.</li>
    <li>Streamlined IT asset governance and approval workflows, cutting approval turnaround by 30%.</li>
  </ul>
  <p class="stack"><span class="stack-label">Stack:</span> Python, SQL, Tableau, Excel.</p>

  <h3>Customer Information and Service Specialist · Guaranty Trust Bank · Edo, Nigeria</h3>
  <p class="role-meta">September 2015 – March 2016</p>
  <p>Early-career role at a Tier-1 African retail bank.</p>
  <ul>
    <li>Analysed customer interaction data to identify drop-off and friction points, feeding insights into cross-functional teams.</li>
    <li>Led adoption campaigns for USSD and Internet banking, reducing in-branch manual transactions and shifting customers onto self-service.</li>
    <li>Owned complaint resolution logging and root-cause categorisation, feeding monthly service-quality reporting.</li>
  </ul>
</section>

<section>
  <h2>Education</h2>
  <h3>MSc Data Science · University of Salford · Manchester, UK</h3>
  <p class="role-meta">January 2025 – May 2026</p>

  <h3>MSc Big Data Analytics and Management · Bahcesehir University · Istanbul, Türkiye</h3>
  <p class="role-meta">September 2020 – March 2023 · GPA 3.67 / 4.00 · Thesis: distributed PySpark pipeline for football scouting</p>

  <h3>BEng Computer Engineering · University of Benin · Edo, Nigeria</h3>
  <p class="role-meta">September 2011 – August 2017</p>
</section>

<section>
  <h2>Projects</h2>

  <h3>Agentic ELT Data Platform for Customer Intelligence</h3>
  <p class="project-meta">MSc Dissertation (Salford) · 2026 · Live B2B SaaS Environment</p>
  <p>End-to-end JSONB-first ELT platform and three-model churn intelligence stack for a live B2B SaaS environment. Ingested <strong>1.21M records</strong> from 4 heterogeneous vendor APIs into PostgreSQL via custom Python extractors orchestrated with Dagster, modelled through <strong>48 dbt models</strong>, and scored 1,047 accounts with three complementary models: survival (GradientBoostingSurvivalAnalysis, <strong>C-index 0.9449</strong>), health score (XGBoost via PostgresML, <strong>AUC 0.950</strong> vs 0.888 logistic baseline) with SHAP explanations, and DR-Learner causal inference (econml) adjusting the naïve <strong>+49.56pp CSM-effect down to +12.64pp</strong> after confounder correction. Surfaced via FastAPI with JWT auth and Row-Level Security, an Angular dashboard, and an <strong>MCP (Model Context Protocol) endpoint</strong> for agentic LLM access. Identified 403 P1/P2 accounts representing ~£305k MRR at risk.</p>
  <p class="project-tags"><span class="tag">Python</span><span class="tag">PostgreSQL</span><span class="tag">JSONB</span><span class="tag">dbt</span><span class="tag">Dagster</span><span class="tag">PostgresML</span><span class="tag">XGBoost</span><span class="tag">scikit-survival</span><span class="tag">econml</span><span class="tag">SHAP</span><span class="tag">FastAPI</span><span class="tag">Angular</span><span class="tag">MCP</span></p>

  <h3>Pharmaceutical Side Effect Classification</h3>
  <p class="project-meta">Side Project · 2025 · Healthcare ML</p>
  <p>Production-grade multi-class classifier mapping free-text adverse-event descriptions to ten clinical categories across 11,825 marketed medicines. Random Forest at <strong>98.5 percent accuracy</strong> on held-out test, Logistic Regression baseline at 97.2 percent (interpretable comparison within two points). Above 95 percent F1 across every retained category. Inference CLI and pytest test suite shipped.</p>
  <p class="project-tags"><span class="tag">Python</span><span class="tag">scikit-learn</span><span class="tag">TF-IDF</span><span class="tag">Random Forest</span><span class="tag">Logistic Regression</span><span class="tag">pytest</span></p>

  <h3>Big Data Player Scouting (MSc Thesis)</h3>
  <p class="project-meta">Bahcesehir Thesis · 2023 · Sports / Big Data</p>
  <p>Distributed PySpark pipeline ranking and recommending footballers across five top European leagues using UEFA event data and PlayeRank methodology. 500 plus players, hypothesis-driven research. Published thesis, public codebase.</p>
  <p class="project-tags"><span class="tag">Python</span><span class="tag">PySpark</span><span class="tag">Big Data</span><span class="tag">Recommender Systems</span></p>

  <h3>Equity Forecasting</h3>
  <p class="project-meta">Side Project · 2025 · Financial Time Series</p>
  <p>End-to-end R analysis package for univariate equity forecasting on 5,124 daily NYSE observations. ARIMA, seasonal ARIMA, and ETS through a MODEL_REGISTRY pattern, with formal residual diagnostics (Ljung-Box, Shapiro-Wilk) and stationarity tests (ADF, KPSS) combined into a single decision rule.</p>
  <p class="project-tags"><span class="tag">R</span><span class="tag">ARIMA</span><span class="tag">ETS</span><span class="tag">Time Series</span><span class="tag">Statistical Testing</span></p>
</section>

<section>
  <h2>Technical Skills</h2>
  <div class="skills-grid">
    <p><b>Languages:</b> SQL, Python, R, PySpark, T-SQL, Bash</p>
    <p><b>Warehousing &amp; Storage:</b> PostgreSQL (JSONB + GIN), Snowflake, BigQuery, Databricks, SQL Server</p>
    <p><b>Transformation &amp; Orchestration:</b> dbt, Dagster, Apache Spark, Airflow</p>
    <p><b>Service Layer:</b> FastAPI, REST APIs, Docker, Caddy, Model Context Protocol (MCP)</p>
    <p><b>ML &amp; Statistics:</b> scikit-learn, XGBoost, PostgresML, scikit-survival, econml (DR-Learner), SHAP, MLflow, RoBERTa, ARIMA, Time Series Analysis, NLP, Sentiment Analysis, TF-IDF, LDA, Causal Inference, Survival Analysis</p>
    <p><b>BI &amp; Visualisation:</b> Power BI, Tableau, Looker</p>
    <p><b>Cloud:</b> AWS, GCP, Azure, Oracle Cloud</p>
    <p><b>Source Control &amp; Tooling:</b> Git, GitHub, GitHub Actions, pytest</p>
  </div>
</section>

<section>
  <h2>Languages</h2>
  <ul>
    <li><strong>English:</strong> Native or bilingual proficiency</li>
    <li><strong>German:</strong> B1 (intermediate, working toward B2)</li>
  </ul>
</section>

<section>
  <h2>Certifications</h2>
  <ul>
    <li>Engineer Data for Predictive Modeling with BigQuery ML · Google Cloud</li>
    <li>Python for Data Science, AI &amp; Development · Coursera</li>
    <li>Generative AI for Business Leaders · Coursera</li>
    <li>Enterprise Design Thinking Practitioner / Team Essentials for AI / Co-Creator · IBM</li>
    <li>Tableau for Data Scientists · LinkedIn Learning</li>
    <li>Statistics Foundations 1–4 · LinkedIn Learning</li>
    <li>R for Data Science · LinkedIn Learning</li>
  </ul>
</section>

</body></html>