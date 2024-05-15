import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <>
        <footer className='bg-main relative flex'>            
            <div className='bottom-0 backdrop-brightness-50 px-20 sticky w-full flex-items justify-between'>
                <div className='h-24 w-24 flex flex-row items-center justify-between gap-2'>   
                    <img src="src/assets/Logo.svg" alt="" className="h-12 w-12"/>
                    <span className="font-lato text-white font-semibold text-md">Bootplay</span>              
                   <img src="src/assets/logo_sysmap_w.svg" alt="" className="h-30 mt-2 w-30"/>
                <div className="flex absolute right-20 my-auto gap-2">
                    <FaFacebookSquare size='30px' style={{color: "#D098DA"}}/>
                    <FaInstagramSquare size='30px' style={{color: "#D098DA"}}/>
                    <FaLinkedin size='30px' style={{color: "#D098DA"}}/>
                    <FaSquareXTwitter size='30px' style={{color: "#D098DA"}}/>
                </div>
                </div>
            </div>

        </footer>
    </>
  )
}
