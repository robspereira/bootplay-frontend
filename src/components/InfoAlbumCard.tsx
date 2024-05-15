import { AlbumModel } from '@/models/AlbumModel'
import React from 'react'

interface Props {

  album: AlbumModel 
  onClick?: any
  ident?: any

}


export default function InfoAlbumCard({ album, onClick, ident}: Props) {
  
  return (
      <>
      <div
          key={ident}
          className="relative bg-[image:var(--bg-card)] max-w-none flex-shrink-0 bg-cover bg-no-repeat w-60 h-[245px] shadow-2xl shadow-white/20 rounded-md hover:scale-110 transition"
          style={{'--bg-card': `url(${album.images[0].url})`} as React.CSSProperties}
          onClick={onClick}>
            
          <div className="flex flex-col backdrop-brightness-50 h-full p-9 cursor-pointer">
            <h1 className="font-bold text-white font-lato text-2xl items-center text-center">
              {album.name}
            </h1>
            <h1 className="font-bold text-white text-1xl mt-2 items-center text-center">
              {album.artists[0].name}
            </h1>
            <span className="absolute order-last bottom-0 font-lato font-bold right-0 p-4 text-xl text-white">
              R${album.value}
            </span>

          </div>
        </div>
      </>
  )
}
