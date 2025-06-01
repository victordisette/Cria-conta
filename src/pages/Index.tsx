
import React from 'react';
import { SignupForm } from '@/components/SignupForm';
import { WelcomePanel } from '@/components/WelcomePanel';

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row">
      <SignupForm />
      <WelcomePanel />
    </div>
  );
}
