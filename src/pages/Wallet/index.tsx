import { WalletModel } from '@/models/WalletModel'
import { user_api } from '@/services/apiService'
import React, { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Wallet() {
    const [isLoading, setIsLoading] = useState(true)
    const [wallet, setWallet] = useState<WalletModel | null>({balance: 0})
    const [amountToAdd, setAmountToAdd] = useState(0)

    const handleAddCredits = (event: FormEvent) => {
        
        event.preventDefault()
        const parsedAmount = parseFloat(amountToAdd); 
        if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return;
        }

         console.log(`Adding credits: ${parsedAmount}`); 


        user_api.post(`/wallet/credit/${amountToAdd}`).then((resp) => {

            toast.success("Valor adicionado à carteira!")

        }).catch(() => {
            toast.error("Erro ao adicionar valor à carteira :(")
        })

    }

    const handleAmountChange = (event) => {
        const value = event.target.value;    

        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
          return; 
        }
    
        setAmountToAdd(parsedValue); 
    };


   
    useEffect(() => {
        user_api.get('/wallet')
        .then((resp) => {
            setWallet(resp.data);
        })
        .finally(() => setIsLoading(false));
    }, []);



  return (
    <div>
        { isLoading ? (
        <p>Carregando saldo...</p>
        ) : (
        <h1>Saldo atual: {wallet.balance}</h1>
        )}
        <form onSubmit={handleAddCredits}>
            <label htmlFor="">Saldo a ser adicionado:</label>
            <input type="number" onChange={handleAmountChange} />
            <button type='submit'>Adicionar créditos</button>
            <button><Link to='/dashboard'>Voltar</Link></button>
        </form>
    </div>
  )
}
