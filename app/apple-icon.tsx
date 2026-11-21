import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS rounds the corners itself, so this one is full-bleed.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="face" cx="0.4" cy="0.3" r="0.8"><stop offset="0" stopColor="#d9f5b8"/><stop offset="0.6" stopColor="#8fd47c"/><stop offset="1" stopColor="#4fa866"/></radialGradient>
<linearGradient id="heart" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2f9a5c"/><stop offset="1" stopColor="#0f5a34"/></linearGradient></defs>
        <rect width="64" height="64" fill="#eef9e8"/>
        <circle cx="31" cy="33" r="21" fill="url(#face)" stroke="#2f7d4a" strokeWidth="1.6"/>
<circle cx="21" cy="36" r="4.2" fill="#3f9a5a" fillOpacity="0.45"/>
<circle cx="41" cy="36" r="4.2" fill="#3f9a5a" fillOpacity="0.45"/>
<path d="M19.5 31 Q23.5 26.5 27.5 31" fill="none" stroke="#1d5a3c" strokeWidth="2.2" strokeLinecap="round"/>
<path d="M34.5 31 Q38.5 26.5 42.5 31" fill="none" stroke="#1d5a3c" strokeWidth="2.2" strokeLinecap="round"/>
<path d="M23 39 Q31 48 39 39 Q31 42 23 39 Z" fill="#1d5a3c" stroke="#1d5a3c" strokeWidth="1" strokeLinejoin="round"/>
<g transform="translate(48 15) scale(0.4) translate(-32 -31)"><path d="M32 52 C14 39 11 28 11 22 C11 14.5 16.5 10 23 10 C27 10 30 12.2 32 16 C34 12.2 37 10 41 10 C47.5 10 53 14.5 53 22 C53 28 50 39 32 52 Z" fill="url(#heart)" stroke="#0f4a2c" strokeWidth="5.5" strokeLinejoin="round"/><path d="M20 20 C20 17 22 15.5 25 15.5" fill="none" stroke="#e8ffe9" strokeOpacity="0.7" strokeWidth="6.0" strokeLinecap="round"/></g><g transform="translate(13 47) scale(0.36) translate(-32 -31)"><path d="M32 52 C14 39 11 28 11 22 C11 14.5 16.5 10 23 10 C27 10 30 12.2 32 16 C34 12.2 37 10 41 10 C47.5 10 53 14.5 53 22 C53 28 50 39 32 52 Z" fill="url(#heart)" stroke="#0f4a2c" strokeWidth="6.1" strokeLinejoin="round"/><path d="M20 20 C20 17 22 15.5 25 15.5" fill="none" stroke="#e8ffe9" strokeOpacity="0.7" strokeWidth="6.7" strokeLinecap="round"/></g><g transform="translate(47 50) scale(0.36) translate(-32 -31)"><path d="M32 52 C14 39 11 28 11 22 C11 14.5 16.5 10 23 10 C27 10 30 12.2 32 16 C34 12.2 37 10 41 10 C47.5 10 53 14.5 53 22 C53 28 50 39 32 52 Z" fill="url(#heart)" stroke="#0f4a2c" strokeWidth="6.1" strokeLinejoin="round"/><path d="M20 20 C20 17 22 15.5 25 15.5" fill="none" stroke="#e8ffe9" strokeOpacity="0.7" strokeWidth="6.7" strokeLinecap="round"/></g>
      </svg>
    ),
    size,
  );
}
