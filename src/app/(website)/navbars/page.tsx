import CenteredLogoNav from '@/components/Navbars/CenteredLogoNav'
import { MinimalNav } from '@/components/Navbars/Minimal-nav'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full space-y-5 mx-auto max-w-7xl'>
<MinimalNav/>
<CenteredLogoNav/>
    </div>
  )
}

export default page
