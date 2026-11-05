import React from 'react'

import { useInView } from './motion.js'

/* One line drawing per service, in the same thin gold stroke. Each path draws
   itself the first time the figure scrolls into view. Purely illustrative, so
   hidden from screen readers. */

const ART = {
  websites: (
    <>
      <path d="M40 40h400v280H40z" />
      <path d="M40 76h400" />
      <path d="M64 112h170M64 132h120" />
      <path d="M64 164h160M64 180h140M64 196h150" />
      <path d="M64 224h72v26H64z" />
      <path d="M264 104h152v146H264zM264 104l152 146M416 104L264 250" />
      <path d="M64 272h104v32H64zM188 272h104v32H188zM312 272h104v32H312z" />
    </>
  ),
  'web-apps': (
    <>
      <path d="M40 40h400v280H40z" />
      <path d="M40 40h92v280H40z" />
      <path d="M58 72h56M58 98h44M58 124h50M58 150h38" />
      <path d="M156 72h120" />
      <path d="M156 100h84v56h-84zM256 100h84v56h-84zM356 100h68v56h-68z" />
      <path d="M156 296h268" />
      <path d="M156 280l40-30 40 10 50-52 50 16 50-44 38 10" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M40 40h400v280H40z" />
      <path d="M40 76h400" />
      <path d="M60 58h110" />
      <path d="M356 56h14l10 28h46l8-24h-70" />
      <path d="M56 112h104v104H56zM188 112h104v104H188zM320 112h104v104H320z" />
      <path d="M56 236h66M56 252h38M188 236h66M188 252h38M320 236h66M320 252h38" />
      <path d="M56 276h104v28H56zM188 276h104v28H188zM320 276h104v28H320z" />
    </>
  ),
  design: (
    <>
      <path d="M40 40v280h400" />
      <path d="M40 80h10M40 120h10M40 160h10M40 200h10M40 240h10M40 280h10" />
      <path d="M80 320v-10M120 320v-10M160 320v-10M200 320v-10M240 320v-10M280 320v-10M320 320v-10M360 320v-10M400 320v-10" />
      <path d="M72 250C150 60 270 300 410 96" />
      <path d="M72 250L150 70M410 96L270 290" />
      <path d="M300 168h112v84H300z" />
      <path d="M296 164h8v8h-8zM408 164h8v8h-8zM296 248h8v8h-8zM408 248h8v8h-8z" />
    </>
  ),
  seo: (
    <>
      <path d="M96 170a84 84 0 1 0 168 0a84 84 0 1 0-168 0" />
      <path d="M244 230l76 76" />
      <path d="M130 212l32-36 30 16 38-52" />
      <path d="M342 92h92M342 112h64M342 156h92M342 176h56M342 220h92M342 240h72" />
      <path d="M326 88h6v6h-6zM326 152h6v6h-6zM326 216h6v6h-6z" />
    </>
  ),
  backend: (
    <>
      <path d="M40 140h92v72H40z" />
      <path d="M60 164h52M60 184h34" />
      <path d="M196 100h92v152h-92z" />
      <path d="M214 130h56M214 158h56M214 186h56M214 214h36" />
      <path d="M350 150a45 16 0 0 1 90 0v78a45 16 0 0 1-90 0z" />
      <path d="M350 150a45 16 0 0 0 90 0M350 190a45 16 0 0 0 90 0" />
      <path d="M132 176h64M288 176h62" />
      <path d="M186 170l10 6-10 6M340 170l10 6-10 6" />
      <path d="M242 252v34M180 252v20l-30 14M304 252v20l30 14" />
      <path d="M130 292a20 20 0 1 0 40 0a20 20 0 1 0-40 0M222 304a20 20 0 1 0 40 0a20 20 0 1 0-40 0M314 292a20 20 0 1 0 40 0a20 20 0 1 0-40 0" />
    </>
  ),
}

export default function ServiceArt({ id }) {
  const [ref, inView] = useInView({ threshold: 0.25 })
  const art = ART[id]
  if (!art) return null

  // every path gets a draw order so the strokes stagger in
  let order = 0
  const drawn = React.Children.map(art.props.children, (child) => {
    const key = order
    order += 1
    return React.cloneElement(child, {
      className: 'ed-draw',
      pathLength: 1,
      style: { '--k': key },
    })
  })

  return (
    <figure ref={ref} className={`ed-art${inView ? ' is-in' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 480 360" role="presentation" focusable="false">
        {drawn}
      </svg>
    </figure>
  )
}
