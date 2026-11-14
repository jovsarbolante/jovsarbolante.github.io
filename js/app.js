/**
 * Jovilyn Arbolante Portfolio — Interactive Features & Accessibility
 * Pure Vanilla JavaScript — Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCaseStudyModal();
  initCampaignPacingCalculator();
  initContactForm();
});

/* ==========================================================================
   1. Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    const iconSpan = toggleBtn.querySelector('.theme-icon');
    if (iconSpan) {
      iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* ==========================================================================
   2. Responsive Navigation & Accessible Skip
   ========================================================================== */
function initNavigation() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('open');
  });

  // Close nav on link click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
      toggleBtn.focus();
    }
  });
}

/* ==========================================================================
   3. Case Study Deep-Dive Modal with Focus Trapping
   ========================================================================== */
const caseStudyData = {
  'case-01-cross-border-pacing': {
    badge: 'Operations & Capacity Planning',
    title: 'Cross-Border B2B Campaign Pacing & Resource Forecasting Engine',
    context: 'G9 Outsourcing Corp. / inCall Systems Pte. Ltd. (Singapore & Philippines)',
    problem: 'International B2B event registration campaigns faced volatile daily turnout. Without predictive man-day pacing, campaigns experienced end-of-cycle resource deficits, missed RSVP quotas, and uneven lead distribution across remote Singapore and onsite Philippine teams.',
    objective: 'Build a centralized daily forecasting and milestone tracking system to maintain SLA compliance, optimize man-day utilization across low-traction periods, and ensure on-time delivery of 150–500 attendee targets.',
    role: 'Operations Team Leader (sole architect of the daily pacing model, production standup facilitator, and agent allocator).',
    approach: [
      'Constructed a multi-variable Excel production model tracking target attendees, cumulative dials, contact rates, conversion ratios, and remaining man-days.',
      'Implemented pacing variance formulas that automatically recalculated daily call quotas whenever low-traction days (holidays, regional events) occurred.',
      'Standardized morning 9:30 AM briefings to review real-time pacing, reallocate call lists in the CRM, and deploy targeted objection handling scripts.'
    ],
    deliverables: [
      'Dynamic Excel Campaign Milestone & Man-Day Pacing Tracker.',
      'Daily 9:30 AM Production Briefing Deck & Agent Quota Allocation Schedule.',
      'Cross-Border CRM List Distribution Playbook (Singapore remote + PH onsite).'
    ],
    outcome: 'Successfully managed 15 concurrent campaigns. Hit benchmark targets including delivering 106 verified attendees within 56 allocated man-days for high-profile IT enterprise event portfolios (Dell, HPE, Google Cloud).',
    evidenceType: 'Real Employment Experience (G9 Outsourcing Corp.)'
  },
  'case-02-inbox-operating-system': {
    badge: 'Executive Attention Defense',
    title: 'Executive Inbox Operating System & DRRN Decision Engine',
    context: 'Athena / Oraz PH Candidate Preparation (Case CP-ALEXANDRA-REYES-INBOX)',
    problem: 'High-growth executives face cognitive overload from 30+ daily mixed-urgency emails, conflicting calendar demands, and uncoordinated stakeholder requests that encroach on critical strategic blocks.',
    objective: 'Design an airtight Inbox Operating System (IOS) that categorizes, delegates, and resolves incoming correspondence while delivering a concise (<3 min read) executive morning brief.',
    role: 'Executive Assistant Execution Partner (lead author and triage architect).',
    approach: [
      'Created an Inbox Prioritization Matrix categorizing correspondence by Priority (Critical, High, Medium, Low) and Action (Review, Delegate, Track, Archive).',
      'Formulated the DRRN Framework (Decision/Recommendation, Reason, Risk/Trade-off, Next Step/Mitigation) for all high-stakes trade-offs.',
      'Drafted an Executive Morning Brief featuring BLUF, Top 3 Immediate Priorities, Delegated Work, and Watch Items, while protecting 8:30 AM – 12:00 PM deep work blocks.'
    ],
    deliverables: [
      '30-Item Inbox Prioritization Matrix with concrete routing rules.',
      'Standardized Executive Morning Brief Template (<3 min read).',
      'Inbox Operating System Architecture (VIP Stakeholder Directory, Archive Rules, Daily Operating Cadence).',
      'Presentation Script & Learning Reflection debrief.'
    ],
    outcome: 'Demonstrated complete attention defense: eliminated urgent interruptions during protected deep work, redirected media inquiries per firm policy, and staged legal sign-offs for zero-friction execution.',
    evidenceType: 'Athena / Oraz PH Candidate Preparation Case Study (Simulated)'
  },
  'case-03-distributed-team-briefings': {
    badge: 'Team Leadership & SOPs',
    title: 'Distributed Team Operating Rhythm & Quality Governance Cadence',
    context: 'G9 Outsourcing Corp. (Singapore Remote & Philippine Onsite Teams)',
    problem: 'Geographically dispersed telemarketing and outreach agents operated with fragmented communications, resulting in inconsistent script adherence, unrecorded calls, and delayed escalations.',
    objective: 'Create a unified operational cadence and documentation repository ensuring complete auditability, synchronized daily objectives, and continuous coaching.',
    role: 'Operations Team Leader (operational conductor and quality coach).',
    approach: [
      'Instituted mandatory daily 9:30 AM production briefings to align cross-border agents on daily focus areas, enterprise client nuances, and script adaptations.',
      'Established SharePoint governance protocols requiring all client call recordings and outreach logs to be indexed and audited within 24 hours.',
      'Applied Lean Six Sigma Yellow Belt root-cause analysis on call conversion drops, updating call plans and coaching agents on specific objection patterns.'
    ],
    deliverables: [
      'Standardized 9:30 AM Briefing Agenda & Production Checklist.',
      'SharePoint Audio & Call Record Governance Structure.',
      'Agent Onboarding & Script Refinement Guide for Enterprise IT Outreach.'
    ],
    outcome: 'Maintained continuous SLA compliance across 10 registration and 5 lead-gen campaigns with zero data loss or unrecorded interactions, improving agent ramp time and client audit readiness.',
    evidenceType: 'Real Employment Experience (G9 Outsourcing Corp.)'
  },
  'case-04-international-ops-payroll': {
    badge: 'E-Commerce & Client Operations',
    title: 'International Client Order Inventory & Payroll Calculation Workflow',
    context: 'Vyblee (Australia) & TMC Travel and Tours (Remote)',
    problem: 'International clients required cross-platform coordination for customer order tracking, fast issue resolution, and accurate contractor payroll calculations across varying time zones without operational lag.',
    objective: 'Build automated Google Sheets inventory trackers and payroll calculation sheets integrated with asynchronous team collaboration channels.',
    role: 'Operations Specialist & Business Development Associate.',
    approach: [
      'Maintained real-time app/website order inventory sheets for Australian e-commerce platform Vyblee, coordinating directly via Notion, Intercom, and Slack.',
      'Formulated accurate contractor payroll computation models accounting for billable hours, performance tiers, and deduction rules.',
      'At TMC Travel, qualified outbound leads, onboarded 6 telemarketing agents to standardized CRM workflows, and drove 3–5 repeat corporate clients.'
    ],
    deliverables: [
      'Google Sheets Order Inventory Reconciliation Model.',
      'Contractor Payroll Calculation Spreadsheet with verification checks.',
      'Multi-Platform Communication Protocol (Slack/Notion/Intercom response times).'
    ],
    outcome: 'Ensured 100% on-time payroll delivery and zero inventory discrepancies, while establishing reliable client retention workflows.',
    evidenceType: 'Real Client / Remote Operations Experience (Vyblee & TMC Travel)'
  }
};

