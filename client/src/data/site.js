/* =========================================================
   SITE CONTENT

   Shared copy for the home, services, about and contact pages. Contact
   details come from what was already on the site. No results, client counts
   or revenue figures appear here on purpose.
========================================================= */

import { packages } from './pricing.js'

export const contact = {
  email: 'contact@startupliftdev.com',
  reply: 'Usually within 24 hours',
  socials: [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@startupliftdev',
      href: 'https://www.instagram.com/startupliftdev',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'startupliftdev',
      href: 'https://www.facebook.com/startupliftdev',
    },
  ],
}

/* ---------- services ---------- */

export const services = [
  {
    id: 'websites',
    number: '01',
    title: 'Website Design & Development',
    headline: 'A first impression worth keeping.',
    lead: 'Your website is often the first thing a customer sees. I design and build responsive, fast websites around your brand, your customers and what the site has to do for you.',
    value:
      'Visitors decide in seconds whether to trust you. A clear, considered site turns that moment into enquiries, bookings and sales.',
    includes: [
      'Custom design built around your brand',
      'Responsive on every screen size',
      'Fast, semantic, accessible code',
      'On-page SEO foundations',
      'Launch and handover',
    ],
    stackLabel: 'Built with',
    stack: ['React', 'Next.js', 'Vite', 'HTML & CSS'],
  },
  {
    id: 'web-apps',
    number: '02',
    title: 'Full-Stack Web Applications',
    headline: 'Software shaped around how you actually work.',
    lead: 'Dashboards, portals and internal tools that replace spreadsheets and scattered apps, built front to back so the interface, the logic and the data fit together.',
    value:
      'The right tool saves hours every week, keeps your data in one place and lets your team move without waiting on anyone.',
    includes: [
      'Dashboards and admin panels',
      'User accounts, roles and permissions',
      'A secure API and database',
      'Reports and data views',
      'Deployment and documentation',
    ],
    stackLabel: 'Built with',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-commerce Development',
    headline: 'A storefront that makes buying feel easy.',
    lead: 'Product catalogues, carts and checkout flows designed to sell on a phone as comfortably as on a desktop, with your brand front and centre.',
    value:
      'Every extra step between a customer and the checkout costs you a sale. A calm, clear shop removes the friction.',
    includes: [
      'Product catalogue and collections',
      'Cart and checkout flow',
      'A mobile-first shopping experience',
      'Brand story and content pages',
      'Analytics that show what sells',
    ],
    stackLabel: 'Built with',
    stack: ['React', 'Next.js', 'Node.js', 'Google Analytics 4'],
  },
  {
    id: 'design',
    number: '04',
    title: 'UI/UX Design',
    headline: 'Interfaces people understand at a glance.',
    lead: 'Structure, typography, colour and motion worked out before a line of code is written, so the finished product is as clear to use as it is good to look at.',
    value:
      'Good design lowers the effort it takes to use your product. That is what makes people come back, and what makes them trust you.',
    includes: [
      'Page structure and user journeys',
      'Visual direction and typography',
      'Responsive layouts for every device',
      'Interaction and motion details',
      'Accessible colour and contrast',
    ],
    stackLabel: 'Disciplines',
    stack: ['Information architecture', 'Design systems', 'Typography', 'Motion'],
  },
  {
    id: 'seo',
    number: '05',
    title: 'SEO & Website Optimization',
    headline: 'Be found by the people already looking for you.',
    lead: 'Technical foundations, clean structure and steady improvements that help search engines understand your site, and help visitors find what they need quickly.',
    value:
      'A fast, well-structured site is easier to find and easier to use. Visibility is what makes the rest of your website worth having.',
    includes: [
      'Technical SEO and semantic structure',
      'Performance tuning',
      'Analytics and search monitoring',
      'Content and keyword guidance',
      'Monthly reporting on the SEO plan',
    ],
    stackLabel: 'Measured with',
    stack: ['Google Analytics 4', 'Microsoft Clarity', 'Search Console'],
  },
  {
    id: 'backend',
    number: '06',
    title: 'API Integration & Backend Development',
    headline: 'Systems that talk to each other.',
    lead: 'The part users never see but always feel: secure APIs, data models and integrations that connect your website to the services it depends on.',
    value:
      'Reliable plumbing means your forms, accounts and reports work every time, and can grow when your business does.',
    includes: [
      'REST API design and development',
      'Authentication with JWT and hashed passwords',
      'Database modelling in MongoDB',
      'Email and third-party integrations',
      'Validation, error handling and security basics',
    ],
    stackLabel: 'Built with',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Resend'],
  },
]

