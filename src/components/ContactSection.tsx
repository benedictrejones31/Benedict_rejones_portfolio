import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, Github, Linkedin, Code2, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection: React.FC = () => {
  const { contact, social } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // If API route failed or running in non-Vercel local dev
        throw new Error(data.error || 'Failed to send message via contact API');
      }
    } catch (err: any) {
      console.warn('API send attempt result:', err.message);
      // Fallback: If deployed without serverless backend or running standalone preview,
      // allow instant one-click mailto fallback or clear error explanation
      setStatus('error');
      setErrorMessage(
        'The serverless mail function is configured for Vercel deployment. You can also send directly via your mail client below.'
      );
    }
  };

  const mailtoHref = `mailto:${social.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 border-b border-border bg-grid-subtle">
      <div className="max-w-[1100px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <ScrollReveal delay={0}>
            <span className="text-xs uppercase font-semibold tracking-wider text-accent">
              Direct Communication
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-text-main mt-1 mb-4">
              {contact.heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base text-text-muted leading-relaxed">
              {contact.invitation}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels (Left Column) */}
          <div className="lg:col-span-5 min-w-0 space-y-6">
            <ScrollReveal delay={0.12}>
              <div className="p-6 rounded-card bg-surface border border-border shadow-subtle space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Direct Channels
                </h3>

                {/* Email Item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0 text-accent">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">Email</div>
                    <a
                      href={`mailto:${social.email}`}
                      className="text-sm font-medium text-text-main hover:text-accent hover:underline transition-colors break-all"
                    >
                      {social.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0 text-accent">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium">Phone</div>
                    <a
                      href={`tel:${social.phone}`}
                      className="text-sm font-medium text-text-main hover:text-accent hover:underline transition-colors"
                    >
                      {social.phone}
                    </a>
                  </div>
                </div>

                {/* Response SLA Note */}
                <div className="pt-3 border-t border-border/70 text-xs text-text-muted leading-relaxed">
                  ✓ {contact.responseTimeNote}
                </div>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.16}>
              <div className="p-6 rounded-card bg-surface border border-border shadow-subtle">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                  Professional Profiles
                </h3>
                <div className="flex flex-col space-y-2.5">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-surface-alt/70 border border-border/70 text-xs font-medium text-text-main hover:border-accent hover-lift"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-accent" />
                      LinkedIn Profile
                    </span>
                    <span className="text-text-muted text-[11px]">in/W-benedict-rejones</span>
                  </a>

                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-surface-alt/70 border border-border/70 text-xs font-medium text-text-main hover:border-accent hover-lift"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-accent" />
                      GitHub Repositories
                    </span>
                    <span className="text-text-muted text-[11px]">benedictrejones31</span>
                  </a>

                  <a
                    href={social.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-surface-alt/70 border border-border/70 text-xs font-medium text-text-main hover:border-accent hover-lift"
                  >
                    <span className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-accent" />
                      LeetCode Profile
                    </span>
                    <span className="text-text-muted text-[11px]">200+ Solved</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 min-w-0">
            <ScrollReveal delay={0.15}>
              <div className="p-6 sm:p-8 rounded-card bg-surface border border-border shadow-subtle">
                <h3 className="text-base font-serif font-semibold text-text-main mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-text-muted mb-6">
                  Powered by Resend. Delivered directly to Benedict's inbox.
                </p>

                {status === 'success' ? (
                  <div className="p-6 rounded-lg bg-accent-soft border border-accent/20 text-text-main space-y-3">
                    <div className="flex items-center gap-2 text-accent font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      Message Received
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Thank you for reaching out. Your note has been delivered. I will respond to your email within two working days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-xs font-semibold text-accent underline hover:opacity-80"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {status === 'error' && (
                      <div className="p-3.5 rounded-lg bg-surface-alt border border-border text-xs text-text-muted flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-text-main font-medium">
                          <AlertCircle className="w-4 h-4 text-accent" />
                          <span>Delivery Notice</span>
                        </div>
                        <p>{errorMessage}</p>
                        <a
                          href={mailtoHref}
                          className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline pt-1"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          Open in your email app instead
                        </a>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5">
                          Your Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Jane Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-alt/50 border border-border text-sm text-text-main placeholder:text-text-muted/60 focus-visible:ring-2 focus-visible:ring-accent focus:bg-surface transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-surface-alt/50 border border-border text-sm text-text-main placeholder:text-text-muted/60 focus-visible:ring-2 focus-visible:ring-accent focus:bg-surface transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-medium text-text-muted mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project discussion, collaboration, or hiring"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-alt/50 border border-border text-sm text-text-main placeholder:text-text-muted/60 focus-visible:ring-2 focus-visible:ring-accent focus:bg-surface transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your team, challenge, or project..."
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-alt/50 border border-border text-sm text-text-main placeholder:text-text-muted/60 focus-visible:ring-2 focus-visible:ring-accent focus:bg-surface transition-all resize-y"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-4">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:opacity-95 shadow-subtle hover-lift disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>

                      <span className="text-[11px] text-text-muted">
                        No spam. No trackers.
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
