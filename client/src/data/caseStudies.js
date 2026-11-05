/* Every project now has its own case study page, so the case studies are the
   projects. The data lives in ./projects.js. */

import { findProject, showcase } from './projects.js'

export const caseStudies = showcase

export const findCaseStudy = (slug) => findProject(slug)
