<script>
  /** @type {'leaderboard' | 'rectangle' | 'banner'} */
  export let slotType = 'leaderboard';
</script>

<div class="my-6 flex justify-center text-center">
  <div class="w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center min-h-[90px] shadow-inner relative overflow-hidden">
    <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Advertisement</div>
    
    <!-- Ad Network Container (Adsterra / Monetag Script Slot) -->
    <div class="w-full flex items-center justify-center min-h-[90px]">
      <!-- Paste your Adsterra or Monetag ad unit code here -->
      <div class="text-xs text-slate-400 font-mono py-2 px-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Ad Placement Ready ({slotType})</span>
      </div>
    </div>
  </div>
</div>

