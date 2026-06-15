/* ============================================================
   Wiom prototype — part 1 (screens 1–6: booking entry / serviceability)
   Source of truth: feature/booking/.../ui/*.kt + core/common/.../components/*
   Tokens & components: app.css
   ============================================================ */
window.SCREENS = window.SCREENS || [];

/* ---- screen 1: initial splash (SplashHomeScreen.kt, faded/loading state) ---- */
window.SCREENS.push({ name: "Splash — initial (SplashHomeScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-spacer-brand"></div><div class="tb-spacer"></div></div></div>
  <div class="content-center" style="opacity:.18;">
    <div class="illus" style="margin-bottom:32px;">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="28" y="40" width="144" height="132" rx="14" fill="#EDEAF5"/>
        <rect x="28" y="40" width="144" height="34" rx="14" fill="#E3DEF0"/>
        <rect x="58" y="28" width="12" height="30" rx="6" fill="#E3DEF0"/>
        <rect x="94" y="28" width="12" height="30" rx="6" fill="#E3DEF0"/>
        <rect x="130" y="28" width="12" height="30" rx="6" fill="#E3DEF0"/>
        <rect x="50" y="92" width="22" height="22" rx="5" fill="#E3DEF0"/>
        <rect x="89" y="92" width="22" height="22" rx="5" fill="#E3DEF0"/>
        <rect x="128" y="92" width="22" height="22" rx="5" fill="#E3DEF0"/>
      </svg>
    </div>
    <div class="ty-t3-med c-pri">रिचार्ज वाला घर का नेट</div>
    <div class="ty-b1 c-pri" style="margin-top:16px;">जब चाहिए, तब रिचार्ज।</div>
  </div>
` });

/* ---- screen 2: recharge splash, loaded (SplashHomeScreen.kt) ---- */
window.SCREENS.push({ name: "Splash — recharge home (SplashHomeScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-spacer-brand"></div><div class="tb-spacer"></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;padding-top:16px;">
    <!-- splash_calendar (200dp): calendar with checkmarks + rupee -->
    <div class="illus">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="24" y="44" width="152" height="124" rx="14" fill="#FFFFFF" stroke="#161021" stroke-width="3"/>
        <path d="M24 58a14 14 0 0 1 14-14h124a14 14 0 0 1 14 14v18H24z" fill="#2E6FD6"/>
        <rect x="56" y="30" width="13" height="32" rx="6.5" fill="#161021"/>
        <rect x="93" y="30" width="13" height="32" rx="6.5" fill="#161021"/>
        <rect x="131" y="30" width="13" height="32" rx="6.5" fill="#161021"/>
        <rect x="44" y="92" width="26" height="26" rx="5" fill="#DCE7F8"/>
        <rect x="79" y="92" width="26" height="26" rx="5" fill="#2E6FD6"/>
        <path d="M85 105l4 4 7-8" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="114" y="92" width="26" height="26" rx="5" fill="#DCE7F8"/>
        <rect x="44" y="124" width="26" height="26" rx="5" fill="#DCE7F8"/>
        <rect x="79" y="124" width="26" height="26" rx="5" fill="#2E6FD6"/>
        <path d="M85 137l4 4 7-8" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="114" y="124" width="26" height="26" rx="5" fill="#2E6FD6"/>
        <path d="M120 137l4 4 7-8" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="46" y="162" font-family="Noto Sans" font-size="22" font-weight="700" fill="#2E6FD6">₹</text>
      </svg>
    </div>
    <div style="height:32px;"></div>
    <!-- splash_all_devices (60dp): laptop, phone, tv -->
    <div class="illus" style="gap:24px;color:#161021;">
      <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="11" y="6" width="52" height="34" rx="3" stroke="#161021" stroke-width="3"/>
        <rect x="30" y="36" width="14" height="4" fill="#161021"/>
        <rect x="4" y="44" width="66" height="5" rx="2.5" fill="#161021"/>
      </svg>
      <svg width="34" height="56" viewBox="0 0 34 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="5" y="4" width="24" height="48" rx="4" stroke="#161021" stroke-width="3"/>
        <circle cx="17" cy="46" r="2" fill="#161021"/>
      </svg>
      <svg width="74" height="56" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="8" y="8" width="58" height="36" rx="3" stroke="#161021" stroke-width="3"/>
        <rect x="30" y="44" width="14" height="4" fill="#161021"/>
        <rect x="22" y="50" width="30" height="4" rx="2" fill="#161021"/>
      </svg>
    </div>
    <div style="height:32px;"></div>
    <div class="ty-t3-med c-pri" style="text-align:center;width:100%;">रिचार्ज वाला घर का नेट</div>
    <div class="ty-b1 c-pri" style="text-align:center;width:100%;margin-top:16px;">जब चाहिए, तब रिचार्ज।</div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-booking">मेरे इलाके में है या नहीं?</button>
  </div>
` });

