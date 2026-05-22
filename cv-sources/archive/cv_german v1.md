---
title: "Marvis Osazuwa Lebenslauf"
author: ""
date: ""
geometry: "a4paper, top=1.5cm, bottom=1.5cm, left=1.8cm, right=1.8cm"
fontsize: 10pt
linestretch: 1.1
mainfont: "Source Serif 4"
sansfont: "IBM Plex Sans"
colorlinks: true
linkcolor: "blue"
lang: de
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

[FOTO: Professionelles Bewerbungsfoto rechts oben einfügen, ca. 3,5 cm × 4,5 cm]

## Persönliche Daten

| | |
|---|---|
| **Anschrift** | Manchester, Vereinigtes Königreich |
| **E-Mail** | marvis.osazuwa@hotmail.com |
| **Telefon** | +44 [Telefonnummer] |
| **LinkedIn** | linkedin.com/in/marvisosazuwa |
| **GitHub** | github.com/marz1307 |
| **Portfolio** | marz1307.github.io |

## Profil

Analytics Engineer und Data Scientist mit sieben Jahren Erfahrung in Retail Banking, Hypothekenanalytik, Healthcare-Marketing sowie einer aktuellen Analytics-Engineer-Tätigkeit bei einem SaaS-Unternehmen. Ich entwerfe dimensionale Modelle in SQL, transformiere mit dbt, orchestriere mit Dagster und liefere ML-Pipelines, die sich erklären lassen. Mein Schwerpunkt liegt auf Kimball-Modellierung, CI/CD für Daten und darauf, Analystinnen und Produktteams im Anschluss schneller arbeiten zu lassen. Offen für Positionen in Deutschland, EMEA, im Vereinigten Königreich oder remote in EMEA-Zeitzonen.

## Berufserfahrung

### Analytics Engineer · Force24 · Leeds, Vereinigtes Königreich (Hybrid) · 01/2026 – 04/2026

Marketing-Automation-SaaS. Leitender Engineer in einem dreistufigen Customer-Intelligence-Plattformaufbau — alleiniger Architekt und Autor der Datenebene, primärer Autor über 8 Backend-Domänen sowie Verantwortlicher für die Customer-Surface auf dem Frontend.

- Alleiniger Architekt und Autor einer dbt- und Dagster-Datenpipeline, die 4 voneinander unabhängige Geschäftssysteme zu einem analyseergebnis-bereiten Warehouse auf einem deduplizierten Account-Spine konsolidiert. Etwa 40 dbt-Modelle über Staging-, Intermediate- und Marts-Ebenen, 5 tägliche Dagster-Schedules. Eine kanonische Kunden-ID im gesamten Unternehmen etabliert, wodurch UUID-Casing-Konflikte beseitigt wurden, die zuvor CSM-Bücher nicht verknüpfbar machten.
- Tägliche Pipeline-Rechenzeit um etwa 95 % reduziert durch Umarchitektur hochvolumiger Revenue-Modelle als inkrementell auf einer Append-Only-Raw-Schicht mit SHA-1-deterministischen Hash-IDs. Plattform auf Oracle Cloud Infrastructure produktiv genommen mit idempotentem Bootstrap, Caddy TLS, VPN-IP-Allowlist, systemd, logrotate sowie Operator-SETUP.md und dreistufigen ROLLBACK.md-Runbooks — 24/7-Plattform bei null Infrastrukturkosten.
- Deterministische 10-Schritte-Attributionskette entwickelt, die jeden Datensatz explizit klassifiziert und damit eine Black-Box-Best-Guess-Logik ersetzt. Support-Kennzahlen sind nun gegenüber Auditoren und CSMs verteidigbar.
- End-to-End-Korrektheit gesichert mit umfangreicher dbt- und pytest-Testabdeckung, nachdem 22 Datenqualitätsfehler (UUID-Casing, SFTP-Leerstrings, Rechnungsduplikate, Billing-only-Parents) im ersten Produktionsbuild aufgedeckt und behoben wurden. Stille Metrik-Drift wird in CI gefangen, nicht im Vorstandsmeeting.
- Customer-Backend und Angular-UI gebaut: Customer-Liste mit 10 serverseitigen Filtern, Dashboard- und Reporting-Endpoints, Action-Tracker-Seite (alleiniger Autor) mit vollständiger CRUD und 7-Ergebnis-strukturierter Erfassung sowie Dagster-GraphQL-Client mit auditiertem Admin-Redirect-Logging. Zentralisierte `health_thresholds`- und `standing_aliases`-Module sorgen dafür, dass "gesund" und "abgewandert" auf jeder Oberfläche identisch definiert sind. Action Tracker nach dem Grundsatz konzipiert, dass Dashboards Handeln auslösen sollten, nicht nur Daten anzeigen — erfasste Ergebnisse bilden gelabelte Trainingsdaten für eine zukünftige Causal-Model-Schicht.

