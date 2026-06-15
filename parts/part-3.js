/* ============================================================
   Wiom prototype — Part 3 (screens 13–18)
   Address / Landmark / Voice — feature/chat
   Source of truth: feature/chat/.../ui/{SaveAddress,LandmarkType,Landmark,
   AddressConfirm,VoiceRecording}Screen.kt + ChatStrings.kt (hi).
   PNGs used as visual cross-check only.
   ============================================================ */

/* shared status bar + top bars (markup per app.css) */
const _sb3 = `<div class="statusbar"><span>04:35 PM</span><span class="sb-right"><span class="material-symbols-rounded">wifi</span><span class="material-symbols-rounded">signal_cellular_alt</span><span class="material-symbols-rounded">battery_horiz_075</span> 50%</span></div>`;
/* back + headset + translate */
const _tb3 = `<div class="topbar"><div class="tb-row"><span class="tb-back"><span class="material-symbols-rounded">arrow_back</span></span><span class="tb-spacer"></span><span class="tb-icon"><span class="material-symbols-rounded">headset_mic</span></span><span class="tb-icon tb-icon-lang"><span class="material-symbols-rounded">translate</span></span></div></div>`;

/* house-with-pink-pin illustration (screens 13 & 16) */
const _houseSvg = `<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="74" cy="20" r="8" fill="var(--brand-600)"/>
  <line x1="74" y1="28" x2="74" y2="46" stroke="var(--n-900)" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M24 64 L60 36 L96 64" stroke="var(--n-900)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M32 60 L32 100 L88 100 L88 60" stroke="var(--n-900)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <rect x="42" y="74" width="14" height="14" rx="2" stroke="var(--n-900)" stroke-width="2.5" fill="none"/>
  <path d="M64 100 L64 74 L78 74 L78 100" stroke="var(--n-900)" stroke-width="2.5" stroke-linejoin="round" fill="none"/>
</svg>`;

/* mic-with-waveform illustration (voice screens 17 & 18) */
const _micSvg = `<svg width="180" height="110" viewBox="0 0 180 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M28 78 C56 88, 70 70, 90 60 C112 50, 126 64, 152 56" stroke="var(--n-500)" stroke-width="2" stroke-dasharray="4 6" stroke-linecap="round" fill="none"/>
  <rect x="78" y="22" width="24" height="42" rx="12" fill="var(--brand-600)"/>
  <rect x="86" y="32" width="8" height="20" rx="4" fill="var(--white)"/>
  <path d="M70 60 C76 70, 104 70, 110 60" stroke="var(--n-900)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <line x1="90" y1="64" x2="90" y2="80" stroke="var(--n-900)" stroke-width="2.5"/>
  <line x1="80" y1="80" x2="100" y2="80" stroke="var(--n-900)" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M64 32 C58 38, 58 48, 64 54" stroke="var(--brand-500)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M54 26 C44 36, 44 50, 54 60" stroke="var(--brand-500)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M116 32 C122 38, 122 48, 116 54" stroke="var(--brand-500)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <path d="M126 26 C136 36, 136 50, 126 60" stroke="var(--brand-500)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
  <circle cx="146" cy="40" r="6" stroke="var(--brand-600)" stroke-width="2.5" fill="none"/>
  <circle cx="146" cy="40" r="2" fill="var(--brand-600)"/>
  <line x1="146" y1="46" x2="146" y2="58" stroke="var(--n-900)" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

/* small temple/landmark glyph for confirm dropdown + name field */
const _templeGlyph = `<svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <rect x="11.5" y="2" width="3" height="4" rx="1" fill="var(--brand-600)"/>
  <path d="M3 11 L13 5 L23 11 Z" fill="var(--brand-600)"/>
  <rect x="4" y="11" width="18" height="9" rx="1.5" fill="var(--brand-600)"/>
  <rect x="11" y="14" width="4" height="6" fill="var(--white)"/>