let lastActiveTrigger = null;

function initCaseStudyModal() {
  const backdrop = document.getElementById('case-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-dynamic-content');

  if (!backdrop || !closeBtn || !modalContent) return;

  document.querySelectorAll('.open-case-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const caseId = btn.getAttribute('data-case-id');
      const data = caseStudyData[caseId];
      if (!data) return;

      lastActiveTrigger = btn;
      renderCaseModal(data, modalContent);
      openModal(backdrop);
    });
  });

  closeBtn.addEventListener('click', () => closeModal(backdrop));

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeModal(backdrop);
    }
  });
}

function renderCaseModal(data, container) {
  const approachList = data.approach.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  const deliverablesList = data.deliverables.map(item => `<li>${escapeHtml(item)}</li>`).join('');

  container.innerHTML = `
    <div class="modal-section">
      <span class="portfolio-badge">${escapeHtml(data.badge)}</span>
      <h3 style="font-size: 1.5rem; font-weight: 800; margin: 0.5rem 0; color: var(--text-primary);">${escapeHtml(data.title)}</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">Context: ${escapeHtml(data.context)}</p>
      <div style="background: var(--bg-surface-elevated); padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); margin-top: 0.75rem; font-size: 0.82rem; font-weight: 600; color: var(--brand-primary);">
        Verified Evidence Basis: ${escapeHtml(data.evidenceType)}
      </div>
    </div>

    <div class="modal-section">
      <h4>Context & The Operational Challenge</h4>
      <p>${escapeHtml(data.problem)}</p>
    </div>

    <div class="modal-section">
      <h4>Objective</h4>
      <p>${escapeHtml(data.objective)}</p>
    </div>

    <div class="modal-section">
      <h4>My Role & Direct Contribution</h4>
      <p>${escapeHtml(data.role)}</p>
    </div>

    <div class="modal-section">
      <h4>Approach & Systems Engineered</h4>
      <ul>${approachList}</ul>
    </div>

    <div class="modal-section">
      <h4>Deliverables Produced</h4>
      <ul>${deliverablesList}</ul>
    </div>

    <div class="modal-section" style="border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
      <h4>Supported Operational Outcome</h4>
      <p style="font-weight: 600; color: var(--text-primary);">${escapeHtml(data.outcome)}</p>
    </div>
  `;
}

