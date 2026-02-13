"use client";
import React, { useState } from 'react';

interface KycData {
  firstName: string;
  motherName: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<KycData>({
    firstName: '',
    motherName: ''
  });

  const handleSendToFlutter = () => {
    if (window.FlutterHttpRequest) {
      const payload = JSON.stringify({
        handler: 'fetchKycDetails',
        data: formData
      });
      window.FlutterHttpRequest.postMessage(payload);
    } else {
      console.warn("Flutter bridge not found. Are you in a browser?");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6 font-sans">
      {/* Header Section */}
      <div className="w-full max-w-md mt-8 mb-10 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          KYC Verification
        </h1>
        <p className="text-slate-400 mt-2 text-sm">Please provide your details to continue</p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
              First Name
            </label>
            <input 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
              placeholder="e.g. John" 
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
              Mother's Name
            </label>
            <input 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
              placeholder="e.g. Jane Doe" 
              value={formData.motherName}
              onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
            />
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleSendToFlutter}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
        >
          Submit to Flutter
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Footer Info */}
      <footer className="mt-auto pb-6">
        <p className="text-slate-600 text-[10px] uppercase tracking-widest">Secure 256-bit Encryption</p>
      </footer>
    </div>
  );
}

export default Page;