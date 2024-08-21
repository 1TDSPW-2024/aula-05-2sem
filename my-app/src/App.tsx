import Cabecalho from "./Components/Cabecalho/Cabecalho";

function App() {
  //tipagem
  const pagina: string = "Minha Pagina";
  // const numero: number = 0;
  // const listaNomes: string[] = ["aaa", "aaaa"];
  // const objeto:{nome:string,idade:number,vivo:boolean} = {nome: "aa",idade: 18,vivo: false};
  const aviso = () => alert(pagina);
  const nrPagina: number = 2;
  const status = "loading";

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} avisoProps={aviso} nrPaginaProps={nrPagina} statusProps={status}>
        <ul>
          <li>
            <a href="">Aluno-1</a>
          </li>
          <li>
            <a href="">Aluno-2</a>
          </li>
          <li>
            <a href="">Aluno-3</a>
          </li>
          <li>
            <a href="">Aluno-4</a>
          </li>
          <li>
            <a href="">Aluno-5</a>
          </li>
        </ul>
      </Cabecalho>
    </div>
  );
}

export default App;
