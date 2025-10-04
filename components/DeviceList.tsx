
import React from 'react';
import { Device, DeviceStatus } from '../types';
import { AndroidIcon, AppleIcon, BatteryIcon } from './Icons';

interface DeviceListProps {
    devices: Device[];
    selectedDeviceId: string | null;
    onSelectDevice: (id: string) => void;
}

const DeviceItem: React.FC<{ device: Device; isSelected: boolean; onSelect: () => void }> = ({ device, isSelected, onSelect }) => {
    const statusColors = {
        [DeviceStatus.Online]: 'bg-green-500',
        [DeviceStatus.Offline]: 'bg-gray-500',
        [DeviceStatus.Mirroring]: 'bg-indigo-500',
    };

    const batteryColor = device.battery > 70 ? 'text-green-400' : device.battery > 30 ? 'text-yellow-400' : 'text-red-400';

    return (
        <li
            onClick={onSelect}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 mb-2 ${
                isSelected ? 'bg-gray-700/80 shadow-lg' : 'hover:bg-gray-800/60'
            }`}
        >
            <div className="mr-3 text-gray-400">
                {device.os === 'android' ? <AndroidIcon /> : <AppleIcon />}
            </div>
            <div className="flex-1">
                <p className="font-semibold text-gray-100">{device.name}</p>
                <div className="flex items-center text-xs text-gray-400">
                    <span className={`h-2 w-2 rounded-full mr-2 ${statusColors[device.status]}`}></span>
                    {device.status}
                </div>
            </div>
            <div className={`flex items-center text-sm font-mono ${batteryColor}`}>
                <BatteryIcon className="h-4 w-4 mr-1" />
                <span>{device.battery}%</span>
            </div>
        </li>
    );
};

const DeviceList: React.FC<DeviceListProps> = ({ devices, selectedDeviceId, onSelectDevice }) => {
    return (
        <div>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">Connected Devices</h2>
            <ul>
                {devices.map(device => (
                    <DeviceItem
                        key={device.id}
                        device={device}
                        isSelected={device.id === selectedDeviceId}
                        onSelect={() => onSelectDevice(device.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DeviceList;
