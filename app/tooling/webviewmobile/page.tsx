"use client";
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Set your simple form password here
const FORM_PASSWORD = "admin";

interface ColdEmailRecord {
  name: string;
  email: string;
}

export default function ColdEmailSender() {
  const [password, setPassword] = useState<string>('');
  const [singleName, setSingleName] = useState<string>('');
  const [singleEmail, setSingleEmail] = useState<string>('');
  const [bulkData, setBulkData] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ColdEmailRecord[]>([]);

  // Helper to parse pasted Excel data (tabs) or CSV (commas)
  const parseBulkData = (text: string): ColdEmailRecord[] => {
    const lines = text.split('\n');
    return lines
      .map((line) => {
        // Split by Tab (Excel copy/paste) or Comma (CSV)
        const parts = line.split(/\t|,/);
        const name = parts[0]?.trim() || '';
        // If there is only one column, assume it's the email
        const email = (parts[1] || parts[0])?.trim() || '';
        return { name, email };
      })
      .filter((item) => item.email && item.email.includes('@')); // Only keep valid-looking emails
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target?.result) {
        setBulkData(event.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== FORM_PASSWORD) {
      alert("Incorrect password!");
      return;
    }

    setLoading(true);
    setResults([]);

    // Gather data to insert
    let recordsToInsert: ColdEmailRecord[] = [];

    if (singleEmail) {
      recordsToInsert.push({ name: singleName, email: singleEmail });
    }

    if (bulkData) {
      recordsToInsert = [...recordsToInsert, ...parseBulkData(bulkData)];
    }

    if (recordsToInsert.length === 0) {
      alert("Please provide at least one valid email.");
      setLoading(false);
      return;
    }

    // Insert into Supabase table (This triggers the Postgres Trigger -> Edge Function)
    const { error } = await supabase
      .from('cold_email')
      .insert(recordsToInsert)
      .select();

    if (error) {
      alert("Error inserting records: " + error.message);
      // Note: If an email already exists, it will throw a unique constraint error
    } else {
      setResults(recordsToInsert);
      setSingleName('');
      setSingleEmail('');
      setBulkData('');
      alert(`Successfully queued ${recordsToInsert.length} emails!`);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6 font-sans">
      <div className="w-full max-w-xl mt-8 mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Cold Email Dispatcher
        </h1>
        <p className="text-slate-400 mt-2 text-sm">Send emails directly to the Supabase queue</p>
      </div>

      <div className="w-full max-w-xl space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl">

        {/* Password Security */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-rose-400 ml-1">Admin Password</label>
          <input
            type="password"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 transition-all"
            placeholder="Enter password to unlock sending"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>

        <hr className="border-slate-800" />

        {/* Single Entry */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-300">Single Entry</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Name (Optional)"
              value={singleName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSingleName(e.target.value)}
            />
            <input
              type="email"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="Email address"
              value={singleEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSingleEmail(e.target.value)}
            />
          </div>
        </div>

        <hr className="border-slate-800" />

        {/* Bulk Entry */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-sm font-semibold text-slate-300">Bulk Paste (Excel / CSV)</h2>
            <label className="text-xs text-blue-400 cursor-pointer hover:text-blue-300 underline">
              Upload .csv file
              <input type="file" accept=".csv" className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
          <p className="text-xs text-slate-500">Format: Name, Email (or just paste columns from Excel)</p>
          <textarea
            rows={5}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-mono text-sm"
            placeholder="John Doe, john@example.com&#10;jane@example.com"
            value={bulkData}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBulkData(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 active:scale-[0.98] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2"
        >
          {loading ? 'Processing...' : 'Insert to Supabase & Send'}
        </button>
      </div>

      {/* Results Table */}
      {results.length > 0 && (
        <div className="w-full max-w-xl mt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-4 ml-1">
            Successfully Queued ({results.length})
          </h2>
          <div className="overflow-hidden border border-slate-800 rounded-xl bg-slate-900/30">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800">
                  <th className="px-4 py-3 text-xs font-bold text-slate-400 uppercase">Name</th>
                  <th className="px-4 py-3 text-xs font-bold text-slate-400 uppercase">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {results.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 text-sm text-slate-300">{r.name || '-'}</td>
                    <td className="px-4 py-3 text-sm font-mono text-blue-400">{r.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}