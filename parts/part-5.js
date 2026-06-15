/* ============================================================
   Wiom prototype — part 5 (screens 25–29)
   ============================================================ */

/* ---- screen 25: chat — day confirmed + security note ---- */
window.SCREENS.push({ name: "Chat — day confirmed", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="chat-header">
    <div class="chat-avatar">
      <svg width="30" height="22" viewBox="0 0 30 22" fill="none">
        <path d="M8 11 C8 5 4 5 4 11 C4 17 8 17 8 11 C8 5 15 5 15 11 C15 17 22 17 22 11 C22 5 26 5 26 11 C26 17 22 17 22 11" stroke="var(--brand)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div style="flex:1;">
      <div class="chat-name">व्योम</div>
      <div class="chat-status">ऑनलाइन</div>
    </div>
    <span class="material-symbols-rounded ico" style="color:var(--t-primary);">call</span>
    <span class="material-symbols-rounded ico" style="color:var(--t-primary);">more_vert</span>
  </div>
  <div class="chat-body">
    <div class="status-card" style="margin:0 0 4px;">
      <span class="material-symbols-rounded sc-icon" style="color:var(--t-secondary);">bar_chart</span>
      <div>
        <div class="body-sm muted">घर का नेट: रमेश</div>
        <div class="body-md" style="color:var(--t-primary);">स्थिति: <b>सेटअप बाकी है</b></div>
      </div>
    </div>

    <div class="bubble bubble-user">
      <div style="color:var(--t-secondary);">वाला दिन मिल गया है ⏰ 26 सितम्बर को सेट-अप…</div>
    </div>
    <div class="bubble bubble-user" style="margin-top:-4px;">
      <div>यह दिन सही है</div>
      <div class="bubble-time">10:15 AM ✓</div>
    </div>

    <div class="bubble bubble-bot">
      <div>आपका नेट लगवाने का दिन कन्फर्म हो गया है। नेट ⏰ <b>25 दिसंबर</b> को लगेगा।</div>
      <div class="bubble-time">10:15 AM</div>
    </div>

    <div class="bubble bubble-bot">
      <div>अब आप आराम करें। आपका नेट लगाने के लिए इंजीनियर ढूंढा जा रहा है। इंजीनियर मिलते ही हम आपको बता देंगे।</div>
      <div style="height:14px;"></div>
      <div>जब इंजीनियर आएंगे और नेट बॉक्स लगाएंगे, नेट बॉक्स सिक्युरिटी ₹300 देना होता है और ये राशि रिफंडेबल होती है।</div>
      <div class="bubble-time">10:15 AM</div>
    </div>

    <div class="banner-note">
      <div class="body-sm" style="color:var(--neg);margin-bottom:4px;">This is not part of design</div>
      <div class="title-sm" style="color:var(--t-primary);">Once engineer assigned</div>
    </div>
  </div>
  <div class="chat-input">
    <div class="ci-box">यहाँ पूछें....</div>
    <div class="ci-send"><span class="material-symbols-rounded">send</span></div>
  </div>
` });

/* ---- screen 26: chat — engineer arrived + recharge CTA ---- */
window.SCREENS.push({ name: "Chat — engineer arrived", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="chat-header">
    <div class="chat-avatar">
      <svg width="30" height="22" viewBox="0 0 30 22" fill="none">
        <path d="M8 11 C8 5 4 5 4 11 C4 17 8 17 8 11 C8 5 15 5 15 11 C15 17 22 17 22 11 C22 5 26 5 26 11 C26 17 22 17 22 11" stroke="var(--brand)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div style="flex:1;">
      <div class="chat-name">व्योम</div>
      <div class="chat-status">ऑनलाइन</div>
    </div>
    <span class="material-symbols-rounded ico" style="color:var(--t-primary);">call</span>
    <span class="material-symbols-rounded ico" style="color:var(--t-primary);">more_vert</span>
  </div>
  <div class="chat-body">
    <div class="status-card" style="margin:0 0 4px;">
      <span class="material-symbols-rounded sc-icon" style="color:var(--t-secondary);">bar_chart</span>
      <div>
        <div class="body-sm muted">घर का नेट: रमेश</div>
        <div class="body-md" style="color:var(--t-primary);">स्थिति: <b>सेटअप बाकी है</b></div>
      </div>
    </div>

    <div class="bubble bubble-bot">
      <div>इंजीनियर पहुच गया है</div>
      <div class="bubble-time">10:15 AM</div>
    </div>

    <div class="bubble bubble-bot" style="max-width:92%;">
      <div>अगर आप नेट सेटअप आगे बढ़ाना चाहते हैं, तो अपना पहला रिचार्ज चुनें, ताकि सेटअप पूरा हो सके।</div>
      <div style="height:14px;"></div>
      <div>साथ मे ही आपको नेट बॉक्स के लिए ₹300 की सिक्योरिटी का भी भुगतान करना होगा। नेट बॉक्स वापस करने पर यह राशि वापस मिल जाती है।</div>
      <div class="bubble-time">10:15 AM</div>
      <div class="bubble-actions">
        <button>रिचार्ज के विकल्प देखें</button>
      </div>
    </div>
  </div>
  <div class="chat-input">
    <div class="ci-box">यहाँ पूछें....</div>
    <div class="ci-send"><span class="material-symbols-rounded">send</span></div>
  </div>
` });

