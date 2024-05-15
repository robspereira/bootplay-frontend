import Input from '../../components/Input'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import { FormEvent, useState } from 'react'
import { useAuth } from '@/hooks/UseAuth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '@/components/Footer';

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const { login, isAuthenticated = false } = useAuth();
  const _navigate = useNavigate();



  function handleSingIn(event: FormEvent){

    event.preventDefault();
    
    login(email, password).then(() => {

      toast.success("Login efetuado com sucesso!");
      setTimeout(() => {
        _navigate('/dashboard');
      }, 2000);

    }).catch(() => {
      toast.error("Erro ao efetuar login!");
    });      


  }


  return (
    <>
    {isAuthenticated && <Navigate to='/dashboard' />}
    <main>
        <Card>
          <h1 className='text-2xl mx-auto font-semibold'>Acesse sua conta</h1>
            
            <form onSubmit={handleSingIn} className='flex flex-col mt-8 gap-2'>       
              <Input onChange={e => setEmail(e.target.value)} required type='email'>Email</Input>

              <Input onChange={e => setPassword(e.target.value)} required type='password'>Senha</Input>
              
              <Button type='submit' className='h-14 px-4 py-2 mx-auto bg-zinc-900 text-white w-full font-bold text-center'>Entrar</Button>          
            </form>

            <span className='mt-6 mx-auto text-zinc-600 text-sm'>Ainda não tem uma conta? <Link to='/signup' className='underline  text-zinc-800 font-bold'>Inscrever-se</Link></span> 

        </Card>  
        <Footer/>
    </main>
    </>



  )
}
