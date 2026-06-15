/* ============================================================
   Wiom prototype — part 4 (screens 19–24)
   19 voice-route recorded (VoiceRecordingScreen) ·
   20 chat booking-confirmed history (ChatScreen + ContactCard) ·
   21 chat "नेट लगाने का दिन पक्का करें" (ChatScreen TEXT_CTA) ·
   22 chat day-confirmed + typing (ChatScreen) ·
   23 chat day confirmed → "25 दिसंबर" (ChatScreen) ·
   24 chat engineer-search + security deposit (ChatScreen)
   Source of truth: feature/chat/.../ui/{ChatScreen,ChatComponents,
   ChatBubbleComponents,VoiceRecordingScreen,WiomChatInputField}.kt
   ============================================================ */
window.SCREENS = window.SCREENS || [];

/* shared status bar (Android) */
const P4_STATUS = `
  <div class="statusbar">
    <span>4:35 PM</span>
    <span class="sb-right">
      <span class="material-symbols-rounded">wifi</span>
      <span class="material-symbols-rounded">network_cell</span>
      <span class="material-symbols-rounded">battery_full</span>
      <span>50%</span>
    </span>
  </div>`;

/* shared chat app bar (व्योम / ऑनलाइन) — infinity avatar + call + more_vert */
const P4_APPBAR = `
  <div class="chat-appbar">
    <div class="chat-avatar"><span class="material-symbols-rounded">all_inclusive</span></div>
    <div>
      <div class="chat-title">व्योम</div>
      <div class="chat-sub">ऑनलाइन</div>
    </div>
    <div class="ca-spacer"></div>
    <div class="ca-ic"><span class="material-symbols-rounded">call</span></div>
    <div class="ca-ic"><span class="material-symbols-rounded">more_vert</span></div>
  </div>`;

/* shared sticky status — "घर का नेट: रमेश / स्थिति: सेटअप बाकी है" */
const P4_STICKY = `
  <div class="sticky-status">
    <div class="ss-ic"><span class="material-symbols-rounded">cottage</span></div>
    <div class="ss-body">
      <div class="ss-head">घर का नेट: रमेश</div>
      <div class="ss-status"><span class="lbl">स्थिति:</span> <b>सेटअप बाकी है</b></div>
    </div>
  </div>`;

/* shared chat typing input field */
const P4_INPUT = `
  <div class="chat-input">
    <div class="ci-box">यहाँ पूछें....</div>
    <div class="ci-send"><span class="material-symbols-rounded">send</span></div>
  </div>`;

/* typing-indicator bubble (Lottie chat_typing_dots) */
const P4_TYPING = `
  <div class="msg msg-bot">
    <div class="bubble" style="padding:10px 16px;">
      <span style="display:inline-flex;gap:6px;align-items:center;">
        <span style="width:8px;height:8px;border-radius:50%;background:var(--n-800);display:inline-block;"></span>
        <span style="width:8px;height:8px;border-radius:50%;background:var(--n-800);display:inline-block;"></span>
        <span style="width:8px;height:8px;border-radius:50%;background:var(--n-800);display:inline-block;"></span>
      </span>
    </div>
  </div>`;

/* reusable customer reply with reply-preview of the day-confirm Wiom message */
const P4_USER_REPLY = `
  <div class="msg msg-user" style="max-width:80%;">
    <div class="bubble" style="background:#fff;">
      <div style="background:var(--bg-chat-sec);border-radius:8px;border-left:4px solid var(--gs-500);padding:8px;margin-bottom:6px;">
        <div class="ty-l3 c-pri">Wiom</div>
        <div class="ty-b3 c-sec" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">नेट लगवाने का दिन पक्का करें, आपके लिए जल्दी वाला दिन मिल गया है ⏰ 26 सितम्बर को सेट-अप…</div>
      </div>
      यह दिन सही है
      <div class="b-time" style="display:flex;align-items:center;justify-content:flex-end;gap:4px;">10:15 AM <span class="material-symbols-rounded" style="font-size:12px;">check</span></div>
    </div>
  </div>`;

