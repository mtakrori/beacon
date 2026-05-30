'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center text-center py-16"
        >
          <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
            <CheckCircle size={28} className="text-primary" />
          </div>
          <h4 className="text-xl font-serif text-white mb-3">Message Received</h4>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-xs text-zinc-500 hover:text-primary tracking-[0.2em] uppercase transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold block mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-zinc-600"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-semibold block mb-2">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or inquiry..."
              className="w-full bg-white/5 border border-white/10 focus:border-primary text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-zinc-600 resize-none"
            />
          </div>

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 bg-red-950/30 border border-red-900/40 text-red-400 text-sm"
            >
              <AlertCircle size={15} />
              {errorMessage}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-yellow-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,186,18,0.2)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={14} />
                Send Message
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
