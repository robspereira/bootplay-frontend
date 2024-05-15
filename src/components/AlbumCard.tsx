import { AlbumModel } from '@/models/AlbumModel';
import { album_api } from '@/services/apiService';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Button } from './Button';
import Modal from './Modal';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import InfoAlbumCard from './InfoAlbumCard';
import AlbumList from './AlbumList';


interface Props {
    albums: AlbumModel[]
    show: Boolean
}

export default function AlbumCard({ albums, show }: Props) {


    const [loading, setLoading] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [selectedAlbum, setSelectedAlbum] = useState<AlbumModel | null>(null);



    const handleAlbumPurchase = (album: AlbumModel) => {
        const albumData = {
            name: album.name,
            idSpotify: album.id,
            artistName: album.artists[0].name,
            imageUrl: album.images[0].url,
            value: album.value
        }
        setLoading(true)
        
        album_api.post('/albums/sale', albumData).then((resp) => {
            setLoading(false)
            toast.success("Álbum comprado com sucesso!")
            console.log(resp)
        }).catch(() =>{
            setLoading(false)
            toast.error("Erro ao comprar álbum!");
        })

    }


    const handleModal = (album: AlbumModel) => {
        setSelectedAlbum(album);
        console.log(selectedAlbum)
        setModalVisible(true);
    }


return (
    <> 
      <div className='flex flex-col items-center'>
        {show ? (
            <>
            <section className="flex flex-nowrap overflow-hidden max-w-full w-8/12 pb-20 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
                <h1 className='font-bold text-4xl pl-20 text-white'>Trends</h1>
                
                    <AlbumList style='animate-infinite-scroll left-0 hover:[animation-play-state:paused]'>
                        { albums?.map((album) => (
                            <InfoAlbumCard album={album} onClick={() => handleModal(album)}/>                        
                        )) }             
                    </AlbumList>
        
            </section>
            </>
        ):(
            <>
            <section className="flex justify-center h-full m-2">                
                <AlbumList style='flex-wrap'>
                    { albums?.map((album, i) => (
                        <InfoAlbumCard album={album} ident={i} onClick={() => handleModal(album)}/>                
                    )) }         
                </AlbumList>
            </section>
            </>
        )}


        <Modal isVisible={modalVisible} album={selectedAlbum} onClose={() => setModalVisible(false)}>
            
           {selectedAlbum && (
                <>
                <div className='flex flex-row h-96'>                    

                    <div style ={{'--bg-modal': `url(${selectedAlbum.images[0].url})`} as React.CSSProperties} 
                    className='w-1/2 flex bg-[image:var(--bg-modal)] bg-cover bg-no-repeat rounded-l-2xl shrink'>
                    </div>

                    <div className='flex flex-col w-1/2 p-4 justify-center leading-8'>
                        <h1 className='font-bold mt-4 mx-auto font-lato text-2xl'>{selectedAlbum.artists[0].name}</h1>

                        <div className='m-8 font-lato text-zinc-600'>
                            <p>Nome: {selectedAlbum.name}</p>
                            <p>Tipo: {selectedAlbum.type}</p>
                            <p>Ano de lançamento: {format(selectedAlbum.releaseDate, 'dd/MM/yyyy')}</p>
                            <p>Preço: R$ {selectedAlbum.value}</p>

                        </div>
                        { loading ? 
                            <Button disabled>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Comprando...
                            </Button>
                            :
                            <Button disabled={false} onClick={() => handleAlbumPurchase(selectedAlbum)} className='text-white text-3xl mt-4 font-bold text-center font-poppins mx-auto bg-yellow-500 w-2/3'>
                                Comprar
                            </Button>
                        }                        
                        
                    </div>

                </div>
                </>
           )}
        </Modal>

     </div>
    </>
           
        

            
    )
}
