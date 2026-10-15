import React from 'react';
import { Download, Users, Sparkles, Cpu, Terminal, Database, Layers, Briefcase, Eye, Presentation, Gauge } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {
  const skills = [
    { name: "Automatisme PLC / DCS", icon: Cpu },
    { name: "P&ID & Instrumentation", icon: Layers },
    { name: "MS Project · Primavera P6", icon: Briefcase },
    { name: "Python · PHP · Flutter", icon: Terminal },
    { name: "IA & Vision par ordinateur", icon: Eye },
    { name: "SQL & Réseaux", icon: Database },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/10 rounded-full w-fit">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">À propos</span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Un profil hybride, <span className="text-primary">du terrain au code</span>
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragraph, index) => (
                    <p key={index} className="text-base text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="grid grid-cols-3 gap-8">
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                      <div className="text-3xl font-normal text-white mb-2 font-mono">
                        {stat.value}
                      </div>
                      <p className="text-sm text-dim leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                  className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-[#1a0b03] rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 w-fit group cursor-pointer"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Télécharger mon CV
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Right Column */}
          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">

              {/* Pôles 01 + 02 */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-panel border border-line rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Technicien E&I · Automaticien (PLC / DCS)</h3>
                      <p className="text-sm text-muted leading-relaxed">
                        Câblage, instrumentation, P&ID et schémas de boucle ; systèmes DCS et programmation d'automates (LD, FBD, ST).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pôle 03 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-panel border border-line rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">Planificateur & Chef de projet</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    MS Project, Primavera P6, SAP PM et reporting d'avancement sur projets EPC.
                  </p>
                </div>
              </div>

              {/* Pôle 04 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-panel border border-line rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                    <Terminal className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">IT & Développeur Full Stack</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Applications web, mobiles et desktop, avec IA et vision par ordinateur.
                  </p>
                </div>
              </div>

              {/* Pôle 05 */}
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-panel border border-line rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Presentation className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Formateur</h3>
                      <p className="text-sm text-muted leading-relaxed">
                        Instituts universitaires et entreprises : algorithmique, Python, initiation à l'IA, Excel avancé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

        {/* Skills Grid */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-normal text-white mb-2">
                Domaines d'expertise & technologies
              </h3>
              <p className="text-sm text-dim">
                Les outils et compétences clés appliqués au quotidien
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-panel hover:bg-panel2 border border-line hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <IconComponent className="w-8 h-8 text-primary" />
                    <div className="text-sm text-white/80 font-medium text-center">
                      {skill.name}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;