// Configuration settings for LinkSave & ReClip Backend Integration

export const CONFIG = {
  // CnvMP3 Ad-free Converter (https://cnvmp3.com/v55)
  cnvmp3Url: 'https://cnvmp3.com/v55',
  // YT-Ai YouTube Converter (https://melamrahul.github.io/yt-ai/en/)
  ytAiUrl: 'https://melamrahul.github.io/yt-ai/en/',
  reclipUrl: import.meta.env.VITE_RECLIP_URL || 'https://cnvmp3.com/v55',
  
  // Integration Mode: 'api' | 'iframe' | 'local'
  mode: import.meta.env.VITE_INTEGRATION_MODE || 'local',

  appName: 'LinkSave',
  version: '1.0.0-MVP'
};

