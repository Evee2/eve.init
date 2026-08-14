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
    status: 'In production',
  },
  {
    slug: 'internnet',
    name: 'InternNET',
    type: 'Full-stack rebuild',
    description:
      'Beginner-friendly internship and mentorship platform, rebuilt from scratch in React with Supabase auth and row-level security, and an AWS Lambda backend for the assistant.',
    tags: ['React', 'Supabase', 'RLS', 'AWS Lambda'],
    image: null,
    liveUrl: null,
    status: 'In progress',
  },
  {
    slug: 'queentee',
    name: 'Queentee',
    type: 'Business site',
    description:
      'Beauty, fashion, and wellness brand site with a WhatsApp-based booking flow. Actively evolving, so this preview may lag a step behind the live version.',
    tags: ['HTML/CSS/JS', 'WhatsApp ordering'],
    image: '/media/queentee.png',
    liveUrl: 'https://queentee-ng.netlify.app/',
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
    liveUrl: null,
    status: 'Live',
  },
  {
    slug: 'myke-visuals',
    name: 'Myke Visuals',
    type: 'Portfolio site',
    description: 'Photography portfolio for portraits, beauty, and wedding work, built around a dark, cinematic mood.',
    tags: ['HTML/CSS/JS'],
    image: '/media/myke-visuals.png',
    liveUrl: null,
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
