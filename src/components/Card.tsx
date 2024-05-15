import React from 'react'
import Logo from './Logo'

interface Props {
    children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <>
        <div className="bg-page-background bg-cover bg-no-repeat bg-center h-screen flex flex-col">

            <main className="bg-black bg-opacity-50 backdrop-blur flex flex-1">
                <div className='flex flex-col m-auto min-w-4/12 w-6/12 px-12 py-9 bg-white rounded-3xl'>

                    <Logo style='mx-auto mb-3'/>
                    {children}
                    
                </div>

            </main>

        </div>
    </>
  )
}
