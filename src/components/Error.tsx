export const Error: React.FC<{mensaje: string}> = (props )=> {
    return (
        <div className="text-center mb-5">
            <p className="text-red-600 font-black uppercase">{props.mensaje}</p>
          </div>
    )
}