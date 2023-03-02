import { Container, Logo, Navegation } from "./styles";

function Header() {
    return (
    <div>
      <Container>
        <Logo>
          <img src="/multi-logo2.png" width="100px" height="70px" alt="multimarcas logo"/>
          <h2>MULTIMARCAS INTRANET</h2>
        </Logo>
        <Navegation>
      <a href="/">HOME</a>
      <a href="https://multimarcas.athenas.online/Usuarios/login" rel="noreferrer" target="_blank">PONTO</a>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWfI5NEIFrs_Sb3Ju5CQYP5ywAe7pDctscIr7XAhAVJf8pgA/viewform?usp=sf_link" rel="noreferrer" target="_blank">SORTEIO</a>
      <a href="#ranking">RANKING</a>
      </Navegation>
      </Container>
    </div>
    );
  }

export default Header;