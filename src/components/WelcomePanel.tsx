
import React from 'react';

export const WelcomePanel: React.FC = () => {
  const handleLogin = () => {
    console.log('Navigate to login');
  };

  return (
    <aside className="w-full h-full min-h-screen bg-[#277C30] flex flex-col items-center justify-center text-white px-8 py-12 lg:py-0">
      
      <div className="text-center">
        <h1 className="text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold mb-8 lg:mb-16">
          Olá, Startup!
        </h1>
        <div className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] mb-2">
          Bem vindo de volta!
        </div>
        <div className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] mb-8 lg:mb-16">
          Acesse sua conta
        </div>
        <button 
          onClick={handleLogin}
          className="bg-white text-[#277C30] text-lg md:text-xl lg:text-2xl font-bold px-8 md:px-10 lg:px-12 py-4 md:py-5 lg:py-6 rounded-[9px] hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#277C30]"
        >
          Entrar
        </button>
      </div>
    </aside>
  );
};
