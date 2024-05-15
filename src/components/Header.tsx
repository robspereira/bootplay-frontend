import Logo from './Logo'

interface Props {
  children?: React.ReactNode
}

const Header = ({ children }: Props) => {
  return (
    <>
      <header className='bg-white/30 backdrop-blur-sm flex'>    
          <div className='mx-12 top-0 py-2 px-6 sticky w-full flex items-center justify-between border-gray-500'>
              <Logo>BootPlay</Logo>
              {children}                       
          </div>
      </header>
    </>
  )
}

export default Header