function openModal(modal) {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.focus();
}

function closeModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastActiveTrigger) {
    lastActiveTrigger.focus();
  }
}

/* ==========================================================================
   4. Interactive Campaign Pacing Calculator (Industrial Engineering Demonstration)
   ========================================================================== */
function initCampaignPacingCalculator() {
  const targetInput = document.getElementById('calc-target');
  const manDaysInput = document.getElementById('calc-mandays');
  const elapsedInput = document.getElementById('calc-elapsed');
  const currentInput = document.getElementById('calc-current');

  if (!targetInput || !manDaysInput || !elapsedInput || !currentInput) return;

  const updateCalculator = () => {
    const target = Math.max(1, parseInt(targetInput.value, 10) || 106);
    const totalManDays = Math.max(1, parseInt(manDaysInput.value, 10) || 56);
    const elapsedDays = Math.max(0, Math.min(totalManDays, parseInt(elapsedInput.value, 10) || 20));
    const currentAttendees = Math.max(0, parseInt(currentInput.value, 10) || 42);

    const initialDailyPace = (target / totalManDays);
    const remainingManDays = Math.max(0, totalManDays - elapsedDays);
    const remainingAttendees = Math.max(0, target - currentAttendees);

    const currentPace = elapsedDays > 0 ? (currentAttendees / elapsedDays) : 0;
    const requiredRemainingPace = remainingManDays > 0 ? (remainingAttendees / remainingManDays) : 0;
    const paceVariance = currentPace - initialDailyPace;

    document.getElementById('metric-req-pace').textContent = initialDailyPace.toFixed(2) + ' / man-day';
    document.getElementById('metric-current-pace').textContent = currentPace.toFixed(2) + ' / man-day';
    document.getElementById('metric-remaining-pace').textContent = (remainingManDays > 0 ? requiredRemainingPace.toFixed(2) : '0.00') + ' / man-day';
    document.getElementById('metric-remaining-days').textContent = remainingManDays + ' man-days';

    const verdictEl = document.getElementById('calc-verdict-box');
    if (verdictEl) {
      verdictEl.className = 'calc-verdict';
      if (currentAttendees >= target) {
        verdictEl.classList.add('ahead');
        verdictEl.textContent = `🎯 Target Achieved! Target of ${target} met with ${remainingManDays} man-days to spare.`;
      } else if (remainingManDays === 0) {
        verdictEl.classList.add('atrisk');
        verdictEl.textContent = `⚠️ Man-days exhausted. Deficit of ${remainingAttendees} attendees. Requires emergency reallocation.`;
      } else if (requiredRemainingPace <= initialDailyPace * 1.05) {
        verdictEl.classList.add('ontrack');
        verdictEl.textContent = `✅ On Track. Required pace is ${requiredRemainingPace.toFixed(2)} attendees/man-day (Variance: ${paceVariance >= 0 ? '+' : ''}${paceVariance.toFixed(2)}). Standard 9:30 AM pacing maintained.`;
      } else {
        verdictEl.classList.add('atrisk');
        verdictEl.textContent = `⚠️ Pacing Lag Detected. Required pace increased to ${requiredRemainingPace.toFixed(2)} attendees/man-day. Recommendation: Reallocate 1 additional remote agent or activate Tier-2 CRM prospect list.`;
      }
    }
  };

  [targetInput, manDaysInput, elapsedInput, currentInput].forEach(input => {
    input.addEventListener('input', updateCalculator);
  });

  updateCalculator();
}

