/* ============================================================
   Wiom prototype — part 2 (screens 7–12)
   ============================================================ */

/* ---- screen 7: number + name (empty) ---- */
window.SCREENS.push({ name: "Details (empty)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="h-lg" style="margin:6px 0 28px;">आगे की प्रक्रिया के लिए</div>

    <div class="field">
      <label>आपका नंबर</label>
      <div class="input" style="display:flex;align-items:center;gap:14px;color:var(--t-disabled);">
        <span class="material-symbols-rounded ico-sm" style="color:var(--t-disabled);">smartphone</span>
        <span>उदाहरण: 9876543210</span>
      </div>
    </div>

    <div class="field" style="margin-top:8px;">
      <label>आपका नाम</label>
      <div class="input" style="display:flex;align-items:center;gap:14px;color:var(--t-disabled);">
        <span class="material-symbols-rounded ico-sm" style="color:var(--t-disabled);">person</span>
        <span>उदाहरण: Ramesh</span>
      </div>
    </div>
  </div>
  <div class="btn-bar">
    <div class="body-sm muted" style="text-align:center;">आगे बढ़ने पर आप हमारे <b style="text-decoration:underline;color:var(--t-secondary);">नियम और शर्तों</b> से सहमत होते हैं</div>
  </div>
` });

/* ---- screen 8: number + name (filled) + CTA ---- */
window.SCREENS.push({ name: "Details (filled)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="h-lg" style="margin:6px 0 28px;">आगे की प्रक्रिया के लिए</div>

    <div class="field" style="gap:8px;margin-bottom:8px;">
      <label>आपका नंबर</label>
      <div class="input filled" style="display:flex;align-items:center;gap:14px;">
        <span class="material-symbols-rounded ico-sm" style="color:var(--t-disabled);">smartphone</span>
        <span>9876543210</span>
      </div>
    </div>
    <div class="body-sm muted" style="margin-bottom:24px;">इसी नंबर पर आगे की जानकारी मिलती है</div>

    <div class="field" style="gap:8px;">
      <label>आपका नाम</label>
      <div class="input filled" style="display:flex;align-items:center;gap:14px;">
        <span class="material-symbols-rounded ico-sm" style="color:var(--t-disabled);">person</span>
        <span>Ramesh Kumar</span>
      </div>
    </div>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">नेट लगवाने की जगह कन्फर्म करें</button>
    <div class="body-sm muted" style="text-align:center;">आगे बढ़ने पर आप हमारे <b style="text-decoration:underline;color:var(--t-secondary);">नियम और शर्तों</b> से सहमत होते हैं</div>
  </div>
` });

