const socials = [
  { label: 'GitHub', href: 'https://github.com/Evee2' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eve-victor-b157aa200' },
  { label: 'Email', href: 'mailto:victoreve378@gmail.com' },
];

function Footer() {
  return (
    <footer id="contact" className="shell pb-10">
      <div className="card-surface flex flex-col gap-6 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div>
          <h2 className="max-w-[26ch] font-display text-2xl text-ink sm:text-3xl">
            Let's build something that holds up.
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Open to new client work and collaborations - reach out any time.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="tag-pill">
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted">
        &copy; {new Date().getFullYear()} Evelyn Victor. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
