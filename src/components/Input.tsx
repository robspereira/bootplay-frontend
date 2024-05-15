import React from 'react'

interface Props {
    children: React.ReactNode
    type:string
    required?: boolean;
    style?: string;
    hig?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ children, type, required, style, hig, onChange} : Props) {
  return (
    <>
      <label className={`${hig && "text-green-600"}text-sm font-normal text-zinc-700`}>
        {children}
      </label>
      <input type={type} required={required} onChange={onChange} className={`${style} w-full p-4 ring-1 rounded-2xl ring-zinc-300 h-12 hover:ring-blue-400 mb-3`}/>
    </>
  )
}
