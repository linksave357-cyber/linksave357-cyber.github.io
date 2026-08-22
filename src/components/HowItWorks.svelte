<script>
  import { Clipboard, Cpu, Download, ArrowRight } from 'lucide-svelte';

  const steps = [
    {
      number: '01',
      title: '1. Paste',
      subtitle: 'Copy & Paste URL',
      description: 'Copy the video link from Instagram, TikTok, X, or any platform, then paste it into the LinkSave search bar.',
      icon: Clipboard,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      number: '02',
      title: '2. Analyze',
      subtitle: 'Instant Extraction',
      description: 'Our engine quickly processes the video URL, removing watermarks and finding all available qualities & audio options.',
      icon: Cpu,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      number: '03',
      title: '3. Save',
      subtitle: 'One-Click Download',
      description: 'Choose your desired resolution (1080p, 720p, or MP3 audio) and click Download to save the file straight to your device.',
      icon: Download,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];
</script>

<section id="how-it-works" class="py-16 md:py-24 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <span class="text-xs font-extrabold uppercase tracking-widest text-blue-400">Simple Process</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
        How LinkSave Works
      </h2>
      <p class="mt-3 text-base text-slate-400">
        Downloading your favorite media takes only a few seconds with 3 simple steps.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      {#each steps as step, index}
        <div class="relative group bg-slate-900/90 border border-slate-800/90 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-xl flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr {step.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform">
                <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <svelte:component this={step.icon} class="w-6 h-6 text-white" />
                </div>
              </div>
              <span class="text-4xl font-black text-slate-800 group-hover:text-blue-500/30 transition-colors">
                {step.number}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white tracking-tight">
              {step.title}
            </h3>
            <p class="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
              {step.subtitle}
            </p>

            <p class="mt-4 text-sm text-slate-400 leading-relaxed">
              {step.description}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
            <span>Step {index + 1} of 3</span>
            {#if index < 2}
              <ArrowRight class="w-4 h-4 text-blue-400 hidden md:block" />
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
