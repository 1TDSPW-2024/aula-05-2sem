type CabecalhoProps = {
    tituloProps:string;
    avisoProps:Function;
}

function Cabecalho({tituloProps,avisoProps}:CabecalhoProps){

        document.title = tituloProps;
  
    return(
        <header>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso</button>
            </div>
        </header>
    );
}
export default Cabecalho;
 