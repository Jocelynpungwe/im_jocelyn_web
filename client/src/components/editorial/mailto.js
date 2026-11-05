import { contact } from '../../data/site.js'

/* Ready-made mail links, so the subject and body are written in one place. */

const brief = [
  'Hi Jocelyn,',
  '',
  'I’d like to talk about a project.',
  '',
  'What I’m building:',
  'Who it’s for:',
  'When I’d like it live:',
  'Examples I like:',
  '',
].join('\n')

export const projectMailto = `mailto:${contact.email}?subject=${encodeURIComponent(
  'Project enquiry',
)}&body=${encodeURIComponent(brief)}`

export const enquiryMailto = (subject) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`
