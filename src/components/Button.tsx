import React from "react"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export function Button({children, className, ...rest} : Props){
    return (
        <button className={`${className} rounded-full text-lg py-2 px-4 transition mx-1`} {...rest}>
            {children}
        </button>
    )
}