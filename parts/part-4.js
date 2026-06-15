/* ============================================================
   Wiom prototype — part 4 (screens 19–24)
   ============================================================ */
window.SCREENS = window.SCREENS || [];

/* ---- shared chat header + status card snippets (व्योम) ---- */
/* reused inline below per screen */

/* ---- screen 19: रास्ता बताएं — अपनी आवाज़ में (voice route) ---- */
window.SCREENS.push({ name: "रास्ता बताएं — अपनी आवाज़ में", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="back material-symbols-rounded">arrow_back</span><span class="spacer"></span><span class="tb-icon material-symbols-rounded ico-sm">support_agent</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="illus" style="margin:28px 0 8px;">
      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M40 96 q40 -34 60 -34 q22 0 60 34" stroke="var(--t-disabled)" stroke-width="2.5" stroke-dasharray="5 7" stroke-linecap="round" fill="none"/>
        <rect x="86" y="30" width="28" height="48" rx="14" fill="var(--brand)"/>
        <rect x="96" y="40" width="8" height="22" rx="4" fill="#fff"/>
        <path d="M82 70 q18 16 36 0" stroke="#161021" stroke-width="3" stroke-linecap="round" fill="none"/>
        <line x1="100" y1="78" x2="100" y2="92" stroke="#161021" stroke-width="3" stroke-linecap="round"/>
        <line x1="90" y1="92" x2="110" y2="92" stroke="#161021" stroke-width="3" stroke-linecap="round"/>
        <path d="M70 40 q-7 8 0 16" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M62 34 q-12 14 0 28" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M130 40 q7 8 0 16" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M138 34 q12 14 0 28" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <circle cx="156" cy="48" r="6" fill="none" stroke="var(--brand)" stroke-width="2.5"/>
        <circle cx="156" cy="48" r="2" fill="var(--brand)"/>
      </svg>
    </div>
    <h1 class="h-lg" style="margin:8px 0 12px;">रास्ता बताएं — अपनी आवाज़ में</h1>
    <p class="body-lg muted" style="margin-bottom:20px;">अपनी आवाज़ में रास्ता बताएं ताकि टेक्निशियन सीधे आपके घर पहुंच सके। यह ज़रूरी नहीं है — चाहें तो छोड़ भी सकते हैं।</p>
    <div style="display:flex;gap:10px;background:var(--info-tint);border-radius:var(--r-lg);padding:14px 16px;margin-bottom:20px;">
      <span class="material-symbols-rounded" style="color:var(--info);font-size:20px;">format_quote</span>
      <span class="body-md" style="font-style:italic;color:var(--t-primary);line-height:1.5;">“मेन रोड से अंदर आकर पहले दाएं मुड़ें, नीला गेट है, दूसरी मंज़िल।”</span>
    </div>
    <div style="display:flex;align-items:center;gap:14px;background:#fff;border:1px solid var(--b-subtle);border-radius:var(--r-lg);padding:16px;box-shadow:var(--sh-sm);">
      <span style="width:52px;height:52px;border-radius:var(--r-full);background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;flex:none;"><span class="material-symbols-rounded">play_arrow</span></span>
      <div style="flex:1;">
        <div class="label-md" style="margin-bottom:6px;">00:19</div>
        <svg width="160" height="22" viewBox="0 0 160 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          ${[6,12,8,16,10,18,11,15,7,13,9,17,8,12,6].map((h,i)=>`<rect x="${i*10+2}" y="${11-h/2}" width="4" height="${h}" rx="2" fill="var(--brand)"/>`).join('')}
        </svg>
      </div>
      <span style="width:44px;height:44px;border-radius:var(--r-full);border:1px solid var(--b-default);display:flex;align-items:center;justify-content:center;flex:none;color:var(--t-secondary);"><span class="material-symbols-rounded ico-sm">delete</span></span>
    </div>
  </div>
  <div class="btn-bar"><button class="btn btn-primary">पता कन्फर्म करें</button></div>
` });

/* ---- screen 20: chat — booking confirmed + save number ---- */
window.SCREENS.push({ name: "व्योम चैट — बुकिंग कन्फर्म", html: `
  <div class="status-card" style="margin:12px 16px;">
    <span class="sc-icon material-symbols-rounded">home</span>
    <div style="flex:1;">
      <div class="body-sm muted">घर का नेट: रमेश</div>
      <div class="body-md">स्थिति: <b>बुकिंग कन्फर्म</b></div>
    </div>
  </div>
  <div class="chat-body">
    <div class="bubble bubble-bot">आपके घर के नेट का नाम <b>Ramesh Ji Ka Net</b> सेव हो गया है।<div class="bubble-time">10:15 AM</div></div>
    <div class="bubble bubble-bot">आपका <b>पता</b> भी सेव हो गया है।<div class="bubble-time">10:15 AM</div></div>
    <div class="bubble bubble-bot">बहुत बढ़िया, आपकी <b>बुकिंग कन्फर्म</b> हो गई है।<br><br><b>2-3 दिन</b> में आपके घर पर नेट लग जाएगा।<div class="bubble-time">10:15 AM</div></div>
    <div class="bubble bubble-bot">अगले <b>24 घंटे</b> में नेट लगवाने का दिन कन्फर्म करने के लिए व्योम से कॉल आएगा।<br><br><b>नंबर को सेव कर लें</b>, ताकि कॉल मिस ना हो :<div class="bubble-time">10:15 AM</div></div>
    <div class="bubble bubble-bot" style="padding:0;overflow:hidden;width:84%;">
      <div style="display:flex;align-items:center;gap:14px;padding:16px;">
        <span style="width:44px;height:44px;border-radius:var(--r-full);background:var(--s-strong);color:#fff;display:flex;align-items:center;justify-content:center;flex:none;"><span class="material-symbols-rounded">person</span></span>
        <div><div class="label-lg">Wiom</div><div class="body-md muted">+91 88803 22222</div></div>
      </div>
      <button style="display:block;width:100%;background:none;border:none;border-top:1px solid var(--b-default);padding:14px;color:var(--brand);font-weight:700;font-size:15px;font-family:inherit;cursor:pointer;">नंबर सेव करें</button>
    </div>
  </div>
` });

/* ---- screen 21: व्योम chat — choose setup day ---- */
window.SCREENS.push({ name: "व्योम चैट — दिन पक्का करें", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="chat-header">
    <span class="chat-avatar"><svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 7c0-3 2-5 4.5-5S15 4 15 7s2 5 4.5 5S26 10 26 7 24 2 21.5 2 17 4 17 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M19.5 7c0-3-2-5-4.5-5S11 4 11 7 9 12 6.5 12 2 10 2 7s2-5 4.5-5S11 4 11 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/></svg></span>
    <div style="flex:1;"><div class="chat-name">व्योम</div><div class="chat-status">ऑनलाइन</div></div>
    <span class="tb-icon material-symbols-rounded ico-sm">call</span>
    <span class="tb-icon material-symbols-rounded ico-sm">more_vert</span>
  </div>
  <div class="status-card" style="margin:12px 16px;">
    <span class="sc-icon material-symbols-rounded">cottage</span>
    <div style="flex:1;">
      <div class="body-sm muted">घर का नेट: रमेश</div>
      <div class="body-md">स्थिति: <b>सेटअप बाकी है</b></div>
    </div>
  </div>
  <div class="chat-body">
    <div class="bubble bubble-bot">आपके घर के नेट का नाम <b>Ramesh Ji Ka Net</b> सेव हो गया है।<div class="bubble-time">10:14 AM</div></div>
    <div class="bubble bubble-bot" style="padding-bottom:0;">
      नेट लगवाने का दिन पक्का करें<br>आपके लिए जल्दी वाला दिन मिल गया है ⏰<br><b>26 सितम्बर</b> को नेट लगवाना चाहेंगे?
      <div class="bubble-time" style="margin-bottom:8px;">10:15 AM</div>
      <div class="bubble-actions" style="margin:0 -16px;">
        <button>यह दिन सही है</button>
        <button>कोई अन्य दिन चुनें</button>
      </div>
    </div>
  </div>
  <div class="chat-input">
    <span class="ci-box">यहाँ पूछें....</span>
    <span class="ci-send"><span class="material-symbols-rounded">send</span></span>
  </div>
` });

