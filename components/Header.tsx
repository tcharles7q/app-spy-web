
import React, { useContext } from 'react';
import { BrandingContext } from '../App';
import { BrandingContextType } from '../types';

const Header: React.FC = () => {
    // FIX: Add a null check for the context to prevent runtime errors.
    const context = useContext(BrandingContext);
    if (!context) {
        return null;
    }
    const { branding } = context;

    const colorVariants = {
        indigo: 'text-indigo-400',
        sky: 'text-sky-400',
        emerald: 'text-emerald-400',
        rose: 'text-rose-400',
    };
    
    return (
        <div className="flex items-center p-4 h-16 border-b border-gray-700/50 shrink-0">
            <img src={branding.logoUrl} alt="Logo" className="h-8 w-8 mr-3" />
            <h1 className={`text-xl font-bold ${colorVariants[branding.primaryColor]}`}>
                {branding.appName}
            </h1>
        </div>
    );
};

export default Header;