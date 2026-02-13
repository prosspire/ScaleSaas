"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface KycData {
  firstName: string;
  motherName: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<KycData>({
    firstName: '',
    motherName: ''
  });

  const handleSendToFlutter = () => {
    // 1. Send data to Flutter Bridge first
    if (window.FlutterHttpRequest) {
      const payload = JSON.stringify({
        handler: 'fetchKycDetails',
        data: formData
      });
      window.FlutterHttpRequest.postMessage(payload);
    }

    // 2. Construct the URL with query parameters
    // encodeURIComponent ensures special characters (like spaces) don't break the URL
    const queryParams = new URLSearchParams({
      name: formData.firstName,
      motherName: formData.motherName
    }).toString();

    // 3. Redirect to /success?name=...&motherName=...
    router.push(`/success?${queryParams}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6 font-sans">
      <div className="w-full max-w-md mt-8 mb-10 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          KYC Verification
        </h1>
        <p className="text-slate-400 mt-2 text-sm">Submit details to continue</p>
      </div>

      <div className="w-full max-w-md space-y-6">
        <div className="space-y-4">
          {/* First Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">First Name</label>
            <input 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Enter name" 
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </div>

          {/* Mother's Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Mother's Name</label>
            <input 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Enter mother's name" 
              value={formData.motherName}
              onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
            />
          </div>
        </div>

        <button 
          onClick={handleSendToFlutter}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
}

export default Page;