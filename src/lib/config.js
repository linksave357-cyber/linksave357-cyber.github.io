// Configuration settings for LinkSave & ReClip Backend Integration

export const CONFIG = {
  // ReClip / yt-dlp backend URL (Deploy on VPS via Docker)
  reclipUrl: import.meta.env.VITE_RECLIP_URL || 'https://reclip-downloader-7qzd.onrender.com',
  
  // Integration Mode: 'api' | 'iframe' | 'local'
  mode: import.meta.env.VITE_INTEGRATION_MODE || 'local',

  appName: 'LinkSave',
  version: '1.0.0-MVP'
};
