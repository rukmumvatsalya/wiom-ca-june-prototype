/* ============================================================
   Wiom prototype — part 1 (screens 1–6)
   ============================================================ */
window.SCREENS = window.SCREENS || [];

/* ---- screen 1: splash (faded intro) ---- */
window.SCREENS.push({ name: "Splash — recharge intro (fade in)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:28px;opacity:.18;">
    <div class="illus">
      <svg width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="22" y="38" width="118" height="20" rx="8" fill="#E8E4F0"/>
        <line x1="48" y1="26" x2="48" y2="50" stroke="#161021" stroke-width="9" stroke-linecap="round"/>
        <line x1="81" y1="26" x2="81" y2="50" stroke="#161021" stroke-width="9" stroke-linecap="round"/>
        <line x1="114" y1="26" x2="114" y2="50" stroke="#161021" stroke-width="9" stroke-linecap="round"/>
        <rect x="22" y="55" width="118" height="78" rx="10" fill="#E8E4F0"/>
        <rect x="34" y="138" width="30" height="22" rx="4" fill="#E8E4F0"/>
        <rect x="72" y="138" width="18" height="22" rx="4" fill="#E8E4F0"/>
        <rect x="98" y="138" width="38" height="22" rx="4" fill="#E8E4F0"/>
      </svg>
    </div>
    <div>
      <div class="h-lg" style="color:var(--t-disabled);">रिचार्ज वाला घर का नेट</div>
      <div class="body-lg muted" style="margin-top:8px;">जब चाहिए, तब रिचार्ज।</div>
    </div>
  </div>
` });

/* ---- screen 2: splash with calendar + devices ---- */
window.SCREENS.push({ name: "Splash — recharge वाला घर का नेट", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="spacer"></span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:36px;">
    <div class="illus">
      <svg width="200" height="170" viewBox="0 0 200 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="56" y1="14" x2="56" y2="46" stroke="#161021" stroke-width="13" stroke-linecap="round"/>
        <line x1="100" y1="14" x2="100" y2="46" stroke="#161021" stroke-width="13" stroke-linecap="round"/>
        <line x1="144" y1="14" x2="144" y2="46" stroke="#161021" stroke-width="13" stroke-linecap="round"/>
        <rect x="30" y="26" width="140" height="118" rx="14" fill="#fff" stroke="#161021" stroke-width="2.5"/>
        <path d="M30 56 a14 14 0 0 1 14 -14 h112 a14 14 0 0 1 14 14 v8 H30 Z" fill="#2F6FDB"/>
        <g>
          <rect x="44" y="78" width="24" height="24" rx="5" fill="#DCE7F8"/>
          <rect x="76" y="78" width="24" height="24" rx="5" fill="#2F6FDB"/>
          <path d="M81 90 l4 4 l8 -9" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <rect x="108" y="78" width="24" height="24" rx="5" fill="#DCE7F8"/>
          <rect x="140" y="78" width="20" height="24" rx="5" fill="#DCE7F8"/>
        </g>
        <g>
          <rect x="44" y="108" width="24" height="24" rx="5" fill="#DCE7F8"/>
          <rect x="76" y="108" width="24" height="24" rx="5" fill="#2F6FDB"/>
          <path d="M81 120 l4 4 l8 -9" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <rect x="108" y="108" width="24" height="24" rx="5" fill="#2F6FDB"/>
          <path d="M113 120 l4 4 l8 -9" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <rect x="140" y="108" width="20" height="24" rx="5" fill="#2F6FDB"/>
          <path d="M144 120 l4 4 l8 -9" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </g>
        <text x="56" y="136" text-anchor="middle" font-size="18" fill="#2F6FDB" font-family="Noto Sans">₹</text>
      </svg>
    </div>
    <div class="illus">
      <svg width="240" height="80" viewBox="0 0 240 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- laptop -->
        <rect x="14" y="14" width="62" height="40" rx="4" stroke="#161021" stroke-width="2.5"/>
        <rect x="24" y="22" width="42" height="24" rx="2" fill="#fff"/>
        <path d="M6 62 h78 l-6 -8 H12 Z" fill="#fff" stroke="#161021" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- phone -->
        <rect x="104" y="12" width="32" height="56" rx="6" stroke="#161021" stroke-width="2.5"/>
        <circle cx="120" cy="60" r="2.5" fill="#161021"/>
        <line x1="114" y1="18" x2="126" y2="18" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <!-- tv -->
        <rect x="160" y="16" width="70" height="44" rx="5" stroke="#161021" stroke-width="2.5"/>
        <line x1="195" y1="60" x2="195" y2="68" stroke="#161021" stroke-width="2.5"/>
        <line x1="182" y1="68" x2="208" y2="68" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </div>
    <div>
      <div class="h-lg">रिचार्ज वाला घर का नेट</div>
      <div class="body-lg muted" style="margin-top:10px;">जब चाहिए, तब रिचार्ज।</div>
    </div>
  </div>
  <div class="btn-bar"><button class="btn btn-primary">मेरे इलाके में है या नहीं?</button></div>
` });

