import { ChevronDown, Star, Cpu, Terminal, Layers, Download } from 'lucide-react';
import { SiPython, SiPhp } from 'react-icons/si';
import { PERSONAL_INFO, STATS, ROLES } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  return (
    // CHANGÉ : bg-black -> bg-bg
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-primary fill-primary" />
                {/* CHANGÉ */}
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  Disponible · {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              {/* CHANGÉ */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Ingénieur des travaux en{' '}
                <span className="text-primary">Automatisme &amp; Informatique Industrielle</span>
              </h1>
            </FadeIn>

            {/* NOUVEAU : les 5 rôles */}
            <FadeIn delay={150}>
              <div className="flex flex-wrap gap-2 mb-6">
                {ROLES.map((role, i) => (
                  <span
                    key={role}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold px-3 py-2 rounded-lg border border-line2 bg-panel text-white"
                  >
                    <i className="w-5 h-5 rounded-md grid place-items-center not-italic text-[11px] font-extrabold bg-primary text-[#1a0b03]">
                      {i + 1}
                    </i>
                    {role}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              {/* CHANGÉ */}
              <p className="text-lg text-muted max-w-[600px] mb-8">
                Du <b className="text-white font-semibold">terrain électricité-instrumentation</b> au{' '}
                <b className="text-white font-semibold">pilotage de projets EPC</b> Oil &amp; Gas, et de l'
                <b className="text-white font-semibold">automate</b> à l'
                <b className="text-white font-semibold">application intégrant de l'IA</b> : un profil
                polyvalent, orienté résultats.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              {/* CHANGÉ : bouton CV (orange) + bouton projets (ghost) */}
              <div className="flex flex-wrap gap-3.5 mb-12">
                <a
                  href={PERSONAL_INFO.resume}
                  download
                  className="inline-flex items-center gap-2.5 bg-primary text-[#1a0b03] rounded-[17px] px-[26px] py-[13px] text-base font-semibold hover:bg-primary-dark transition-colors"
                >
                  <Download className="w-[18px] h-[18px]" />
                  Télécharger mon CV
                </a>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-2.5 border border-line2 text-white rounded-[17px] px-[26px] py-[13px] text-base font-medium hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Voir mes projets
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  // CHANGÉ : border-white/10 -> border-line
                  <div key={index} className="text-left border-r border-line pr-10 last:border-r-0">
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - inchangée sauf 2 classes */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl"></div>
                </div>

                <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                  <img
                    src="/developer-portrait.png"
                    alt="Gash Dieuveil KOUMBA sur site industriel"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <FadeIn delay={500}>
                    {/* CHANGÉ : bg-black/40 -> bg-bg/70 */}
                    <div className="flex items-center gap-4 bg-bg/70 backdrop-blur-sm border border-line2 rounded-full px-6 py-3">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300" title="Automatisme & API">
                        <Cpu className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300" title="Python">
                        <SiPython className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300" title="PHP & SQL">
                        <SiPhp className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300" title="P&ID & Instrumentation">
                        <Layers className="w-full h-full text-primary" />
                      </div>
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300" title="Réseaux Industriels & Maintenance">
                        <Terminal className="w-full h-full text-primary" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;