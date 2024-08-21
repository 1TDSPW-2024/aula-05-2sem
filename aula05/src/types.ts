export type CabecalhoProps = {
    tituloProps:string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    avisoProps:Function;
}

export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:number | string;
    children:React.ReactNode;
}

export interface Cabecalho2Props {
    statusProps:"loading" | "deployed" | "batata";
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    avisoProps:Function; 
}