/* ---- screen 22: व्योम chat — user picked day, typing ---- */
window.SCREENS.push({ name: "व्योम चैट — दिन चुना (टाइपिंग)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="chat-header">
    <span class="chat-avatar"><svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 7c0-3 2-5 4.5-5S15 4 15 7s2 5 4.5 5S26 10 26 7 24 2 21.5 2 17 4 17 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M19.5 7c0-3-2-5-4.5-5S11 4 11 7 9 12 6.5 12 2 10 2 7s2-5 4.5-5S11 4 11 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/></svg></span>
    <div style="flex:1;"><div class="chat-name">व्योम</div><div class="chat-status">ऑनलाइन</div></div>
    <span class="tb-icon material-symbols-rounded ico-sm">call</span>
    <span class="tb-icon material-symbols-rounded ico-sm">more_vert</span>
  </div>
  <div class="status-card" style="margin:12px 16px;">
    <span class="sc-icon material-symbols-rounded">cottage</span>
    <div style="flex:1;">
      <div class="body-sm muted">घर का नेट: रमेश</div>
      <div class="body-md">स्थिति: <b>सेटअप बाकी है</b></div>
    </div>
  </div>
  <div class="chat-body">
    <div class="bubble bubble-bot" style="padding-bottom:0;">
      आपके लिए जल्दी वाला दिन मिल गया है ⏰<br><b>26 सितम्बर</b> को नेट लगवाना चाहेंगे?
      <div class="bubble-time" style="margin-bottom:8px;">10:15 AM</div>
      <div class="bubble-actions" style="margin:0 -16px;">
        <button style="color:var(--t-disabled);">यह दिन सही है</button>
        <button style="color:var(--t-disabled);">कोई अन्य दिन चुनें</button>
      </div>
    </div>
    <div class="bubble bubble-user" style="background:#fff;box-shadow:var(--sh-sm);">
      <div class="label-md" style="margin-bottom:4px;">Wiom</div>
      <div class="body-md muted">नेट लगवाने का दिन पक्का करें, आपके लिए जल्दी वाला दिन मिल गया है ⏰ 26 सितम्बर को सेट-अप...</div>
      <div class="body-lg" style="margin-top:12px;">यह दिन सही है</div>
      <div class="bubble-time">10:15 AM ✓</div>
    </div>
    <div class="bubble bubble-bot" style="align-self:flex-start;padding:18px 20px;"><span style="letter-spacing:4px;color:var(--t-secondary);font-size:18px;">•••</span></div>
  </div>
  <div class="chat-input">
    <span class="ci-box">यहाँ पूछें....</span>
    <span class="ci-send"><span class="material-symbols-rounded">send</span></span>
  </div>
` });

/* ---- screen 23: व्योम chat — day confirmed (25 दिसंबर) ---- */
window.SCREENS.push({ name: "व्योम चैट — दिन कन्फर्म", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="chat-header">
    <span class="chat-avatar"><svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 7c0-3 2-5 4.5-5S15 4 15 7s2 5 4.5 5S26 10 26 7 24 2 21.5 2 17 4 17 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M19.5 7c0-3-2-5-4.5-5S11 4 11 7 9 12 6.5 12 2 10 2 7s2-5 4.5-5S11 4 11 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/></svg></span>
    <div style="flex:1;"><div class="chat-name">व्योम</div><div class="chat-status">ऑनलाइन</div></div>
    <span class="tb-icon material-symbols-rounded ico-sm">call</span>
    <span class="tb-icon material-symbols-rounded ico-sm">more_vert</span>
  </div>
  <div class="status-card" style="margin:12px 16px;">
    <span class="sc-icon material-symbols-rounded">cottage</span>
    <div style="flex:1;">
      <div class="body-sm muted">घर का नेट: रमेश</div>
      <div class="body-md">स्थिति: <b>सेटअप बाकी है</b></div>
    </div>
  </div>
  <div class="chat-body">
    <div class="bubble bubble-user" style="background:#fff;box-shadow:var(--sh-sm);">
      <div class="label-md" style="margin-bottom:4px;">Wiom</div>
      <div class="body-md muted">नेट लगवाने का दिन पक्का करें, आपके लिए जल्दी वाला दिन मिल गया है ⏰ 26 सितम्बर को सेट-अप...</div>
      <div class="body-lg" style="margin-top:12px;">यह दिन सही है</div>
      <div class="bubble-time">10:15 AM ✓</div>
    </div>
    <div class="bubble bubble-bot">आपका नेट लगवाने का दिन कन्फर्म हो गया है।<br>नेट ⏰ <b>25 दिसंबर</b> को लगेगा।<div class="bubble-time">10:15 AM</div></div>
    <div class="bubble bubble-bot" style="align-self:flex-start;padding:18px 20px;"><span style="letter-spacing:4px;color:var(--t-secondary);font-size:18px;">•••</span></div>
  </div>
  <div class="chat-input">
    <span class="ci-box">यहाँ पूछें....</span>
    <span class="ci-send"><span class="material-symbols-rounded">send</span></span>
  </div>
` });