/* ---- screen 19 : voice-route recorded (VoiceRecordingScreen, RECORDED phase) ---- */
window.SCREENS.push({ name: "19 · रास्ता बताएं (रिकॉर्डेड)", html: `
  ${P4_STATUS}
  <div class="topbar">
    <div class="tb-row">
      <div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div>
      <div class="tb-spacer"></div>
    </div>
  </div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;">
    <div class="illus" style="margin:40px 0 24px;">
      <svg width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 96 C60 100 70 70 90 66 C112 62 120 86 150 78" stroke="#A7A1B2" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3 8"/>
        <rect x="76" y="32" width="28" height="46" rx="14" fill="#D9008D"/>
        <rect x="86" y="42" width="8" height="20" rx="4" fill="#fff"/>
        <path d="M72 86 C78 92 102 92 108 86" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M90 88 V102 M82 102 H98" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M58 44 C54 50 54 60 58 66 M50 38 C42 48 42 62 50 72" stroke="#D9008D" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M122 44 C126 50 126 60 122 66 M130 38 C138 48 138 62 130 72" stroke="#D9008D" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <circle cx="148" cy="48" r="6" stroke="#D9008D" stroke-width="2.5"/>
        <path d="M148 54 V70 M141 70 H155" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="ty-t2 c-pri" style="text-align:center;">रास्ता बताएं — अपनी आवाज़ में</div>
    <div class="ty-b1 c-pri" style="text-align:center;margin-top:8px;">अपनी आवाज़ में रास्ता बताएं ताकि टेक्निशियन सीधे आपके घर पहुंच सके। यह ज़रूरी नहीं है — चाहें तो छोड़ भी सकते हैं।</div>

    <div style="width:100%;background:var(--bg-neutral-sec);border:1px solid var(--stroke-pri);border-radius:12px;padding:16px;margin-top:24px;">
      <span class="material-symbols-rounded" style="color:var(--brand-600);font-size:18px;vertical-align:top;">format_quote</span>
      <span class="ty-b2 c-sec" style="font-style:italic;">"मेन रोड से अंदर आकर पहले दाएं मुड़ें, नीला गेट है, दूसरी मंज़िल।"</span>
    </div>

    <div style="width:100%;background:var(--bg-neutral-pri);border:1px solid var(--stroke-pri);border-radius:16px;padding:24px 16px;margin-top:32px;display:flex;align-items:center;gap:16px;">
      <div style="width:48px;height:48px;border-radius:9999px;background:var(--pri-cta-bg);color:#fff;display:flex;align-items:center;justify-content:center;flex:none;">
        <span class="material-symbols-rounded" style="font-size:24px;">play_arrow</span>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:12px;">
        <div class="ty-b1-bold c-pri">00:19</div>
        <svg width="100%" height="20" viewBox="0 0 160 20" preserveAspectRatio="none">
          <g fill="#D9008D">
            <rect x="0" y="7" width="4" height="6" rx="2"/>
            <rect x="14" y="3" width="4" height="14" rx="2"/>
            <rect x="28" y="6" width="4" height="8" rx="2"/>
            <rect x="42" y="1" width="4" height="18" rx="2"/>
            <rect x="56" y="5" width="4" height="10" rx="2"/>
            <rect x="70" y="8" width="4" height="4" rx="2"/>
            <rect x="84" y="2" width="4" height="16" rx="2"/>
            <rect x="98" y="6" width="4" height="8" rx="2"/>
            <rect x="112" y="4" width="4" height="12" rx="2"/>
            <rect x="126" y="7" width="4" height="6" rx="2"/>
          </g>
        </svg>
      </div>
      <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex:none;color:var(--pri-text);">
        <span class="material-symbols-rounded" style="font-size:24px;">delete</span>
      </div>
    </div>
  </div>
  <div class="btn-bar" style="box-shadow:0 -2px 8px rgba(0,0,0,.08);">
    <button class="wbtn wbtn-primary">पता कन्फर्म करें</button>
  </div>
` });

