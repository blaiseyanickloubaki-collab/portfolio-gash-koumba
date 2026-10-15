import React from 'react';
import * as Icons from 'lucide-react';

const ProjectCard = ({ project }) => {
  const BigIcon = Icons[project.icon] || Icons.Briefcase;

  return (
    <div className="relative bg-panel border border-line rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group h-full flex flex-col">
      {/* Bandeau (remplace l'image) */}
      <div
        className="relative h-[150px] border-b border-line overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 82% 22%, rgba(242,121,63,.22), transparent 55%), repeating-linear-gradient(90deg, transparent 0 27px, #1e2c41 27px 28px), repeating-linear-gradient(0deg, transparent 0 27px, #1e2c41 27px 28px), #0c1420',
        }}
      >
        <BigIcon
          className="absolute right-6 top-5 w-16 h-16 text-primary group-hover:scale-105 transition-transform duration-500"
          strokeWidth={1.3}
        />
        <div className="absolute left-6 bottom-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md border border-blue/25 bg-blue/10 text-[#d3e1f0]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="text-sm text-muted mb-5">{project.category}</div>

          <dl className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-3 mb-5">
            {[
              ['Contexte', project.context],
              ['Mon rôle', project.role],
              ['Livrables', project.deliverables],
            ].map(([label, text]) => (
              <React.Fragment key={label}>
                <dt className="text-xs tracking-wider uppercase text-primary font-semibold pt-0.5">{label}</dt>
                <dd className="text-sm text-white/75 leading-relaxed">{text}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-line">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-blue/10 border border-blue/25 rounded-md text-xs text-[#d3e1f0]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;