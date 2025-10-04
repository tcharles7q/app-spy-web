
import React, { useState, useMemo, useCallback } from 'react';
import { Device, Branding, DeviceStatus, BrandingContextType } from './types';
import Dashboard from './components/Dashboard';
import ConsentModal from './components/ConsentModal';

export const BrandingContext = React.createContext<BrandingContextType | null>(null);

const App: React.FC = () => {
    const [devices, setDevices] = useState<Device[]>([
        { id: '1', name: 'Galaxy S23 Ultra', os: 'android', status: DeviceStatus.Online, battery: 92 },
        { id: '2', name: 'iPhone 15 Pro', os: 'ios', status: DeviceStatus.Mirroring, battery: 78 },
        { id: '3', name: 'Pixel 8', os: 'android', status: DeviceStatus.Offline, battery: 45 },
        { id: '4', name: 'Office Tablet', os: 'android', status: DeviceStatus.Online, battery: 66 },
    ]);
    const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>('2');
    const [showConsent, setShowConsent] = useState(true);

    const [branding, setBranding] = useState<Branding>({
        appName: 'SpyWeb',
        logoUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
        primaryColor: 'indigo',
    });

    const updateDeviceStatus = useCallback((id: string, status: DeviceStatus) => {
        setDevices(prevDevices => {
            const otherDevices = prevDevices.map(d => 
                d.status === DeviceStatus.Mirroring && d.id !== id ? { ...d, status: DeviceStatus.Online } : d
            );
            return otherDevices.map(d =>
                d.id === id ? { ...d, status } : d
            );
        });
    }, []);

    const selectedDevice = useMemo(() => devices.find(d => d.id === selectedDeviceId) || null, [devices, selectedDeviceId]);

    const brandingContextValue = useMemo(() => ({ branding, setBranding }), [branding]);

    const handleAcceptConsent = () => {
        setShowConsent(false);
    };

    return (
        <BrandingContext.Provider value={brandingContextValue}>
            <div className={`theme-${branding.primaryColor} min-h-screen font-sans`}>
                {showConsent && <ConsentModal onAccept={handleAcceptConsent} />}
                <Dashboard
                    devices={devices}
                    selectedDevice={selectedDevice}
                    onSelectDevice={setSelectedDeviceId}
                    onUpdateDeviceStatus={updateDeviceStatus}
                />
            </div>
        </BrandingContext.Provider>
    );
};

export default App;
