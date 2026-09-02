<script>
  import { onMount, onDestroy } from 'svelte';
  import { 
    Sparkles, RefreshCw, ShieldAlert 
  } from 'lucide-svelte';
  import { CONFIG } from '../lib/config.js';

  let videoUrl = '';
  let customReclipUrl = CONFIG.cnvmp3Url || CONFIG.reclipUrl;
  let isAutoRefreshing = false;

  /** @type {HTMLIFrameElement | null} */
  let iframeRef = null;
  /** @type {any} */
  let refreshTimer = null;
  let userInteractedWithIframe = false;
  let interactionStartTime = 0;

  function refreshPage() {
    isAutoRefreshing = true;
    window.location.reload();
  }

  function handleWindowBlur() {
    if (document.activeElement === iframeRef) {
      userInteractedWithIframe = true;
      interactionStartTime = Date.now();
      
      // Fallback timer: Only refresh after 25s if interaction persists (gives full time for conversion & download)
      if (refreshTimer) clearTimeout(refreshTimer);
      refreshTimer = setTimeout(() => {
        if (userInteractedWithIframe) {
          refreshPage();
        }
      }, 25000);
    }
  }

  function handleWindowFocus() {
    if (userInteractedWithIframe) {
      const interactionDuration = Date.now() - interactionStartTime;
      userInteractedWithIframe = false;
      if (refreshTimer) clearTimeout(refreshTimer);

      // Only refresh if interaction was > 3.5 seconds (meaning conversion & download occurred, not just pasting URL)
      if (interactionDuration > 3500) {
        refreshTimer = setTimeout(() => {
          refreshPage();
        }, 1500);
      }
    }
  }

  onMount(() => {
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);
  });

  onDestroy(() => {
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', handleWindowFocus);
    if (refreshTimer) clearTimeout(refreshTimer);
  });

  $: iframeSrc = videoUrl 
    ? `${customReclipUrl}${customReclipUrl.includes('?') ? '&' : '?'}url=${encodeURIComponent(videoUrl)}` 
    : customReclipUrl;
</script>

<section id="downloader" class="relative max-w-4xl mx-auto px-4 pt-6 pb-12">
  <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-25"></div>

  <div class="relative bg-slate-900/90 border border-slate-800/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
    
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
          <Sparkles class="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 class="text-base sm:text-lg font-extrabold text-white leading-tight flex items-center gap-2">
            <span>LinkSave Downloader</span>
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Pro Engine Active</span>
            </span>
          </h2>
          <p class="text-xs text-slate-400">Convert & download HD videos & audio streams instantly</p>
        </div>
      </div>
    </div>

    <div class="space-y-4 animate-fade-in">
      <div class="flex items-center justify-between text-xs text-slate-400 px-3 py-2 bg-slate-950/60 rounded-xl border border-slate-800/80">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-semibold text-slate-200">Direct High-Performance Stream Converter</span>
          <span class="hidden sm:inline text-[11px] text-slate-500">(Auto-refreshes website post-download)</span>
        </div>
        
        <button
          on:click={refreshPage}
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition border border-slate-700 hover:bg-slate-700"
        >
          <RefreshCw class="w-3.5 h-3.5 {isAutoRefreshing ? 'animate-spin text-blue-400' : ''}" />
          <span>Refresh Page</span>
        </button>
      </div>

      <div 
        class="relative w-full h-[190px] rounded-2xl overflow-hidden bg-[#0A0F1D] border border-slate-800 shadow-2xl group"
      >
        <!-- Seamless top cap bar overlay to blend top edge cleanly into LinkSave design -->
        <div class="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#0A0F1D] to-transparent z-10 pointer-events-none"></div>

        <iframe
          bind:this={iframeRef}
          src={iframeSrc}
          title="LinkSave Media Engine"
          scrolling="no"
          class="w-full border-0 absolute left-0 overflow-hidden"
          style="top: -416px; height: 950px; width: 100%; overflow: hidden;"
          loading="lazy"
          allow="clipboard-write; clipboard-read"
        ></iframe>

        <!-- Seamless bottom cap bar overlay -->
        <div class="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-[#0A0F1D] to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-slate-800/60 text-center flex items-center justify-center gap-2 text-[11px] text-slate-400">
      <ShieldAlert class="w-3.5 h-3.5 text-amber-400 shrink-0" />
      <span>Notice: Please only download media you own or have explicit authorization to download.</span>
    </div>
  </div>
</section>
