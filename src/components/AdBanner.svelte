<script>
  /** @type {'leaderboard' | 'rectangle' | 'banner'} */
  export let slotType = 'leaderboard';
  /** @type {string} */
  export let adClient = 'ca-pub-XXXXXXXXXXXXXXXX'; // Replace with user's publisher ID when ready
  /** @type {string} */
  export let adSlot = '1234567890';
</script>

<div class="my-6 flex justify-center text-center">
  <div class="w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center min-h-[90px] shadow-inner relative overflow-hidden">
    <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Advertisement</div>
    
    <!-- Google AdSense Unit Container -->
    <ins class="adsbygoogle"
         style="display:block; width:100%;"
         data-ad-client={adClient}
         data-ad-slot={adSlot}
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>

    <!-- Placeholder badge shown prior to AdSense live activation -->
    <div class="text-xs text-slate-400 font-mono py-2 px-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
      <span>AdSpace Reserved for Google AdSense ({slotType})</span>
    </div>
  </div>
</div>
