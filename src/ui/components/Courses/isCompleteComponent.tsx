interface Texto {
    children: React.ReactNode
}

export default function IsCompleteCompnent({children}: Texto){
    return(
        <div className="">
            {children}
        </div>
    )
}