const coreStrengths = [
  ['Responsive frontend development', 'Business website delivery', 'Brand and digital refresh support', 'AI-assisted workflow support'],
  ['AWS architecture fundamentals', 'Static site deployment patterns', 'CDN and DNS concepts', 'Cost-aware cloud decision-making'],
];

const projects = [
  { name: 'Myke Visuals', copy: 'Responsive client website focused on polished visual presentation and smooth browsing.' },
  { name: 'Queentee Empire', copy: 'Business-facing website built around branding, product visibility, and cleaner engagement.' },
  { name: "D'Mayors Groove", copy: 'Creative portfolio build demonstrating layout judgment, styling consistency, and deployment readiness.' },
  { name: 'Localis Prod', copy: 'Full-stack business directory rebuild with custom authentication, AWS Lambda, and DynamoDB.' },
  { name: 'InternNET', copy: 'Internship and mentorship platform rebuilt in React with Supabase auth and row-level security.' },
  {
    name: 'Portfolio on AWS',
    copy: 'Static frontend deployment using Route 53, CloudFront, AWS Certificate Manager, and a private S3 origin protected with Origin Access Control.',
  },
];

function Resume() {
  return (
    <section className="shell section-space print:bg-white print:text-black">
      <div className="mb-6 flex justify-end print:hidden">
        <button type="button" onClick={() => window.print()} className="button-secondary">
          Print / save as PDF
        </button>
      </div>

      <div className="card-surface rounded-[1.75rem] p-6 sm:p-10 print:border-none print:bg-white print:p-0 print:shadow-none">
        <header className="border-b border-line/[0.18] pb-6">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">Evelyn Victor</h1>
          <p className="mt-1 font-semibold text-warm">Web Developer | Rebranding Support | Emerging Cloud Practitioner</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span>+1 602 338 8497</span>
            <span>victoreve378@gmail.com</span>
            <span>linkedin.com/in/eve-victor-b157aa200</span>
            <span>github.com/Evee2</span>
          </div>
        </header>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-accent">Professional summary</h2>
          <p className="text-sm leading-7 text-muted">
            Client-focused web developer with experience building responsive business websites, supporting
            digital refresh work, and using AI-assisted workflows to speed up content, research, and creative
            execution. Growing into AWS cloud architecture with a focus on secure delivery, scalability, and
            practical systems thinking.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-accent">Core strengths</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {coreStrengths.map((column, index) => (
              <ul key={index} className="space-y-2 pl-4 text-sm leading-6 text-muted" style={{ listStyle: 'disc' }}>
                {column.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-accent">Selected projects</h2>
          <ul className="space-y-2 pl-4 text-sm leading-6 text-muted" style={{ listStyle: 'disc' }}>
            {projects.map((project) => (
              <li key={project.name}>
                <strong className="text-ink">{project.name}:</strong> {project.copy}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.08em] text-accent">Current focus</h2>
          <p className="rounded-2xl border border-line/[0.18] bg-white/5 p-4 text-sm leading-7 text-muted">
            Building hands-on AWS experience through architecture study, deployment labs, and documented case
            studies that show service choices, tradeoffs, and implementation decisions.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Resume;
