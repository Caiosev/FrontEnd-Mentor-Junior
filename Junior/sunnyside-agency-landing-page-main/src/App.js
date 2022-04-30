import Header from "./Components/Header/index";
import ImageComp from "./Components/Image";
import WeAreCreativeComp from "./Components/WeAreCreativeComp";
import ovo from './images/mobile/image-transform.jpg'
import copo from './images/mobile/image-stand-out.jpg'
import TextWithLearnMore from "./Components/TextWithLearnMore";
import ImageWithBg from "./Components/ImageWithBg";
import ImageGrapichDesign from './images/mobile/image-graphic-design.jpg'
import ImagePhotography from './images/mobile/image-photography.jpg'
import Testemonials from "./Components/Testemonials";
import Footer from "./Components/Footer";

function App() {

  const Titulo1 = 'Transfrom your brand'
  const Desc1 = 'We are full-service creative agency specializing in helping brand grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
  const Titulo2='Stand out the right audience'
  const Desc2 = "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places"
  const DesignDesc="Great design makes you memorables. We deliver artwork thay undercores your brand message aand captures potencial clients' attencion."
  const PhotoDes = 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
  return (
    <div className="App">
      <Header />
      <main>
      <section>
        <WeAreCreativeComp />
      </section>
      <section>
        <ImageComp image={ovo}/>
      </section>
      <section>
        <TextWithLearnMore titulo={Titulo1} desc={Desc1}/>
      </section>
      <section>
        <ImageComp image={copo}/>
      </section>
      <section>
        <TextWithLearnMore titulo={Titulo2} desc={Desc2}/>
      </section>
      <section>
       <ImageWithBg bg={ImageGrapichDesign} titulo={'Graphic Design'} desc={DesignDesc} textColor={'#24564B'}/>
      </section>
      <section>
        <ImageWithBg bg={ImagePhotography} titulo={'Photograpy'} desc={PhotoDes} textColor={'#195574'}/>
      </section>
      <section>
        <Testemonials></Testemonials>
      </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
