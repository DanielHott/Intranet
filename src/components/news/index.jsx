import { Container, Campains, ContentCampain, EachCard } from "./styles";

function News() {
    return (
      <Container>
        <Campains>
             <h2>CAMPANHAS</h2>
        <ContentCampain>
            <EachCard>
                <img src="http://multimarcasconsorcios.com.br/wp-content/uploads/2022/11/Personagem-Menina-Computador.png" alt="Menina no computador"></img>
                <div>
                <h3>Conheça a Gruppi</h3>
                <p>A gindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                </div>
              </EachCard>
              <EachCard>
                <img src="https://i1.wp.com/blog.londrina.pr.gov.br/wp-content/uploads/2020/09-setembro/29.09.20/outubro-rosa-ILUSTRA-1.jpg?fit=770%2C500&ssl=1" alt="Menina no computador"></img>
                <div>
                <h3>Outubro Rosa</h3>
                <p>A gindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                </div>
              </EachCard>
              <EachCard>
                <img src="https://urologistasanchotene.com.br/wp-content/uploads/2020/11/o-que-significa-novembro-azul-1200x630.jpg" alt="Menina no computador"></img>
                <div>
                <h3>Novembro Azul</h3>
                <p>A gindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                </div>
              </EachCard>
        </ContentCampain>
        </Campains>
        <Campains>
             <h2>COMUNICADOS</h2>
        <ContentCampain>
        <EachCard>
                <img src="http://multimarcasconsorcios.com.br/wp-content/uploads/2023/01/LOTERIA-1.png" alt="Menina no computador"></img>
                <div>
                <h3>Confira os Resultados do Sorteio</h3>
                <p>A gindustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to </p>
                </div>
              </EachCard>
        </ContentCampain>
        </Campains>
      </Container>
    );
  }
  
  export default News;