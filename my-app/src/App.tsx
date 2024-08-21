import Cabecalho from "./Components/Cabecalho/Cabecalho";

function App() {
  //tipagem
  const titulo: string = "Minha Pagina";
  // const numero: number = 0;
  // const listaNomes: string[] = ["aaa", "aaaa"];
  // const objeto:{nome:string,idade:number,vivo:boolean} = {nome: "aa",idade: 18,vivo: false};
  const aviso = () => alert(titulo);

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso} />
    </div>
  );
}

export default App;
