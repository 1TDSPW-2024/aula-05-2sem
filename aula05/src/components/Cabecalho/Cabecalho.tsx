import { Cabecalho1Props,Cabecalho2Props } from "../../types";

function Cabecalho({paginaProps,nrPagProps,statusProps,avisoProps}:Cabecalho1props & Cabecalho2Props){

        document.title = statusProps =" - "nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+" - "+nrPaginaProps}</h1>
            <div>
                <button onClick={()=> avisoProps()}>Aviso</button>
            </div>
        </header>
        );
    }