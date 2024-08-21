function Cabecalho(props: { tituloProps: string; avisoProps: () => void }) {
  // addEventListener("click", () => {});
  document.title = tituloProps;
  return (
    <header>
      <h1>{props.tituloProps}</h1>
      <div>
        <button onClick={() => props.avisoProps()}>Aviso</button>
      </div>
      <div></div>
    </header>
  );
}
export default Cabecalho;
