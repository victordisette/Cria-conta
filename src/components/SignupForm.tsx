import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { SocialLoginButtons } from './SocialLoginButtons';

interface FormData {
  fullName: string;
  startup: string;
  referredBy: string;
  password: string;
  confirmPassword: string;
}

export const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    startup: '',
    referredBy: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nome completo é obrigatório';
    }

    if (!formData.startup.trim()) {
      newErrors.startup = 'Nome da startup é obrigatório';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 7) {
      newErrors.password = 'Senha deve ter no mínimo 7 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const userIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#277C30\" stroke-width=\"2\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg>";
  
  const startupIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#277C30\" stroke-width=\"2\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line></svg>";
  
  const referralIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#277C30\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M12 1v6m0 6v6m11-7h-6m-6 0H1\"></path></svg>";
  
  const passwordIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M418.207 698.274H416.328C415.454 698.274 414.821 697.45 415.04 696.609L415.639 694.339C415.25 693.924 415.034 693.377 415.034 692.809C415.034 691.554 416.072 690.532 417.356 690.581C418.452 690.623 419.368 691.477 419.487 692.566C419.555 693.217 419.338 693.863 418.895 694.335L419.494 696.609C419.714 697.45 419.076 698.274 418.207 698.274Z\" fill=\"#277C30\" transform=\"scale(0.6) translate(-410, -690)\"></path></svg>";

  return (
    <main className="flex-1 lg:w-[60%] xl:w-[55%] 2xl:w-[50%] flex flex-col items-center justify-center px-6 md:px-8 lg:px-12 py-8 lg:py-0">
      <div className="w-full max-w-[590px]">
        <header className="text-[#277C30] text-[28px] md:text-[36px] lg:text-[40px] xl:text-[45px] font-semibold text-center lg:text-left mb-8 lg:mb-12">
          Crie sua Conta
        </header>
        
        <SocialLoginButtons />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            type="text"
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={(value) => updateField('fullName', value)}
            icon={userIcon}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}

          <FormInput
            type="text"
            placeholder="Sua startup"
            value={formData.startup}
            onChange={(value) => updateField('startup', value)}
            icon={startupIcon}
          />
          {errors.startup && (
            <p className="text-red-500 text-sm mt-1">{errors.startup}</p>
          )}

          <FormInput
            type="text"
            placeholder="Por quem foi indicado?"
            value={formData.referredBy}
            onChange={(value) => updateField('referredBy', value)}
            icon={referralIcon}
          />

          <FormInput
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={(value) => updateField('password', value)}
            icon={passwordIcon}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}

          <FormInput
            type="password"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={(value) => updateField('confirmPassword', value)}
            icon={passwordIcon}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}

          <div className="text-[#8C8C8C] text-[13px] text-center mt-4">
            Sua senha deve conter no mínimo 7 caracteres
          </div>

          <button 
            type="submit"
            className="w-full bg-[#277C30] text-white text-xl lg:text-2xl font-semibold mt-8 py-5 lg:py-6 rounded-[9px] hover:bg-[#1e5a26] transition-colors focus:outline-none focus:ring-2 focus:ring-[#277C30] focus:ring-offset-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
};
