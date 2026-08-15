// Real project previews. Images are copied into public/media/ from the
// existing screenshots on hand. Two projects (Localis Prod, InternNET)
// don't have a public live URL to screenshot yet, so they use the
// planned/in-progress card style instead of an image.
export const projects = [
  {
    slug: 'localis-prod',
    name: 'Localis Prod',
    type: 'Full-stack rebuild',
    description:
      'Business directory site rebuilt end to end: custom HMAC-signed authentication, AWS Lambda + API Gateway + DynamoDB backend, and a full security audit before launch.',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Custom auth'],
    image: null,
    liveUrl: null,
    sourceUrl: 'https://github.com/Evee2/localis-prod',
    status: 'In production',
  },
  {
    slug: 'internnet',
    name: 'InternNET',
    type: 'Full-stack rebuild',
    description:
      'Beginner-friendly internship and mentorship platform, rebuilt from scratch in React with Supabase auth, row-level security, and a full applications/dashboard flow.',
    tags: ['React', 'Supabase', 'RLS'],
    image: null,
    liveUrl: null,
    sourceUrl: 'https://github.com/Evee2/internNET',
    status: 'In production',
  },
  {
    slug: 'queentee',
    name: 'Queentee',
    type: 'Business site',
    description:
      'Beauty, fashion, and wellness brand site with appointment booking and kitchen ordering built in. Actively evolving, so this preview may lag a step behind the live version.',
    tags: ['HTML/CSS/JS', 'Booking system'],
    image: '/media/queentee.png',
    liveUrl: 'https://queentee-abj.netlify.app',
    status: 'Live · actively updating',
  },
  {
    slug: 'bio-janitorial',
    name: 'Bio Janitorial',
    type: 'Business site',
    description:
      'Green cleaning services site: rebranded palette to match the real logo, corrected service details, and added Spanish-language pages.',
    tags: ['HTML/CSS/JS', 'Bilingual'],
    image: '/media/bio-janitorial.png',
    liveUrl: 'https://bio-rebuild.netlify.app/',
    status: 'Live',
  },
  {
    slug: 'myke-visuals',
    name: 'Myke Visuals',
    type: 'Portfolio site',
    description: 'Photography portfolio for portraits, beauty, and wedding work, built around a dark, cinematic mood.',
    tags: ['HTML/CSS/JS'],
    image: '/media/myke-visuals.png',
    liveUrl: 'https://myke-visual.netlify.app',
    status: 'Live',
  },
  {
    slug: 'dmayors-groove',
    name: "D'Mayors Groove",
    type: 'Restaurant site',
    description: 'Restaurant site with a browsable online menu. Preview shown is the menu page rather than the homepage.',
    tags: ['HTML/CSS/JS'],
    image: '/media/dmayors-groove.png',
    liveUrl: null,
    status: 'Live',
  },
];
