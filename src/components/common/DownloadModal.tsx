'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Loader2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
        return;
      }

      setStatus('done');
      // Trigger download after brief delay so user sees the success state
      setTimeout(() => {
        const a = document.createElement('a');
        a.href = '/beacon-profile.pdf';
        a.download = 'Beacon-Company-Profile.pdf';
        a.click();
      }, 600);
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  const handleClose = () => {
    if (status === 'loading') return;
    onClose();
    setTimeout(() => {
      setName('');
      setEmail('');
      setStatus('idle');
      setErrorMsg('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="fixed z-50 inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-card w-full max-w-md relative overflow-hidden">
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              <div className="p-8 md:p-10">
                {/* Close */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>

                {status !== 'done' ? (
                  <>
                    <div className="mb-8">
                      <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-3">
                        Company Profile
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide">
                        Download Our Brochure
                      </h2>
                      <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                        Enter your email to receive our company profile and stay updated with our latest collections.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Honeypot */}
                      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                      <div>
                        <label className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold block mb-2">
                          Name <span className="text-zinc-600">(optional)</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-white/5 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-zinc-600"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold block mb-2">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full bg-white/5 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-zinc-600"
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-red-400 text-xs tracking-wide">{errorMsg}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase py-4 hover:bg-yellow-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download size={14} />
                            Download Profile
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Download size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-serif text-white mb-3">Your download is starting</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                      Thank you! Your download should begin shortly. We'll keep you updated with our latest collections.
                    </p>
                    <button
                      onClick={handleClose}
                      className="text-xs text-zinc-500 hover:text-primary tracking-[0.2em] uppercase transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
