
import React from 'react';

export enum DeviceStatus {
    Online = 'Online',
    Offline = 'Offline',
    Mirroring = 'Mirroring',
}

export interface Device {
    id: string;
    name: string;
    os: 'android' | 'ios';
    status: DeviceStatus;
    battery: number;
}

export interface Branding {
    appName: string;
    logoUrl: string;
    primaryColor: 'indigo' | 'sky' | 'emerald' | 'rose';
}

export interface BrandingContextType {
    branding: Branding;
    setBranding: React.Dispatch<React.SetStateAction<Branding>>;
}
