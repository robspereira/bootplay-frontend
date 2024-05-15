import React from 'react'

interface Props {
    children: React.ReactNode
}

export default function InfoCard({ children }: Props) {
  return (
        <>
        <div className='flex bg-white rounded-2xl drop-shadow-xl shadow-white w-72 p-4 m-4'>
            {children}
        </div>
        </>
  )
}