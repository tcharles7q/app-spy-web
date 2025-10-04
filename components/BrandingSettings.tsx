
import React, { useContext } from 'react';
import { BrandingContext } from '../App';
import { BrandingContextType, Branding } from '../types';
import { PaintBrushIcon } from './Icons';

const BrandingSettings: React.FC = () => {
    const context = useContext(BrandingContext);

    if (!context) {
        return null; // or a loading state
    }

    // FIX: Remove redundant type assertion as the type is narrowed by the null check above.
    const { branding, setBranding } = context;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBranding(prev => ({ ...prev, [name]: value }));
    };
    
    const handleColorChange = (color: Branding['primaryColor']) => {
        setBranding(prev => ({ ...prev, primaryColor: color }));
    };
    
    const colors: { name: Branding['primaryColor']; class: string }[] = [
        { name: 'indigo', class: 'bg-indigo-500' },
        { name: 'sky', class: 'bg-sky-500' },
        { name: 'emerald', class: 'bg-emerald-500' },
        { name: 'rose', class: 'bg-rose-500' },
    ];

    return (
        <div>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center">
                <PaintBrushIcon className="h-4 w-4 mr-2"/>
                White-Label Settings
            </h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="appName" className="block text-sm font-medium text-gray-300 mb-1">App Name</label>
                    <input
                        type="text"
                        name="appName"
                        id="appName"
                        value={branding.appName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                    />
                </div>
                <div>
                    <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-300 mb-1">Logo URL</label>
                    <input
                        type="text"
                        name="logoUrl"
                        id="logoUrl"
                        value={branding.logoUrl}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Brand Color</label>
                    <div className="flex items-center space-x-3">
                        {colors.map(color => (
                            <button
                                key={color.name}
                                onClick={() => handleColorChange(color.name)}
                                className={`h-8 w-8 rounded-full transition-transform duration-150 ${color.class} ${branding.primaryColor === color.name ? 'ring-2 ring-offset-2 ring-offset-gray-800 ring-white' : 'hover:scale-110'}`}
                                aria-label={`Set brand color to ${color.name}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandingSettings;