import { Container } from "./styles";

function Birthday() {
    return (
      <Container>
            <h1>🎂 ANIVERSÁRIOS</h1>
            <iframe src='https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23e0ecff&amp;ctz=America%2FSao_Paulo&amp;src=bXVsdGltYXJjYXNjb25zb3JjaW9zLmNvbS5icl8wcnVuYjAydmlnZTgxNDVuY2lqMmNxbHBsa0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%236633CC&amp;showTitle=0&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=1'
            title="agenda" className="agenda"></iframe>
      </Container>
    );
  }
  
  export default Birthday;