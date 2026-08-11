interface buttonProps{
    text: string
}
export function Button(props: buttonProps){

    return(
        <>
        <h2>Esse botão pode ser alterado</h2>
        <button>{props.text}</button>
        </>
    )
}