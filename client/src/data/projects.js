/* =========================================================
   PROJECTS

   One record per portfolio site. Everything written here comes from what is
   visible on the live sites (headlines, navigation, buttons, sections) and from
   inspecting how each one is built. Results, timelines, traffic or revenue
   numbers and client quotes are deliberately NOT included until real ones exist.

   NOTE: the homepage hero (components/public/PortfolioHero.jsx) reads
   `projects` and `imageProps` from pages/Work.jsx, which re-exports them from
   here. It looks projects up by `title` and uses `image` and `link`, so keep
   those three fields and their meaning stable.
========================================================= */

// Entries either name an optimised set ('work-eclat' -> -640/-1200 JPEGs)
// or point straight at an image file ('/vanta.webp').
export const imageProps = (image = '') =>
  /\.(webp|png|jpe?g|avif)$/i.test(image)
    ? { src: image }
    : {
        src: `/${image}-1200.jpg`,
        srcSet: `/${image}-640.jpg 640w, /${image}-1200.jpg 1200w`,
      }

export const projects = [
  {
    slug: 'ivp-asbl',
    title: 'IVP ASBL',
    longTitle: 'IVP ASBL × MF Médical',
    category: 'Web development',
    image: '/ivp.webp',
    focus: '50% 40%',
    link: 'https://ivp-asbl.netlify.app/',
    caseStudy: 'ivp-asbl',
    description:
      'A French-language website for a non-profit caring for people in need, alongside its MF Médical beauty services, with appointment and donation buttons.',
    tags: ['Responsive', 'Donations', 'Case study'],
    stack: ['React', 'Vite'],
    scope: ['Responsive', 'Donations', 'French'],
    tagline: 'Two commitments, one calling: to care.',
    taglineNote:
      'From the site’s own French headline, “Deux engagements, une même vocation : prendre soin.”',
    summary:
      'A French-language website that brings a non-profit caring for people in need and a beauty and wellbeing practice together under one roof.',
    facts: [
      { label: 'For', value: 'IVP ASBL (non-profit) and MF Médical' },
      { label: 'Language', value: 'French' },
      { label: 'Audiences', value: 'Supporters, people in need and beauty clients' },
      { label: 'Main actions', value: 'Book an appointment · Make a donation' },
    ],
    challenge: [
      'IVP cares for the most vulnerable, free of charge: orphans, street children, widows, older people and people with disabilities. MF Médical offers aesthetic care and wellbeing. They are two different missions with two different audiences, and they share one nurse’s heart.',
      'The website had to let both stand on their own without one overshadowing the other, and still make the two actions that matter obvious: book an appointment, or give.',
    ],
    solution: [
      {
        title: 'A hero that holds both worlds',
        text: 'The opening screen is split by a thin gold diagonal. The charity’s work in the field sits on one side and a calm beauty portrait on the other, so visitors see both missions in one glance.',
      },
      {
        title: 'Type that carries the story',
        text: 'A large serif headline with an italic second line gives the page warmth and dignity, and the short paragraph beneath explains each mission in plain French.',
      },
      {
        title: 'Colour taken from the logo',
        text: 'The plum and red buttons come from the heart-and-cross logo, so the site feels like the organisation rather than a template.',
      },
      {
        title: 'Two actions, always in reach',
        text: '“Prendre rendez-vous” and “Faire un don” stay in the header, so the two things a visitor might want to do are never more than a click away.',
      },
    ],
    outcome:
      'A live, responsive French-language site where two organisations share one home and the two key actions are always visible.',
    shipped: [
      'Home',
      'IVP · About',
      'Aesthetic care (Soins esthétiques)',
      'Gallery',
      'Contact',
      'Appointment and donation buttons',
    ],
  },

  {
    slug: 'vanta-detail-studio',
    title: 'Vanta Detail Studio',
    category: 'Web design',
    image: '/vanta.webp',
    focus: '60% 50%',
    link: 'https://ourcardetailing.netlify.app/',
    caseStudy: 'vanta-detail-studio',
    description:
      'A bold, cinematic website for a car detailing studio, with craft, results, packages and a gallery, and a clear Book now button.',
    tags: ['Responsive', 'Cinematic', 'Case study'],
    stack: ['React', 'Vite'],
    scope: ['Responsive', 'Cinematic', 'Booking'],
    tagline: 'Every detail. Perfected.',
    taglineNote: 'The headline that opens the site.',
    summary:
      'A dark, cinematic website for a car detailing studio, built to make the quality of the work visible from the first second.',
    facts: [
      { label: 'For', value: 'Vanta Detail Studio' },
      { label: 'Type', value: 'Car detailing studio' },
      { label: 'Language', value: 'English' },
      { label: 'Main actions', value: 'Book now · Call' },
    ],
    challenge: [
      'Detailing is a premium service, and a premium service has to look premium before anyone has read a word. Customers need to see the craft, understand the process and compare the packages with confidence.',
      'The site needed to turn “we clean cars” into “we restore the feeling of driving something extraordinary”, the line the page opens with.',
    ],
    solution: [
      {
        title: 'Footage first',
        text: 'The page opens full-bleed on a close-up of an interior being cleaned, with the headline “Every detail. Perfected.” set over it in a heavy, wide sans-serif.',
      },
      {
        title: 'A black-and-white palette',
        text: 'Restrained monochrome lets the photography and footage do the talking and gives the studio a high-end, showroom feel.',
      },
      {
        title: 'Scroll to restore',
        text: 'A small “scroll to restore” counter invites visitors to scroll through the transformation instead of just reading about it.',
      },
      {
        title: 'A clear path to booking',
        text: 'The header gives six sections (Craft, Services, Results, Process, Packages, Gallery) plus a bold “Book now” button and a phone shortcut.',
      },
    ],
    outcome:
      'A live, responsive site that opens on the craft itself and gives customers a clear route to booking.',
    shipped: [
      'Craft',
      'Services',
      'Results',
      'Process',
      'Packages',
      'Gallery',
      'Book now button and phone shortcut',
    ],
  },

  {
    slug: 'yvng-saints',
    title: 'YVNG Saints',
    category: 'Web development',
    image: 'work-yvng',
    focus: '18% 50%',
    link: 'https://youngsaints.netlify.app/',
    caseStudy: 'yvng-saints',
    description:
      'YVNG Saints brings faith and contemporary streetwear together in pieces made to be seen, felt and lived in.',
    tags: ['React', 'Responsive', 'SEO'],
    stack: ['React'],
    scope: ['Storefront', 'Responsive', 'SEO'],
    tagline: 'Wear your faith. Own your story.',
    taglineNote: 'The headline that opens the site.',
    summary:
      'A dark, gold-accented storefront for a faith-and-streetwear brand, pairing a shoppable collection with the story behind it.',
    facts: [
      { label: 'Type', value: 'Streetwear brand storefront' },
      { label: 'Language', value: 'English' },
      { label: 'Main actions', value: 'Shop the collection · Discover our story' },
      { label: 'Sections', value: 'Collection · Story · Mission · Vision' },
    ],
    challenge: [
      'YVNG Saints brings faith and contemporary streetwear together. The brand needed a place that could sell its pieces and still say why it exists.',
      'The site had to feel like streetwear first (confident, dark, modern) while giving the mission, vision and founding story room to land.',
    ],
    solution: [
      {
        title: 'A headline with a point of view',
        text: 'The page opens on “Wear your faith. Own your story.” in heavy sans-serif type, with the first line’s key word set in gold against a near-black hoodie.',
      },
      {
        title: 'A small collection, shown well',
        text: 'Three product lines (hoodies, caps and beanies) are listed with prices and a “View piece” action, with a cart in the header.',
      },
      {
        title: 'Story that sits beside the shop',
        text: 'Sections for mission, vision, history and the people behind the brand give it context without getting in the way of buying.',
      },
      {
        title: 'Gold on black',
        text: 'A restrained palette of near-black and warm gold keeps the pieces and the message in focus.',
      },
    ],
    outcome:
      'A live, responsive storefront where a visitor can browse the collection, open a piece and read the brand’s story in one place.',
    shipped: [
      'Home',
      'About',
      'Contact',
      'Collection with prices and “View piece” actions',
      'Cart',
      'Mission, vision and history',
    ],
  },

  {
    slug: 'eclat-cleaning-services',
    title: 'Eclat Cleaning Services',
    category: 'Brand & web',
    image: 'work-eclat',
    focus: '22% 50%',
    link: 'https://eclatservices.netlify.app/',
    caseStudy: 'eclat-cleaning-services',
    description:
      'Professional residential and commercial cleaning services designed to keep your space fresh, healthy, and spotless.',
    tags: ['Branding', 'Design', 'SEO'],
    stack: ['Next.js'],
    scope: ['Branding', 'Design', 'SEO'],
    tagline: 'A cleaner space. A better life.',
    taglineNote: 'The headline that opens the site.',
    summary:
      'A bright, clear website for a residential and commercial cleaning company, built to turn a visit into a free quote.',
    facts: [
      { label: 'Type', value: 'Cleaning company' },
      { label: 'Audiences', value: 'Households and businesses' },
      { label: 'Main actions', value: 'Get a free quote · Book a cleaning' },
      { label: 'Built with', value: 'Next.js' },
    ],
    challenge: [
      'Cleaning is a trust business: people let a stranger into their home or workplace. The website had to look dependable and make the next step obvious.',
      'It also had to speak to two audiences, households and businesses, without feeling like two different companies.',
    ],
    solution: [
      {
        title: 'A promise in the headline',
        text: '“A Cleaner Space. A Better Life.” leads the page over a photograph of a cleaning team at work, with the second line picking up the brand colour.',
      },
      {
        title: 'Reassurance up front',
        text: 'Beneath the buttons, three short badges (Professional Service, Reliable & Thorough, Residential & Commercial) answer a visitor’s first questions.',
      },
      {
        title: 'Plain service pages',
        text: 'Services are laid out as simple “what’s included” lists: regular home cleaning, kitchens and bathrooms, dusting and vacuuming, floors and surfaces.',
      },
      {
        title: 'Always one click from a quote',
        text: 'A “Book a Cleaning” button in the floating navigation and a “Get Your Free Quote” button in the hero keep the next step in reach.',
      },
    ],
    outcome:
      'A live, responsive site with a clear promise, plain service lists and a quote or booking button always in view.',
    shipped: [
      'Home',
      'About',
      'Services',
      'Pricing',
      'Contact',
      'Residential cleaning page',
      'Free quote and booking buttons',
    ],
  },

  {
    slug: 'royal-memoria',
    title: 'Royal Memoria',
    category: 'Web development',
    image: 'work-royal',
    focus: '90% 60%',
    link: 'https://royalmemoria.netlify.app/',
    caseStudy: 'royal-memoria',
    description:
      'Royal Memoria is a multinational corporation with a diverse portfolio of subsidiaries operating in multiple countries.',
    tags: ['React', 'Responsive', 'SEO'],
    stack: ['React'],
    scope: ['Corporate', 'Responsive', 'SEO'],
    tagline: 'A company built on vision, diversity and excellence.',
    taglineNote: 'From the site’s “Who we are” section.',
    summary:
      'A dark, regal corporate website that presents a multinational group and its subsidiaries as one company with one vision.',
    facts: [
      { label: 'Type', value: 'Multinational group' },
      { label: 'Markets', value: 'Canada · South Africa · DR Congo' },
      { label: 'Language', value: 'English' },
      { label: 'Main action', value: 'Discover our story' },
    ],
    challenge: [
      'Royal Memoria is a multinational group with subsidiaries across Canada, South Africa and DR Congo. Each serves a different market, so the group needed one voice that could hold them together.',
      'The site had to explain why that diversity is an advantage, and give the group an identity that feels established.',
    ],
    solution: [
      {
        title: 'A crown for a mark',
        text: 'The opening screen sets a gold crown against near-black, with a serif wordmark and a single “Discover our story” action.',
      },
      {
        title: 'Numbered chapters',
        text: 'Who we are, our difference, our expertise and our philosophy are told as numbered sections, so a long story reads as a clear sequence.',
      },
      {
        title: 'Subsidiaries in one place',
        text: 'A “Subsidiaries” menu in the navigation gives each company in the group a home inside one site.',
      },
      {
        title: 'A philosophy, spelled out',
        text: 'Six values (creativity, strategy, innovation, excellence, collaboration and adaptability) close the story as a simple numbered list.',
      },
    ],
    outcome:
      'A live, responsive corporate site that presents a multi-country group as a single, confident brand.',
    shipped: [
      'Home',
      'About',
      'Subsidiaries menu',
      'Contact',
      'Charity',
      'Who we are, our difference, our expertise, our philosophy',
    ],
  },

  {
    slug: 'maison-amara',
    title: 'Maison Amara',
    category: 'Web design',
    image: '/maisonamara.webp',
    focus: '14% 50%',
    link: 'https://ourbeautystudio.netlify.app/',
    caseStudy: 'maison-amara',
    description:
      'A cinematic website for a luxury makeup atelier, pairing elegant typography with full-screen film and a simple booking flow.',
    tags: ['Responsive', 'Booking', 'SEO'],
    stack: ['Vite', 'Scroll-driven film'],
    scope: ['Responsive', 'Booking', 'SEO'],
    tagline: 'Beauty is in the details.',
    taglineNote: 'The headline that opens the site.',
    summary:
      'A cinematic website for a luxury makeup atelier that tells its story as a short film you move through with the scroll.',
    facts: [
      { label: 'Type', value: 'Makeup atelier' },
      { label: 'Language', value: 'English' },
      { label: 'Main actions', value: 'Book now · Request this service' },
      { label: 'Imagery', value: 'Licensed stock, shown for illustration' },
    ],
    challenge: [
      'Makeup artistry is visual and personal. The site had to show the care behind a look before a visitor read a word, and make booking feel as unhurried as the service itself.',
    ],
    solution: [
      {
        title: 'A film in four chapters',
        text: 'A short film follows a makeup application as you scroll (the preparation, the artistry, the transformation and the reveal), so the process is something visitors watch.',
      },
      {
        title: 'Elegant type, warm tones',
        text: 'A high-contrast serif and a warm gold on deep brown keep the atelier feeling luxurious and calm.',
      },
      {
        title: 'Eight services, clearly listed',
        text: 'Each service shows its starting price and duration with a “Request this service” action, so visitors can choose without guessing.',
      },
      {
        title: 'Considered details',
        text: 'A skip-to-content link, a loading state for the film and a persistent “Book now” button keep the experience usable as well as beautiful.',
      },
    ],
    outcome:
      'A live, responsive site that lets visitors watch the craft, compare eight services and request one in a click.',
    shipped: [
      'Home',
      'Services',
      'Gallery',
      'About',
      'Contact',
      'Eight services with price and duration',
      'Book now and request-a-service actions',
    ],
  },

  {
    slug: 'vitagrace-cleaning',
    title: 'VitaGrace Cleaning Services',
    category: 'Web design',
    image: '/vitagrace.webp',
    focus: '55% 55%',
    link: 'https://ourcleaningdemo.netlify.app/',
    caseStudy: 'vitagrace-cleaning',
    description:
      'A fresh, trustworthy website for a cleaning company, with a before-and-after story, service details and quick quote requests.',
    tags: ['Responsive', 'Lead Generation', 'SEO'],
    stack: ['React', 'Vite'],
    scope: ['Responsive', 'Lead generation', 'SEO'],
    tagline: 'Come home to clean.',
    taglineNote: 'The line the scroll story ends on.',
    summary:
      'A fresh, trustworthy website for a cleaning company that tells its story as a before-and-after, with quote requests close at hand.',
    facts: [
      { label: 'Type', value: 'Cleaning company' },
      { label: 'Language', value: 'English' },
      { label: 'Main actions', value: 'Get your free quote · Explore our services' },
      { label: 'Signature', value: 'A scroll-driven cleaning scene' },
    ],
    challenge: [
      'Most people looking for a cleaner are busy and a little overwhelmed. The site had to meet that feeling first, then offer relief in a single step.',
    ],
    solution: [
      {
        title: 'A story told by scrolling',
        text: 'The opening scene starts in a messy kitchen (“Life gets messy”) and cleans itself as the visitor scrolls, ending on “Come home to clean.”',
      },
      {
        title: 'Respect for the visitor',
        text: 'A “Skip the cleaning animation” control lets anyone go straight to the content.',
      },
      {
        title: 'Two clear next steps',
        text: '“Get your free quote” and “Explore our services” sit under the headline, with a “Get a quote” button in the header.',
      },
      {
        title: 'Fresh, calm colour',
        text: 'Deep green on a bright, light palette reads as clean, natural and dependable.',
      },
    ],
    outcome:
      'A live, responsive site that shows the result of a clean before it asks for the enquiry, and never forces the animation on anyone.',
    shipped: [
      'Home',
      'About',
      'Services',
      'Gallery',
      'Contact',
      'Scroll-driven cleaning scene',
      'Free quote request',
    ],
  },

  {
    slug: 'crown-atelier',
    title: 'Crown Atelier',
    category: 'Web design',
    image: '/crownatelier.webp',
    focus: '74% 35%',
    link: 'https://ourhairstudio.netlify.app/',
    caseStudy: 'crown-atelier',
    description:
      'A warm, editorial website for a hair studio, showcasing services, client transformations and an easy path to booking.',
    tags: ['Responsive', 'Booking', 'SEO'],
    stack: ['React', 'Vite'],
    scope: ['Responsive', 'Booking', 'SEO'],
    tagline: 'Your hair. Your crown.',
    taglineNote: 'The headline that opens the site.',
    summary:
      'A warm, editorial website for a braiding and hair studio, built around a scroll story, seven signature styles and an easy path to booking.',
    facts: [
      { label: 'Type', value: 'Braiding and hair studio' },
      { label: 'Language', value: 'English' },
      { label: 'Main actions', value: 'Book your transformation · Explore our styles' },
      { label: 'Extras', value: 'Style quiz · Before-and-after gallery' },
    ],
    challenge: [
      'A hairstyle is a few hours of care and a big decision. The site had to help visitors picture the result, choose a style and book without friction.',
    ],
    solution: [
      {
        title: 'A scroll story for a transformation',
        text: 'The opening follows natural hair, the careful craft of braiding and the finished look as you scroll, ending on “Your chair is waiting.”',
      },
      {
        title: 'Seven signature styles',
        text: 'Each style lists a starting price, how long it takes and its own “Book” action, so choosing and booking happen together.',
      },
      {
        title: 'A style quiz',
        text: '“Not sure which style is you?” Four quick questions point visitors to a match.',
      },
      {
        title: 'Proof in before-and-afters',
        text: 'A transformations section lets the work speak for itself.',
      },
    ],
    outcome:
      'A live, responsive site that moves a visitor from “I like that look” to a booked chair in a few clicks.',
    shipped: [
      'Home',
      'About',
      'Services',
      'Transformations',
      'Gallery',
      'FAQ',
      'Seven styles with prices and durations',
      'Style quiz',
    ],
  },
]

/* The order the projects are presented in on the site (strongest first). */
const SHOWCASE_ORDER = [
  'vanta-detail-studio',
  'yvng-saints',
  'royal-memoria',
  'crown-atelier',
  'ivp-asbl',
  'maison-amara',
  'eclat-cleaning-services',
  'vitagrace-cleaning',
]

export const findProject = (slug) =>
  projects.find((project) => project.slug === slug)

export const showcase = SHOWCASE_ORDER.map(findProject).filter(Boolean)

export const siteHost = (link = '') =>
  link.replace(/^https?:\/\//, '').replace(/\/$/, '')