**Stack:** Dagster · dbt · PostgreSQL · Python · FastAPI · Redis · Angular · Docker · Caddy · Oracle Cloud · Git

### CRM Data Specialist · Natural Clinic · Istanbul, Türkei · 06/2024 – 01/2025

Healthcare-Marketing-Operation. Verantwortung für CRM-Daten und Analytik in den Bereichen Patientenakquise, Conversion und Bindung.

- CRM-Datenebene durchgängig neu aufgebaut und als Single Source of Truth für Vertrieb, Marketing und klinische Operations etabliert. Lead-Reaktionszeit −30 %, Conversion +15 %, Duplikate und Datenfehler −40 %, E-Mail-Engagement +25 %.
- Echtzeit-Dashboards und Executive-Reports in Power BI gestaltet und ausgeliefert, die wöchentliche manuelle Tabellen ersetzten und der Geschäftsleitung erstmals laufende Sichtbarkeit gaben.
- CRM mit dem Marketing-Automation-Stack (E-Mail, SMS, Paid Funnels) integriert sowie Datenflüsse zwischen CRM, Patientenmanagementsystem und Marketing-Tools entwickelt, wodurch drei Tage manueller Abstimmung pro Woche entfielen.
- Tägliche Zusammenarbeit mit Marketing, klinischen Operations und Kundenservice, um unklare Geschäftsfragen in strukturierte Datenmodelle und messbare Ergebnisse zu übersetzen.

**Stack:** SQL · Python · Power BI · Zoho CRM · Marketing-Automation · Workflow-Automation

### Strategic Data Insights Analyst · Federal Mortgage Bank of Nigeria · Abuja, Nigeria · 12/2018 – 11/2019

Bundesweite Hypothekeninstitution für den nigerianischen Wohnungsbaufonds. Analytik für Kreditportfolio und IT-Governance-Reporting.

- Datenintegritätsoffensive durchgeführt, die die Genauigkeit der Kerndatensätze in sechs Monaten um 40 % steigerte und das Risiko fehlerhafter Kreditgenehmigungen wesentlich reduzierte.
- Python- und SQL-Analytikmodelle auf Basis von Tableau gebaut, um Rückzahlungsverhalten zu verfolgen. Effizienz im Rückzahlungs-Monitoring +15 %, manueller Dateneingabe-Aufwand −25 %.
- IT-Asset-Governance und Genehmigungsworkflows verschlankt, Bearbeitungszeit −30 %.

**Stack:** Python · SQL · Tableau · Excel

### Customer Information and Service Specialist · GTBank · Edo, Nigeria · 09/2015 – 03/2016

Berufseinstieg bei einer der größten afrikanischen Privatkundenbanken.

- Kundeninteraktionsdaten analysiert, um Reibungspunkte zu identifizieren, und Erkenntnisse an funktionsübergreifende Teams weitergegeben.
- Adoptionskampagnen für USSD- und Internet-Banking geleitet, was manuelle Filialtransaktionen reduzierte und Kundinnen auf Self-Service umstellte.
- Verantwortung für Beschwerdebearbeitung, Logging und Ursachenklassifizierung; Zulieferung an monatliches Service-Quality-Reporting.

## Ausbildung

**MSc Data Science** · University of Salford, Manchester, Vereinigtes Königreich · 01/2025 – 05/2026
Schwerpunkte: Machine Learning, Big-Data-Engineering, angewandte Statistik, datengetriebene Entscheidungsfindung.

**MSc Big Data Analytics and Management** · Bahçeşehir Universität, Istanbul, Türkei · 09/2020 – 03/2023 · Note: 3,67/4,00
Masterarbeit: PySpark-Pipeline zum Ranking und zur Empfehlung von Spielern aus fünf europäischen Fußballligen anhand von UEFA-Event-Daten.

**BEng Computer Engineering** · University of Benin, Edo, Nigeria · 09/2011 – 08/2017

## Projekte

