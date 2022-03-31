import React from 'react'

const Footer = ({ artist, linkArtist }) => {
  return (
    <p className='w-full md:w-1/2 2xl:w-1/3 mx-auto mt-16 py-5 text-3xl bg-gradient-to-r from-fuchsia-400/20 to-fuchsia-400/50 text-white text-center rounded-xl'>🎨 Art by: <a className='hover:underline hover:decoration-white' href={linkArtist} target="_blank" rel="noreferrer">{artist}</a></p>
  )
}

export default Footer