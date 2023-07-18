import Link from 'next/link'
import React from 'react'

import { links } from '@/utils/navbarData'


const Navbar = () => {
  return (
    <div>
      <Link href="/">VebShen</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar