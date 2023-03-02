import { Container, Positions, Names } from "./styles";

function Ranking() {
    return (
      <Container id="ranking">
        <h1>🏆  RANKING MULTIMARCAS</h1>
        <p>Colaboradores com Maior Número de Certificações</p>
        <Positions>
        <img src="http://multimarcasconsorcios.com.br/wp-content/uploads/2023/01/Grupo-Ganhador.png" alt="logo multimarcas branco"/>
        <Names>
            <h2>🥇 1- Fulano | 80pts</h2>
            <h2>🥈 2- Ciclano | 70pts</h2>
            <h2>🥉 3- Beltrano | 60pts</h2>
        </Names>
        </Positions>
        <h3>Entre em contato com o RH para resgatar sua recompensa!</h3>
      </Container>
    );
  }
  
  export default Ranking;