/* ==========================================================================
   5. Direct Contact Form (Live Delivery via FormSubmit AJAX)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  const statusBox = document.getElementById('form-status-box');
  const submitBtn = document.getElementById('submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (!form || !statusBox) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const engagementType = form.elements['engagement_type'].value;
    const message = form.elements['message'].value.trim();

    // 1. Client-Side Validation
    if (!name || !email || !message) {
      statusBox.className = 'form-status active error';
      statusBox.textContent = 'Please fill out all required fields (Name, Email, and Message).';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusBox.className = 'form-status active error';
      statusBox.textContent = 'Please enter a valid email address.';
      return;
    }

    // 2. Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = 'Sending message to Jovilyn...';
    }
    statusBox.className = 'form-status active';
    statusBox.style.background = 'var(--bg-surface-elevated)';
    statusBox.style.color = 'var(--text-secondary)';
    statusBox.style.border = '1px solid var(--border-strong)';
    statusBox.textContent = 'Transmitting your message securely...';

    // 3. Send via FormSubmit AJAX directly to jovas.arbolante@gmail.com
    const payload = {
      name: name,
      email: email,
      engagement_type: engagementType,
      message: message,
      _subject: `[Portfolio Inquiry] ${engagementType} from ${name}`,
      _template: 'table',
      _captcha: 'false'
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/jovas.arbolante@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        statusBox.className = 'form-status active success';
        statusBox.innerHTML = `✅ <strong>Message sent successfully!</strong> Thank you, ${escapeHtml(name)}. Your message has been delivered directly to Jovilyn's inbox (jovas.arbolante@gmail.com).`;
        form.reset();
      } else if (result.message && result.message.includes('Activation')) {
        statusBox.className = 'form-status active success';
        statusBox.innerHTML = `📩 <strong>Activation pending:</strong> FormSubmit sent an activation email to <strong>jovas.arbolante@gmail.com</strong>. Once activated, future messages arrive instantly!`;
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX issue, falling back to mail client:', err);
      // Fallback: If network blocks third-party fetch, format mailto draft
      const subject = encodeURIComponent(`[Inquiry: ${engagementType}] From ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Engagement: ${engagementType}\n\n` +
        `Message:\n${message}\n\n` +
        `--- Sent via jovsarbolante.github.io ---`
      );
      statusBox.className = 'form-status active error';
      statusBox.innerHTML = `⚠️ Direct network transmission issue. <a href="mailto:jovas.arbolante@gmail.com?subject=${subject}&body=${body}" style="color: var(--brand-primary); font-weight: 700; text-decoration: underline;">Click here to send directly via email client</a>.`;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = 'Send Direct Message →';
      }
    }
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
