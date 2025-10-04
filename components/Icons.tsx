
import React from 'react';

// Props for all icons
type IconProps = React.SVGProps<SVGSVGElement>;

export const AndroidIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 18a1 1 0 0 1-1-1v-2.5a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5V17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.5a.5.5 0 0 0-.5-.5.5.5 0 0 0-.5.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1z"/><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/></svg>
);

export const AppleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.8 19.3a1.6 1.6 0 0 1-1.3-1.3 1.3 1.3 0 0 1 .5-1.5c.3-.2.6-.5.8-.8a1.5 1.5 0 0 0 .6-1.3c0-.6-.3-1.1-.8-1.4a2 2 0 0 0-1.8-.2c-.8.2-1.5.7-2 1.3-.5-.6-1.2-1.1-2-1.3a2 2 0 0 0-1.8.2c-.5.3-.8.8-.8 1.4a1.5 1.5 0 0 0 .6 1.3c.2.3.5.6.8.8a1.3 1.3 0 0 1 .5 1.5 1.6 1.6 0 0 1-1.3 1.3c-.4.1-.8.2-1.2.2a2.8 2.8 0 0 1-2.1-.9 3.3 3.3 0 0 1-1-2.2 3.8 3.8 0 0 1 2.2-3.6c.6-.3 1.2-.4 1.8-.4s1.2.1 1.8.4a2.2 2.2 0 0 0 1.2 0c.6-.3 1.2-.4 1.8-.4s1.2.1 1.8.4a3.8 3.8 0 0 1 2.2 3.6 3.3 3.3 0 0 1-1 2.2 2.8 2.8 0 0 1-2.1.9c-.4 0-.8-.1-1.2-.2z"/><path d="M12 5.5a2 2 0 0 0-2 2"/></svg>
);

export const BatteryIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="5" y="8" width="10" height="12" rx="2"/><path d="M17 11v6"/><path d="M19 12h2v4h-2z"/></svg>
);

export const PlayIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
);

export const StopIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M5.25 3A2.25 2.25 0 003 5.25v9.5A2.25 2.25 0 005.25 17h9.5A2.25 2.25 0 0017 14.75v-9.5A2.25 2.25 0 0014.75 3h-9.5z"/></svg>
);

export const MicOffIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-11.25L5.25 6m-2.25 2.25L5.25 6m0 0L3 8.25m2.25-2.25L7.5 6m0 4.5v.75A7.5 7.5 0 0015 18.375a7.5 7.5 0 007.5-7.5v-.75" /></svg>
);

export const CameraIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
);

export const PaintBrushIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a15.998 15.998 0 001.622-3.385m3.388 1.62a15.998 15.998 0 00-1.62-3.385m-5.043.025a15.998 15.998 0 01-3.388-1.621m7.724 10.364a11.103 11.103 0 00-3.297-2.997c-1.135-.678-2.348-.975-3.585-.975a11.103 11.103 0 00-3.297 2.997 11.01 11.01 0 00-1.285 5.456A11.11 11.11 0 0012 21.75a11.11 11.11 0 009.282-4.997 11.01 11.01 0 00-1.285-5.456z" /></svg>
);

export const TvIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m-3.75-3.75H6.75v3.75h1.5v-3.75H12M12 20.25h.75M12 20.25h-1.5m1.5 0v-3.75M12 20.25h-7.5M12 20.25h7.5M12 3.75a9 9 0 019 9 9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9z" /></svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" /></svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" /></svg>
);
