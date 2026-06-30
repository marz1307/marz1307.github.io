---
title: "Marvis Osazuwa CV"
author: ""
date: ""
geometry: "a4paper, top=1.5cm, bottom=1.5cm, left=1.8cm, right=1.8cm"
fontsize: 10pt
linestretch: 1.1
mainfont: "Source Serif 4"
sansfont: "IBM Plex Sans"
colorlinks: true
linkcolor: "blue"
header-includes:
  - \pagenumbering{gobble}
  - \pagestyle{empty}
  - \usepackage{titlesec}
  - \titlespacing*{\section}{0pt}{8pt}{4pt}
  - \titlespacing*{\subsection}{0pt}{6pt}{2pt}
  - \setlength{\parskip}{2pt}
---

# Marvis Osazuwa

**Analytics Engineer · Data Scientist**

Manchester, UK · marvis.osazuwa@hotmail.com · +44 [phone] · [linkedin.com/in/marvisosazuwa](https://linkedin.com/in/marvisosazuwa) · [github.com/marz1307](https://github.com/marz1307) · [marz1307.github.io](https://marz1307.github.io)

## Profile

Analytics Engineer and Data Scientist with seven years across retail banking, mortgage analytics, healthcare marketing, and a current Analytics Engineer role at a SaaS company. I design dimensional models in SQL, transform with dbt, orchestrate with Dagster, and ship ML pipelines that explain themselves. I care about Kimball modelling, CI/CD for data, and making the analysts and product teams downstream of me faster. UK-based, open to UK and Germany/EU roles. UK Graduate visa (no sponsorship needed), EU Blue Card eligible.

## Experience

### Analytics Engineer · Force24 · Leeds, UK (Hybrid) · January 2026 – April 2026

Marketing automation SaaS. Greenfield Account Intelligence platform built over 16 weeks for Customer Success Managers, accounts, and stakeholders, delivered collaboratively under technical supervision. Two-student team; PostgreSQL and Angular mandated by Force24, every other tool decision mine.

- Owned the data layer end to end. Dagster orchestration on a VM with Caddy fronting it for admin authentication, custom Python extractors against multiple source systems, layered PostgreSQL warehouse using dbt across raw, staging, intermediate, and marts.
- Authored every dbt model from scratch: staging views, intermediate business-logic tables, and curated marts (accounts, revenue, support, CSM metrics, ML-ready feature tables consumed by the ML layer), with tests, documentation, and lineage.
- Wired the warehouse into the FastAPI service through endpoint changes, Redis caching where the API was hitting the warehouse too often, and scheduled batch jobs.
- Built the Action Tracker on the Angular frontend as the lead feature: CSMs create actions manually or accept smart-suggested actions surfaced by churn risk and account health score, admins assign work, and outcomes are captured as structured action-context-outcome triples designed to feed a future causal-model layer.

**Stack:** Dagster · dbt · PostgreSQL · Python · FastAPI · Redis · Angular · Docker · Caddy · Git

### CRM Data Specialist · Natural Clinic · Istanbul, Türkiye · June 2024 – January 2025

Healthcare marketing operation. CRM data and analytics ownership across patient acquisition, conversion, and retention.

- Rebuilt the CRM data layer end to end as the single source of truth for sales, marketing, and clinical operations. Lead response time dropped 30%; conversion rose 15%; duplicates and data errors fell 40%; email engagement rose 25%.
- Designed and shipped real-time Power BI dashboards and exec-ready reports that replaced weekly manual spreadsheets, giving leadership live visibility for the first time.
- Integrated the CRM with the marketing automation stack (email, SMS, paid funnels) and engineered customer data flows between CRM, patient management, and marketing tooling, eliminating three days a week of manual reconciliation.
- Partnered daily with marketing, clinical operations, and customer service to translate ambiguous business questions into structured data models and measurable outcomes.

**Stack:** SQL · Python · Power BI · Zoho CRM · Marketing automation · Workflow automation

### Strategic Data Insights Analyst · Federal Mortgage Bank of Nigeria · Abuja, Nigeria · December 2018 – November 2019

Federal mortgage institution managing Nigeria's national housing fund. Loan portfolio analytics and IT-governance reporting.

- Ran a data-integrity overhaul that improved core dataset accuracy by 40% in six months, materially reducing the risk of faulty loan approvals.
- Built Python and SQL analytics models on top of Tableau to track loan repayment behaviour, lifting repayment-monitoring efficiency by 15% and cutting manual data entry by 25%.
- Streamlined IT asset governance and approval workflows, cutting approval turnaround by 30%.

**Stack:** Python · SQL · Tableau · Excel

### Customer Information and Service Specialist · GTBank · Edo, Nigeria · September 2015 – March 2016

Early-career role at a Tier-1 African retail bank.

- Analysed customer interaction data to identify drop-off and friction points, feeding insights into cross-functional teams.
- Led adoption campaigns for USSD and Internet banking, reducing in-branch manual transactions and shifting customers onto self-service.
- Owned complaint resolution logging and root-cause categorisation, feeding monthly service-quality reporting.

## Education

**MSc Data Science** · University of Salford, Manchester, UK · January 2025 – May 2026
Dissertation: Agentic ELT Data Platform for Customer Intelligence. Coursework in machine learning, big data engineering, applied statistics, and data-driven decision making.

**MSc Big Data Analytics and Management** · Bahcesehir University, Istanbul, Türkiye · September 2020 – March 2023 · GPA 3.67/4.00
Master's thesis: PySpark pipeline ranking and recommending players across five European football leagues using UEFA event data.

**BEng Computer Engineering** · University of Benin, Edo, Nigeria · September 2011 – August 2017

## Selected Projects

**Pharmaceutical Side Effect Classification** · 2025 · Healthcare ML
Production-grade multi-class classifier mapping free-text adverse-event descriptions to ten clinical categories across 11,825 marketed medicines. Random Forest at 98.5% accuracy on held-out test, Logistic Regression baseline at 97.2% (interpretable comparison within two points). Inference CLI and pytest test suite shipped.
`Python` `scikit-learn` `TF-IDF` `Random Forest` `Logistic Regression`

**Big Data Player Scouting** · MSc Thesis · 2023 · Sports / Big Data
Distributed PySpark pipeline ranking and recommending 500+ footballers across La Liga, Serie A, Premier League, Bundesliga, and Ligue 1 using UEFA event data and PlayeRank methodology. Published thesis, public codebase.
`Python` `PySpark` `Big Data` `Recommender Systems`

**Equity Forecasting** · 2025 · Financial Time Series
End-to-end R analysis package for univariate equity forecasting on 5,124 daily NYSE observations. ARIMA and ETS through a MODEL_REGISTRY pattern, with formal residual diagnostics (Ljung-Box, Shapiro-Wilk) and stationarity tests (ADF, KPSS) combined into a single decision rule.
`R` `ARIMA` `ETS` `Time Series` `Statistical Testing`

**Steam Games Recommender** · 2024 · Recommender Systems
PySpark and ALS recommender on the Steam 200k implicit-feedback dataset. Distributed training, hyperparameter tuning via CrossValidator, full experiment tracking in MLflow on Databricks.
`PySpark` `Spark MLlib` `ALS` `MLflow` `Databricks`

## Technical Skills

**Languages:** SQL · Python · R · PySpark · T-SQL · Bash
**Warehousing:** PostgreSQL · Snowflake · BigQuery · Databricks · SQL Server
**Transformation & Orchestration:** dbt · Dagster · Apache Spark · Airflow
**Service Layer:** FastAPI · REST APIs · Docker · Caddy
**ML & Statistics:** scikit-learn · XGBoost · SHAP · MLflow · RoBERTa · ARIMA · NLP · Sentiment Analysis · TF-IDF · LDA
**BI & Visualisation:** Power BI · Tableau · Looker
**Cloud:** AWS · GCP · Azure
**Source Control & Tooling:** Git · GitHub · GitHub Actions · pytest

## Languages

**English:** Native or bilingual proficiency · **German:** B1 (intermediate, working toward B2)

## Certifications

Engineer Data for Predictive Modeling with BigQuery ML (Google Cloud) · Python for Data Science, AI & Development (Coursera) · Generative AI for Business Leaders (Coursera) · Enterprise Design Thinking Practitioner (IBM) · Tableau for Data Scientists (LinkedIn Learning) · Statistics Foundations 1–4 (LinkedIn Learning)
