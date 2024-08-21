type Cabecalho1Props = {
  paginaProps: string;
  nrPaginaProps: number | string;
  children: React.ReactNode;
};

interface Cabecalho2Props {
  avisoProps: () => void;
  statusProps: "loading" | "deployed";
}

function Cabecalho({ paginaProps, avisoProps, nrPaginaProps, children, statusProps }: Cabecalho1Props & Cabecalho2Props) {
  // addEventListener("click", () => {});
  document.title = statusProps + "-" + nrPaginaProps;
  return (
    <header>
      <h1>{paginaProps}</h1>
      <div>
        <button onClick={() => avisoProps()}>Aviso</button>
      </div>
      <div>{children}</div>
    </header>
  );
}
export default Cabecalho;
