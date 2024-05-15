import Input from '../../components/Input'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import { FormEvent, useState } from 'react';
import { user_api } from '@/services/apiService';
import { toast } from 'react-toastify';
import { Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const _navigate = useNavigate();
  
    async function handleSignup(event : FormEvent) {
      setLoading(true);
      event.preventDefault();

      const data = {
        name,
        email,
        password
      };
      
      await user_api.post("/users/create", data)
      .then(resp => {
        console.log(resp.data);
        toast.success("Conta criada com sucesso!");
        setTimeout(() => {
          _navigate('/signin');
        }, 2000);
        setLoading(false);
        
      }).catch(err => {
        toast.error(err)
        setLoading(false);
      });
    }

  return (

    <main>

      <Card>

        <h1 className='text-2xl mx-auto font-semibold'>Criar conta</h1>
          
          <form onSubmit={handleSignup} className='flex flex-col mt-8 gap-2'>       
            <Input required onChange={e => setName(e.target.value)} type='text'>Nome Completo</Input>

            <Input required onChange={e => setEmail(e.target.value)} type='email'>Email</Input>

            <Input required onChange={e => setPassword(e.target.value)} type='password'>Senha</Input>

            { loading ? 
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando...
              </Button>
              :
              <Button type='submit' disabled={false} className='w-full h-14 px-4 py-2 mx-auto bg-zinc-900 text-white font-bold text-center'>
                Inscrever-se
              </Button>
            }
                    
          </form>

          <span className='mt-6 mx-auto text-zinc-600 text-sm'>Já tem uma conta? <Link to='/signin' className='text-zinc-800 font-bold'>Entrar</Link></span> 

      </Card>  
      <Footer/>
    </main>



  )
}

