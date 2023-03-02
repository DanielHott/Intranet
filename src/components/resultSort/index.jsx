import { useEffect, useState } from "react";
import { consultSorted } from "../../utils";
import { Container, Sorteados } from "./styles";

function ResultSort() {
    const [ data, setData ] = useState();
    useEffect(() => {
        result();
    }, [])
    const result = async () => {
        const names = await consultSorted('RCt-N-lyW1cLl');
        setData(names)
        console.log(data)
    }
    
    return (
    <div>
      <Container>
            <h1>🎲 RESULTADO DO SORTEIO</h1>
            <h3>{data && `Sorteio Referente: ${data.name.toUpperCase()}`}</h3>
            <Sorteados>
            { data && data.result.map((item) => {
                return (
                    <div>
                        {item.toUpperCase()}
                    </div>
            )}
        )}
        </Sorteados>
      </Container>
    </div>
    );
  }
  
  export default ResultSort;