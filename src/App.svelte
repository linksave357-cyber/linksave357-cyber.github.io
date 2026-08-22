<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import SupportedPlatforms from './components/SupportedPlatforms.svelte';
  import HowItWorks from './components/HowItWorks.svelte';
  import Features from './components/Features.svelte';
  import FAQ from './components/FAQ.svelte';
  import Footer from './components/Footer.svelte';
</script>

<div class="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
  <!-- Top Navigation -->
  <Navbar />

  <!-- Main Hero & Downloader Engine Focus -->
  <main>
    <Hero />

    <!-- Supported Platforms Grid -->
    <SupportedPlatforms />

    <!-- 3-Step Process -->
    <HowItWorks />

    <!-- Value Propositions & Features -->
    <Features />

    <!-- Frequently Asked Questions -->
    <FAQ />
  </main>

  <!-- Footer -->
  <Footer />
</div>