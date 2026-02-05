"use client";

import React, { useState, useEffect } from "react";
import { 
  Upload, Cloud, Share2, QrCode, Copy, Check, Trash2, 
  Globe, ShieldCheck, Zap, Info, Link as LinkIcon 
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import { createClient } from '@supabase/supabase-js';
import { QRCodeSVG } from 'qrcode.react';

const titleFont = Titan_One({ weight: '400', subsets: ['latin'] });
const bodyFont = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'] });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AppsOnAirPage() {
  const [uploading, setUploading] = useState(false);
  const [apps, setApps] = useState<any[]>([]);
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    const { data } = await supabase.from('apps').select('*').order('created_at', { ascending: false });
    if (data) setApps(data);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}-${Date.now()}.${fileExt}`;
      
      const { data: storageData, error: storageError } = await supabase.storage
        .from('app-releases')
        .upload(fileName, file);

      if (storageError) throw storageError;

      const { data: { publicUrl } } = supabase.storage
        .from('app-releases')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase.from('apps').insert([
        { 
          name: file.name, 
          url: publicUrl, 
          bundle_id: "com.user.app", // In production, parse this or let user input it
          version: "1.0.0",
          file_path: fileName // Store reference for deletion
        }
      ]);

      if (dbError) throw dbError;
      fetchApps();
    } catch (error) {
      alert("Upload failed: " + (error as any).message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (app: any) => {
    if (!confirm("Are you sure you want to delete this build?")) return;

    try {
      // 1. Remove from Storage
      await supabase.storage.from('app-releases').remove([app.file_path]);
      // 2. Remove from DB
      await supabase.from('apps').delete().eq('id', app.id);
      
      setSelectedApp(null);
      fetchApps();
    } catch (error) {
      alert("Delete failed");
    }
  };

  const getInstallUrl = (app: any) => {
    if (typeof window === "undefined") return "";
    const manifestApiUrl = `${window.location.origin}/api/manifest/${app.id}`;
    return `itms-services://?action=download-manifest&url=${encodeURIComponent(manifestApiUrl)}`;
  };

  const copyToClipboard = (app: any) => {
    const itmsUrl = getInstallUrl(app);
    navigator.clipboard.writeText(itmsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full min-h-screen bg-neutral-950 text-white ${bodyFont.className}`}>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <header className="pt-12 pb-8 px-2 relative z-10 text-center">
         <h1 className={`text-5xl md:text-6xl font-black mb-6 ${titleFont.className}`}>
            Apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">On Air</span>
         </h1>
         <p className="text-slate-400 max-w-2xl mx-auto">Wireless iOS IPA Distribution. Publicly accessible for anyone to upload/download.</p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        
        {/* --- UPLOAD ZONE --- */}
        <div className="mb-12">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/10 rounded-3xl bg-neutral-900/50 hover:bg-neutral-900 transition-all cursor-pointer group">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <div className="p-4 rounded-2xl bg-indigo-500/10 mb-4 group-hover:scale-110 transition-transform">
                {uploading ? <Cloud className="w-10 h-10 text-indigo-400 animate-bounce" /> : <Upload className="w-10 h-10 text-indigo-400" />}
              </div>
              <p className="mb-2 text-sm text-white font-bold">
                {uploading ? "Uploading Build..." : "Click to upload IPA build"}
              </p>
              <p className="text-xs text-slate-500 italic font-mono">Any IPA file accepted</p>
            </div>
            <input type="file" className="hidden" accept=".ipa" onChange={handleFileUpload} disabled={uploading} />
          </label>
        </div>

        {/* --- APP LIST & SHARING --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-400" /> Recent Public Releases
            </h2>
            {apps.length === 0 && <p className="text-slate-600 italic">No apps uploaded yet.</p>}
            {apps.map((app) => (
              <div 
                key={app.id} 
                onClick={() => setSelectedApp(app)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${selectedApp?.id === app.id ? 'bg-indigo-600/20 border-indigo-500' : 'bg-neutral-900 border-white/5 hover:border-white/20'}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-indigo-400 font-bold">IPA</div>
                  <div>
                    <h3 className="font-bold text-white truncate max-w-[200px] md:max-w-md">{app.name}</h3>
                    <p className="text-xs text-slate-500">{new Date(app.created_at).toLocaleString()}</p>
                  </div>
                </div>
                <Share2 className="w-5 h-5 text-slate-500" />
              </div>
            ))}
          </div>

          {/* --- SIDEBAR: SHARING PANEL --- */}
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 sticky top-8 h-fit shadow-2xl">
            {selectedApp ? (
              <div className="text-center animate-in fade-in zoom-in duration-300">
                <div className="bg-white p-4 rounded-2xl inline-block mb-6 shadow-2xl">
                  <QRCodeSVG value={getInstallUrl(selectedApp)} size={180} />
                </div>
                <h3 className="font-bold text-lg mb-2 truncate">{selectedApp.name}</h3>
                <p className="text-sm text-slate-400 mb-6">Scan with iOS Camera to Install</p>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => copyToClipboard(selectedApp)}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 py-3 rounded-xl font-bold transition-all"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                    {copied ? "Link Copied!" : "Copy Install Link"}
                  </button>
                  <button 
                    onClick={() => handleDelete(selectedApp)}
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-rose-600/20 text-rose-400 py-3 rounded-xl font-bold transition-all"
                  >
                    <Trash2 className="w-4 h-4" /> Delete This Release
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 opacity-20">
                <QrCode className="w-16 h-16 mx-auto mb-4" />
                <p className="text-sm">Select a build to generate QR</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}