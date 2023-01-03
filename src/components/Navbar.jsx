import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='w-[100%] h-[4rem] pt-2 gap-4 text-md font-semibold flex justify-center'>
            <li><a href="/">Home</a></li>
            <li><a href="/overview">Overview</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/screenshots">Screenshots</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </div>
  )
}

export default Navbar