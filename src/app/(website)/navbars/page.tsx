import CenteredLogoNav from '@/components/Navbars/CenteredLogoNav'
import FlipHoverNav from '@/components/Navbars/FlipHoverNav'
import { MinimalNav } from '@/components/Navbars/Minimal-nav'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full space-y-5 mx-auto max-w-7xl p-4'>
<MinimalNav/>
<CenteredLogoNav/>
<FlipHoverNav/>
    </div>
  )
}

export default page
