"use client";

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Download, Upload, Smartphone, Monitor, Square, Eye, Palette, Type, Image, Zap, ChevronDown, X, RefreshCw } from 'lucide-react';
import * as htmlToImage from 'html-to-image';

// ── TYPES & CONFIG ────────────────────────────────────────────────────────────

type DeviceKey = 'mobile' | 'desktop' | 'square';
type ImageKey = 'img1' | 'img2';
type ExportState = 'idle' | 'loading' | 'done';

interface DeviceConfig {
  w: number;
  h: number;
  label: string;
  aspect: number;
}

interface Theme {
  id: string;
  bg: string;
  accent: string;
  text: string;
  cta: string;
}

interface ContentData {
  brand: string;
  headline: string;
  sub: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  cta: string;
  phone: string;
  website: string;
  tagline: string;
}

const DEVICES: Record<DeviceKey, DeviceConfig> = {
  mobile:  { w: 1080, h: 1920, label: 'Mobile 9:16', aspect: 9/16 },
  desktop: { w: 1200, h: 630,  label: 'Desktop OG',  aspect: 1200/630 },
  square:  { w: 1080, h: 1080, label: 'Square 1:1',  aspect: 1 },
};

const THEMES: Theme[] = [
  { id: 'cobalt',   bg: '#0A0F2E', accent: '#4F8EF7', text: '#FFFFFF', cta: '#F7C948' },
  { id: 'onyx',     bg: '#0D0D0D', accent: '#FF4D4D', text: '#FFFFFF', cta: '#FFD700' },
  { id: 'forest',   bg: '#0D2818', accent: '#22C55E', text: '#FFFFFF', cta: '#FDE68A' },
  { id: 'rose',     bg: '#1A0010', accent: '#F472B6', text: '#FFFFFF', cta: '#FDE68A' },
  { id: 'slate',    bg: '#F8F9FA', accent: '#2563EB', text: '#0F172A', cta: '#EF4444' },
  { id: 'sand',     bg: '#FDF6EC', accent: '#92400E', text: '#1C1917', cta: '#DC2626' },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function AdCreativeCreator() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [device, setDevice] = useState<DeviceKey>('mobile');
  const [activeTab, setActiveTab] = useState<string>('content');
  const [uploadTarget, setUploadTarget] = useState<ImageKey | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [exportState, setExportState] = useState<ExportState>('idle'); 

  const [theme, setTheme] = useState<Theme>(THEMES[0]);
  const [content, setContent] = useState<ContentData>({
    brand:      'Custom Code Studio',
    headline:   'STOP FITTING YOUR BRAND INTO A $20 TEMPLATE.',
    sub:        'Your Business Isn\'t "Standard," so Why is Your Website?',
    bullet1:    '⚡ Blazing Speed — Optimized code, zero bloat.',
    bullet2:    '🔍 SEO Native — Built to be found, not just seen.',
    bullet3:    '∞ Infinite Control — If you can dream it, we code it.',
    cta:        'BOOK A FREE CONSULT',
    phone:      '+1 (800) 555-0199',
    website:    'yourcustomagency.com',
    tagline:    'Websites that work as hard as you do.',
  });

  const [images, setImages] = useState<Record<ImageKey, string | null>>({ img1: null, img2: null });

  // Recalculate preview scale on resize / device change
  useEffect(() => {
    const recalc = () => {
      if (!containerRef.current) return;
      const { w, h } = DEVICES[device];
      const maxW = containerRef.current.clientWidth  - 64;
      const maxH = containerRef.current.clientHeight - 64;
      setScale(Math.min(maxW / w, maxH / h, 1));
    };
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [device]);

  // File upload handler
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !uploadTarget) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages(p => ({ ...p, [uploadTarget]: reader.result as string }));
      setUploadTarget(null);
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const triggerUpload = (key: ImageKey) => { 
    setUploadTarget(key); 
    fileInputRef.current?.click(); 
  };
  
  const removeImage = (key: ImageKey) => {
    setImages(p => ({ ...p, [key]: null }));
  };
  
  const updateContent = (k: keyof ContentData, v: string) => {
    setContent(p => ({ ...p, [k]: v }));
  };

  // Download via local html-to-image package
  const download = useCallback(async () => {
    if (!canvasRef.current || exportState === 'loading') return;
    setExportState('loading');
    try {
      const { w, h } = DEVICES[device];
      
      const dataUrl = await htmlToImage.toPng(canvasRef.current, {
        cacheBust: true, canvasWidth: w, canvasHeight: h,
        style: { transform: 'scale(1)', transformOrigin: 'top left' }
      });
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `ad-${device}-${Date.now()}.png`;
      a.click();
      setExportState('done');
      setTimeout(() => setExportState('idle'), 2000);
    } catch (err) {
      console.error(err);
      setExportState('idle');
    }
  }, [device, exportState]);

  const { w, h } = DEVICES[device];

  // ── RENDER: AD CANVAS ──────────────────────────────────────────────────────

  const AdCanvas = () => (
    <div
      ref={canvasRef}
      style={{
        width: w, height: h,
        background: theme.bg,
        color: theme.text,
        fontFamily: "'Syne', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Decorative geometry */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 500, height: 500, borderRadius: '50%',
        background: theme.accent, opacity: 0.12,
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: -80,
        width: 340, height: 340, borderRadius: '50%',
        background: theme.cta, opacity: 0.08,
      }} />

      {/* Diagonal slash accent */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '42%', height: '100%',
        background: `linear-gradient(135deg, transparent 40%, ${theme.accent}18 100%)`,
      }} />

      {/* Grid line decoration */}
      <div style={{
        position: 'absolute', left: 0, top: '28%',
        width: '100%', height: 2,
        background: `linear-gradient(90deg, ${theme.accent}60, transparent)`,
        opacity: 0.3,
      }} />

      {/* CONTENT WRAPPER */}
      <div style={{
        position: 'absolute', inset: 0,
        padding: device === 'desktop' ? '48px 64px' : '80px 72px',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
      }}>

        {/* TOP: Brand + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{
            fontSize: device === 'desktop' ? 18 : 30,
            fontWeight: 800, letterSpacing: '-0.01em',
            color: theme.accent,
            textTransform: 'uppercase',
          }}>
            {content.brand}
          </div>
          <div style={{
            padding: device === 'desktop' ? '6px 14px' : '10px 24px',
            borderRadius: 100,
            border: `2px solid ${theme.accent}50`,
            fontSize: device === 'desktop' ? 11 : 18,
            fontWeight: 700, letterSpacing: '0.1em',
            color: theme.accent, opacity: 0.9,
            textTransform: 'uppercase',
          }}>
            {content.tagline}
          </div>
        </div>

        {/* MIDDLE: Headline + Bullets */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: device === 'desktop' ? 20 : 40 }}>
          {/* Big headline */}
          <div>
            <div style={{
              fontSize: device === 'desktop' ? 52 : 86,
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontStyle: 'italic',
              marginBottom: device === 'desktop' ? 16 : 32,
            }}>
              {content.headline}
            </div>
            <div style={{
              fontSize: device === 'desktop' ? 18 : 30,
              fontWeight: 700,
              color: theme.cta,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}>
              {content.sub}
            </div>
          </div>

          {/* Portfolio images (if any) */}
          {(images.img1 || images.img2) && (
            <div style={{
              display: 'flex', gap: 12,
              height: device === 'desktop' ? 200 : 800,
            }}>
              {(['img1', 'img2'] as const).map(k => images[k] && (
                <div key={k} style={{
                  flex: 1, borderRadius: 16, overflow: 'hidden',
                  border: `2px solid ${theme.accent}40`,
                }}>
                  <img src={images[k] as string} alt="" style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                </div>
              ))}
            </div>
          )}

          {/* Bullet points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: device === 'desktop' ? 10 : 20 }}>
            {[content.bullet1, content.bullet2, content.bullet3].map((b, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                fontSize: device === 'desktop' ? 15 : 26,
                fontWeight: 500, opacity: 0.88,
              }}>
                <div style={{
                  width: device === 'desktop' ? 8 : 14,
                  height: device === 'desktop' ? 8 : 14,
                  borderRadius: 2, background: theme.accent, flexShrink: 0,
                }} />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: CTA + Contact */}
        <div style={{ display: 'flex', flexDirection: device === 'desktop' ? 'row' : 'column', alignItems: device === 'desktop' ? 'center' : 'flex-start', justifyContent: 'space-between', gap: 20 }}>
          {/* <div style={{
            display: 'inline-block',
            background: theme.cta,
            color: '#000',
            padding: device === 'desktop' ? '14px 32px' : '28px 60px',
            borderRadius: 100,
            fontSize: device === 'desktop' ? 16 : 28,
            fontWeight: 900,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            {content.cta}
          </div> */}
          <div style={{
            fontSize: device === 'desktop' ? 13 : 22,
            fontFamily: 'monospace',
            opacity: 0.6,
            textAlign: device === 'desktop' ? 'right' : 'left',
          }}>
            <div>{content.phone}</div>
            <div style={{ color: theme.accent }}>{content.website}</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ── RENDER ─────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Google Font */}
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <div style={{
        display: 'flex', height: '100vh', width: '100%',
        background: '#0E0E11', color: '#E8E8EC',
        fontFamily: "'Syne', sans-serif", overflow: 'hidden',
      }}>

        {/* ── SIDEBAR ── */}
        <div style={{
          width: 340, flexShrink: 0,
          background: '#17171C',
          borderRight: '1px solid #2A2A30',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #2A2A30' }}>
            <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6366F1' }}>
              Ad Creative
            </div>
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.02em', marginTop: 2 }}>
              Studio
            </div>
          </div>

          {/* Device Switcher */}
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #2A2A30' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666', marginBottom: 10 }}>Format</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {(Object.entries(DEVICES) as [DeviceKey, DeviceConfig][]).map(([key, d]) => (
                <button key={key} onClick={() => setDevice(key)} style={{
                  flex: 1, padding: '8px 4px',
                  background: device === key ? '#6366F1' : '#212128',
                  color: device === key ? '#fff' : '#888',
                  border: 'none', borderRadius: 8, cursor: 'pointer',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                  transition: 'all 0.15s',
                  textTransform: 'uppercase',
                }}>
                  {key === 'mobile' ? '9:16' : key === 'desktop' ? 'OG' : '1:1'}
                  <div style={{ fontSize: 8, opacity: 0.7, marginTop: 2 }}>{key}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #2A2A30' }}>
            {[
              { id: 'content', label: 'Content', icon: Type },
              { id: 'design',  label: 'Design',  icon: Palette },
              { id: 'media',   label: 'Media',   icon: Image },
            ].map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => setActiveTab(id)} style={{
                flex: 1, padding: '12px 8px',
                background: 'none', border: 'none',
                borderBottom: activeTab === id ? '2px solid #6366F1' : '2px solid transparent',
                color: activeTab === id ? '#E8E8EC' : '#555',
                cursor: 'pointer', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                transition: 'all 0.15s',
              }}>
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>

            {activeTab === 'content' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {([
                  { key: 'brand',    label: 'Brand Name' },
                  { key: 'tagline',  label: 'Tagline' },
                  { key: 'headline', label: 'Headline',  big: true },
                  { key: 'sub',      label: 'Subheadline' },
                  { key: 'bullet1',  label: 'Bullet 1' },
                  { key: 'bullet2',  label: 'Bullet 2' },
                  { key: 'bullet3',  label: 'Bullet 3' },
                  { key: 'cta',      label: 'CTA Button' },
                  { key: 'phone',    label: 'Phone' },
                  { key: 'website',  label: 'Website' },
                ] as const).map(({ key, label, big }) => (
                  <div key={key}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 6 }}>{label}</div>
                    {big ? (
                      <textarea
                        value={content[key]}
                        onChange={e => updateContent(key, e.target.value)}
                        rows={3}
                        style={inputStyle}
                      />
                    ) : (
                      <input
                        value={content[key]}
                        onChange={e => updateContent(key, e.target.value)}
                        style={inputStyle}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'design' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 12 }}>Color Theme</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {THEMES.map(t => (
                      <button key={t.id} onClick={() => setTheme(t)} style={{
                        padding: '12px',
                        background: t.bg,
                        border: theme.id === t.id ? `2px solid #6366F1` : '2px solid transparent',
                        borderRadius: 10, cursor: 'pointer',
                        display: 'flex', gap: 6, alignItems: 'center',
                        transition: 'all 0.15s',
                      }}>
                        <div style={{ width: 16, height: 16, borderRadius: 4, background: t.accent }} />
                        <div style={{ width: 16, height: 16, borderRadius: 4, background: t.cta }} />
                        <div style={{ fontSize: 10, color: t.text, fontWeight: 700, textTransform: 'capitalize' }}>{t.id}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 12 }}>Custom Colors</div>
                  {([
                    { label: 'Background', key: 'bg' },
                    { label: 'Accent',     key: 'accent' },
                    { label: 'CTA Color',  key: 'cta' },
                  ] as const).map(({ label, key }) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontSize: 12, color: '#888' }}>{label}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 11, color: '#555', fontFamily: 'monospace' }}>{theme[key as keyof Theme]}</span>
                        <input type="color" value={theme[key as keyof Theme]}
                          onChange={e => setTheme(p => ({ ...p, [key]: e.target.value }))}
                          style={{ width: 32, height: 32, border: 'none', borderRadius: 6, cursor: 'pointer', background: 'none', padding: 0 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6 }}>
                  Upload images to display in your ad. They'll appear as portfolio/product shots.
                </div>
                {(['img1', 'img2'] as const).map((key, i) => (
                  <div key={key}>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Image {i + 1}</div>
                    {images[key] ? (
                      <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: '1px solid #2A2A30' }}>
                        <img src={images[key] as string} alt="" style={{ width: '100%', height: 100, objectFit: 'cover', display: 'block' }} />
                        <button onClick={() => removeImage(key)} style={{
                          position: 'absolute', top: 8, right: 8,
                          background: '#000000AA', border: 'none', borderRadius: 6,
                          color: '#fff', padding: '4px 8px', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', gap: 4, fontSize: 11,
                        }}>
                          <X size={12} /> Remove
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => triggerUpload(key)} style={{
                        width: '100%', padding: '24px',
                        background: '#212128', border: '2px dashed #333',
                        borderRadius: 10, cursor: 'pointer', color: '#555',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = '#6366F1'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = '#333'}
                      >
                        <Upload size={20} color="#6366F1" />
                        <span style={{ fontSize: 12, fontWeight: 700 }}>Upload Image</span>
                        <span style={{ fontSize: 10, opacity: 0.5 }}>PNG, JPG, WEBP</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Export Button */}
          <div style={{ padding: '16px 24px', borderTop: '1px solid #2A2A30', display: 'flex', gap: 8 }}>
            <button onClick={download} disabled={exportState === 'loading'} style={{
              flex: 1, padding: '14px',
              background: exportState === 'done' ? '#22C55E' : '#6366F1',
              border: 'none', borderRadius: 10, cursor: exportState === 'loading' ? 'wait' : 'pointer',
              color: '#fff', fontSize: 13, fontWeight: 800,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'all 0.2s', opacity: exportState === 'loading' ? 0.7 : 1,
            }}>
              {exportState === 'loading' ? <><RefreshCw size={16} style={{ animation: 'spin 1s linear infinite' }} /> Rendering…</> :
               exportState === 'done'    ? <>✓ Saved!</> :
               <><Download size={16} /> Export PNG</>}
            </button>
          </div>
        </div>

        {/* ── CANVAS AREA ── */}
        <div ref={containerRef} style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: '#0E0E11',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1A1A22 0%, #0E0E11 70%)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Dotted grid background */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.15,
            backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} />

          {/* Canvas label */}
          <div style={{
            position: 'absolute', top: 20, left: 24,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6366F1', boxShadow: '0 0 8px #6366F1' }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#444' }}>
              {DEVICES[device].label} — {DEVICES[device].w}×{DEVICES[device].h}
            </span>
          </div>

          {/* Zoom indicator */}
          <div style={{
            position: 'absolute', top: 20, right: 24,
            fontSize: 11, color: '#444', fontFamily: 'monospace',
            background: '#17171C', padding: '6px 12px', borderRadius: 6,
            border: '1px solid #2A2A30',
          }}>
            {Math.round(scale * 100)}% zoom
          </div>

          {/* Scaled Canvas */}
          <div style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)',
            borderRadius: 2,
            flexShrink: 0,
          }}>
            <AdCanvas />
          </div>
        </div>
      </div>

      <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFile} style={{ display: 'none' }} />

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        * { box-sizing: border-box; }
      `}</style>
    </>
  );
}

// ── SHARED STYLES ──────────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 12px',
  background: '#212128', border: '1px solid #2A2A30',
  borderRadius: 8, color: '#E8E8EC',
  fontSize: 13, fontFamily: "'Syne', sans-serif",
  outline: 'none', resize: 'vertical',
  transition: 'border-color 0.15s',
};