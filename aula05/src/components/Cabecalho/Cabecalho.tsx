export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps: number | string;
}

export type Cabecalho2Props = {
    statusProps:"loading" | "deployed";
    avisoProps: ()=> void;
}


function Cabecalho({paginaProps, nrPaginaProps, children, statusProps, avisoProps}:Cabecalho1Props & Cabecalho2Props){

    document.title = statusProps+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"  "+nrPaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso</button>
            </div>
            <div>
                {children}
            </div>
        </header>
    );
}
export default Cabecalho;
