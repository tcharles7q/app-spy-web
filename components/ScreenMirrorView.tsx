import React, { useState, useRef, useContext, useMemo } from 'react';
import { Device, DeviceStatus, BrandingContextType } from '../types';
import { BrandingContext } from '../App';
import ControlsPanel from './ControlsPanel';
import { TvIcon, AlertTriangleIcon } from './Icons';

interface ScreenMirrorViewProps {
    device: Device | null;
    onUpdateDeviceStatus: (id: string, status: DeviceStatus) => void;
}

const ScreenMirrorView: React.FC<ScreenMirrorViewProps> = ({ device, onUpdateDeviceStatus }) => {
    const [interactionPoint, setInteractionPoint] = useState<{ x: number; y: number } | null>(null);
    const screenRef = useRef<HTMLDivElement>(null);
    // FIX: Add a null check for the context to prevent runtime errors.
    const context = useContext(BrandingContext);
    
    const [isMuted, setIsMuted] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    
    const isMirroring = device?.status === DeviceStatus.Mirroring;

    const handleScreenInteraction = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMirroring || !screenRef.current) return;
        const rect = screenRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setInteractionPoint({ x, y });
        setTimeout(() => setInteractionPoint(null), 500); // ripple effect duration
    };

    const toggleMirroring = () => {
        if (device) {
            const newStatus = isMirroring ? DeviceStatus.Online : DeviceStatus.Mirroring;
            if (newStatus === DeviceStatus.Online) {
                // Reset audio states when stopping
                setIsRecording(false);
                setIsMuted(true);
            }
            onUpdateDeviceStatus(device.id, newStatus);
        }
    };

    const toggleMute = () => {
        if (!isMirroring) return;
        setIsMuted(prev => !prev);
    };

    const toggleRecording = () => {
        if (!isMirroring) return;
        setIsRecording(prev => !prev);
    };

    const colorVariants = {
        indigo: { bg: 'bg-indigo-500', text: 'text-indigo-300', ring: 'ring-indigo-500' },
        sky: { bg: 'bg-sky-500', text: 'text-sky-300', ring: 'ring-sky-500' },
        emerald: { bg: 'bg-emerald-500', text: 'text-emerald-300', ring: 'ring-emerald-500' },
        rose: { bg: 'bg-rose-500', text: 'text-rose-300', ring: 'ring-rose-500' },
    };

    if (!context) {
        return null; // or a loading/error state
    }
    const { branding } = context;

    const colors = colorVariants[branding.primaryColor];

    if (!device) {
        return (
            <div className="flex flex-col items-center justify-center h-full bg-gray-800/50 text-gray-500">
                <TvIcon className="h-24 w-24 mb-4" />
                <h2 className="text-2xl font-semibold">No Device Selected</h2>
                <p>Please select a device from the list to begin mirroring.</p>
            </div>
        );
    }
    
    return (
        <div className="flex flex-col flex-1 bg-black p-4 lg:p-8 overflow-hidden">
             {isMirroring && (
                <div className="w-full bg-yellow-900/50 text-yellow-300 border border-yellow-700/50 rounded-lg p-3 flex items-center justify-center mb-4 text-sm animate-pulse">
                    <AlertTriangleIcon className="h-5 w-5 mr-3" />
                    <p>
                        <span className="font-bold">Screen Sharing is Active.</span> Ensure you have explicit consent from the device owner. All actions are monitored.
                    </p>
                </div>
            )}
            <div className="flex-1 flex items-center justify-center min-h-0">
                <div className="relative aspect-[9/19.5] h-full max-h-full bg-gray-900 rounded-[40px] border-8 border-gray-700 shadow-2xl p-2 box-content overflow-hidden">
                    <div
                        ref={screenRef}
                        onClick={handleScreenInteraction}
                        className={`w-full h-full bg-black rounded-[32px] overflow-hidden relative ${isMirroring ? 'cursor-pointer' : ''}`}
                    >
                       {isMirroring ? (
                            <img src={`https://picsum.photos/270/585?random=${device.id}`} alt="Mirrored Screen" className="w-full h-full object-cover" />
                       ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-gray-600">
                                <p>{device.name} is {device.status}</p>
                                <p className="text-sm">Press "Start Mirroring" to begin</p>
                            </div>
                       )}

                        {interactionPoint && (
                            <div
                                className="absolute w-4 h-4 bg-white/50 rounded-full animate-ping"
                                style={{ left: interactionPoint.x - 8, top: interactionPoint.y - 8 }}
                            ></div>
                        )}
                    </div>
                </div>
            </div>
            <div className="shrink-0 pt-4 lg:pt-8">
                 <ControlsPanel 
                    device={device}
                    isMirroring={isMirroring}
                    onToggleMirroring={toggleMirroring}
                    isMuted={isMuted}
                    onToggleMute={toggleMute}
                    isRecording={isRecording}
                    onToggleRecording={toggleRecording}
                />
            </div>
        </div>
    );
};

export default ScreenMirrorView;