/* ---- screen 3: location-check loader (LocationCheckLoadingScreen.kt) ---- */
window.SCREENS.push({ name: "Loader — checking location (LocationCheckLoadingScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;padding-top:120px;">
    <!-- location_checking_loader (120dp): dashed house outline -->
    <div class="illus" style="width:120px;height:120px;">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M30 78V52a8 8 0 0 1 2.6-5.9L56 25a6 6 0 0 1 8 0l23.4 21.1A8 8 0 0 1 90 52v26" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="7 6"/>
        <path d="M30 78h60" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="7 6"/>
        <path d="M52 78V64a8 8 0 0 1 16 0v14" stroke="#161021" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="6 5"/>
      </svg>
    </div>
    <div style="height:8px;"></div>
    <div class="ty-t3-med c-pri" style="text-align:center;">आपकी जगह पर नेट चेक कर रहे हैं...</div>
  </div>
` });

/* ---- screen 4: serviceable (ServiceableScreen.kt) ---- */
window.SCREENS.push({ name: "Serviceable — net can be set up (ServiceableScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-spacer-brand"></div><div class="tb-spacer"></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div></div>
  <div class="content" style="display:flex;flex-direction:column;align-items:center;padding-top:48px;">
    <!-- location_serviceable_home (120dp): house with blue flag -->
    <div class="illus" style="width:120px;height:120px;">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M62 18v15" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M62 18h26l-6 7 6 7H62z" fill="#2E6FD6"/>
        <path d="M30 86V58a6 6 0 0 1 2-4.5l24-21a6 6 0 0 1 8 0l24 21A6 6 0 0 1 90 58v28" stroke="#161021" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M30 86h60" stroke="#161021" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M52 86V68a8 8 0 0 1 16 0v18" stroke="#161021" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    </div>
    <div style="height:8px;"></div>
    <div class="ty-b1 c-pri" style="text-align:center;width:100%;">Rajiv colony, Sector 40</div>
    <div style="height:12px;"></div>
    <div class="ty-t3-med c-pri" style="text-align:center;width:100%;">यहाँ घर का नेट लग सकता है</div>
    <div style="height:32px;"></div>
    <div style="display:flex;align-items:center;justify-content:center;cursor:pointer;">
      <span class="ty-b2 c-pri">किसी और जगह के लिए चेक करें</span>
      <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-brand);">chevron_right</span>
    </div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-booking">इसे कैसे चलाना है?</button>
  </div>
` });