/* ---- screen 20 : chat — booking confirmed history + ContactCard ---- */
window.SCREENS.push({ name: "20 · चैट · बुकिंग कन्फर्म", html: `
  ${P4_STATUS}
  ${P4_APPBAR}
  <div class="chat-body">
    <div class="sticky-status">
      <div class="ss-ic"><span class="material-symbols-rounded">cottage</span></div>
      <div class="ss-body">
        <div class="ss-head">घर का नेट: रमेश</div>
        <div class="ss-status"><span class="lbl">स्थिति:</span> <b>बुकिंग कन्फर्म</b></div>
      </div>
    </div>

    <div class="msg msg-bot">
      <div class="bubble">आपके घर के नेट का नाम <b>Ramesh Ji Ka Net</b> सेव हो गया है।<div class="b-time">10:15 AM</div></div>
    </div>
    <div class="msg msg-bot">
      <div class="bubble">आपका <b>पता</b> भी सेव हो गया है।<div class="b-time">10:15 AM</div></div>
    </div>
    <div class="msg msg-bot">
      <div class="bubble">बहुत बढ़िया, आपकी <b>बुकिंग कन्फर्म</b> हो गई है।<div class="b-time">10:15 AM</div></div>
    </div>
    <div class="msg msg-bot">
      <div class="bubble"><b>2-3 दिन</b> में आपके घर पर नेट लग जाएगा।<div class="b-time">10:15 AM</div></div>
    </div>
    <div class="msg msg-bot">
      <div class="bubble">अगले <b>24 घंटे</b> में नेट लगवाने का दिन कन्फर्म करने के लिए व्योम से कॉल आएगा।<br><br><b>नंबर को सेव कर लें</b>, ताकि कॉल मिस ना हो :<div class="b-time">10:15 AM</div></div>
    </div>

    <!-- ContactCard (MessageType.CONTACT) -->
    <div class="msg msg-bot" style="max-width:88%;">
      <div class="bubble" style="padding:0;overflow:hidden;">
        <div style="display:flex;align-items:center;gap:12px;padding:16px;">
          <div style="width:40px;height:40px;border-radius:24px;background:#fff;display:flex;align-items:center;justify-content:center;flex:none;color:var(--hint-text);">
            <span class="material-symbols-rounded" style="font-size:24px;">person</span>
          </div>
          <div>
            <div class="ty-l2 c-pri">Wiom</div>
            <div class="ty-b3 c-pri">+91 88803 22222</div>
          </div>
        </div>
        <div style="height:1px;background:var(--stroke-pri);"></div>
        <div style="padding:12px;text-align:center;" class="ty-b2 c-brand">नंबर सेव करें</div>
      </div>
    </div>
  </div>
  ${P4_INPUT}
` });

/* ---- screen 21 : chat — "नेट लगाने का दिन पक्का करें" (TEXT_CTA, active) ---- */
/* NOTE: the yellow "This is not part of design" box in the reference PNG is a
   designer note, NOT UI. It is intentionally NOT rendered. Plausible prior
   history is shown instead, matching the real ChatScreen. */
window.SCREENS.push({ name: "21 · चैट · दिन पक्का करें", html: `
  ${P4_STATUS}
  ${P4_APPBAR}
  <div class="chat-body">
    ${P4_STICKY}

    <!-- plausible prior history -->
    <div class="msg msg-bot">
      <div class="bubble">बहुत बढ़िया, आपकी <b>बुकिंग कन्फर्म</b> हो गई है। <b>2-3 दिन</b> में आपके घर पर नेट लग जाएगा।<div class="b-time">10:12 AM</div></div>
    </div>

    <!-- main TEXT_CTA message -->
    <div class="msg msg-bot">
      <div class="bubble" style="padding-bottom:0;">
        <div style="padding:2px 4px 0;">
          <b>नेट लगाने का दिन पक्का करें</b><br>
          आपके लिए जल्दी वाला दिन मिल गया है ⏰<br>
          <b>26 सितम्बर</b> को नेट लगवाना चाहेंगे?
          <div class="b-time">10:15 AM</div>
        </div>
        <div class="chat-cta" style="margin-top:0;background:transparent;border-radius:0;">
          <button>यह दिन सही है</button>
          <button>कोई अन्य दिन चुनें</button>
        </div>
      </div>
    </div>
  </div>
  ${P4_INPUT}
` });

