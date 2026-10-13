import React from 'react';
import { CheckCircle, Building2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-black/40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/15 rounded-full text-xs font-medium text-primary">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Client badge if present */}
          {project.client && (
            <div className="flex items-center gap-2 text-xs text-white/50 mb-3">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>{project.client}</span>
            </div>
          )}

          <p className="text-sm text-white/70 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Metric / Result Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-primary font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{project.metrics}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;