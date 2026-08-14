import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const metrics = [
  { value: '6', label: 'Sites shipped or rebuilt' },
  { value: '2', label: 'Full-stack rebuilds with real auth and databases' },
  { value: 'AWS', label: 'Lambda, API Gateway, and IAM - hands-on' },
];

const focusAreas = [
  {
    title: 'Responsive frontend development',
    copy: 'Interfaces that hold up across devices, built with attention to layout, spacing, and real content.',
  },
  {
    title: 'Business site delivery',
    copy: 'Client-facing sites shipped end to end - from brand rebuild to launch-ready deploy.',
  },
  {
    title: 'Full-stack rebuilds',
    copy: 'Turning fragile projects into ones with real authentication, secured databases, and clean architecture.',
  },
  {
    title: 'AWS architecture fundamentals',
    copy: 'Growing hands-on with Lambda, API Gateway, IAM, and static deployment patterns through real projects.',
  },
];

const roadmap = [
  { step: '01', title: 'Deploy the InternNET assistant', copy: 'Wire the AI assistant Lambda to a live OpenAI key and API Gateway route.' },
  { step: '02', title: 'Document architecture decisions', copy: 'Write up the tradeoffs behind each AWS deployment as case studies.' },
  { step: '03', title: 'Take on more client rebuilds', copy: 'Keep applying the same audit-first, security-conscious approach to new projects.' },
  { step: '04', title: 'Deepen AWS knowledge', copy: 'Structured study alongside real deployments, not just tutorials.' },
];

const collabTags = ['React', 'Node.js', 'AWS Lambda', 'Supabase', 'DynamoDB', 'Tailwind CSS'];

function Home() {
  return (
    <>
      <section className="shell section-space">
        <div className="grid items-center gap-9 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow">Web development - cloud in progress</p>
            <h1 className="max-w-[17ch] font-display text-4xl leading-tight sm:text-6xl">
              Building practical, secure web products - end to end.
            </h1>
            <p className="mt-6 max-w-[62ch] text-base leading-7 text-muted">
              I'm Evelyn Victor, a web developer. I build responsive business sites, rebuild fragile ones into
              something secure and maintainable, and I'm growing into AWS cloud architecture one deployed
              project at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="button-primary">View my work</a>
              <Link to="/resume" className="button-secondary">View resume</Link>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <li key={metric.label} className="card-surface rounded-2xl p-5">
                  <strong className="block text-lg text-ink">{metric.value}</strong>
                  <span className="text-sm leading-6 text-muted">{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative grid gap-5">
            <div className="card-surface ml-auto max-w-[420px] overflow-hidden rounded-[2rem]">
              <img
                src="/media/portrait.jpg"
                alt="Portrait of Evelyn Victor"
                className="aspect-[4/5] h-full min-h-[360px] w-full object-cover"
              />
            </div>
            <div className="card-surface ml-4 -mt-16 max-w-[320px] rounded-[1.5rem] p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Currently</p>
              <p className="font-display text-xl">Building on AWS</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Documenting architecture decisions and deployment tradeoffs as I go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="shell section-space">
        <div className="mb-8 max-w-[24ch]">
          <p className="eyebrow mb-2">About</p>
          <h2 className="font-display text-3xl sm:text-4xl">About me</h2>
        </div>
        <div className="card-surface rounded-2xl p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            I'm Evelyn Victor, a web developer. I build responsive business sites, rebuild fragile ones into
            something secure and maintainable, and I'm growing into AWS cloud architecture one deployed
            project at a time.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            My work spans small business sites - beauty brands, cleaning services, restaurants - through to
            full-stack rebuilds with real authentication, secured databases, and production AWS
            infrastructure. Each project starts the same way: an audit first, so I understand what's actually
            there before I change anything.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            I care about the parts that don't show up in a screenshot - whether a login actually resists
            tampering, whether a database is locked down the way it should be, whether the site still holds
            up after I've moved on. Technical soundness and a clean user experience aren't separate goals to
            me; the best work does both at once.
          </p>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <div key={area.title} className="card-surface rounded-2xl p-5">
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-[#06111f]"
                style={{ background: 'linear-gradient(135deg, rgb(255 209 102) 0%, rgb(119 208 255) 100%)' }}
              >
                <span className="font-display text-sm font-bold">{area.title.charAt(0)}</span>
              </div>
              <h3 className="mb-2 text-[1.05rem] text-ink">{area.title}</h3>
              <p className="text-sm leading-6 text-muted">{area.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="shell section-space">
        <div className="mb-8 max-w-[24ch]">
          <p className="eyebrow mb-2">Selected work</p>
          <h2 className="font-display text-3xl sm:text-4xl">Projects</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="architecture" className="shell section-space">
        <div className="mb-8 max-w-[24ch]">
          <p className="eyebrow mb-2">Cloud work</p>
          <h2 className="font-display text-3xl sm:text-4xl">Architecture in practice</h2>
        </div>
        <div className="card-surface rounded-[1.8rem] p-6 sm:p-8">
          <p className="max-w-[64ch] text-sm leading-7 text-muted">
            Two deployment patterns so far: a static frontend served through Route 53, CloudFront, and a
            private S3 origin protected with Origin Access Control - and a serverless backend pattern using
            Lambda, API Gateway, and DynamoDB for Localis Prod, secured with custom HMAC-signed authentication.
          </p>
          <ul className="mt-5 grid gap-3 pl-5 text-sm leading-6 text-muted [&>li]:marker:text-warm" style={{ listStyle: 'disc' }}>
            <li>Route 53 for DNS, CloudFront for CDN edge caching and HTTPS</li>
            <li>S3 origin locked down with Origin Access Control - no public bucket access</li>
            <li>Lambda functions behind API Gateway HTTP APIs, least-privilege IAM roles</li>
            <li>DynamoDB for serverless data storage, no always-on database server</li>
          </ul>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-accent">Typical static deployment flow</p>
          <div
            className="mt-3 flex flex-wrap items-center gap-3 rounded-2xl border p-4 font-display text-base"
            style={{
              borderColor: 'rgba(119, 208, 255, 0.28)',
              background: 'linear-gradient(135deg, rgba(60, 166, 255, 0.18), rgba(255, 209, 102, 0.08))',
            }}
          >
            <span>S3 (private origin)</span>
            <span className="text-warm">&rarr;</span>
            <span>CloudFront (CDN + HTTPS)</span>
            <span className="text-warm">&rarr;</span>
            <span>Route 53 (DNS)</span>
          </div>
        </div>
      </section>

      <section className="shell pb-8">
        <div className="mb-8 max-w-[24ch]">
          <p className="eyebrow mb-2">What's next</p>
          <h2 className="font-display text-3xl sm:text-4xl">Roadmap</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item) => (
            <div key={item.step} className="card-surface rounded-2xl p-5">
              <span className="mb-3 inline-flex font-display text-2xl text-warm">{item.step}</span>
              <h3 className="mb-2 text-[1.05rem] text-ink">{item.title}</h3>
              <p className="text-sm leading-6 text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell pb-8">
        <div className="card-surface rounded-[1.75rem] p-6 sm:p-8">
          <p className="text-sm leading-7 text-muted">
            Comfortable working across the stack - from responsive UI to serverless backends to the
            infrastructure that ships them.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {collabTags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