/* ---- screen 3: checking location (loader) ---- */
window.SCREENS.push({ name: "Checking — आपकी जगह पर नेट चेक", html: `
  <div class="content" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:28px;">
    <div class="illus">
      <svg width="130" height="150" viewBox="0 0 130 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 78 V40 a45 45 0 0 1 90 0 V78" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="9 9"/>
        <line x1="20" y1="78" x2="110" y2="78" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="9 9"/>
        <path d="M52 78 V58 a13 13 0 0 1 26 0 V78" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="7 7"/>
      </svg>
    </div>
    <div class="h-md">आपकी जगह पर नेट चेक कर रहे हैं…</div>
  </div>
` });

/* ---- screen 4: location available ---- */
window.SCREENS.push({ name: "Available — यहाँ घर का नेट लग सकता है", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="spacer"></span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:18px;padding-top:60px;">
    <div class="illus">
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="62" y1="18" x2="62" y2="58" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M62 20 h28 l-7 8 l7 8 h-28 Z" fill="#2F6FDB"/>
        <path d="M30 78 L75 44 L120 78" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M40 72 V120 H110 V72" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M64 120 V94 a11 11 0 0 1 22 0 V120" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
    </div>
    <div class="title-lg" style="font-weight:400;">Rajiv colony, Sector 40</div>
    <div class="h-lg">यहाँ घर का नेट लग सकता है</div>
    <button class="btn-link" style="margin-top:12px;">किसी और जगह के लिए चेक करें <span class="material-symbols-rounded ico-sm">chevron_right</span></button>
  </div>
  <div class="btn-bar"><button class="btn btn-primary">इसे कैसे चलाना है?</button></div>
` });

/* ---- screen 5: how it works timeline ---- */
window.SCREENS.push({ name: "How — रिचार्ज वाला नेट ऐसे चला सकते हैं", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content">
    <h1 class="h-lg" style="margin:8px 0 24px;">रिचार्ज वाला नेट ऐसे चला सकते हैं</h1>
    <div class="timeline">
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">1</div><div class="tl-line"></div></div>
        <div class="tl-body"><div class="tl-title">आपके घर में नेट बॉक्स लगता है</div></div>
      </div>
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">2</div><div class="tl-line"></div></div>
        <div class="tl-body">
          <div class="tl-title">जब चाहें, जितने दिन चाहें रिचार्ज करें</div>
          <div class="tl-sub">बिल्कुल मोबाइल रिचार्ज की तरह</div>
        </div>
      </div>
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">3</div></div>
        <div class="tl-body" style="padding-bottom:8px;">
          <div class="tl-title">घर के सभी लोग चला सकते हैं</div>
          <div class="tl-sub">8–12 डिवाइस आसानी से - मोबाइल, लैपटॉप, टीवी</div>
        </div>
      </div>
    </div>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">मेरे घर पर कैसे शुरू होगा?</button>
    <button class="btn-link">पहले से व्योम लगा हुआ है <span class="material-symbols-rounded ico-sm">chevron_right</span></button>
  </div>
` });

/* ---- screen 6: setup steps + recharge note ---- */
window.SCREENS.push({ name: "Setup — घर पर नेट शुरू करने के लिए", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><span class="material-symbols-rounded back">arrow_back</span><span class="spacer"></span><span class="tb-icon material-symbols-rounded">headset_mic</span><span class="translate-chip">A<small>अ</small></span></div>
  <div class="content" style="padding:0;">
    <div style="padding:0 16px;">
      <h1 class="h-lg" style="margin:8px 0 24px;">घर पर नेट शुरू करने के लिए</h1>
      <div class="timeline">
        <div class="tl-step">
          <div class="tl-rail"><div class="tl-num">1</div><div class="tl-line"></div></div>
          <div class="tl-body"><div class="tl-title">आपके घर पर एक विज़िट होती है -<br>नेट बॉक्स लगता है</div></div>
        </div>
        <div class="tl-step">
          <div class="tl-rail"><div class="tl-num">2</div></div>
          <div class="tl-body" style="padding-bottom:16px;">
            <div class="tl-title">उस दिन नेट बॉक्स का ₹300 सिक्युरिटी फीस देना होता है</div>
            <div style="margin-top:12px;background:var(--pos-subtle);color:var(--pos);border-radius:var(--r-md);padding:12px 14px;font-size:14px;font-weight:600;display:inline-block;">नेट बॉक्स लौटाने पर ₹300 वापस मिल जाते है</div>
          </div>
        </div>
      </div>
    </div>
    <div style="background:var(--s-subtle);padding:20px 16px;margin-top:8px;">
      <div class="h-md" style="font-weight:400;line-height:1.45;">अब नेट चलेगा आपके हिसाब से -<br>1, 2, 7, 14 या 28 दिन का रिचार्ज करें।</div>
      <button class="btn-link" style="margin-top:14px;">देखें कैसे? <span class="material-symbols-rounded ico-sm">chevron_right</span></button>
    </div>
  </div>
  <div class="btn-bar"><button class="btn btn-primary">विज़िट कन्फर्म करने के लिए फोन नंबर दें</button></div>
` });
