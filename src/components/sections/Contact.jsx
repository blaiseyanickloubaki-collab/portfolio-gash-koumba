import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Phone, Download } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

const SocialIcon = ({ name }) => {
  switch (name) {
    case 'github':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
};

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-bg2 border border-line text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-all duration-300 text-sm';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Veuillez remplir tous les champs.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Veuillez entrer une adresse email valide.' });
      return;
    }

    setStatus({
      type: 'success',
      message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
    });
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus({ type: '', message: '' }), 5000);
  };

  return (
    // CHANGÉ : bg-black -> bg-bg
    <section id="contact" className="relative py-20 bg-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Travaillons <span className="text-primary">ensemble</span>
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl">
              Ouvert aux postes en E&amp;I, automatisme DCS et planification de projets, ainsi qu'aux missions freelance de développement et de formation — au Congo et à l'international.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Formulaire */}
          <FadeIn delay={100}>
            <div className="p-8 sm:p-10 rounded-3xl bg-panel border border-line backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted mb-2">
                    Nom / Entreprise
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Votre nom ou nom d'entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Décrivez votre besoin ou votre projet..."
                  />
                </div>

                {/* CHANGÉ : text-black -> texte foncé de la charte */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-primary text-[#1a0b03] font-semibold text-sm hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl text-xs font-medium border ${
                      status.type === 'success'
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Infos de contact */}
          <FadeIn delay={200}>
            <div className="space-y-8 lg:pt-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Restons en contact</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Un projet EPC, une application ou une formation à mettre en place ? Échangeons sur vos besoins.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-5 rounded-2xl bg-panel border border-line flex items-center gap-4 group hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-[#1a0b03] transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-dim mb-0.5">Email</p>
                    <span className="text-sm text-white font-medium group-hover:text-primary transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                {/* NOUVEAU : Téléphone / WhatsApp */}
                <div className="p-5 rounded-2xl bg-panel border border-line flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-dim mb-0.5">Téléphone / WhatsApp</p>
                    <div className="flex flex-wrap gap-x-3 text-sm text-white font-medium">
                      {PERSONAL_INFO.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Localisation */}
                <div className="p-5 rounded-2xl bg-panel border border-line flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-dim mb-0.5">Mobile pour missions sur site</p>
                    <p className="text-sm text-white font-medium">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* CV + réseaux */}
              <div>
                <p className="text-xs text-dim mb-3">Retrouvez-moi sur</p>
                <div className="flex flex-wrap items-center gap-3">
                  {/* CHANGÉ : seul LinkedIn est affiché (le client n'a que celui-là) */}
                  {Object.entries(SOCIAL_LINKS)
                    .filter(([platform]) => platform === 'linkedin')
                    .map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-10 h-10 rounded-xl bg-panel border border-line flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      >
                        <SocialIcon name={platform} />
                      </a>
                    ))}

                  {/* NOUVEAU : bouton CV */}
                  <a
                    href={PERSONAL_INFO.resume}
                    download
                    className="inline-flex items-center gap-2 px-5 h-10 rounded-xl bg-primary text-[#1a0b03] text-sm font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger mon CV
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;