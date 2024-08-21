type CabecalhoProps = {
  paginaProps: string;
  avisoProps: () => void;
  nrPaginaProps: number | string;
  statusProps: "loading" | "deployed";
};

function Cabecalho({ paginaProps, avisoProps, nrPaginaProps, statusProps }: CabecalhoProps) {
  // addEventListener("click", () => {});
  document.title = statusProps + "-" + nrPaginaProps;
  return (
    <header>
      <h1>{paginaProps}</h1>
      <div>
        <button onClick={() => avisoProps()}>Aviso</button>
      </div>
      <div></div>
    </header>
  );
}
export default Cabecalho;
