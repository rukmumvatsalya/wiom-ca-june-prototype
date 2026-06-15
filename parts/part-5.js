/* ============================================================
   Wiom prototype — part 5 (screens 25–29)
   Source of truth: customer-app-kotlin Compose.
   25,26 → feature/chat/.../ui/ChatScreen.kt (ChatAppBar + StickyBanner + bubbles)
   27    → feature/booking/.../ui/PlanSelectionScreenF.kt + PlanDisplay.kt
   28    → feature/booking/.../ui/PlanSelectionScreenF.kt (selected + price pill)
   29    → feature/booking/.../ui/CostBreakdownScreen.kt (bill)
   Classes/tokens from app.css only. Hindi/numbers verbatim from PNG + source.
   ============================================================ */
window.SCREENS = window.SCREENS || [];

/* ---- shared chat fragments ---- */
const _p5statusbar = `
  <div class="statusbar">
    <span>04:35 PM</span>
    <span class="sb-right">
      <span class="material-symbols-rounded">wifi</span>
      <span class="material-symbols-rounded">signal_cellular_alt</span>
      <span class="material-symbols-rounded">battery_horiz_075</span>
      <span>50%</span>
    </span>
  </div>`;

const _p5chatAppbar = `
  <div class="chat-appbar">
    <div class="chat-avatar">
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
        <path d="M2 7c0-2.8 2.2-5 5-5s4 5 4 5 1.2 5 4 5 5-2.2 5-5-2.2-5-5-5-4 5-4 5-1.2 5-4 5-5-2.2-5-5Z"
          stroke="#D9008D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <div class="chat-title">व्योम</div>
      <div class="chat-sub">ऑनलाइन</div>
    </div>
    <div class="ca-spacer"></div>
    <div class="ca-ic"><span class="material-symbols-rounded">call</span></div>
    <div class="ca-ic"><span class="material-symbols-rounded">more_vert</span></div>
  </div>`;

const _p5sticky = `
  <div style="padding:0 16px;background:var(--bg-chat-sec);">
    <div class="sticky-status">
      <div class="ss-ic"><span class="material-symbols-rounded">bar_chart</span></div>
      <div class="ss-body">
        <div class="ss-head">घर का नेट: रमेश</div>
        <div class="ss-status"><span class="lbl">स्थिति: </span>सेटअप बाकी है</div>
      </div>
    </div>
  </div>`;

const _p5chatInput = `
  <div class="chat-input">
    <div class="ci-box">यहाँ पूछें....</div>
    <div class="ci-send"><span class="material-symbols-rounded">send</span></div>
  </div>`;

const _p5bookingTopbar = (title) => `
  <div class="topbar">
    <div class="tb-row">
      <div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div>
      ${title ? `<div class="tb-inline-title">${title}</div>` : ''}
      <div class="tb-spacer"></div>
      <div class="tb-icon"><span class="material-symbols-rounded">headset_mic</span></div>
      <div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div>
    </div>
  </div>`;

/* ---- screen 25: chat — day confirmed + security note ---- */
window.SCREENS.push({ name: "व्योम चैट — विज़िट कन्फर्म", html: `
  <div class="app">
    ${_p5statusbar}
    ${_p5chatAppbar}
    ${_p5sticky}
    <div class="chat-body" style="padding-top:4px;">
      <div class="msg msg-user">
        <div class="bubble">
          वाला दिन मिल गया है ⏰ 26 सितम्बर को सेट-अप…
          <div style="margin-top:6px;">यह दिन सही है</div>
          <div class="b-time">10:15 AM ✓</div>
        </div>
      </div>
      <div class="msg msg-bot">
        <div class="bubble">
          आपका नेट लगवाने का दिन कन्फर्म हो गया है। नेट ⏰ <b>25 दिसंबर</b> को लगेगा।
          <div class="b-time">10:15 AM</div>
        </div>
      </div>
      <div class="msg msg-bot">
        <div class="bubble">
          अब आप आराम करें। आपका नेट लगाने के लिए इंजीनियर ढूंढा जा रहा है। इंजीनियर मिलते ही हम आपको बता देंगे।
          <div style="margin-top:14px;">जब इंजीनियर आएंगे और नेट बॉक्स लगाएंगे, नेट बॉक्स सिक्युरिटी ₹300 देना होता है और ये राशि रिफंडेबल होती है।</div>
          <div class="b-time">10:15 AM</div>
        </div>
      </div>
    </div>
    ${_p5chatInput}
  </div>
` });

