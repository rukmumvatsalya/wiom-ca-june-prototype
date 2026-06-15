/* ============================================================
   Wiom prototype — Part 3 (screens 13–18)
   Address form · landmark category list · landmark bottom sheet ·
   confirm landmark · voice-route (idle) · voice-route (recording)
   ============================================================ */

/* ---- screen 13 : address form "अपना पूरा पता भरें" ---- */
window.SCREENS.push({ name: "13 · पूरा पता भरें", html: `
  <div class="topbar">
    <span class="material-symbols-rounded back">arrow_back</span>
    <span class="spacer"></span>
    <span class="tb-icon material-symbols-rounded">headset_mic</span>
    <span class="translate-chip">A<small>अ</small></span>
  </div>
  <div class="content">
    <div class="illus" style="margin:24px 0 8px">
      <svg width="120" height="110" viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 56 L60 22 L104 56" stroke="#161021" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26 50 V96 H94 V50" stroke="#161021" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="38" y="68" width="16" height="16" rx="2" stroke="#161021" stroke-width="3"/>
        <path d="M62 84 V68 H78 V84" stroke="#161021" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M60 22 V6" stroke="#161021" stroke-width="3" stroke-linecap="round"/>
        <circle cx="60" cy="5" r="7" fill="var(--brand)"/>
      </svg>
    </div>
    <h2 class="h-lg" style="margin-bottom:20px">अपना पूरा पता भरें</h2>

    <div class="field">
      <label>मकान / फ्लैट / फ्लोर नंबर</label>
      <div class="input" style="color:var(--t-disabled)">घ</div>
    </div>
    <div class="field">
      <label>स्ट्रीट / गली नं.</label>
      <div class="input" style="color:var(--t-disabled)">घ</div>
    </div>
    <div class="field">
      <label>इलाका / लोकैलिटी</label>
      <div class="input filled" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Rajiv Colony, Sector 33, Gurugram, Harya</div>
    </div>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">सही सेट-अप के लिए पास की जगह दें</button>
  </div>
` });

