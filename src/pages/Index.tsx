import React from 'react';
import { SignupForm } from '@/components/SignupForm';
import { WelcomePanel } from '@/components/WelcomePanel';

export default function Index() {
  return (
    <div className="w-full h-screen bg-white flex">
      <SignupForm />
      <WelcomePanel />
    </div>
  );
}
