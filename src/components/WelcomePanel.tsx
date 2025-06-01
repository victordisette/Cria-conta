import React from 'react';

export const WelcomePanel: React.FC = () => {
  const handleLogin = () => {
    console.log('Navigate to login');
  };

  return (
    <aside className="w-[634px] bg-[#277C30] flex flex-col items-center justify-center text-white px-8 max-md:w-[400px] max-sm:hidden">
      <div className="text-center">
        <h1 className="text-[64px] font-bold mb-16 max-md:text-5xl max-md:mb-12">
          Olá, Startup!
        </h1>
        <div className="text-[32px] mb-2 max-md:text-2xl">
          Bem vindo de volta!
        </div>
        <div className="text-[32px] mb-16 max-md:text-2xl max-md:mb-12">
          Acesse sua conta
        </div>
        <button 
          onClick={handleLogin}
          className="bg-white text-[#277C30] text-2xl font-bold px-12 py-6 rounded-[9px] max-md:text-xl hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#277C30]"
        >
          Entrar
        </button>
      </div>
    </aside>
  );
};
