import { Button } from '@/components/Button'
import Logo from '@/components/Logo'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {

  const _navigate = useNavigate();

  return (
    <>
    <div className='bg-[#263238] bg-cover'>

      <header className='bg-white/30'>
        <div className='sticky backdrop-blur-md top-0 w-full flex'>
          <Logo style='mx-auto my-2'/>
          
        </div>
      </header>

      <div className='flex flex-row gap-1'>
          <div className='w-1/2'>
            <img src="src/assets/404.svg" alt=""/>

          </div>
          <div className='flex flex-col m-auto items-center w-4/12'>
            <img src="src/assets/complementary.svg"  />
            <h1 className='mx-auto text-white font-poppins font-bold text-3xl'>Você se encontra perdido no nada...</h1>
            <Button onClick={() => _navigate('/')} className='mt-4 text-white font-bold w-96 bg-main'>Me leve de volta!</Button>
            
          </div>

      </div>
    </div>
    </>
  )
}
