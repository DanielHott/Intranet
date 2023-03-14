import Birthday from "./birthday";
import '../App.css';
import Footer from "./footer";
import Header from "./header";
import News from "./news";
import Ranking from "./ranking";
import ResultSort from "./resultSort";
import Suggestion from "./suggestion";

function Main() {
  return (
    <div className="App">
        <Header />
        <News />
        <Ranking />
        <Birthday />
        <ResultSort />
        <Suggestion />
        <Footer />
    </div>
  );
}

export default Main;