</svg>`;
const _templeGlyphGrey = _templeGlyph.replace(/var\(--brand-600\)/g, 'var(--n-700)');

/* small landmark trio glyph for screens 14 & 15 (house · temple · shop) */
const _landmarkTrio = `<svg width="170" height="56" viewBox="0 0 170 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M18 38 L34 24 L50 38" stroke="var(--n-900)" stroke-width="2" fill="none"/>
  <path d="M22 36 L22 50 L46 50 L46 36" stroke="var(--n-900)" stroke-width="2" fill="none"/>
  <rect x="33" y="14" width="2" height="6" fill="var(--brand-600)"/><path d="M35 15 L42 17 L35 19 Z" fill="var(--brand-600)"/>
  <path d="M78 24 C78 16 92 16 92 24 L92 50 L78 50 Z" stroke="var(--n-900)" stroke-width="2" fill="none"/>
  <line x1="85" y1="10" x2="85" y2="16" stroke="var(--n-900)" stroke-width="2"/>
  <rect x="120" y="32" width="34" height="18" rx="2" fill="var(--brand-600)"/>
  <path d="M120 32 L137 22 L154 32 Z" fill="var(--brand-600)"/>
  <circle cx="158" cy="50" r="5" stroke="var(--n-900)" stroke-width="2" fill="none"/>
</svg>`;

/* ---- screen 13 : Enter full address (SaveAddressScreen.kt) ---- */
window.SCREENS.push({ name: "13 · पूरा पता भरें", html: `
  ${_sb3}
  ${_tb3}
  <div class="content">
    <div class="illus" style="margin:8px 0 24px;">${_houseSvg}</div>
    <div class="ty-t2 c-pri" style="margin-bottom:32px;">अपना पूरा पता भरें</div>

    <div class="wfield">
      <label>मकान / फ्लैट / फ्लोर नंबर</label>
      <input class="winput" value="१" />
    </div>

    <div class="wfield">
      <label>स्ट्रीट / गली नं.</label>
      <input class="winput" value="१" />
    </div>

    <div class="wfield filled">
      <label>इलाका / लोकैलिटी</label>
      <input class="winput" value="Rajiv Colony, Sector 33, Gurugram, Harya" />
    </div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-primary">सही सेट-अप के लिए पास की जगह दें</button>
  </div>
` });

/* ---- screen 14 : Landmark type list (LandmarkTypeScreen.kt) ---- */
window.SCREENS.push({ name: "14 · घर के पास कौन सी जगह", html: `
  ${_sb3}
  ${_tb3}
  <div class="content">
    <div class="illus" style="margin:0 0 8px;">${_landmarkTrio}</div>
    <div class="ty-t2 c-pri" style="margin-bottom:8px;">घर के पास कौन सी जगह है?</div>
    <div class="ty-b1 c-sec" style="margin-bottom:24px;">जगह का प्रकार चुनें — फिर पास की जगहों की लिस्ट खुलेगी</div>

    <div class="opt-list">
      <div class="opt-card sel">
        <div class="row-ic" style="background:transparent;width:44px;height:44px;"><span class="material-symbols-rounded">temple_hindu</span></div>
        <div class="row-body"><div class="row-title">मंदिर / मस्जिद / गुरुद्वारा</div><div class="row-sub">4 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded row-chev">chevron_right</span>
      </div>
      <div class="opt-card">
        <div class="row-ic" style="background:transparent;width:44px;height:44px;"><span class="material-symbols-rounded">school</span></div>
        <div class="row-body"><div class="row-title">स्कूल</div><div class="row-sub">4 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded row-chev">chevron_right</span>
      </div>
      <div class="opt-card">
        <div class="row-ic" style="background:transparent;width:44px;height:44px;"><span class="material-symbols-rounded">local_hospital</span></div>
        <div class="row-body"><div class="row-title">अस्पताल</div><div class="row-sub">3 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded row-chev">chevron_right</span>
      </div>
      <div class="opt-card">
        <div class="row-ic" style="background:transparent;width:44px;height:44px;"><span class="material-symbols-rounded">account_balance</span></div>
        <div class="row-body"><div class="row-title">बैंक / ATM</div><div class="row-sub">4 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded row-chev">chevron_right</span>
      </div>
      <div class="opt-card">
        <div class="row-ic" style="background:transparent;width:44px;height:44px;"><span class="material-symbols-rounded">local_gas_station</span></div>
        <div class="row-body"><div class="row-title">पेट्रोल पंप</div><div class="row-sub">3 जगह नज़दीक</div></div>
        <span class="material-symbols-rounded row-chev">chevron_right</span>
      </div>
      <div class="opt-card">
        <div class="row-ic" style="width:44px;height:44px;"><span class="material-symbols-rounded" style="color:var(--icon-no-action);">more_horiz</span></div>
        <div class="row-body"><div class="row-title">अन्य</div><div class="row-sub">5 जगह और · खुद टाइप करने का option भी</div></div>
        <span class="material-symbols-rounded row-chev">chevron_right</span>
      </div>
    </div>

    <div style="text-align:center;padding:20px 0 16px;">
      <span class="ty-b2 c-pri" style="text-decoration:underline;">और कुछ नज़दीक है? खुद टाइप करें</span>
      <span class="material-symbols-rounded" style="font-size:18px;color:var(--icon-brand);vertical-align:middle;">chevron_right</span>
    </div>
  </div>
