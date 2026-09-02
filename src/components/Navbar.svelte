<script>
  import { Download, Menu, X, Sparkles, ShieldCheck } from 'lucide-svelte';

  export let onOpenModal = (/** @type {any} */ type) => {};
  let mobileMenuOpen = false;

  /**
   * @param {string} id
   */
  function scrollToSection(id) {
    mobileMenuOpen = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<header class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      
      <!-- Brand Logo -->
      <button 
        on:click={() => scrollToSection('hero')} 
        class="flex items-center gap-3 group text-left focus:outline-none"
      >
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
          <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
            <Download class="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div>
          <span class="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-400 bg-clip-text text-transparent">
            LinkSave
          </span>
          <span class="block text-[10px] font-semibold text-blue-400/90 tracking-wider uppercase -mt-1">
            Video Downloader
          </span>
        </div>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        <button 
          on:click={() => scrollToSection('downloader')}
          class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Downloader
        </button>
        <button 
          on:click={() => scrollToSection('how-it-works')}
          class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          How It Works
        </button>
        <button 
          on:click={() => scrollToSection('features')}
          class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Features
        </button>
        <button 
          on:click={() => scrollToSection('faq')}
          class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          FAQ
        </button>
        <button 
          on:click={() => onOpenModal('privacy')}
          class="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/80 rounded-lg transition-colors"
        >
          Privacy Policy
        </button>
      </nav>

      <!-- CTA Button -->
      <div class="hidden sm:flex items-center gap-3">
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>100% Free & Safe</span>
        </div>
        <button
          on:click={() => scrollToSection('downloader')}
          class="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200"
        >
          <Sparkles class="w-4 h-4" />
          <span>Save Video</span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex md:hidden">
        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {#if mobileMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu Dropdown -->
  {#if mobileMenuOpen}
    <div class="md:hidden px-4 pt-2 pb-6 space-y-2 bg-slate-950/95 border-b border-slate-800">
      <button
        on:click={() => scrollToSection('downloader')}
        class="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Downloader
      </button>
      <button
        on:click={() => scrollToSection('how-it-works')}
        class="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        How It Works
      </button>
      <button
        on:click={() => scrollToSection('features')}
        class="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Features
      </button>
      <button
        on:click={() => scrollToSection('faq')}
        class="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        FAQ
      </button>
      <button
        on:click={() => { mobileMenuOpen = false; onOpenModal('privacy'); }}
        class="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
      >
        Privacy Policy
      </button>
      <div class="pt-2">
        <button
          on:click={() => scrollToSection('downloader')}
          class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25"
        >
          <Sparkles class="w-4 h-4" />
          <span>Save Video Now</span>
        </button>
      </div>
    </div>
  {/if}
</header>
