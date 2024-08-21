export type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:number | string;
    statusProps:"loading" | "deployed" | "batata";
    avisoProps:Function;
}



function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:CabecalhoProps){

        document.title = statusprops+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+" - "+nrPagProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso</button>
            </div>
        </header>
    );
}
export default Cabecalho;