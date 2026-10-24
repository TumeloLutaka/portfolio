import { useState } from 'react';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import Icon from './Icon';

type ProjectFilter = 'All work' | ProjectCategory;

const filters: ProjectFilter[] = ['All work', 'Websites', 'Apps & games'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All work');
  const visibleProjects = projects.filter((project) => activeFilter === 'All work' || project.category === activeFilter);

  return (
    <section className="work-section container" id="work" aria-labelledby="work-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="work-heading">Things I’ve <em>built.</em></h2>
        </div>
        <p className="section-intro">Websites, small experiments, and everything I’ve learned along the way. Take a look around.</p>
      </div>
      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button className="filter-button" key={filter} type="button" aria-pressed={activeFilter === filter} aria-controls="project-grid" onClick={() => setActiveFilter(filter)}>
              {filter} <span>{filter === 'All work' ? projects.length : projects.filter((project) => project.category === filter).length}</span>
            </button>
          ))}
        </div>
        <span className="project-count" aria-hidden="true">A selection of {String(projects.length).padStart(2, '0')} projects</span>
      </div>
      <p className="sr-only" role="status">Showing {visibleProjects.length} {activeFilter === 'All work' ? 'projects' : activeFilter.toLowerCase()}.</p>
      <div className="project-grid" id="project-grid">
        {visibleProjects.map((project) => (
          <article className={`project-card project-${project.id}`} key={project.id}>
            <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>
              <div className="browser-bar" aria-hidden="true">
                <span className="browser-dots"><i /><i /><i /></span>
                <span>{new URL(project.url).hostname}</span>
                <Icon />
              </div>
              <div className="project-image">
                <img src={`${import.meta.env.BASE_URL}images/projects/${project.image}`} alt={project.imageAlt} width="1280" height="720" loading="lazy" decoding="async" />
              </div>
            </a>
            <div className="project-details">
              <div className="project-title-row">
                <h3><a href={project.url} target="_blank" rel="noreferrer">{project.title}<span className="sr-only"> (opens in a new tab)</span> <Icon /></a></h3>
                <span className="project-number">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags" aria-label="Project technologies and type">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