**Agentic ELT Data Platform for Customer Intelligence** · MSc-Dissertation (Salford) · 2026 · Live-B2B-SaaS-Umgebung
End-to-End JSONB-first-ELT-Plattform und Drei-Modell-Churn-Intelligence-Stack für eine Live-B2B-SaaS-Umgebung. **1,21 Mio. Datensätze** aus 4 heterogenen Vendor-APIs in PostgreSQL ingestiert über eigene Python-Extraktoren mit Dagster-Orchestrierung, durch **48 dbt-Modelle** modelliert und 1.047 Accounts mit drei komplementären Modellen gescort: Survival (GradientBoostingSurvivalAnalysis, **C-Index 0,9449**), Health-Score (XGBoost via PostgresML, **AUC 0,950** vs 0,888 Logistic-Baseline) mit SHAP-Erklärungen sowie DR-Learner-Causal-Inference (econml) mit Anpassung des naïven **+49,56 pp CSM-Effekts auf +12,64 pp** nach Confounder-Korrektur. Bereitgestellt über FastAPI mit JWT-Auth und Row-Level-Security, ein Angular-Dashboard sowie einen **MCP-Endpoint (Model Context Protocol)** für agentischen LLM-Zugriff. 403 P1/P2-Accounts mit ~£305k MRR-Risiko identifiziert.
`Python` `PostgreSQL` `JSONB` `dbt` `Dagster` `PostgresML` `XGBoost` `scikit-survival` `econml` `SHAP` `FastAPI` `Angular` `MCP`

**Pharmaceutical Side Effect Classification** · 2025 · Healthcare-ML
Produktionsreifer Multi-Class-Klassifikator zur Zuordnung von Freitext-Beschreibungen unerwünschter Arzneimittelereignisse zu zehn klinischen Kategorien über 11.825 zugelassene Medikamente. Random Forest mit 98,5 % Genauigkeit auf der Test-Holdout-Menge, Logistic Regression als interpretierbarer Vergleich bei 97,2 %. Inference-CLI und pytest-Testsuite enthalten.
`Python` `scikit-learn` `TF-IDF` `Random Forest` `Logistic Regression`

**Big Data Player Scouting** · MSc-Thesis · 2023 · Sport / Big Data
Verteilte PySpark-Pipeline zur Bewertung und Empfehlung von über 500 Spielern aus La Liga, Serie A, Premier League, Bundesliga und Ligue 1 anhand von UEFA-Event-Daten und der PlayeRank-Methodik. Veröffentlichte Thesis, öffentlicher Quellcode.
`Python` `PySpark` `Big Data` `Recommender Systems`

**Equity Forecasting** · 2025 · Finanzielle Zeitreihen
End-to-End-R-Analysepaket für univariate Aktienprognosen auf 5.124 NYSE-Tagesbeobachtungen. ARIMA, saisonales ARIMA und ETS über ein MODEL_REGISTRY-Pattern. Formale Residualdiagnostik (Ljung-Box, Shapiro-Wilk) und Stationaritätstests (ADF, KPSS) zu einer einheitlichen Entscheidungsregel kombiniert.
`R` `ARIMA` `ETS` `Zeitreihen` `Statistische Tests`

## Technische Kenntnisse

**Sprachen:** SQL · Python · R · PySpark · T-SQL · Bash
**Warehousing:** PostgreSQL (JSONB + GIN) · Snowflake · BigQuery · Databricks · SQL Server
**Transformation & Orchestrierung:** dbt · Dagster · Apache Spark · Airflow
**Service Layer:** FastAPI · REST APIs · Docker · Caddy · Model Context Protocol (MCP)
**ML & Statistik:** scikit-learn · XGBoost · PostgresML · scikit-survival · econml (DR-Learner) · SHAP · MLflow · RoBERTa · ARIMA · NLP · Sentimentanalyse · TF-IDF · LDA · Causal Inference · Survival Analysis
**BI & Visualisierung:** Power BI · Tableau · Looker
**Cloud:** AWS · GCP · Azure · Oracle Cloud
**Versionskontrolle & Tooling:** Git · GitHub · GitHub Actions · pytest

## Sprachen

**Englisch:** Muttersprachlich · **Deutsch:** B1 (Mittelstufe, in Vorbereitung auf B2)

## Zertifikate

Engineer Data for Predictive Modeling with BigQuery ML (Google Cloud) · Python for Data Science, AI & Development (Coursera) · Generative AI for Business Leaders (Coursera) · Enterprise Design Thinking Practitioner (IBM) · Tableau for Data Scientists (LinkedIn Learning) · Statistics Foundations 1–4 (LinkedIn Learning)