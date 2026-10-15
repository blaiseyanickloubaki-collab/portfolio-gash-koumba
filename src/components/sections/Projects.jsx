import React from 'react';
import { Flame } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-bg overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Projets phares</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Réalisations sur projets EPC
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Deux projets représentatifs menés au sein de Rosetti Congo.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;