` });

/* ---- screen 15 : nearby-places bottom sheet over dimmed type list ---- */
window.SCREENS.push({ name: "15 · मंदिर / मस्जिद चुनें", html: `
  ${_sb3}
  ${_tb3}
  <div class="content" style="opacity:.5;">
    <div class="illus" style="margin:0 0 8px;">${_landmarkTrio}</div>
    <div class="ty-t2 c-pri" style="margin-bottom:8px;">घर के पास कौन सी जगह है?</div>
    <div class="ty-b1 c-sec">जगह का प्रकार चुनें — फिर पास की जगहों की लिस्ट खुलेगी</div>
  </div>
  <div class="dim"></div>
  <div class="sheet">
    <div class="sheet-handle"></div>
    <div class="sheet-head"><h3>घर के पास का मंदिर / मस्जिद चुनें</h3><span class="material-symbols-rounded sheet-close">close</span></div>
    <div class="ty-b3 c-sec" style="margin-bottom:8px;">घर से सबसे नज़दीक के</div>
    <div style="overflow-y:auto;">
      <div class="loc-row" style="border-top:none;">
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
    <div class="loc-other"><span class="material-symbols-rounded">edit</span><div><div class="loc-name c-brand">मेरी जगह यहाँ नहीं है</div><div class="loc-addr">खुद टाइप करूँगा</div></div></div>
  </div>
` });

/* ---- screen 16 : Confirm nearby place (LandmarkScreen.kt) ---- */
window.SCREENS.push({ name: "16 · जगह की पुष्टि करें", html: `
  ${_sb3}
  ${_tb3}
  <div class="content">
    <div class="illus" style="margin:8px 0 24px;">${_houseSvg}</div>
    <div class="ty-t2 c-pri" style="margin-bottom:8px;">नज़दीकी जगह कन्फर्म करें</div>
    <div class="ty-b1 c-pri" style="margin-bottom:32px;">यदि नाम सही नहीं है तो बदल सकते हैं — टेक्निशियन को इसी नाम से जगह ढूँढने में मदद मिलेगी</div>

    <div class="ty-b1 c-pri" style="margin-bottom:8px;">जगह क्या है?</div>
    <div style="display:flex;align-items:center;gap:12px;height:56px;border:1px solid var(--stroke-sec);border-radius:12px;padding:0 16px;background:var(--bg-surface);">
      ${_templeGlyph}
      <span class="ty-b1-bold c-pri" style="flex:1;">मंदिर / मस्जिद / गुरुद्वारा</span>
      <span class="material-symbols-rounded" style="color:var(--icon-brand);">expand_more</span>
    </div>
    <div class="ty-b2 c-sec" style="margin:8px 0 32px;">बदलने के लिए ऊपर टैप करें</div>

    <div class="ty-b1 c-pri" style="margin-bottom:8px;">जगह का नाम</div>
    <div style="display:flex;align-items:center;gap:12px;height:56px;border:1px solid var(--stroke-sec);border-radius:12px;padding:0 16px;background:var(--bg-surface);">
      ${_templeGlyphGrey}
      <span class="ty-b1-bold c-pri" style="flex:1;">Hanuman Mandir</span>
      <span class="material-symbols-rounded" style="color:var(--icon-no-action);">close</span>
    </div>
    <div class="ty-b2 c-sec" style="margin-top:8px;">यदि नाम अलग है तो खुद टाइप कर सकते हैं</div>
  </div>
  <div class="btn-bar">
    <button class="wbtn wbtn-primary">अगला कदम</button>
  </div>