/* ---- screen 26: chat — engineer reached + choose first recharge CTA ---- */
window.SCREENS.push({ name: "व्योम चैट — रिचार्ज के विकल्प", html: `
  <div class="app">
    ${_p5statusbar}
    ${_p5chatAppbar}
    ${_p5sticky}
    <div class="chat-body" style="padding-top:4px;">
      <div class="msg msg-bot">
        <div class="bubble">
          इंजीनियर पहुच गया है
          <div class="b-time">10:15 AM</div>
        </div>
      </div>
      <div class="msg msg-bot" style="max-width:88%;">
        <div class="bubble">
          अगर आप नेट सेटअप आगे बढ़ाना चाहते हैं, तो अपना पहला रिचार्ज चुनें, ताकि सेटअप पूरा हो सके।
          <div style="margin-top:14px;">साथ मे ही आपको नेट बॉक्स के लिए ₹300 की सिक्योरिटी का भी भुगतान करना होगा। नेट बॉक्स वापस करने पर यह राशि वापस मिल जाती है।</div>
          <div class="b-time">10:15 AM</div>
          <div class="chat-cta">
            <button class="c-brand" style="font-weight:700;">रिचार्ज के विकल्प देखें</button>
          </div>
        </div>
      </div>
    </div>
    ${_p5chatInput}
  </div>
` });

/* ---- screen 27: PlanSelectionScreenF — recharge radio list, none selected ---- */
window.SCREENS.push({ name: "अपना पहला रिचार्ज चुनें", html: `
  <div class="app">
    ${_p5statusbar}
    ${_p5bookingTopbar('')}
    <div class="content">
      <div class="ty-t2 c-pri" style="padding:8px 0 16px;">अपना पहला रिचार्ज चुनें।</div>
      <div class="opt-list" style="gap:24px;">
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">1 दिन </span><span class="opt-hint">(24 घंटे)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">2 दिन </span><span class="opt-hint">(48 घंटे)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">7 दिन </span><span class="opt-hint">(1 हफ्ता)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">14 दिन </span><span class="opt-hint">(2 हफ्ते)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">28 दिन </span><span class="opt-hint">(4 हफ्ते)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">84 दिन </span><span class="opt-hint">(12 हफ्ते)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">112 दिन </span><span class="opt-hint">(16 हफ्ते)</span></div>
        </div>
        <div class="opt-card" style="margin-bottom:48px;">
          <div class="opt-radio"></div>
          <div><span class="opt-label">360 दिन </span><span class="opt-hint">(51 हफ्ते)</span></div>
        </div>
      </div>
    </div>
  </div>
` });

/* ---- screen 28: PlanSelectionScreenF — "2 दिन" selected, ₹45 price pill revealed ---- */
window.SCREENS.push({ name: "पहला रिचार्ज — 2 दिन चुना", html: `
  <div class="app">
    ${_p5statusbar}
    ${_p5bookingTopbar('')}
    <div class="content">
      <div class="ty-t2 c-pri" style="padding:8px 0 16px;">अपना पहला रिचार्ज चुनें।</div>
      <div class="opt-list" style="gap:24px;">
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">1 दिन </span><span class="opt-hint">(24 घंटे)</span></div>
        </div>
        <div class="opt-card sel">
          <div class="opt-radio"></div>
          <div style="flex:1;"><span class="opt-label">2 दिन </span><span class="opt-hint">(48 घंटे)</span></div>
          <div style="display:flex;align-items:center;gap:4px;background:var(--booking-cta-bg);color:var(--booking-cta-fg);border-radius:12px;padding:8px 16px 8px 24px;">
            <span class="ty-l2">₹45</span>
            <span class="material-symbols-rounded" style="font-size:20px;color:var(--icon-action);">chevron_right</span>
          </div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">7 दिन </span><span class="opt-hint">(1 हफ्ता)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">14 दिन </span><span class="opt-hint">(2 हफ्ते)</span></div>
        </div>
        <div class="opt-card">
          <div class="opt-radio"></div>
          <div><span class="opt-label">28 दिन </span><span class="opt-hint">(4 हफ्ते)</span></div>
        </div>
        <div class="opt-card" style="margin-bottom:48px;">
          <div class="opt-radio"></div>
          <div><span class="opt-label">84 दिन </span><span class="opt-hint">(12 हफ्ते)</span></div>
        </div>
      </div>
    </div>
  </div>
` });

/* ---- screen 29: bill / cost breakdown — कुल देय ₹325, भुगतान करें (₹325) ---- */
window.SCREENS.push({ name: "बिल का विवरण", html: `
  <div class="app">
    ${_p5statusbar}
    ${_p5bookingTopbar('बिल का विवरण')}
    <div class="content">
      <div style="height:8px;background:var(--bg-neutral-tertiary);margin:0 -16px 8px;"></div>
      <div class="cost-row">
        <span class="ty-b1 c-pri">2 दिन का रिचार्ज</span>
        <span class="ty-b1 c-pri">₹45</span>
      </div>
      <div class="cost-divider"></div>
      <div class="cost-row" style="padding-bottom:4px;">
        <span class="ty-b1 c-pri">नेट बॉक्स की सिक्योरिटी</span>
        <span class="ty-b1 c-pri">₹300</span>
      </div>
      <div class="ty-b2 c-pos" style="padding-bottom:16px;">नेट बॉक्स वापस करने पर ₹300 पूरे वापस मिल जाएंगे</div>
      <div class="cost-divider"></div>
      <div class="cost-row">
        <span class="ty-t2 c-pri">कुल देय</span>
        <span class="ty-t2 c-pri">₹325</span>
      </div>
    </div>
    <div class="btn-bar">
      <button class="wbtn wbtn-primary">भुगतान करें (₹325)</button>
    </div>
  </div>
` });
