// app/studio/[[...tool]]/page.tsx
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// 1) Force this page to be dynamically rendered at runtime
export const dynamic = 'force-dynamic'

// 2) Disable any caching or revalidation
export const revalidate = 0

export default function StudioPage() {
  return <NextStudio config={config} />
}
