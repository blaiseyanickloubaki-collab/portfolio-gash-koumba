import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

// Données des expériences intégrées directement
const experiences = [
  {
    id: 1,
    period: 'Juin 2023 – Mars 2026',
    role: 'Assistant Project Manager & Planner / Elect-Instrumentiste Junior',
    company: 'Rosetti Congo (Projets EPC Eni Congo)',
    location: 'Pointe-Noire, Congo',
    description: 'Gestion et suivi de projets industriels pétroliers de grande envergure.',
    tasks: [
      'Contrôle qualité de conformité technique des vannes, skids de mesure et bancs d\'essai.',
      'Suivi de câblage d\'instrumentation et test de boucle pour l\'installation d\'une torchère sur Mboundi (Eni Congo).',
      'Planification de chantier, contrôle qualité, conformité technique et reporting pour la construction de l\'Héliport Onshore Litchendjili.',
      'Élaboration de plannings sous MS Project, suivi budgétaire et reporting mensuel/hebdomadaire.',
      'Logistique, gestion des stocks et matériels de projets industriels.'
    ],
    skills: ['MS Project', 'P&ID', 'Gestion EPC', 'Instrumentation', 'Suivi Budgétaire']
  },
  {
    id: 2,
    period: 'Nov 2020 – Oct 2022',
    role: 'Informaticien & Formateur',
    company: 'Société T-ESOFT / CORAF',
    location: 'Pointe-Noire, Congo',
    description: 'Support technique, modélisation et digitalisation des processus de reporting.',
    tasks: [
      'Installation, configuration et maintenance du parc informatique et réseau.',
      'Digitalisation et modélisation des processus de gestion de données et reporting pour la CORAF.',
      'Formation et assistance technique des utilisateurs sur les applications internes.'
    ],
    skills: ['Réseaux IP', 'Bases de Données', 'Reporting', 'Formation']
  },
  {
    id: 3,
    period: 'Fév 2020 – Oct 2020',
    role: 'Stagiaire Informatique & Réseaux',
    company: 'Société Terascom',
    location: 'Pointe-Noire, Congo',
    description: 'Administration système et maintenance des infrastructures.',
    tasks: [
      'Administration des bases de données SQL et maintenance des serveurs.',
      'Support utilisateur et résolution des pannes matérielles et réseaux.',
      'Développement de scripts d\'automatisation interne.'
    ],
    skills: ['SQL', 'Linux/Windows Server', 'Maintenance IT', 'Python']
  },
  {
    id: 4,
    period: '2016 – 2017',
    role: 'Stagiaire Concepteur Électronique & Automatisme',
    company: 'Electronic Programable',
    location: 'Pointe-Noire, Congo',
    description: 'Conception de modules électroniques et programmation d\'automates.',
    tasks: [
      'Conception de cartes électroniques et circuits intégrés.',
      'Développement d\'un module embarqué de commande à distance via Bluetooth.'
    ],
    skills: ['C/C++', 'Microcontrôleurs', 'Bluetooth', 'Électronique']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Parcours Professionnel</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Expériences & Missions Industrielles
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Retracez mon parcours en gestion de projets EPC, automatisme et informatique industrielle
            </p>
          </div>
        </FadeIn>

        {/* Timeline des Expériences */}
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 100}>
              <div className="relative pl-8 md:pl-10 group">
                
                {/* Puce Lumineuse Timeline */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(141,255,105,0.5)]" />

                {/* Date affichée à gauche sur grand écran */}
                <div className="md:absolute md:-left-36 md:top-1.5 text-xs font-semibold text-primary/90 mb-2 md:mb-0 md:w-28 md:text-right flex items-center gap-1 md:justify-end">
                  <Calendar className="w-3.5 h-3.5 md:hidden" />
                  <span>{exp.period}</span>
                </div>

                {/* Carte d'Expérience */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300">
                  
                  {/* Header de la carte */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/10">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-white/70 mt-1">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-medium text-white/90">{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Résumé */}
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Liste des tâches / réalisations */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-2.5 text-sm text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges de Compétences */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;