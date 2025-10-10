import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Claude Code Plugin Marketplaces',
    short_name: 'Claude Plugins',
    description: 'Decentralized hub for Claude Code plugin marketplaces',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#d97757',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
