
import React from 'react';
import { SignupForm } from '@/components/SignupForm';
import { WelcomePanel } from '@/components/WelcomePanel';

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <SignupForm />
      </div>
      <div className="lg:w-1/2">
        <WelcomePanel />
      </div>
    </div>
  );
}
