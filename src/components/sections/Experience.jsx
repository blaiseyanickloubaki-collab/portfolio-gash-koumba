import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, GraduationCap } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import { experiences } from '../../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Parcours professionnel</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Expériences professionnelles
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Projets EPC Oil &amp; Gas, informatique industrielle et formation.
            </p>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => {
            const CompanyIcon = exp.type === 'school' ? GraduationCap : Building2;
            return (
              <FadeIn key={exp.id} delay={index * 100}>
                <div className="relative pl-8 md:pl-10 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(242,121,63,0.5)]" />

                  <div className="md:absolute md:-left-36 md:top-1.5 mb-2 md:mb-0 md:w-28 md:text-right">
                    <div className="text-xs font-semibold text-primary/90 flex items-center gap-1 md:justify-end">
                      <Calendar className="w-3.5 h-3.5 md:hidden" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-[11px] text-dim">{exp.duration}</span>
                  </div>

                  <div className="bg-panel border border-line rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-line">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted mt-1">
                          <CompanyIcon className="w-4 h-4 text-blue" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted bg-panel2 px-3 py-1.5 rounded-full border border-line2 w-fit">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {exp.objectivesLabel && (
                      <div className="text-xs tracking-wider uppercase text-blue font-semibold mb-3">
                        Objectifs pédagogiques
                      </div>
                    )}

                    <ul className="space-y-2.5 mb-6">
                      {exp.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.miniProjects && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {exp.miniProjects.map((p) => (
                          <div key={p.title} className="border border-line rounded-xl p-4 bg-white/[0.015]">
                            <b className="block text-sm text-white">{p.title}</b>
                            <span className="text-xs text-muted">{p.info}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {exp.subRole && (
                      <div className="border-t border-line pt-5 mb-6">
                        <div className="flex flex-wrap justify-between gap-2 mb-3">
                          <h4 className="text-base font-semibold text-white">{exp.subRole.title}</h4>
                          <span className="text-xs font-semibold text-primary">{exp.subRole.period}</span>
                        </div>
                        <ul className="space-y-2.5">
                          {exp.subRole.tasks.map((t, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-white/75">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-md text-xs font-medium border ${
                            skill.includes('Intelligence')
                              ? 'bg-primary/10 border-primary/30 text-[#ffd9c6]'
                              : 'bg-blue/10 border-blue/25 text-[#d3e1f0]'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;