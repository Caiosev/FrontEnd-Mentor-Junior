import Header from "./Components/Header/index";
import ImageComp from "./Components/Image";
import WeAreCreativeComp from "./Components/WeAreCreativeComp";
import ovo from './images/mobile/image-transform.jpg'
function App() {
  return (
    <div className="App">
      <Header />
      <WeAreCreativeComp />
      <ImageComp image={ovo}/>
      {/* Texto Subtexto e LearnMore */}
      {/* Imagem */}
      {/* Texto Subtexto e LearnMore */}
      {/* Imagem de fundo com texto */}
      {/* Imagem de fundo com texto */}
      {/*Testemunha clientes */}
      {/* Footer */}
    </div>
  );
}

export default App;
