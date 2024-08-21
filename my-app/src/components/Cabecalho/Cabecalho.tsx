import { Cabecalho1Props,Cabecalho2Props } from "../../types";

function Cabecalho({paginaProps,nrPaginaProps,children,statusProps,avisoProps}:Cabecalho1Props & Cabecalho2Props){

        document.title = statusProps+" - "+nrPaginaProps;
  
    return(
        <header>
            <h1>{paginaProps+" - "+nrPaginaProps}</h1>
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
 