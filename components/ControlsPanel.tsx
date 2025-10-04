
import React, { useContext } from 'react';
import { Device, BrandingContextType } from '../types';
import { BrandingContext } from '../App';
import { PlayIcon, StopIcon, MicOffIcon, CameraIcon, ChevronDownIcon } from './Icons';

interface ControlsPanelProps {
    device: Device;
    isMirroring: boolean;
    onToggleMirroring: () => void;
}

const ControlsPanel: React.FC<ControlsPanelProps> = ({ device, isMirroring, onToggleMirroring }) => {
    const { branding } = useContext(BrandingContext) as BrandingContextType;

    const colorVariants = {
        indigo: { base: 'bg-indigo-500 hover:bg-indigo-600', text: 'text-indigo-300', ring: 'ring-indigo-500', border: 'border-indigo-700' },
        sky: { base: 'bg-sky-500 hover:bg-sky-600', text: 'text-sky-300', ring: 'ring-sky-500', border: 'border-sky-700' },
        emerald: { base: 'bg-emerald-500 hover:bg-emerald-600', text: 'text-emerald-300', ring: 'ring-emerald-500', border: 'border-emerald-700' },
        rose: { base: 'bg-rose-500 hover:bg-rose-600', text: 'text-rose-300', ring: 'ring-rose-500', border: 'border-rose-700' },
    };

    const colors = colorVariants[branding.primaryColor];

    return (
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex items-center justify-between max-w-3xl mx-auto w-full">
            <div className="flex items-center">
                <p className="font-bold text-lg text-white mr-4">{device.name}</p>
                <span className={`text-sm ${colors.text}`}>{isMirroring ? 'Session Active' : 'Ready to Connect'}</span>
            </div>
            <div className="flex items-center space-x-2">
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2.5 rounded-lg transition-colors">
                    <MicOffIcon className="h-5 w-5" />
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2.5 rounded-lg transition-colors">
                    <CameraIcon className="h-5 w-5" />
                </button>
                <div className="relative">
                    <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 p-2.5 rounded-lg transition-colors flex items-center">
                        <span className="text-sm mr-1">High Quality</span> <ChevronDownIcon className="h-4 w-4" />
                    </button>
                </div>
                <button 
                    onClick={onToggleMirroring}
                    className={`${isMirroring ? 'bg-red-500 hover:bg-red-600' : colors.base} text-white px-4 py-2.5 rounded-lg transition-colors flex items-center font-semibold text-sm shadow-md`}>
                    {isMirroring ? (
                        <>
                            <StopIcon className="h-5 w-5 mr-2" /> Stop Mirroring
                        </>
                    ) : (
                         <>
                            <PlayIcon className="h-5 w-5 mr-2" /> Start Mirroring
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ControlsPanel;
