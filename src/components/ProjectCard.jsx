function ProjectCard({ project }) {
  const { name, type, description, tags, image, liveUrl, sourceUrl, status } = project;

  if (!image) {
    return (
      <article className="card-surface flex flex-col justify-between rounded-[1.6rem] p-6" style={{
        background: 'linear-gradient(145deg, rgba(60, 166, 255, 0.16), rgba(255, 209, 102, 0.08)), rgb(10 18 34 / 0.78)',
      }}>
        <div>
          <p className="eyebrow mb-2">{type}</p>
          <h3 className="font-display text-xl text-ink">{name}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line/[0.18] bg-white/5 px-3 py-1 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{status}</p>
            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-warm hover:underline">
                View code
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card-surface overflow-hidden rounded-[1.6rem] transition hover:-translate-y-1">
      <img src={image} alt={`${name} preview`} className="h-44 w-full object-cover" />
      <div className="p-5">
        <p className="eyebrow mb-1">{type}</p>
        <h3 className="font-display text-xl text-ink">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line/[0.18] bg-white/5 px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{status}</p>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-warm hover:underline">
              Visit site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
