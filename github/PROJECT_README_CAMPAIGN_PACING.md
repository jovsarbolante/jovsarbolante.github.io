# Cross-Border Campaign Pacing & Resource Forecasting Engine

**Dynamic Operational Capacity & Man-Day Milestone Tracker for B2B Event Registration & Lead Generation**

> **Project Classification**: Real-World Production System & Operations Model  
> **Source Context**: G9 Outsourcing Corp. / inCall Systems Pte. Ltd. (Singapore & Philippines)  
> **Author & Operations Lead**: Jovilyn Arbolante (Operations Team Leader & Industrial Engineering Graduate)

---

## 1. Purpose & Intended Audience

In distributed B2B event marketing and lead generation, campaign trajectories frequently suffer from erratic daily contact rates, regional holidays, and mid-cycle drop-offs. Without predictive resource modeling, management often realizes a campaign is behind quota only when man-days are exhausted.

This project delivers a **predictive spreadsheet pacing engine** that balances distributed agent man-days against tight attendee registration and lead generation quotas across international client accounts (including Dell, Google Cloud, HPE, Freshworks, and Logitech).

**Intended Audience**:
* Operations managers and directors needing real-time visibility into multi-campaign delivery health.
* Client account directors balancing contract SLA commitments against staff capacity.
* Remote team leaders coordinating cross-border agent allocations.

---

## 2. Project Status

* **Status**: Proven in Live Production Operations (December 2024 – August 2026).
* **Scope Supported**: 15 concurrent international campaigns (10 attendee registration campaigns with 150–500 targets; 5 lead-gen campaigns with 10–20 lead targets).
* **Team Cohort**: 5 remote agents in Singapore and 5–20 onsite agents in the Philippines.

---

## 3. Role & Personal Contribution

* **Role**: Operations Team Leader (promoted from Management Trainee).
* **Personal Contribution**:
  * Formulated the mathematical formulas and daily variance recalculations in Microsoft Excel.
  * Extracted and cleaned prospect databases (scrubbed duplicates, verified contact fields using Lusha, ContactOut, and Wiza).
  * Led daily 9:30 AM production briefings with cross-border agents to communicate adjusted daily call targets.
  * Reallocated daily call plans in the proprietary CRM and monitored inbound confirmations via Roundcube and SharePoint audio audits.

---

## 4. Features & Deliverables

### A. Dynamic Man-Day Variance Tracker
* Calculates daily required run-rates:  
  $$\text{Required Daily Attendees} = \frac{\text{Target Attendees} - \text{Current Attendees}}{\text{Remaining Man-Days}}$$
* Automatically adjusts pacing upwards after low-traction days (e.g. public holidays, low pick-up days) to avoid end-of-campaign crunch.

### B. Daily 9:30 AM Standup Briefing Rhythm
* Standardized 15-minute cross-border briefing linking Singapore remote agents and Philippine production teams.
* Reviews yesterday's dial/contact/conversion performance and reallocates targeted CRM call sheets.

### C. SharePoint Audio & Quality Governance
* Centralized storage and audit checklist for all outbound calls to maintain SLA compliance and client QA standards.

---

## 5. Tools Used

* **Spreadsheets & Data**: Microsoft Excel (Advanced Formulas: `INDEX/MATCH`, `SUMIFS`, conditional pacing indicators), Google Sheets
* **CRM & Telephony**: Proprietary CRM, Zoho CRM, Zoho Voice, CloudTalk, Roundcube
* **Data Enrichment**: Lusha, ContactOut, Wiza, ClickSend (SMS), Instantly (Email)
* **Collaboration & Audit**: SharePoint, Slack, Intercom, Notion

---

## 6. Setup & Operational Usage

This operational model is implemented in **Microsoft Excel / Google Sheets**.

### How to Use the Operational Workflow:
1. **Campaign Initialization**:
   * Input campaign parameters: `Target Attendees` (e.g. 106), `Allocated Man-Days` (e.g. 56), `Campaign Start & End Dates`.
2. **Daily Data Intake**:
   * At 8:30 AM, log previous day dials, completed conversations, RSVP confirmations, and man-days expended per agent.
3. **Variance Review**:
   * The model highlights whether the campaign is `Ahead`, `On Track`, or `At Risk`.
4. **9:30 AM Briefing Action**:
   * If `At Risk`, adjust call plan quotas or reallocate secondary call lists before the shift begins.

---

## 7. Supported Outcomes & Real Metrics

* **Production Target Achieved**: Successfully delivered **106 verified attendees within 56 man-days** on a high-stakes enterprise IT event portfolio.
* **Multi-Campaign Volume**: Maintained SLA delivery across **15 concurrent campaigns** without agent burnout or quota shortfall.
* **Data Integrity**: Audited prospect databases for 10 enterprise campaigns with zero unverified leads delivered.

---

## 8. Limitations & Boundaries

* **Proprietary Data Protection**: Underlying proprietary enterprise contact lists and specific client pricing data are confidential and excluded. The model demonstrates the operational logic, mathematical formulas, and governance structure.