/* ---- screen 9: confirm location intro (house illustration) ---- */
window.SCREENS.push({ name: "Confirm location intro", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content center-col" style="justify-content:center;flex:1;">
    <div class="illus" style="margin:48px 0 36px;">
      <svg width="150" height="135" viewBox="0 0 150 135" fill="none">
        <!-- flag pole -->
        <line x1="95" y1="18" x2="95" y2="58" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M95 20 L120 27 L95 34 Z" fill="var(--brand)"/>
        <!-- roof -->
        <path d="M30 70 L75 45 L120 70 Z" fill="var(--brand)" stroke="#161021" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- house body -->
        <rect x="40" y="70" width="70" height="48" fill="#fff" stroke="#161021" stroke-width="2.5"/>
        <!-- door -->
        <path d="M64 118 L64 92 Q75 84 86 92 L86 118" fill="#fff" stroke="#161021" stroke-width="2.5"/>
        <!-- left window -->
        <rect x="46" y="92" width="13" height="13" fill="#fff" stroke="#161021" stroke-width="2"/>
        <line x1="52.5" y1="92" x2="52.5" y2="105" stroke="#161021" stroke-width="1.5"/>
        <line x1="46" y1="98.5" x2="59" y2="98.5" stroke="#161021" stroke-width="1.5"/>
        <!-- right window -->
        <rect x="91" y="92" width="13" height="13" fill="#fff" stroke="#161021" stroke-width="2"/>
        <line x1="97.5" y1="92" x2="97.5" y2="105" stroke="#161021" stroke-width="1.5"/>
        <line x1="91" y1="98.5" x2="104" y2="98.5" stroke="#161021" stroke-width="1.5"/>
        <!-- roof small square -->
        <rect x="69" y="62" width="12" height="12" fill="#fff" stroke="#161021" stroke-width="2"/>
        <!-- ground -->
        <line x1="32" y1="118" x2="118" y2="118" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="h-lg" style="margin-bottom:12px;">पेमेंट से पहले नेट लगवाने की लोकेशन कन्फर्म करें</div>
    <div class="title-sm" style="font-weight:400;color:var(--t-primary);">ताकि आपका नेट सही पते पर लगे</div>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">मैं लोकेशन पर हूँ</button>
    <button class="btn-link">अभी लोकेशन पर नहीं हूँ <span class="material-symbols-rounded ico-sm">chevron_right</span></button>
  </div>
` });

/* ---- screen 10: dark location-confirming loader ---- */
window.SCREENS.push({ name: "Location loader", html: `
  <div class="loader-screen" style="background:#5e5e5e;">
    <div class="spinner"></div>
    <div class="h-md" style="color:#fff;font-weight:600;">आपकी लोकेशन कन्फर्म कर रहे हैं</div>
  </div>
` });

/* ---- screen 11: name the home net (suggestion chips) ---- */
window.SCREENS.push({ name: "Name your net", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="illus" style="flex-direction:column;margin:18px 0 30px;">
      <svg width="84" height="74" viewBox="0 0 84 74" fill="none">
        <!-- signal bars -->
        <rect x="30" y="22" width="9" height="22" rx="2" fill="var(--brand)"/>
        <rect x="43" y="12" width="9" height="32" rx="2" fill="var(--brand)"/>
        <rect x="56" y="0" width="9" height="44" rx="2" fill="var(--brand)"/>
        <!-- router -->
        <path d="M14 64 L20 50 L72 50 L78 64 Z" fill="#E04AAE"/>
        <rect x="20" y="44" width="52" height="14" rx="6" fill="#EE82C8"/>
        <circle cx="34" cy="51" r="4" fill="#fff"/>
        <circle cx="60" cy="51" r="3" fill="#fff"/>
      </svg>
    </div>
    <div class="h-lg" style="margin-bottom:8px;">घर के नेट का एक अच्छा-सा नाम रखें</div>
    <div class="title-sm" style="font-weight:400;color:var(--t-secondary);margin-bottom:36px;">ये नाम आपके घर के नेट को पहचान देगा</div>

    <div class="label-lg" style="margin-bottom:16px;">इनमें से कोई एक नाम चुन सकते हैं  :</div>
    <div class="chips" style="gap:14px;">
      <button class="chip" style="flex:1;min-width:0;padding:16px 12px;border-radius:var(--r-md);">Wiom Ramesh 1234</button>
      <button class="chip" style="flex:1;min-width:0;padding:16px 12px;border-radius:var(--r-md);">Ramesh Net</button>
      <button class="chip" style="flex:1;min-width:0;padding:16px 12px;border-radius:var(--r-md);">Wiom Ramesh 9876</button>
      <button class="chip" style="flex:1;min-width:0;padding:16px 12px;border-radius:var(--r-md);">Wiom Ramesh 2244</button>
    </div>
    <div style="text-align:center;margin-top:24px;">
      <button class="btn-link" style="color:var(--t-primary);">या अपनी पसंद का नाम लिखें <span class="material-symbols-rounded ico-sm brandtext">chevron_right</span></button>
    </div>
  </div>
` });

/* ---- screen 12: net named confirmation ---- */
window.SCREENS.push({ name: "Net named", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <div class="illus" style="flex-direction:column;margin:18px 0 30px;">
      <svg width="84" height="74" viewBox="0 0 84 74" fill="none">
        <rect x="30" y="22" width="9" height="22" rx="2" fill="var(--brand)"/>
        <rect x="43" y="12" width="9" height="32" rx="2" fill="var(--brand)"/>
        <rect x="56" y="0" width="9" height="44" rx="2" fill="var(--brand)"/>
        <path d="M14 64 L20 50 L72 50 L78 64 Z" fill="#C0007A"/>
        <rect x="20" y="44" width="52" height="14" rx="6" fill="#EE82C8"/>
        <circle cx="34" cy="51" r="4" fill="#fff"/>
        <circle cx="60" cy="51" r="3" fill="#fff"/>
      </svg>
    </div>
    <div class="h-lg" style="margin-bottom:20px;">अब घर का नेट आपके नाम पर है</div>

    <div class="status-card" style="background:var(--s-subtle);box-shadow:none;margin:0 0 12px;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:14px;">
        <span class="material-symbols-rounded ico" style="color:var(--t-primary);">cottage</span>
        <span class="title-sm" style="color:var(--pos);">Wiom Ramesh 1234</span>
      </div>
      <span class="material-symbols-rounded ico" style="color:var(--pos);">check_circle</span>
    </div>
    <div class="body-md" style="color:var(--t-primary);">अच्छा नाम रखा है</div>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">अब पता भरें</button>
  </div>
` });
