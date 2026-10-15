import React from 'react';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { developer, trainer } from '../../data/devTrainer';

const tagClass = (accent) =>
  `text-xs px-2.5 py-1 rounded-md border ${
    accent
      ? 'text-[#ffd9c6] bg-primary/10 border-primary/30'
      : 'text-[#d3e1f0] bg-blue/10 border-blue/25'
  }`;

const CardHeader = ({ data }) => {
  const Icon = Icons[data.icon] || Icons.Code;
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <small className="block text-[11.5px] tracking-widest uppercase text-primary font-semibold">
          {data.pole}
        </small>
        <h3 className="text-xl md:text-2xl font-semibold text-white">{data.title}</h3>
      </div>
    </div>
  );
};

const Block = ({ icon, title, text, tags, accent }) => {
  const Icon = Icons[icon] || Icons.Code;
  return (
    <div
      className={`rounded-2xl border p-4 mt-3 ${
        accent
          ? 'border-primary/35 bg-gradient-to-b from-primary/[0.07] to-transparent'
          : 'border-line bg-white/[0.015]'
      }`}
    >
      <div className="flex items-center gap-2.5 font-semibold text-[15px] text-white">
        <Icon className={`w-[18px] h-[18px] ${accent ? 'text-primary' : 'text-blue'}`} />
        {title}
      </div>
      <p className="text-[13.5px] text-muted leading-relaxed mt-1.5 mb-3">{text}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className={tagClass(accent)}>{t}</span>
        ))}
      </div>
    </div>
  );
};

const DevTrainer = () => {
  return (
    <section id="devtrainer" className="relative py-24 bg-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Compétences techniques &amp; outils</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white">
              Au-delà de l'industrie : <span className="text-primary">développer</span> et{' '}
              <span className="text-primary">transmettre</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Développeur */}
          <FadeIn delay={100}>
            <div className="bg-panel border border-line rounded-2xl p-7 h-full hover:border-primary/30 transition-all duration-300">
              <CardHeader data={developer} />
              <p className="text-[14.5px] text-muted leading-relaxed my-4">{developer.intro}</p>
              {developer.blocks.map((b) => (
                <Block key={b.title} {...b} />
              ))}
            </div>
          </FadeIn>

          {/* Formateur */}
          <FadeIn delay={200}>
            <div className="bg-panel border border-line rounded-2xl p-7 h-full hover:border-primary/30 transition-all duration-300">
              <CardHeader data={trainer} />
              <p className="text-[14.5px] text-muted leading-relaxed my-4">{trainer.intro}</p>

              <div>
                {trainer.trainings.map((t) => (
                  <div
                    key={t.title}
                    className="grid grid-cols-[96px_1fr] gap-3.5 py-4 border-b border-dashed border-line last:border-0"
                  >
                    <span className="text-[13px] text-primary font-semibold pt-0.5">{t.year}</span>
                    <div>
                      <b className="block text-[15px] text-white">{t.title}</b>
                      <span className="block text-[13px] text-muted mt-1">{t.place}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2.5 mt-4">
                {trainer.stats.map((s) => (
                  <div key={s.label} className="border border-line rounded-xl p-3 text-center">
                    <b className="block text-xl text-primary font-mono">{s.value}</b>
                    <span className="text-xs text-muted">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="border border-line rounded-2xl p-4 mt-4 bg-white/[0.015]">
                <div className="flex items-center gap-2.5 font-semibold text-[15px] text-white">
                  <Icons.GraduationCap className="w-[18px] h-[18px] text-blue" />
                  {trainer.domains.title}
                </div>
                <p className="text-[13.5px] text-muted mt-1.5 mb-3">{trainer.domains.text}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.domains.tags.map((t) => (
                    <span key={t.label} className={tagClass(t.accent)}>{t.label}</span>
                  ))}
                </div>
              </div>

              <div className="border border-line rounded-2xl p-4 mt-3 bg-white/[0.015]">
                <div className="flex items-center gap-2.5 font-semibold text-[15px] text-white">
                  <Icons.Users className="w-[18px] h-[18px] text-blue" />
                  {trainer.approach.title}
                </div>
                <p className="text-[13.5px] text-muted leading-relaxed mt-1.5">{trainer.approach.text}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default DevTrainer;