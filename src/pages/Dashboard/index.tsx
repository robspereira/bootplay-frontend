import Header from '@/components/Header'
import { Button } from '@/components/Button'
import AlbumCard from '@/components/AlbumCard'
import { FaUserCog, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import {  Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useAuth } from '@/hooks/UseAuth';
import { Link } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import { AlbumModel } from '@/models/AlbumModel';
import { album_api } from '@/services/apiService';
import { IoSearchOutline } from 'react-icons/io5';
import Footer from '@/components/Footer';

export default function Dashboard() {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(true);

  const { logout } = useAuth();

  useEffect(() => {    

    album_api.get('/albums/all?search=anitta')
    .then((resp) => {
        setAlbums(resp.data);
        setIsLoading(false);
    })


}, []);


  function handleSearch(event: FormEvent) {

    event.preventDefault();
    setIsLoading(true);
    
    album_api.get(`/albums/all?search=${search}`).then((resp) => {            
        setAlbums(resp.data);
        setIsLoading(false);
        setShow(false);
    })
}
  

  return (

    <div className='flex flex-col'>

      <header className='bg-dashboard-background bg-cover bg-no-repeat w-full flex-col flex-1'>
        <div className='bg-gradient-to-b from-transparent from-90% to-zinc-900'>

          <Header>
                <div className='px-12 my-auto flex gap-4'>
                    <Button className='text-white w-30 text-center font-poppins font-normal'><Link to='/collection'>Meus Discos</Link></Button>
                    <Button className='text-white w-30 text-center font-poppins font-normal'><Link to='/balance'>Carteira</Link></Button>
                    <Popover>
                      <PopoverTrigger>
                        <img src='src/assets/girl.png' className='h-12 w-12'></img>
                      </PopoverTrigger>

                      <PopoverContent className='w-50 bg-gray-200'>
                        <div className='text-zinc-700 text-lg font-lato font-semibold flex flex-col p-2'>
                          <div className='flex p-2 hover:bg-gray-50'>
                            <FaUserAlt /> <a href='#' className='ml-2'>Perfil</a>
                          </div>
                          <div className='flex p-2 hover:bg-gray-50'>
                            <FaUserCog /> <a href='#' className='ml-2'>Configurações</a>
                          </div>
                          <div className='flex p-2 hover:bg-gray-50'>
                            <FaSignOutAlt /> <Link to='/'><button onClick={() => logout()} className='ml-2'>Sair</button></Link>
                          </div>
                        </div>
                      </PopoverContent>                    
                    </Popover>
                </div> 
          </Header>

          <div className="py-40 ml-20  flex-none w-3/6">
              <h1 className="text-white text-6xl leading-[78px] mb-6 font-semibold font-poppins">A história da música não pode ser esquecida!</h1>
              <h3 className="leading-9 w-5/6 text-white text-3xl mb-6 font-normal font-poppins">Sucessos que marcaram o tempo!</h3>
          </div>

        </div>
      </header>

        
      <main className='bg-zinc-900 flex-col flex-1 items-center gap-4'>

        <form onSubmit={handleSearch}>
          <div className='w-[448px] p-4 ring-1 mt-10 rounded-2xl mx-auto items-center ring-zinc-300 h-14 flex flex-row'>            
            <input type='text' onChange={e => setSearch(e.target.value)} className='bg-zinc-900 w-[400px] text-xl font-lato font-bold text-white focus:outline-none'></input>
              <Button className='right' type='submit'>
                <IoSearchOutline
                size="25px"
                color="white"/>
              </Button>
            
          </div>
        </form>

          {isLoading && (
            <div className='flex flex-col h-96 mx-auto w-96'>
                <h1 className='text-3xl text-white mt-10 mx-auto font-bold font-lato'>Carregando álbuns...</h1>
                <img src="src/assets/Loading.svg" alt="Loading..." />            
            </div>
          )}

          <AlbumCard albums={albums} show={show}/>
      </main>

      <Footer/>

    </div>
    
  )
}
