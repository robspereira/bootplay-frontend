import React from 'react'

interface Props{
  style?: string;
  children?: React.ReactNode;
}

const Logo = ({ style, children }: Props) => {
  return (
    <div className={`${style} h-12 w-12 flex items-center`}>
        <img src="src/assets/Logo.svg" alt="logo" /> <a className='px-2 text-white'>{children}</a>
    </div>
  )
}

export default Logo