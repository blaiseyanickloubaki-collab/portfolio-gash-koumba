import React from 'react';
import { GraduationCap, ShieldCheck } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { diplomas, certifications, languages } from '../../data/education';

const Education = () => {
  return (
    <section id="education" className="relative py-24 bg-bg overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Formation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white">
              Diplômes, certifications &amp; langues
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6">
          {/* Diplômes */}
          <FadeIn delay={100}>
            <div className="bg-panel border border-line rounded-2xl p-6 md:p-8 h-full hover:border-primary/30 transition-all duration-300">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-2">
                <span className="p-2.5 bg-blue/10 border border-blue/30 rounded-xl text-blue">
                  <GraduationCap className="w-5 h-5" />
                </span>
                Diplômes
              </h3>
              {diplomas.map((d) => (
                <div key={d.year} className="flex gap-5 py-5 border-b border-line last:border-0">
                  <div className="text-2xl font-semibold text-primary w-16 shrink-0 font-mono">{d.year}</div>
                  <div>
                    <b className="block text-base text-white leading-snug">{d.title}</b>
                    <span className="block text-[13.5px] text-muted mt-1">{d.school}</span>
                    {d.level && (
                      <span className="inline-block mt-2 text-xs font-semibold text-blue border border-blue/40 rounded-md px-2.5 py-1">
                        {d.level}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Formations complémentaires */}
          <FadeIn delay={200}>
            <div className="bg-panel border border-line rounded-2xl p-6 md:p-8 h-full hover:border-primary/30 transition-all duration-300">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-2">
                <span className="p-2.5 bg-blue/10 border border-blue/30 rounded-xl text-blue">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                Formations complémentaires
              </h3>
              {certifications.map((c) => (
                <div
                  key={c.label}
                  className="flex justify-between gap-3 py-3.5 border-b border-dashed border-line last:border-0 text-sm text-white/85"
                >
                  <span>{c.label}</span>
                  {c.status ? (
                    <em className="not-italic text-[11.5px] text-primary border border-primary/40 rounded-md px-2 py-0.5 whitespace-nowrap h-fit">
                      {c.status}
                    </em>
                  ) : (
                    <i className="not-italic text-[13px] text-dim whitespace-nowrap">{c.year}</i>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Langues */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {languages.map((l, i) => (
            <FadeIn key={l.name} delay={300 + i * 100}>
              <div className="bg-panel border border-line rounded-2xl p-5 hover:border-primary/30 transition-all duration-300">
                <b className="text-[15px] text-white">{l.name}</b>
                <span className="block text-[12.5px] text-muted mt-1 mb-3">{l.label}</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <i
                      key={n}
                      className={`flex-1 h-[5px] rounded-sm ${n <= l.level ? 'bg-blue' : 'bg-line2'}`}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;