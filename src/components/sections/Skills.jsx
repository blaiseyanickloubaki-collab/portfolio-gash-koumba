import React from "react";
import { skills } from "../../data/skills";
import * as Icons from 'lucide-react';
import FadeIn from "../animations/FadeIn";

const Skills = () => {
  return (
    // CHANGÉ : bg-black -> bg-bg
    <section id="skills" className="relative py-20 bg-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Icons.Layers className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Expertises</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Mes 5 pôles d'expertise
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Des compétences complémentaires, toutes mises en pratique sur le terrain, en entreprise ou en freelance.
            </p>
          </div>
        </FadeIn>

        {/* 6 colonnes : 3 cartes de 2 + 2 cartes de 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {skills.map((pole, index) => {
            const IconComponent = Icons[pole.icon] || Icons.Code2;
            return (
              <div
                key={pole.id}
                className={pole.wide ? 'lg:col-span-3' : 'lg:col-span-2'}
              >
                <FadeIn delay={index * 100}>
                  <div className="relative bg-panel border border-line rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group h-full">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-line">
                      <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <small className="block text-[11.5px] tracking-widest uppercase text-primary font-semibold">
                          {pole.pole}
                        </small>
                        <h3 className="text-lg font-medium text-white">{pole.title}</h3>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {pole.items.map((item) => (
                        <li key={item} className="relative pl-5 text-sm text-white/80 leading-relaxed">
                          <span className="absolute left-0.5 top-[7px] w-[7px] h-[7px] rounded-sm bg-primary rotate-45" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {pole.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2.5 py-1 rounded-md border ${
                            tag.includes('IA')
                              ? 'text-[#ffd9c6] bg-primary/10 border-primary/30'
                              : 'text-[#d3e1f0] bg-blue/10 border-blue/25'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;