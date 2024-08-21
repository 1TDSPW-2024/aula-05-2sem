export type CabecalhoProps = {
    tituloProps:string,
    avisoProps:()=> void;

}

export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps: number | string;
    children:React.ReactNode;
}

export interface Cabecalho2Props {
    statusProps:"loading" | "deployed";
    avisoProps: ()=> void;
}