/* ============================================================
   Wiom prototype — part 2 (screens 7–12)
   User details / confirm location / wifi name
   Source of truth: feature/booking/.../ui Compose screens.
   ============================================================ */
window.SCREENS = window.SCREENS || [];

/* ---- screen 7: UserDetailsScreen — empty (UserDetailsScreen.kt) ---- */
window.SCREENS.push({ name: "User details — खाली (UserDetailsScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div><div class="tb-spacer"></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content">
    <div class="ty-t3-med c-pri" style="margin-top:8px;">आगे की प्रक्रिया के लिए</div>

    <div class="wfield" style="margin-top:24px;margin-bottom:4px;">
      <label>आपका नंबर</label>
      <div class="winput" style="display:flex;align-items:center;gap:12px;">
        <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-no-action);">smartphone</span>
        <span class="ty-b1 c-hint" style="font-weight:400;">उदाहरण: 9876543210</span>
      </div>
    </div>
    <div class="ty-b3 c-sec">इसी नंबर पर आगे की जानकारी मिलती है</div>

    <div class="wfield" style="margin-top:32px;">
      <label>आपका नाम</label>
      <div class="winput" style="display:flex;align-items:center;gap:12px;">
        <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-no-action);">person</span>
        <span class="ty-b1 c-hint" style="font-weight:400;">उदाहरण: Ramesh</span>
      </div>
    </div>
  </div>
  <div class="btn-bar">
    <div class="ty-b3 c-sec" style="text-align:center;">आगे बढ़ने पर आप हमारे <span style="color:var(--pri-text);text-decoration:underline;">नियम और शर्तों</span> और <span style="color:var(--pri-text);text-decoration:underline;">गोपनीयता नीति</span> से सहमत होते हैं</div>
  </div>
` });

/* ---- screen 8: UserDetailsScreen — filled, CTA variant E/F (UserDetailsScreen.kt) ---- */
window.SCREENS.push({ name: "User details — भरा हुआ (UserDetailsScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div><div class="tb-spacer"></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content">
    <div class="ty-t3-med c-pri" style="margin-top:8px;">आगे की प्रक्रिया के लिए</div>

    <div class="wfield filled" style="margin-top:24px;margin-bottom:4px;">
      <label>आपका नंबर</label>
      <div class="winput" style="display:flex;align-items:center;gap:12px;">
        <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-no-action);">smartphone</span>
        <span class="ty-b1" style="font-weight:700;color:var(--pri-text);">9876543210</span>
      </div>
    </div>
    <div class="ty-b3 c-sec">इसी नंबर पर आगे की जानकारी मिलती है</div>

    <div class="wfield filled" style="margin-top:32px;">
      <label>आपका नाम</label>
      <div class="winput" style="display:flex;align-items:center;gap:12px;">
        <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-no-action);">person</span>
        <span class="ty-b1" style="font-weight:700;color:var(--pri-text);">Ramesh Kumar</span>
      </div>
    </div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-booking">नेट लगवाने की जगह कन्फर्म करें</button>
    <div class="ty-b3 c-sec" style="text-align:center;">आगे बढ़ने पर आप हमारे <span style="color:var(--pri-text);text-decoration:underline;">नियम और शर्तों</span> और <span style="color:var(--pri-text);text-decoration:underline;">गोपनीयता नीति</span> से सहमत होते हैं</div>
  </div>
` });

