
import React, { useContext } from 'react';
import { BrandingContext } from '../App';
import { BrandingContextType } from '../types';
import { ShieldCheckIcon } from './Icons';

interface ConsentModalProps {
    onAccept: () => void;
}

const ConsentModal: React.FC<ConsentModalProps> = ({ onAccept }) => {
    const { branding } = useContext(BrandingContext) as BrandingContextType;
    
    const colorVariants = {
        indigo: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
        sky: 'bg-sky-600 hover:bg-sky-700 focus:ring-sky-500',
        emerald: 'bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500',
        rose: 'bg-rose-600 hover:bg-rose-700 focus:ring-rose-500',
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl max-w-lg w-full p-8 m-4">
                <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-700 p-3 rounded-full mb-4">
                       <ShieldCheckIcon className="h-10 w-10 text-green-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Ethical Use & Legal Compliance</h1>
                    <p className="text-gray-400 mb-6">
                        This software is a powerful tool for screen mirroring intended for legitimate purposes such as IT support, device management, and parental supervision with full consent.
                    </p>
                    <div className="text-left bg-gray-900/50 p-4 rounded-lg border border-gray-700/50 w-full mb-6 space-y-2 text-sm text-gray-300">
                        <p><span className="font-bold text-red-400">Warning:</span> Using this application for unauthorized surveillance or espionage is illegal in most jurisdictions and strictly forbidden.</p>
                        <p><span className="font-bold text-green-400">Requirement:</span> You must have explicit, unambiguous consent from the owner of the device before initiating any mirroring session.</p>
                    </div>
                    <button
                        onClick={onAccept}
                        className={`w-full px-4 py-3 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${colorVariants[branding.primaryColor]}`}
                    >
                        I Understand and Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsentModal;
