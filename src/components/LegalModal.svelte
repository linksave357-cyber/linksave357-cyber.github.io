<script>
  import { X, ShieldCheck, FileText, Info, Mail } from 'lucide-svelte';

  /** @type {'privacy' | 'terms' | 'about' | 'contact' | null} */
  export let activeModal = null;
  export let onClose = () => {};
</script>

{#if activeModal}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
    <div class="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
      
      <!-- Modal Header -->
      <div class="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
        <div class="flex items-center gap-2.5">
          {#if activeModal === 'privacy'}
            <ShieldCheck class="w-5 h-5 text-emerald-400" />
            <h3 class="text-lg font-bold text-white">Privacy Policy</h3>
          {:else if activeModal === 'terms'}
            <FileText class="w-5 h-5 text-blue-400" />
            <h3 class="text-lg font-bold text-white">Terms of Service</h3>
          {:else if activeModal === 'about'}
            <Info class="w-5 h-5 text-purple-400" />
            <h3 class="text-lg font-bold text-white">About LinkSave</h3>
          {:else if activeModal === 'contact'}
            <Mail class="w-5 h-5 text-amber-400" />
            <h3 class="text-lg font-bold text-white">Contact & Support</h3>
          {/if}
        </div>

        <button
          on:click={onClose}
          class="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          aria-label="Close Modal"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Modal Content Body -->
      <div class="py-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-1">
        {#if activeModal === 'privacy'}
          <p class="font-semibold text-white">Effective Date: September 2026</p>
          <p>
            At <strong>LinkSave</strong>, accessible from <code>https://linksave.app/</code>, the privacy of our visitors is one of our main priorities. This Privacy Policy document outlines the types of information collected and how it is used.
          </p>
          
          <h4 class="font-bold text-white text-base pt-2">1. Google AdSense & Third-Party Cookies</h4>
          <p>
            Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <code>linksave.app</code> and other sites on the internet. Users may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy.
          </p>

          <h4 class="font-bold text-white text-base pt-2">2. Log Files</h4>
          <p>
            LinkSave follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and number of clicks.
          </p>

          <h4 class="font-bold text-white text-base pt-2">3. CCPA & GDPR Privacy Rights</h4>
          <p>
            Under CCPA and GDPR, users have the right to request disclosure of personal data collected, request deletion of data, and opt-out of the sale of personal data. If you make a request, we have one month to respond to you.
          </p>

        {:else if activeModal === 'terms'}
          <p class="font-semibold text-white">Last Updated: September 2026</p>
          <p>
            By accessing or using <strong>LinkSave</strong>, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h4 class="font-bold text-white text-base pt-2">1. Acceptable Use & Fair Usage</h4>
          <p>
            LinkSave is provided solely for personal, non-commercial use. Users must respect copyright laws and only download content they own or have explicit authorization to download.
          </p>

          <h4 class="font-bold text-white text-base pt-2">2. Intellectual Property Rights</h4>
          <p>
            LinkSave does not host or store copyrighted video files on its servers. All media content processed remains the property of their respective creators and copyright holders.
          </p>

          <h4 class="font-bold text-white text-base pt-2">3. Limitation of Liability</h4>
          <p>
            In no event shall LinkSave be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the service.
          </p>

        {:else if activeModal === 'about'}
          <p>
            <strong>LinkSave</strong> is a free, high-performance online media download utility designed to help users extract HD video streams and high-quality MP3 audio files seamlessly.
          </p>
          <p class="pt-2">
            Our mission is to provide a clean, fast, and secure user experience across all web browsers and devices without forcing registration or software downloads.
          </p>

        {:else if activeModal === 'contact'}
          <p>
            Have questions, feedback, or business inquiries? Get in touch with our team:
          </p>
          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-blue-400">
            <p><strong>Email Support:</strong> support@linksave.app</p>
            <p><strong>Business Inquiries:</strong> contact@linksave.app</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        {/if}
      </div>

      <!-- Modal Footer -->
      <div class="pt-4 border-t border-slate-800 flex justify-end shrink-0">
        <button
          on:click={onClose}
          class="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition"
        >
          Close
        </button>
      </div>

    </div>
  </div>
{/if}
