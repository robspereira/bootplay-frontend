import Header from '@/components/Header'
import { Button } from '@/components/Button'
import { BiSolidDollarCircle, BiSolidAlbum } from "react-icons/bi"
import { FaUserCog, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import {  Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useAuth } from '@/hooks/UseAuth';
import { useEffect, useState } from 'react';
import { album_api } from '@/services/apiService';
import { AlbumCollectionModel } from '@/models/AlbumCollectionModel';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import InfoCard from '@/components/InfoCard';
import AlbumList from '@/components/AlbumList';
import Footer from '@/components/Footer';


export default function Collection() {

  const { logout } = useAuth();

  const [contextUserCollection, setContextUserCollection] = useState<AlbumCollectionModel[]>([]);
  const [contextAlbumInvestment, setContextAlbumInvestment] = useState(0)
  const [isEmpty, setIsEmpty] = useState(true);
  const _navigate = useNavigate();

  
  
  useEffect(() => {
    album_api.get('/albums/my-collection').then((resp) =>{    
        
        setIsEmpty(resp.data.length === 0)
        setContextUserCollection(resp.data);

        const totalInvestment = resp.data.reduce(
            (acc, cur) => acc + cur.value, 0
        ).toFixed(2);

        setContextAlbumInvestment(totalInvestment);

    })

  }, [])


  return (

    <div className='flex flex-col'>

      <div className='bg-colecao bg-cover bg-no-repeat w-full flex-col flex-1'>
        <div className='pb-4 bg-gradient-to-b from-transparent from-95% to-zinc-900'>


          <Header>
                <div className='px-12 my-auto flex gap-4'>
                    <Button disabled className='text-white w-30 text-center font-poppins font-bold'>Meus Discos</Button>
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
                            <FaSignOutAlt /> <Link to='/signin'><button onClick={logout}>Sair</button></Link>
                          </div>
                        </div>
                      </PopoverContent>                    
                    </Popover>
                </div> 
          </Header>
        
        <Button onClick={() => _navigate('/dashboard')}className='flex ml-4 mt-20 gap-2 bg-white font-bold hover:bg-zinc-100'>
          <FaArrowLeft
          size="25px"/>Voltar à loja
          </Button>

          <div className="mt-20 ml-20 pb-10 flex-none w-3/6">
                    <h1 className="text-white text-6xl leading-[78px] mb-6 font-semibold font-poppins">Meus discos</h1>              
                    <div className='flex gap-4 font-poppins font-semibold'>
                        <InfoCard>
                            <BiSolidAlbum size="50px"/>
                            <div className='ml-2'>
                                <h1 className='text-lg'>Total de Albums</h1>
                                <h1 className='text-3xl'>{contextUserCollection.length}</h1>
                            </div>

                        </InfoCard>
                        <InfoCard>
                            <BiSolidDollarCircle size="50px"/>
                            <div className='ml-2'>
                                <h1 className='text-lg'>Valor Investido</h1>
                                <h1 className='text-3xl'>R$ {contextAlbumInvestment}</h1>
                            </div>
                        </InfoCard>
                    
                    </div>
          </div>

        </div>
        
      </div>

      <section className="bg-zinc-900 w-full flex justify-center h-full p-2 pt-4 pb-20">

              { isEmpty? (
                <>
                  <div className='flex flex-col'>
                    <h1 className='text-3xl flex flex-row text-white font-poppins mb-4  font-bold'>Sua coleção de discos está vazia!</h1>
                    <div className='h-80 w-80 m-auto'>
                          <img src="src/assets/Empty.svg" alt="Loading..." />            
                      </div>
                      <Button onClick={() => _navigate('/dashboard')}className='px-4 py-2 font-bold mt-2 bg-white'>Quero comprar álbuns!</Button>
                  </div>
                </>
              ):(
                <>
                  <AlbumList style='flex-wrap'>
                      { contextUserCollection?.map((album, i) => (
                      <div key={i} style ={{'--bg-card': `url(${album.imageUrl})`} as React.CSSProperties} className='relative bg-[image:var(--bg-card)] flex-shrink-0 bg-cover bg-no-repeat w-60 h-[245px] rounded-md hover:scale-110 transition'>
                          <div className='flex flex-col backdrop-brightness-50 h-full p-9 cursor-pointer'>
                          <h1 className='font-bold text-white font-lato text-2xl items-center text-center'>
                                  {album.name}
                              </h1>    
                          </div>
                      </div>                          
                      )) }              
                  </AlbumList>
                
                </>
                
            )}
        </section>

      <Footer/>


    </div>
  )
}