/* ---- screen 5: how-it-works timeline (HowItWorksScreen.kt) ---- */
window.SCREENS.push({ name: "How it works — recharge net (HowItWorksScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div><div class="tb-spacer"></div><div class="tb-icon"><span class="material-symbols-rounded">headset_mic</span></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div>
    <div class="tb-title" style="font-weight:500;">रिचार्ज वाला नेट ऐसे चला सकते हैं</div></div>
  <div class="content">
    <div style="height:24px;"></div>
    <div class="tl">
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">1</div><div class="tl-line"></div></div>
        <div class="tl-body"><div class="tl-title" style="font-weight:400;font-size:16px;line-height:24px;color:var(--pri-text);">आपके घर में नेट बॉक्स लगता है</div></div>
      </div>
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">2</div><div class="tl-line"></div></div>
        <div class="tl-body"><div class="tl-title" style="font-weight:400;font-size:16px;line-height:24px;color:var(--pri-text);">जब चाहें, जितने दिन चाहें रिचार्ज करें</div>
          <div class="tl-sub">बिल्कुल मोबाइल रिचार्ज की तरह</div></div>
      </div>
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">3</div></div>
        <div class="tl-body" style="padding-bottom:0;"><div class="tl-title" style="font-weight:400;font-size:16px;line-height:24px;color:var(--pri-text);">घर के सभी लोग चला सकते हैं</div>
          <div class="tl-sub">8–12 डिवाइस आसानी से - मोबाइल, लैपटॉप, टीवी</div></div>
      </div>
    </div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-booking">मेरे घर पर कैसे शुरू होगा?</button>
    <div style="display:flex;align-items:center;justify-content:center;cursor:pointer;padding:8px 0;">
      <span class="ty-b2 c-pri">पहले से व्योम लगा हुआ है</span>
      <span class="material-symbols-rounded" style="font-size:24px;color:var(--icon-brand);">chevron_right</span>
    </div>
  </div>
` });

/* ---- screen 6: how-it-starts (HowItStartsScreen.kt, variant E/F) ---- */
window.SCREENS.push({ name: "How it starts — visit + security fee (HowItStartsScreen.kt)", html: `
  <div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>
  <div class="topbar"><div class="tb-row"><div class="tb-back"><span class="material-symbols-rounded">arrow_back</span></div><div class="tb-spacer"></div><div class="tb-icon"><span class="material-symbols-rounded">headset_mic</span></div><div class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></div></div>
    <div class="tb-title" style="font-weight:500;">घर पर नेट शुरू करने के लिए</div></div>
  <div class="content">
    <div style="height:24px;"></div>
    <div class="tl">
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">1</div><div class="tl-line"></div></div>
        <div class="tl-body" style="padding-bottom:36px;"><div class="tl-title" style="font-weight:400;font-size:16px;line-height:24px;color:var(--pri-text);">आपके घर पर एक विज़िट होती है - नेट बॉक्स लगता है</div></div>
      </div>
      <div class="tl-step">
        <div class="tl-rail"><div class="tl-num">2</div></div>
        <div class="tl-body" style="padding-bottom:0;">
          <div class="tl-title" style="font-weight:400;font-size:16px;line-height:24px;color:var(--pri-text);">उस दिन नेट बॉक्स का ₹300 सिक्युरिटी फीस देना होता है</div>
          <div style="margin-top:12px;">
            <span style="display:inline-block;background:var(--pos-200);color:var(--pos-600);border-radius:8px;padding:4px 8px;font-size:12px;line-height:16px;font-weight:600;">नेट बॉक्स लौटाने पर ₹300 वापस मिल जाते है</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="background:var(--bg-neutral-sec);padding:12px 16px;display:flex;flex-direction:column;gap:4px;">
    <div class="ty-b1 c-pri">अब नेट चलेगा आपके हिसाब से - 1, 2, 7, 14 या 28 दिन का रिचार्ज करें।</div>
    <div style="display:flex;align-items:center;gap:4px;cursor:pointer;">
      <span class="ty-b2 c-brand">देखें कैसे?</span>
      <span class="material-symbols-rounded" style="font-size:14px;color:var(--icon-brand);">chevron_right</span>
    </div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-booking">विज़िट कन्फर्म करने के लिए फोन नंबर दें</button>
  </div>
` });
