import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.7 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#080B1E] border-b border-[#713BFF]/20 relative overflow-hidden">
      {/* Background ambient neon orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#713BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#16D9F5]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#713BFF]/15 border border-[#713BFF]/30 text-[#16D9F5] text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFF] tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#713BFF] via-[#16D9F5] to-[#FF4FA3]">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#713BFF] to-[#16D9F5] mx-auto mt-3 rounded-full" />
          <p className="text-[#AAB4D0] text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Feel free to contact me directly for software development roles, data analytics projects, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with 1-click copy */}
            <div className="bg-[#10152D]/85 border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 shadow-xl transition-all backdrop-blur-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#080B1E] border border-[#713BFF]/35 flex items-center justify-center text-[#16D9F5]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">Direct Email</h3>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-base font-bold text-[#F8FAFF] hover:text-[#16D9F5] transition-colors block mt-0.5"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-[#080B1E] hover:bg-[#713BFF]/20 border border-[#713BFF]/30 text-[#AAB4D0] hover:text-[#16D9F5] transition-all text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#10152D]/85 border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 shadow-xl transition-all backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#080B1E] border border-[#713BFF]/35 flex items-center justify-center text-[#16D9F5]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">Direct Phone</h3>
                    <a
                      href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-bold text-[#F8FAFF] hover:text-[#16D9F5] transition-colors block mt-0.5"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="px-4 py-1.5 rounded-full bg-[#16D9F5]/20 hover:bg-[#16D9F5]/30 border border-[#16D9F5]/50 text-[#16D9F5] text-xs font-bold transition-all shadow-xs"
                >
                  Call
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#10152D]/85 border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 shadow-xl transition-all backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#080B1E] border border-[#713BFF]/35 flex items-center justify-center text-[#713BFF]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">LinkedIn</h3>
                    <p className="text-sm font-bold text-[#F8FAFF] mt-0.5">Palak Pandey</p>
                  </div>
                </div>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#713BFF] hover:bg-[#8552FF] text-white text-xs font-bold transition-all shadow-md shadow-[#713BFF]/30"
                >
                  Connect
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-[#10152D]/85 border border-[#713BFF]/30 hover:border-[#16D9F5]/60 rounded-3xl p-6 shadow-xl transition-all backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#080B1E] border border-[#713BFF]/35 flex items-center justify-center text-[#F8FAFF]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">GitHub</h3>
                    <p className="text-sm font-bold text-[#F8FAFF] mt-0.5">Palak2508</p>
                  </div>
                </div>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#080B1E] hover:bg-white/10 border border-[#713BFF]/35 text-[#F8FAFF] text-xs font-bold transition-all shadow-xs"
                >
                  Follow
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#10152D]/85 border border-[#713BFF]/30 rounded-3xl p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-[#080B1E] border border-[#713BFF]/35 flex items-center justify-center text-[#FF4FA3]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400">Location</h3>
                  <p className="text-sm font-bold text-[#F8FAFF] mt-0.5">
                    {personal.location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#AAB4D0] pl-14">
                Available for on-site & remote software engineering and data analytics roles.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#10152D]/85 border border-[#713BFF]/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              <h3 className="text-2xl font-extrabold text-[#F8FAFF] mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-[#AAB4D0] mb-6">
                I'm always open to discussing new opportunities or technical challenges.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#16D9F5]/10 border border-[#16D9F5]/40 flex items-center gap-3 text-[#16D9F5] text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#16D9F5] shrink-0" />
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-xs text-[#AAB4D0]">Thank you for reaching out. I will respond as soon as possible.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB4D0] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B1E] border border-[#713BFF]/30 text-[#F8FAFF] placeholder-slate-500 text-sm focus:outline-none focus:border-[#16D9F5] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB4D0] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080B1E] border border-[#713BFF]/30 text-[#F8FAFF] placeholder-slate-500 text-sm focus:outline-none focus:border-[#16D9F5] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB4D0] mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SDE Opportunity / Technical Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080B1E] border border-[#713BFF]/30 text-[#F8FAFF] placeholder-slate-500 text-sm focus:outline-none focus:border-[#16D9F5] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#AAB4D0] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Palak, I reviewed your portfolio and would like to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#080B1E] border border-[#713BFF]/30 text-[#F8FAFF] placeholder-slate-500 text-sm focus:outline-none focus:border-[#16D9F5] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#713BFF] via-[#8552FF] to-[#16D9F5] hover:from-[#8552FF] hover:to-[#3ee2fa] disabled:opacity-50 rounded-full shadow-lg shadow-[#713BFF]/35 hover:shadow-[0_0_25px_rgba(22,217,245,0.4)] transition-all active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={`mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                    className="text-xs font-bold text-[#16D9F5] hover:text-[#FF4FA3] underline underline-offset-4"
                  >
                    Or open in default mail client ↗
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