` });

/* ---- screen 17 : Voice recording — IDLE (VoiceRecordingScreen.kt) ---- */
window.SCREENS.push({ name: "17 · रास्ता बताएं (आवाज़)", html: `
  ${_sb3}
  <div class="topbar"><div class="tb-row"><span class="tb-back"><span class="material-symbols-rounded">arrow_back</span></span><span class="tb-spacer"></span><span class="tb-inline-title c-brand" style="padding-right:12px;">छोड़ें</span></div></div>
  <div class="content">
    <div class="illus" style="margin:8px 0 24px;">${_micSvg}</div>
    <div class="ty-t2 c-pri" style="margin-bottom:8px;">रास्ता बताएं — अपनी आवाज़ में</div>
    <div class="ty-b1 c-pri" style="margin-bottom:24px;">अपनी आवाज़ में रास्ता बताएं ताकि टेक्निशियन सीधे आपके घर पहुंच सके। यह ज़रूरी नहीं है — चाहें तो छोड़ भी सकते हैं।</div>

    <div style="background:var(--bg-neutral-sec);border:1px solid var(--stroke-pri);border-radius:12px;padding:16px;display:flex;gap:8px;margin-bottom:32px;">
      <span class="material-symbols-rounded" style="color:var(--info-600);font-size:20px;transform:rotate(180deg);">format_quote</span>
      <span class="ty-b2 c-sec" style="font-style:italic;">“मेन रोड से अंदर आकर पहले दाएं मुड़ें, नीला गेट है, दूसरी मंज़िल।”</span>
    </div>

    <div style="background:var(--bg-neutral-pri);border:1px solid var(--stroke-pri);border-radius:16px;padding:40px 16px;display:flex;flex-direction:column;align-items:center;gap:12px;">
      <div style="width:72px;height:72px;border-radius:var(--r-full);background:var(--pri-cta-bg);display:flex;align-items:center;justify-content:center;">
        <span class="material-symbols-rounded" style="color:var(--pri-cta-fg);font-size:32px;">mic</span>
      </div>
      <span class="ty-b2 c-sec">रिकॉर्ड करने के लिए टैप करें</span>
    </div>
  </div>
` });

/* ---- screen 18 : Voice recording — RECORDING (VoiceRecordingScreen.kt) ---- */
window.SCREENS.push({ name: "18 · रिकॉर्डिंग चालू", html: `
  ${_sb3}
  <div class="topbar"><div class="tb-row"><span class="tb-back"><span class="material-symbols-rounded">arrow_back</span></span><span class="tb-spacer"></span></div></div>
  <div class="content">
    <div style="height:40px;"></div>
    <div class="illus" style="margin:0 0 24px;">${_micSvg}</div>
    <div class="ty-t2 c-pri" style="margin-bottom:8px;">रास्ता बताएं — अपनी आवाज़ में</div>
    <div class="ty-b1 c-pri" style="margin-bottom:24px;">अपनी आवाज़ में रास्ता बताएं ताकि टेक्निशियन सीधे आपके घर पहुंच सके। यह ज़रूरी नहीं है — चाहें तो छोड़ भी सकते हैं।</div>

    <div style="background:var(--bg-neutral-sec);border:1px solid var(--stroke-pri);border-radius:12px;padding:16px;display:flex;gap:8px;margin-bottom:32px;">
      <span class="material-symbols-rounded" style="color:var(--info-600);font-size:20px;transform:rotate(180deg);">format_quote</span>
      <span class="ty-b2 c-sec" style="font-style:italic;">“मेन रोड से अंदर आकर पहले दाएं मुड़ें, नीला गेट है, दूसरी मंज़िल।”</span>
    </div>

    <div style="background:var(--bg-neutral-pri);border:1px solid var(--stroke-pri);border-radius:16px;padding:24px 16px;display:flex;align-items:center;gap:16px;">
      <div style="width:48px;height:48px;border-radius:var(--r-full);background:var(--neg-100);display:flex;align-items:center;justify-content:center;flex:none;">
        <span class="material-symbols-rounded" style="color:var(--neg-600);font-size:22px;">fiber_manual_record</span>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:12px;">
        <span class="ty-b1-bold c-pri">00:01</span>
        <svg width="100%" height="20" viewBox="0 0 90 20" preserveAspectRatio="none" aria-hidden="true">
          <g stroke="var(--brand-600)" stroke-width="4" stroke-linecap="round">
            <line x1="2" y1="6" x2="2" y2="14"/><line x1="12" y1="3" x2="12" y2="17"/>
            <line x1="22" y1="7" x2="22" y2="13"/><line x1="32" y1="4" x2="32" y2="16"/>
            <line x1="42" y1="8" x2="42" y2="12"/><line x1="52" y1="5" x2="52" y2="15"/>
            <line x1="62" y1="7" x2="62" y2="13"/><line x1="72" y1="4" x2="72" y2="16"/>
          </g>
        </svg>
      </div>
      <div style="width:48px;height:48px;border-radius:var(--r-full);background:var(--neg-600);display:flex;align-items:center;justify-content:center;flex:none;">
        <span class="material-symbols-rounded" style="color:var(--white);font-size:24px;">stop</span>
      </div>
    </div>
  </div>
` });