/* ---- screen 14 : landmark category list "घर के पास कौन सी जगह है?" ---- */
window.SCREENS.push({ name: "14 · पास की जगह चुनें", html: `
  <div class="topbar">
    <span class="material-symbols-rounded back">arrow_back</span>
    <span class="spacer"></span>
    <span class="tb-icon material-symbols-rounded">headset_mic</span>
    <span class="translate-chip">A<small>अ</small></span>
  </div>
  <div class="content">
    <div class="illus" style="gap:18px;margin:8px 0 4px;color:var(--brand)">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M6 18 L17 9 L28 18" stroke="#161021" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 15 V28 H25 V15" stroke="#161021" stroke-width="2.4" stroke-linejoin="round"/><path d="M17 9 V4 H23 V7" stroke="var(--brand)" stroke-width="2.4" stroke-linejoin="round"/></svg>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M17 5 C12 11 9 14 9 19 a8 8 0 0 0 16 0 c0-5-3-8-8-14Z" stroke="#161021" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 28 H25" stroke="#161021" stroke-width="2.4" stroke-linecap="round"/></svg>
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none"><path d="M6 24 C6 16 14 12 24 12 C32 12 38 16 38 24 Z" fill="var(--brand)"/><circle cx="38" cy="27" r="4" stroke="#161021" stroke-width="2.4"/><path d="M6 24 H34" stroke="#161021" stroke-width="2.4" stroke-linecap="round"/></svg>
    </div>
    <h2 class="h-md" style="margin:4px 0 4px">घर के पास कौन सी जगह है?</h2>
    <p class="body-sm muted" style="margin-bottom:14px">जगह का प्रकार चुनें — फिर पास की जगहों की लिस्ट खुलेगी</p>

    <div style="display:flex;flex-direction:column;gap:12px">
      <div class="radio-card sel" style="padding:14px 16px;gap:12px">
        <span class="lr-icon" style="background:var(--brand);color:#fff;width:40px;height:40px"><span class="material-symbols-rounded ico-sm">temple_hindu</span></span>
        <div class="lr-body"><div class="lr-title">मंदिर / मस्जिद / गुरुद्वारा</div><div class="lr-sub">4 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded lr-chevron">chevron_right</span>
      </div>
      <div class="radio-card" style="padding:14px 16px;gap:12px;box-shadow:var(--sh-sm)">
        <span class="lr-icon" style="width:40px;height:40px"><span class="material-symbols-rounded ico-sm">school</span></span>
        <div class="lr-body"><div class="lr-title">स्कूल</div><div class="lr-sub">4 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded lr-chevron">chevron_right</span>
      </div>
      <div class="radio-card" style="padding:14px 16px;gap:12px;box-shadow:var(--sh-sm)">
        <span class="lr-icon" style="width:40px;height:40px"><span class="material-symbols-rounded ico-sm">local_hospital</span></span>
        <div class="lr-body"><div class="lr-title">अस्पताल</div><div class="lr-sub">3 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded lr-chevron">chevron_right</span>
      </div>
      <div class="radio-card" style="padding:14px 16px;gap:12px;box-shadow:var(--sh-sm)">
        <span class="lr-icon" style="width:40px;height:40px"><span class="material-symbols-rounded ico-sm">account_balance</span></span>
        <div class="lr-body"><div class="lr-title">बैंक / ATM</div><div class="lr-sub">4 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded lr-chevron">chevron_right</span>
      </div>
      <div class="radio-card" style="padding:14px 16px;gap:12px;box-shadow:var(--sh-sm)">
        <span class="lr-icon" style="width:40px;height:40px"><span class="material-symbols-rounded ico-sm">local_gas_station</span></span>
        <div class="lr-body"><div class="lr-title">पेट्रोल पंप</div><div class="lr-sub">3 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded lr-chevron">chevron_right</span>
      </div>
      <div class="radio-card" style="padding:14px 16px;gap:12px;box-shadow:var(--sh-sm)">
        <span class="lr-icon" style="width:40px;height:40px;background:var(--s-muted);color:var(--t-secondary)"><span class="material-symbols-rounded ico-sm">more_horiz</span></span>
        <div class="lr-body"><div class="lr-title">अन्य</div><div class="lr-sub">5 जगह और · खुद टाइप करने का option भी</div></div>
        <span class="material-symbols-rounded lr-chevron">chevron_right</span>
      </div>
    </div>
    <div style="text-align:center;margin:18px 0 8px">
      <span class="label-md brandtext" style="text-decoration:underline">और कुछ नज़दीक है? खुद टाइप करें ›</span>
    </div>
  </div>
` });