/* ---- screen 24: व्योम chat — engineer + security deposit ---- */
window.SCREENS.push({ name: "व्योम चैट — इंजीनियर व सिक्युरिटी", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="chat-header">
    <span class="chat-avatar"><svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6.5 7c0-3 2-5 4.5-5S15 4 15 7s2 5 4.5 5S26 10 26 7 24 2 21.5 2 17 4 17 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M19.5 7c0-3-2-5-4.5-5S11 4 11 7 9 12 6.5 12 2 10 2 7s2-5 4.5-5S11 4 11 7" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round"/></svg></span>
    <div style="flex:1;"><div class="chat-name">व्योम</div><div class="chat-status">ऑनलाइन</div></div>
    <span class="tb-icon material-symbols-rounded ico-sm">call</span>
    <span class="tb-icon material-symbols-rounded ico-sm">more_vert</span>
  </div>
  <div class="status-card" style="margin:12px 16px;">
    <span class="sc-icon material-symbols-rounded">cottage</span>
    <div style="flex:1;">
      <div class="body-sm muted">घर का नेट: रमेश</div>
      <div class="body-md">स्थिति: <b>सेटअप बाकी है</b></div>
    </div>
  </div>
  <div class="chat-body">
    <div class="bubble bubble-user" style="background:#fff;box-shadow:var(--sh-sm);">
      <div class="label-md" style="margin-bottom:4px;">Wiom</div>
      <div class="body-md muted">नेट लगवाने का दिन पक्का करें, आपके लिए जल्दी वाला दिन मिल गया है ⏰ 26 सितम्बर को सेट-अप...</div>
      <div class="body-lg" style="margin-top:12px;">यह दिन सही है</div>
      <div class="bubble-time">10:15 AM ✓</div>
    </div>
    <div class="bubble bubble-bot">आपका नेट लगवाने का दिन कन्फर्म हो गया है।<br>नेट ⏰ <b>25 दिसंबर</b> को लगेगा।<div class="bubble-time">10:15 AM</div></div>
    <div class="bubble bubble-bot">अब आप आराम करें। आपका नेट लगाने के लिए इंजीनियर ढूंढा जा रहा है। इंजीनियर मिलते ही हम आपको बता देंगे।<br><br>जब इंजीनियर आएंगे और नेट बॉक्स लगाएंगे, नेट बॉक्स सिक्युरिटी ₹300 देना होता है और ये राशि रिफंडेबल होती है।<div class="bubble-time">10:15 AM</div></div>
  </div>
  <div class="chat-input">
    <span class="ci-box">यहाँ पूछें....</span>
    <span class="ci-send"><span class="material-symbols-rounded">send</span></span>
  </div>
` });