/* ---- screen 27: choose first recharge (radio list, none selected) ---- */
window.SCREENS.push({ name: "Choose first recharge", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="h-lg" style="margin:8px 0 8px;">अपना पहला रिचार्ज चुनें।</div>
    <div class="radio-list">
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">1 दिन</span> <span class="rc-hint">(24 घंटे)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">2 दिन</span> <span class="rc-hint">(48 घंटे)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">7 दिन</span> <span class="rc-hint">(1 हफ्ता)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">14 दिन</span> <span class="rc-hint">(2 हफ्ते)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">28 दिन</span> <span class="rc-hint">(4 हफ्ते)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">84 दिन</span> <span class="rc-hint">(12 हफ्ते)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">112 दिन</span> <span class="rc-hint">(16 हफ्ते)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">360 दिन</span> <span class="rc-hint">(51 हफ्ते)</span></span></div>
    </div>
  </div>
` });

/* ---- screen 28: recharge list with 2 दिन selected (₹45 pill) ---- */
window.SCREENS.push({ name: "Recharge selected — 2 दिन", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="h-lg" style="margin:8px 0 8px;">अपना पहला रिचार्ज चुनें।</div>
    <div class="radio-list">
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">1 दिन</span> <span class="rc-hint">(24 घंटे)</span></span></div>
      <div class="radio-card sel" style="justify-content:space-between;">
        <span style="display:flex;align-items:center;gap:14px;"><span class="radio-dot"></span><span><span class="rc-label">2 दिन</span> <span class="rc-hint">(48 घंटे)</span></span></span>
        <span style="display:flex;align-items:center;gap:6px;background:var(--brand-soft);color:var(--brand-secondary);border-radius:var(--r-full);padding:10px 16px;font-size:16px;font-weight:700;">₹45 <span class="material-symbols-rounded ico-sm">chevron_right</span></span>
      </div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">7 दिन</span> <span class="rc-hint">(1 हफ्ता)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">14 दिन</span> <span class="rc-hint">(2 हफ्ते)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">28 दिन</span> <span class="rc-hint">(4 हफ्ते)</span></span></div>
      <div class="radio-card"><span class="radio-dot"></span><span><span class="rc-label">84 दिन</span> <span class="rc-hint">(12 हफ्ते)</span></span></div>
    </div>
  </div>
` });

/* ---- screen 29: bill detail — pay (end screen) ---- */
window.SCREENS.push({ name: "Bill detail — pay", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="title-sm" style="margin-left:4px;">बिल का विवरण</span><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div style="height:8px;border-radius:0;background:var(--s-muted);margin:0 -16px 16px;"></div>

    <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0 18px;">
      <span class="body-lg" style="color:var(--t-primary);">2 दिन का रिचार्ज</span>
      <span class="title-sm" style="font-weight:400;">₹45</span>
    </div>
    <div style="border-top:1px solid var(--b-subtle);"></div>

    <div style="padding:18px 0 4px;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span class="body-lg" style="color:var(--t-primary);">नेट बॉक्स की सिक्योरिटी</span>
        <span class="title-sm" style="font-weight:400;">₹300</span>
      </div>
      <div class="body-sm" style="color:var(--pos);margin-top:8px;">नेट बॉक्स वापस करने पर ₹300 पूरे वापस मिल जाएंगे</div>
    </div>
    <div style="border-top:1px solid var(--b-subtle);margin-top:16px;"></div>

    <div style="display:flex;justify-content:space-between;align-items:center;padding:20px 0;">
      <span class="h-lg">कुल देय</span>
      <span class="h-lg">₹325</span>
    </div>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">भुगतान करें (₹325)</button>
  </div>
` });
