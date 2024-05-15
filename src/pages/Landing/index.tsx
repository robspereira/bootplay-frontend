import Header from '../../components/Header'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
        <div className="bg-page-background bg-cover lg:bg-cover bg-no-repeat bg-center h-screen flex flex-col">
            <Header>
              <div className='px-4'>
                <Link to='/signin'>
                  <Button className='px-4 py-2 bg-zinc-900 text-white font-bold  w-40 text-center'>Entrar</Button>
                </Link>
                
                <Link to='/signup'> 
                  <Button className='px-4 py-2 bg-complementary w-40 font-bold text-center'>Inscrever-se</Button>
                </Link>
              </div> 
              
            </Header>

            <main className="backdrop-brightness-50 flex flex-1">
                <section className="pt-40 ml-20 flex-none w-1/3 lg:w-1/3">
                    <h1 className="text-white md:text-6xl text-3xl leading-3 md:leading-[78px] mb-6 font-semibold font-poppins">A história da música não pode ser esquecida!</h1>
                    <h3 className="leading-9 w-5/6 text-white  text-lg md:text-2xl mb-6 font-normal font-poppins">Crie já sua conta e curta os sucessos que marcaram os tempos no Vinil.</h3>
                    <Link to='/signup'>
                      <Button className='px-4 py-3 bg-complementary lg:w-2/3 w-1/3 text-zync-900 font-bold text-center'>Inscrever-se</Button>
                    </Link>
                </section>
            </main>
        </div>
    </>
    
  )
}