/* ---------- process ---------- */

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    text: 'We start with your business, your customers and what the website has to achieve. Good decisions later depend on getting this part right.',
    output: 'A clear brief',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    text: 'Pages, content, features and priorities are mapped before any design begins, so the build stays focused and nothing important is missed.',
    output: 'Structure and scope',
  },
  {
    number: '03',
    title: 'Design & Development',
    text: 'A look and feel shaped around your brand, built as fast, responsive, search-ready code that can grow with you.',
    output: 'A working site',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    text: 'Every screen is checked on phones, tablets and desktops. Performance, accessibility and SEO basics are tuned before anyone else sees it.',
    output: 'A polished release',
  },
  {
    number: '05',
    title: 'Launch & Support',
    text: 'Launch day, then the care that keeps it healthy: updates, backups, security and performance monitoring if you want them.',
    output: 'Live, and looked after',
  },
]

/* ---------- about ---------- */

export const principles = [
  {
    number: '01',
    label: 'Build',
    title: 'Build the digital foundation.',
    text: 'Turn your idea into a professional digital presence designed around your business and your customers.',
    tags: ['Website', 'E-commerce', 'Web applications', 'Landing pages'],
  },
  {
    number: '02',
    label: 'Grow',
    title: 'Get discovered and attract customers.',
    text: 'Build visibility, bring the right people to your business and turn attention into real opportunities.',
    tags: ['SEO', 'Traffic', 'Content', 'Analytics', 'Conversion'],
  },
  {
    number: '03',
    label: 'Own',
    title: 'Build something that belongs to you.',
    text: 'Create a business, brand and digital ecosystem that you control and can continue building for years to come.',
    tags: ['Your business', 'Your brand', 'Your customers', 'Your future'],
  },
]

export const journey = [
  {
    number: '01',
    title: 'Start with an idea',
    text: 'Every business begins somewhere. I help turn your idea into something real.',
  },
  {
    number: '02',
    title: 'Build the foundation',
    text: 'I create the technology, brand and digital presence your business needs to move forward.',
  },
  {
    number: '03',
    title: 'Create something you own',
    text: 'Your business, your brand, your customers and your digital assets become something you can build on for years.',
  },
]

export const philosophy = [
  {
    title: 'Built around your business',
    text: "I don't believe in one-size-fits-all solutions. Your website and digital tools are built around your goals, customers and business.",
  },
  {
    title: 'Designed for growth',
    text: 'I think beyond launch day. Your digital presence is built with SEO, scalability, performance and future growth in mind.',
  },
  {
    title: 'Technology + strategy',
    text: 'A great website is only part of the equation. I combine development, design, SEO and strategy to turn your digital presence into a business asset.',
  },
  {
    title: 'Your success matters',
    text: "My goal isn't simply to deliver a website and walk away. I want to help you build something that creates real opportunities.",
  },
]

/* ---------- FAQ (prices come straight from the packages) ---------- */

export const faqs = [
  {
    q: 'How much does a website cost?',
    a: `Essential websites run ${packages[0].price}, Growth is ${packages[1].price}, and Premium is custom priced. The right one depends on your pages, features and goals. Send the details and you will get a clear recommendation.`,
  },
  {
    q: 'What is included in a package?',
    a: 'Every package includes a responsive, mobile-friendly website with a basic SEO setup. Growth adds conversion-focused design and an SEO foundation, and Premium adds advanced functionality, custom integrations and priority support.',
  },
  {
    q: 'Do you help after the site is live?',
    a: 'Yes. The Care plan (from $15 a month) covers updates, backups, security and performance monitoring, minor content changes and technical support. SEO and Growth plans are available if you want help getting found.',
  },
  {
    q: 'How do we get started?',
    a: 'Tell me about your business and what you want to build by email or on social media. I usually reply within 24 hours.',
  },
]
