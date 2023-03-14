import { Container } from "./styles";

function Suggestion() {
    return(
        <div>
            <Container id="suggestion">
                <h1>💡 SUGESTÕES</h1>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQy1z8X7NEL_eM0jFjG3q5rDRLEb6BNbiIOJnAv2aSK9GkgA/viewform?embedded=true" 
                title="form" className="form" marginheight="0" marginwidth="0">Carregando…</iframe>
            </Container>
        </div>
    );
}

export default Suggestion;