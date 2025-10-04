
import React, { useState, createContext } from 'react';
import { BrandingContextType } from './types';

// --- CONTEXT ---
// FIX: Create and export BrandingContext. This will resolve import errors in other components.
export const BrandingContext = createContext<BrandingContextType | null>(null);


// --- ICONS ---
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-100 text-[#4A90E2] p-3 rounded-full">
    {children}
  </div>
);

const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.318a4.5 4.5 0 010-6.364z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const PlayStoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A90E2]" viewBox="0 0 24 24" fill="currentColor"><path d="M21.5,12a.5.5,0,0,0-.3-.46l-10-5A.5.5,0,0,0,11,7V17a.5.5,0,0,0,.2.4.5.5,0,0,0,.3.1.53.53,0,0,0,.2-.05l10-5A.5.5,0,0,0,21.5,12ZM12,15.72V8.28L19.46,12Z" /><path d="M3.5,22A3.49,3.49,0,0,1,0,18.5V5.5A3.49,3.49,0,0,1,3.5,2h11A3.49,3.49,0,0,1,18,5.5v1A.5.5,0,0,1,17,7V5.5A2.5,2.5,0,0,0,14.5,3H3.5A2.5,2.5,0,0,0,1,5.5v13A2.5,2.5,0,0,0,3.5,21h11A2.5,2.5,0,0,0,17,18.5V17a.5.5,0,0,1,1,0v1.5A3.49,3.49,0,0,1,14.5,22Z" /></svg>;
const InstallIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A90E2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
const PermissionsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A90E2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const TutorialIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A90E2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

// --- UI COMPONENTS ---

const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => {
    return (
        <div className="w-full max-w-lg mx-auto mb-12">
            <div className="flex items-center justify-between">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                    <React.Fragment key={step}>
                        <div className="flex flex-col items-center">
                            <div
                                className={`h-8 w-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300 ${
                                    currentStep >= step ? 'bg-[#4A90E2] text-white' : 'bg-gray-200 text-gray-500'
                                }`}
                            >
                                {step}
                            </div>
                        </div>
                        {step < totalSteps && (
                            <div className="flex-1 h-1 bg-gray-200 mx-2">
                                <div
                                    className="h-1 bg-[#4A90E2] transition-all duration-500"
                                    style={{ width: currentStep > step ? '100%' : currentStep === step ? '50%' : '0%' }}
                                ></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

const StepContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="fade-in w-full max-w-lg mx-auto text-center">
    {children}
  </div>
);

const StepButton = ({ onClick, children, className = '' }: { onClick: () => void; children: React.ReactNode; className?: string }) => (
  <button onClick={onClick} className={`mt-8 px-8 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A90E2] transition-all duration-300 ${className}`}>
    {children}
  </button>
);

// --- STEP COMPONENTS ---

const Step1 = ({ onNext }: { onNext: () => void }) => (
  <StepContainer>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao Guardian Setup</h1>
    <p className="text-lg text-gray-600">Aprenda a configurar o app de monitoramento de conversas de forma ética e segura.</p>
    <p className="text-md text-gray-500 mt-2">Um guia para pais e responsáveis preocupados com a segurança digital.</p>
    <StepButton onClick={onNext}>Continuar</StepButton>
  </StepContainer>
);

const Step2 = ({ onNext }: { onNext: () => void }) => (
  <StepContainer>
    <h2 className="text-3xl font-bold mb-4">Monitoramento Ético é Essencial</h2>
    <p className="text-lg text-gray-600 mb-8">O controle parental ajuda a proteger, criar um ambiente online seguro e estabelecer limites digitais saudáveis.</p>
    <div className="flex justify-center space-x-8 md:space-x-12">
        <div className="flex flex-col items-center">
            <IconWrapper><ShieldIcon /></IconWrapper>
            <span className="font-semibold">Proteção</span>
        </div>
        <div className="flex flex-col items-center">
            <IconWrapper><HeartIcon /></IconWrapper>
            <span className="font-semibold">Segurança</span>
        </div>
        <div className="flex flex-col items-center">
            <IconWrapper><PhoneIcon /></IconWrapper>
            <span className="font-semibold">Limites</span>
        </div>
    </div>
    <StepButton onClick={onNext}>Próximo</StepButton>
  </StepContainer>
);

const Step3 = ({ onNext }: { onNext: () => void }) => (
  <StepContainer>
    <h2 className="text-3xl font-bold mb-4">Permissões Necessárias</h2>
    <p className="text-lg text-gray-600">Para funcionar, o aplicativo solicitará algumas permissões no dispositivo. Isso é necessário para monitorar as conversas e garantir a segurança.</p>
    <p className="font-semibold text-gray-700 mt-4">Toda a configuração é feita com consentimento e de forma legal, visando a proteção familiar.</p>
    <StepButton onClick={onNext}>Entendi, continuar</StepButton>
  </StepContainer>
);

const InstallationStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <div className="flex items-start text-left bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="mr-4 pt-1">{icon}</div>
        <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

const Step4 = ({ onNext }: { onNext: () => void }) => (
    <StepContainer>
        <h2 className="text-3xl font-bold mb-6">Guia de Instalação</h2>
        <div className="space-y-4">
            <InstallationStep icon={<PlayStoreIcon />} title="1. Acesse a Google Play" description="Use o link oficial para encontrar o aplicativo." />
            <InstallationStep icon={<InstallIcon />} title="2. Instale o Aplicativo" description="Clique no botão 'Instalar' na página da loja." />
            <InstallationStep icon={<PermissionsIcon />} title="3. Aceite as Permissões" description="O app solicitará acesso para monitorar notificações e mensagens." />
            <InstallationStep icon={<TutorialIcon />} title="4. Siga o Tutorial Interno" description="Abra o app e siga as instruções para finalizar a configuração." />
        </div>
        <StepButton onClick={onNext}>Ir para o Download</StepButton>
    </StepContainer>
);

const Step5 = () => (
    <StepContainer>
        <div className="mb-4 text-green-500"><CheckIcon /></div>
        <h2 className="text-3xl font-bold mb-4">Tudo Pronto!</h2>
        <p className="text-lg text-gray-600 mb-8">Você está pronto para proteger quem você ama com responsabilidade e transparência.</p>
        <a 
            href="https://play.google.com/store/apps/details?id=om.roitman.chattracker" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#4A90E2] text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A90E2] transition-all duration-300 text-lg"
        >
            👉 Baixar Aplicativo Oficial no Google Play
        </a>
        <p className="text-xs text-gray-500 mt-6">Somente use o app com consentimento e para fins de controle parental legal.</p>
    </StepContainer>
);

// --- MAIN APP ---

const App: React.FC = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

    const nextStep = () => {
        setStep((s) => Math.min(s + 1, totalSteps));
    };
    
    const renderStep = () => {
        switch (step) {
            case 1: return <Step1 onNext={nextStep} />;
            case 2: return <Step2 onNext={nextStep} />;
            case 3: return <Step3 onNext={nextStep} />;
            case 4: return <Step4 onNext={nextStep} />;
            case 5: return <Step5 />;
            default: return <Step1 onNext={nextStep} />;
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full">
                <header className="mb-10 text-center">
                    <h1 className="text-2xl font-bold text-[#4A90E2]">Guardian Setup</h1>
                </header>
                <ProgressBar currentStep={step} totalSteps={totalSteps} />
                <div className="mt-12" key={step}>
                    {renderStep()}
                </div>
            </div>
        </main>
    );
};

export default App;