/* ---- screen 15 : landmark bottom sheet over dimmed list ---- */
window.SCREENS.push({ name: "15 · नज़दीकी जगह चुनें", html: `
  <div class="topbar">
    <span class="material-symbols-rounded back">arrow_back</span>
    <span class="spacer"></span>
    <span class="tb-icon material-symbols-rounded">headset_mic</span>
    <span class="translate-chip">A<small>अ</small></span>
  </div>
  <div class="content" style="filter:blur(.3px);opacity:.5">
    <div class="illus" style="gap:18px;margin:8px 0 4px;color:var(--brand)">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M6 18 L17 9 L28 18" stroke="#161021" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 15 V28 H25 V15" stroke="#161021" stroke-width="2.4" stroke-linejoin="round"/><path d="M17 9 V4 H23 V7" stroke="var(--brand)" stroke-width="2.4" stroke-linejoin="round"/></svg>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M17 5 C12 11 9 14 9 19 a8 8 0 0 0 16 0 c0-5-3-8-8-14Z" stroke="#161021" stroke-width="2.4" stroke-linejoin="round"/><path d="M9 28 H25" stroke="#161021" stroke-width="2.4" stroke-linecap="round"/></svg>
      <svg width="44" height="34" viewBox="0 0 44 34" fill="none"><path d="M6 24 C6 16 14 12 24 12 C32 12 38 16 38 24 Z" fill="var(--brand)"/><circle cx="38" cy="27" r="4" stroke="#161021" stroke-width="2.4"/><path d="M6 24 H34" stroke="#161021" stroke-width="2.4" stroke-linecap="round"/></svg>
    </div>
    <h2 class="h-md" style="margin:4px 0 4px">घर के पास कौन सी जगह है?</h2>
    <p class="body-sm muted">जगह का प्रकार चुनें — फिर पास की जगहों की लिस्ट खुलेगी</p>
  </div>
  <div class="dim"></div>
  <div class="sheet" style="max-height:80%">
    <div class="sheet-handle"></div>
    <div class="sheet-head">
      <h3>घर के पास का मंदिर / मस्जिद चुनें</h3>
      <span class="material-symbols-rounded sheet-close">close</span>
    </div>
    <div class="body-sm muted" style="margin-bottom:8px">घर से सबसे नज़दीक के</div>
    <div style="overflow-y:auto">
      <div class="loc-row">
        <div class="loc-dist"><span class="material-symbols-rounded">location_on</span><small>500 m</small></div>
        <div class="loc-body"><div class="loc-name">Hanuman Mandir</div><div class="loc-addr">Gali No. 2, Rajiv Colony, Sector 33</div></div>
      </div>
      <div class="loc-row">
        <div class="loc-dist"><span class="material-symbols-rounded">location_on</span><small>700 m</small></div>
        <div class="loc-body"><div class="loc-name">Shiv Mandir</div><div class="loc-addr">Sector 33 chowk, Gurugram</div></div>
      </div>
      <div class="loc-row">
        <div class="loc-dist"><span class="material-symbols-rounded">location_on</span><small>1.2 km</small></div>
        <div class="loc-body"><div class="loc-name">Jama Masjid</div><div class="loc-addr">Old Sector 33, Gurugram</div></div>
      </div>
      <div class="loc-row">
        <div class="loc-dist"><span class="material-symbols-rounded">location_on</span><small>1.5 km</small></div>
        <div class="loc-body"><div class="loc-name">Sai Mandir</div><div class="loc-addr">Block C, Rajiv Colony</div></div>
      </div>
    </div>
    <div class="loc-other">
      <span class="material-symbols-rounded">edit</span>
      <div><div class="loc-name brandtext">मेरी जगह यहाँ नहीं है</div><div class="loc-addr">खुद टाइप करूँगा</div></div>
    </div>
  </div>
` });

/* ---- screen 16 : confirm landmark "जगह की पुष्टि करें" ---- */
window.SCREENS.push({ name: "16 · जगह की पुष्टि करें", html: `
  <div class="topbar">
    <span class="material-symbols-rounded back">arrow_back</span>
    <span class="spacer"></span>
    <span class="tb-icon material-symbols-rounded">headset_mic</span>
    <span class="translate-chip">A<small>अ</small></span>
  </div>
  <div class="content">
    <div class="illus" style="margin:24px 0 12px">
      <svg width="120" height="96" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 46 L60 18 L98 46" stroke="#161021" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M30 42 V84 H90 V42" stroke="#161021" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="42" y="58" width="14" height="14" rx="2" stroke="#161021" stroke-width="3"/>
        <path d="M64 72 V58 H78 V72" stroke="#161021" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M60 18 V6" stroke="#161021" stroke-width="3" stroke-linecap="round"/>
        <circle cx="60" cy="5" r="6" fill="var(--brand)"/>
      </svg>
    </div>
    <h2 class="h-lg" style="margin-bottom:12px">जगह की पुष्टि करें</h2>
    <p class="body-md muted" style="margin-bottom:24px">यदि नाम सही नहीं है तो बदल सकते हैं — टेक्निशियन को इसी नाम से जगह ढूँढने में मदद मिलेगी</p>

    <label class="label-lg" style="display:block;margin-bottom:8px">जगह क्या है?</label>
    <div class="input" style="display:flex;align-items:center;gap:14px;padding:14px 16px">
      <span class="material-symbols-rounded" style="color:var(--brand);font-size:26px">temple_hindu</span>
      <span class="bold" style="flex:1">मंदिर / मस्जिद / गुरुद्वारा</span>
      <span class="material-symbols-rounded" style="color:var(--t-secondary)">expand_more</span>
    </div>
    <p class="body-sm muted" style="margin:8px 0 24px">बदलने के लिए ऊपर टैप करें</p>

    <label class="label-lg" style="display:block;margin-bottom:8px">जगह का नाम</label>
    <div class="input" style="display:flex;align-items:center;gap:14px;padding:14px 16px">
      <span class="material-symbols-rounded" style="color:var(--t-secondary);font-size:26px">temple_hindu</span>
      <span class="bold" style="flex:1;font-size:17px">Hanuman Mandir</span>
      <span class="material-symbols-rounded" style="color:var(--t-secondary)">close</span>
    </div>
    <p class="body-sm muted" style="margin-top:8px">यदि नाम अलग है तो खुद टाइप कर सकते हैं</p>
  </div>
  <div class="btn-bar">
    <button class="btn btn-primary">अगला कदम</button>
  </div>
` });

/* ---- screen 17 : voice route (idle) "रास्ता बताएं — अपनी आवाज़ में" ---- */
window.SCREENS.push({ name: "17 · रास्ता बताएं (आवाज़)", html: `
  <div class="topbar">
    <span class="material-symbols-rounded back">arrow_back</span>
    <span class="spacer"></span>
    <span class="label-md brandtext" style="padding-right:4px">छोड़ें</span>
  </div>
  <div class="content">
    <div class="illus" style="margin:28px 0 12px">
      <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 78 C40 56 56 60 72 64 C92 70 110 60 124 44" stroke="#A7A1B2" stroke-width="2.4" stroke-dasharray="5 6" stroke-linecap="round"/>
        <rect x="62" y="22" width="26" height="44" rx="13" fill="var(--brand)"/>
        <rect x="70" y="32" width="10" height="20" rx="5" fill="#fff"/>
        <path d="M62 60 C68 70 82 70 88 60" stroke="#161021" stroke-width="2.6" stroke-linecap="round" fill="none"/>
        <path d="M50 30 q-8 14 0 28 M42 24 q-12 20 0 40" stroke="var(--brand)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M100 30 q8 14 0 28 M108 24 q12 20 0 40" stroke="var(--brand)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <circle cx="126" cy="40" r="6" stroke="#161021" stroke-width="2.4"/><circle cx="126" cy="40" r="2" fill="#161021"/>
      </svg>
    </div>
    <h2 class="h-lg" style="margin-bottom:12px">रास्ता बताएं — अपनी आवाज़ में</h2>
    <p class="body-md muted" style="margin-bottom:18px">अपनी आवाज़ में रास्ता बताएं ताकि टेक्निशियन सीधे आपके घर पहुंच सके। यह ज़रूरी नहीं है — चाहें तो छोड़ भी सकते हैं।</p>

    <div style="background:var(--info-tint);border-radius:var(--r-lg);padding:14px 16px;display:flex;gap:10px;margin-bottom:20px">
      <span class="material-symbols-rounded" style="color:var(--info);font-size:20px;flex:none">format_quote</span>
      <p class="body-md" style="font-style:italic">“मेन रोड से अंदर आकर पहले दाएं मुड़ें, नीला गेट है, दूसरी मंज़िल।”</p>
    </div>

    <div style="border:1px solid var(--b-subtle);border-radius:var(--r-lg);padding:28px 16px 22px;display:flex;flex-direction:column;align-items:center;gap:16px;box-shadow:var(--sh-sm)">
      <div style="width:96px;height:96px;border-radius:var(--r-full);background:var(--brand);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--brand-soft)">
        <span class="material-symbols-rounded" style="color:#fff;font-size:40px">mic</span>
      </div>
      <span class="body-md muted">रिकॉर्ड करने के लिए टैप करें</span>
    </div>
  </div>
` });

