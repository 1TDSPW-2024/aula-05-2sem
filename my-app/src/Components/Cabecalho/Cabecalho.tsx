type Cabecalho1Props = {
  paginaProps: string;

  nrPaginaProps: number | string;
};

type Cabecalho2Props = {
  avisoProps: () => void;
  statusProps: "loading" | "deployed";
};

function Cabecalho({ paginaProps, avisoProps, nrPaginaProps, statusProps }: Cabecalho1Props & Cabecalho2Props) {
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