/* ---- screen 22 : chat — day confirmed (CTA disabled) + user reply + typing ---- */
window.SCREENS.push({ name: "22 · चैट · दिन चुना (टाइपिंग)", html: `
  ${P4_STATUS}
  ${P4_APPBAR}
  <div class="chat-body">
    ${P4_STICKY}

    <!-- the prior TEXT_CTA message, now answered → CTA disabled -->
    <div class="msg msg-bot">
      <div class="bubble" style="padding-bottom:0;">
        <div style="padding:2px 4px 0;">
          <b>नेट लगाने का दिन पक्का करें</b><br>
          आपके लिए जल्दी वाला दिन मिल गया है ⏰<br>
          <b>26 सितम्बर</b> को नेट लगवाना चाहेंगे?
          <div class="b-time">10:15 AM</div>
        </div>
        <div class="chat-cta" style="margin-top:0;background:transparent;border-radius:0;">
          <button class="disabled">यह दिन सही है</button>
          <button class="disabled">कोई अन्य दिन चुनें</button>
        </div>
      </div>
    </div>

    ${P4_USER_REPLY}
    ${P4_TYPING}
  </div>
  ${P4_INPUT}
` });

/* ---- screen 23 : chat — day confirmed → "25 दिसंबर" + typing ---- */
window.SCREENS.push({ name: "23 · चैट · दिन कन्फर्म", html: `
  ${P4_STATUS}
  ${P4_APPBAR}
  <div class="chat-body">
    ${P4_STICKY}

    <div class="msg msg-bot">
      <div class="bubble" style="opacity:.55;">
        <b>26 सितम्बर</b> को नेट लगवाना चाहेंगे?
      </div>
    </div>

    ${P4_USER_REPLY}

    <div class="msg msg-bot">
      <div class="bubble">आपका नेट लगवाने का दिन कन्फर्म हो गया है। नेट ⏰ <b>25 दिसंबर</b> को लगेगा।<div class="b-time">10:15 AM</div></div>
    </div>

    ${P4_TYPING}
  </div>
  ${P4_INPUT}
` });

/* ---- screen 24 : chat — engineer search + ₹300 security deposit ---- */
window.SCREENS.push({ name: "24 · चैट · इंजीनियर ढूंढा जा रहा", html: `
  ${P4_STATUS}
  ${P4_APPBAR}
  <div class="chat-body">
    ${P4_STICKY}

    <div class="msg msg-bot">
      <div class="bubble" style="opacity:.55;">यह दिन सही है</div>
    </div>

    ${P4_USER_REPLY}

    <div class="msg msg-bot">
      <div class="bubble">आपका नेट लगवाने का दिन कन्फर्म हो गया है। नेट ⏰ <b>25 दिसंबर</b> को लगेगा।<div class="b-time">10:15 AM</div></div>
    </div>

    <div class="msg msg-bot">
      <div class="bubble">अब आप आराम करें। आपका नेट लगाने के लिए इंजीनियर ढूंढा जा रहा है। इंजीनियर मिलते ही हम आपको बता देंगे।<br><br>जब इंजीनियर आएंगे और नेट बॉक्स लगाएंगे, नेट बॉक्स सिक्युरिटी ₹300 देना होता है और ये राशि रिफंडेबल होती है।<div class="b-time">10:15 AM</div></div>
    </div>
  </div>
  ${P4_INPUT}
` });