/* ---- screen 9: ConfirmLocationScreen (ConfirmLocationScreen.kt) ---- */
window.SCREENS.push({ name: "Confirm location (ConfirmLocationScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div><div class="tb-spacer"></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content-center">
    <div class="illus">
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="84" y1="34" x2="84" y2="64" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M84 36 h22 l-7 8 l7 8 h-22 Z" fill="#D9008D"/>
        <path d="M46 78 L80 54 L114 78 Z" fill="#FF66C9"/>
        <path d="M42 82 L80 54 L118 82" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <rect x="52" y="82" width="56" height="44" fill="#fff" stroke="#161021" stroke-width="2.5"/>
        <path d="M72 126 v-18 a8 8 0 0 1 16 0 v18" fill="#fff" stroke="#161021" stroke-width="2.5"/>
        <rect x="57" y="96" width="11" height="11" fill="#fff" stroke="#161021" stroke-width="2"/>
        <line x1="62.5" y1="96" x2="62.5" y2="107" stroke="#161021" stroke-width="1.5"/>
        <line x1="57" y1="101.5" x2="68" y2="101.5" stroke="#161021" stroke-width="1.5"/>
        <rect x="92" y="96" width="11" height="11" fill="#fff" stroke="#161021" stroke-width="2"/>
        <line x1="97.5" y1="96" x2="97.5" y2="107" stroke="#161021" stroke-width="1.5"/>
        <line x1="92" y1="101.5" x2="103" y2="101.5" stroke="#161021" stroke-width="1.5"/>
        <rect x="76" y="89" width="8" height="8" fill="#fff" stroke="#161021" stroke-width="2"/>
      </svg>
    </div>
    <div class="ty-t3-med c-pri" style="margin-top:24px;white-space:pre-line;">पेमेंट से पहले नेट लगवाने की
लोकेशन कन्फर्म करें</div>
    <div class="ty-b1 c-pri" style="margin-top:8px;">ताकि आपका नेट सही पते पर लगे</div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-booking">मैं लोकेशन पर हूँ</button>
    <div style="display:inline-flex;align-items:center;gap:4px;padding:4px 0;cursor:pointer;">
      <span class="ty-b2 c-pri">अभी लोकेशन पर नहीं हूँ</span>
      <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-brand);">chevron_right</span>
    </div>
  </div>
` });

/* ---- screen 10: Confirming location — dark loader (ConfirmLocationScreen.kt isLoading) ---- */
window.SCREENS.push({ name: "Confirming location — dark loader (ConfirmLocationScreen.kt)", html: `
  <div class="loader-dark" style="background:#5C5C5C;">
    <div class="spinner"></div>
    <div class="ty-t3" style="color:var(--white);">आपकी लोकेशन कन्फर्म कर रहे हैं</div>
  </div>
` });

/* ---- screen 11: WifiNameSelectionScreen (WifiNameSelectionScreen.kt) ---- */
window.SCREENS.push({ name: "WiFi name selection (WifiNameSelectionScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-spacer-brand"></div><div class="tb-spacer"></div><div class="tb-icon"><span class="material-symbols-rounded">headset_mic</span></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content">
    <div class="illus" style="margin:16px 0 0;">
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="64" y="34" width="9" height="14" rx="2" fill="#D9008D"/>
        <rect x="77" y="24" width="9" height="24" rx="2" fill="#D9008D"/>
        <rect x="90" y="14" width="9" height="34" rx="2" fill="#D9008D"/>
        <path d="M44 70 h72 l8 22 H36 Z" fill="#FF66C9"/>
        <rect x="36" y="62" width="88" height="20" rx="6" fill="#FF66C9"/>
        <rect x="40" y="92" width="80" height="5" rx="2.5" fill="#C2007A"/>
        <circle cx="60" cy="72" r="5" fill="#fff"/>
        <circle cx="104" cy="72" r="5" fill="#fff"/>
      </svg>
    </div>
    <div class="ty-t3-med c-pri" style="margin-top:24px;">घर के नेट का एक अच्छा-सा नाम रख लें।</div>
    <div class="ty-b1 c-sec" style="margin-top:8px;">ये नाम आपके घर के नेट को पहचान देगा</div>

    <div class="ty-b1 c-pri" style="margin-top:24px;">इनमें से कोई एक नाम चुन सकते हैं :</div>

    <div class="chips" style="margin-top:16px;gap:16px;">
      <div class="chip" style="border-radius:12px;flex:1;min-width:0;">Wiom Ramesh 1234</div>
      <div class="chip" style="border-radius:12px;flex:1;min-width:0;">Ramesh Net</div>
      <div class="chip" style="border-radius:12px;flex:1;min-width:0;">Wiom Ramesh 9876</div>
      <div class="chip" style="border-radius:12px;flex:1;min-width:0;">Wiom Ramesh 2244</div>
    </div>

    <div style="display:flex;align-items:center;justify-content:center;gap:4px;margin-top:16px;cursor:pointer;">
      <span class="ty-b2 c-pri">या अपनी पसंद का नाम लिखें</span>
      <span class="material-symbols-rounded" style="font-size:24px;color:var(--pri-text);">navigate_next</span>
    </div>
  </div>
` });

/* ---- screen 12: WifiNameConfirmedScreen (WifiNameConfirmedScreen.kt) ---- */
window.SCREENS.push({ name: "WiFi name confirmed (WifiNameConfirmedScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-spacer-brand"></div><div class="tb-spacer"></div><div class="tb-icon"><span class="material-symbols-rounded">headset_mic</span></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content">
    <div class="illus" style="margin:16px 0 0;">
      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="64" y="34" width="9" height="14" rx="2" fill="#D9008D"/>
        <rect x="77" y="24" width="9" height="24" rx="2" fill="#D9008D"/>
        <rect x="90" y="14" width="9" height="34" rx="2" fill="#D9008D"/>
        <path d="M44 70 h72 l8 22 H36 Z" fill="#FF66C9"/>
        <rect x="36" y="62" width="88" height="20" rx="6" fill="#FF66C9"/>
        <rect x="40" y="92" width="80" height="5" rx="2.5" fill="#C2007A"/>
        <circle cx="60" cy="72" r="5" fill="#fff"/>
        <circle cx="104" cy="72" r="5" fill="#fff"/>
      </svg>
    </div>
    <div class="ty-t3-med c-pri" style="margin-top:24px;">अब घर का नेट आपके नाम पर है</div>

    <div style="display:flex;align-items:center;gap:12px;height:48px;padding:0 16px;margin-top:16px;background:var(--bg-neutral-sec);border-radius:12px;">
      <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-action);">home</span>
      <span class="ty-b1 c-pos" style="flex:1;">Wiom Ramesh 1234</span>
      <span class="material-symbols-rounded" style="font-size:24px;color:var(--pos-600);">check_circle</span>
    </div>
    <div class="ty-b2 c-pri" style="margin-top:8px;">अच्छा नाम रखा है 🙂</div>
  </div>
  <div style="background:var(--bg-surface);border-radius:24px 24px 0 0;box-shadow:0 -4px 12px rgba(0,0,0,.12);padding:24px 16px 16px;flex:none;">
    <div class="ty-t3-med c-pri">इंजीनियर के विजिट के लिये अपना पता दें</div>
    <button class="wbtn wbtn-primary" style="margin-top:48px;">अब पता भरें</button>
  </div>
` });