/* ---- screen 18 : voice route (recording) ---- */
window.SCREENS.push({ name: "18 · रिकॉर्डिंग चल रही है", html: `
  <div class="topbar">
    <span class="material-symbols-rounded back">arrow_back</span>
    <span class="spacer"></span>
  </div>
  <div class="content">
    <div class="illus" style="margin:28px 0 12px">
      <svg width="150" height="100" viewBox="0 0 150 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 78 C40 56 56 60 72 64 C92 70 110 60 124 44" stroke="#A7A1B2" stroke-width="2.4" stroke-dasharray="5 6" stroke-linecap="round"/>
        <rect x="62" y="22" width="26" height="44" rx="13" fill="var(--brand)"/>
        <rect x="70" y="32" width="10" height="20" rx="5" fill="#fff"/>
        <path d="M62 60 C68 70 82 70 88 60" stroke="#161021" stroke-width="2.6" stroke-linecap="round" fill="none"/>
        <path d="M50 30 q-8 14 0 28 M42 24 q-12 20 0 40" stroke="var(--brand)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M100 30 q8 14 0 28 M108 24 q12 20 0 40" stroke="var(--brand)" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <circle cx="126" cy="40" r="6" stroke="#161021" stroke-width="2.4"/><circle cx="126" cy="40" r="2" fill="#161021"/>
      </svg>
    </div>
    <h2 class="h-lg" style="margin-bottom:12px">रास्ता बताएं — अपनी आवाज़ में</h2>
    <p class="body-md muted" style="margin-bottom:18px">अपनी आवाज़ में रास्ता बताएं ताकि टेक्निशियन सीधे आपके घर पहुंच सके। यह ज़रूरी नहीं है — चाहें तो छोड़ भी सकते हैं।</p>

    <div style="background:var(--info-tint);border-radius:var(--r-lg);padding:14px 16px;display:flex;gap:10px;margin-bottom:20px">
      <span class="material-symbols-rounded" style="color:var(--info);font-size:20px;flex:none">format_quote</span>
      <p class="body-md" style="font-style:italic">“मेन रोड से अंदर आकर पहले दाएं मुड़ें, नीला गेट है, दूसरी मंज़िल।”</p>
    </div>

    <div style="border:1px solid var(--b-subtle);border-radius:var(--r-lg);padding:16px;display:flex;align-items:center;gap:14px;box-shadow:var(--sh-sm)">
      <div style="width:60px;height:60px;border-radius:var(--r-full);background:var(--neg);display:flex;align-items:center;justify-content:center;flex:none">
        <span class="material-symbols-rounded" style="color:#fff;font-size:28px">mic</span>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:8px">
        <span class="label-lg">00:01</span>
        <div style="display:flex;align-items:center;gap:4px;height:16px">
          <span style="width:4px;height:14px;border-radius:2px;background:var(--brand)"></span>
          <span style="width:4px;height:10px;border-radius:2px;background:var(--brand)"></span>
          <span style="width:4px;height:7px;border-radius:2px;background:var(--brand)"></span>
          <span style="width:4px;height:7px;border-radius:2px;background:var(--brand)"></span>
          <span style="width:4px;height:7px;border-radius:2px;background:var(--brand)"></span>
          <span style="width:4px;height:7px;border-radius:2px;background:var(--brand)"></span>
          <span style="width:4px;height:11px;border-radius:2px;background:var(--brand)"></span>
        </div>
      </div>
      <div style="width:56px;height:56px;border-radius:var(--r-full);background:var(--neg);display:flex;align-items:center;justify-content:center;flex:none">
        <span class="material-symbols-rounded" style="color:#fff;font-size:24px">stop</span>
      </div>
    </div>
  </div>
` });
