import React from 'react'

interface Props {
    children: React.ReactNode
    style?: string

}

export default function AlbumList({children, style}: Props) {
  return (
    <>
        <div className={`flex items-center justify-center gap-4 mt-20 ${style}`}>
            {children}        
        </div>
    </>
  )
}
