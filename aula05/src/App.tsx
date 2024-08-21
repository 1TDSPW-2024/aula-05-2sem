import Cabecalho from "./components/Cabecalho/cabecalho";

function App(){

  const titulo:string = "Minha pagina";


  const aviso = ()=> alert(titulo);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </div>
  );

};
export default App