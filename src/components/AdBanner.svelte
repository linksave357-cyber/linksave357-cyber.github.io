<script>
  import { onMount } from 'svelte';

  /** @type {'leaderboard' | 'rectangle' | 'banner'} */
  export let slotType = 'leaderboard';
  /** @type {HTMLDivElement} */
  let container;

  onMount(() => {
    if (container) {
      window.atOptions = {
        'key' : 'aac61e386ccb0a0d5fc7c47dfae348c5',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
      const script = document.createElement('script');
      script.src = 'https://www.highrevenueformat.com/aac61e386ccb0a0d5fc7c47dfae348c5/invoke.js';
      script.async = true;
      container.appendChild(script);
    }
  });
</script>

<div class="my-6 flex justify-center text-center overflow-x-auto">
  <div class="w-full max-w-4xl bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3 flex flex-col items-center justify-center min-h-[105px] shadow-inner relative overflow-hidden">
    <div class="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">Advertisement</div>
    <div bind:this={container} class="w-full flex justify-center items-center min-h-[90px]"></div>
  </div>
</div>


