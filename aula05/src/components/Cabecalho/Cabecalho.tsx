function Cabecalho(props:{tituloProps:string,avisoProps:Function}){

       
    return(
        <header>
            <h1>{props.tituloProps}</h1>
            <div>
                <button onClick={()=> props.avisoProps()}>Aviso</button>
            </div>
        </header>
    );
}
export default Cabecalho;
 