import Cabecalho from "./components/Cabecalho/Cabecalho";

function App(){
    const pagina:string = "Página inicial!";
    const nrPagina:string = "0";
    const status = "batata";
    const aviso = ()=> alert(pagina);
    
    return (
      <div>
        <h1>Componente App</h1>
        <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}>
            {/* ul>li*5>a[href=#]{Aluno-$} */}
            <ul>
              <li><a href="1">Aluno-1</a></li>
              <li><a href="2">Aluno-2</a></li>
              <li><a href="3">Aluno-3</a></li>
              <li><a href="4">Aluno-4</a></li>
              <li><a href="5">Aluno-5</a></li>
            </ul>
        </Cabecalho>
  
  
      </div>
      );
  }
export default App;