
import React from 'react';
import { Device, DeviceStatus } from '../types';
import DeviceList from './DeviceList';
import ScreenMirrorView from './ScreenMirrorView';
import BrandingSettings from './BrandingSettings';
import Header from './Header';

interface DashboardProps {
    devices: Device[];
    selectedDevice: Device | null;
    onSelectDevice: (id: string) => void;
    onUpdateDeviceStatus: (id: string, status: DeviceStatus) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ devices, selectedDevice, onSelectDevice, onUpdateDeviceStatus }) => {
    return (
        <div className="flex h-screen bg-gray-900 text-gray-200 overflow-hidden">
            <aside className="w-80 bg-gray-900/70 backdrop-blur-sm border-r border-gray-700/50 flex flex-col">
                <Header />
                <div className="flex-grow overflow-y-auto p-4">
                    <DeviceList
                        devices={devices}
                        selectedDeviceId={selectedDevice?.id || null}
                        onSelectDevice={onSelectDevice}
                    />
                </div>
                <div className="border-t border-gray-700/50 p-4">
                    <BrandingSettings />
                </div>
            </aside>
            <main className="flex-1 flex flex-col">
                <ScreenMirrorView 
                  device={selectedDevice} 
                  onUpdateDeviceStatus={onUpdateDeviceStatus} 
                />
            </main>
        </div>
    );
};

export default Dashboard;
