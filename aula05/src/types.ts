export type CabecalhoProps = {
    tituloProps:string;
    avisoProps:Function;
}

export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:number | string;
    children:React.ReactNode;
}

export type Cabecalho2Props = {
    statusProps:"loading" | "deployed" | "batata";
    avisoProps:Function; 
}
