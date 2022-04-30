import Header from "./Components/Header/index";
import ImageComp from "./Components/Image";
import WeAreCreativeComp from "./Components/WeAreCreativeComp";
import ovoMobile from './images/mobile/image-transform.jpg'
import ovoDesk from './images/desktop/image-transform.jpg'
import copoMobile from './images/mobile/image-stand-out.jpg'
import copoDesk from './images/desktop/image-stand-out.jpg'
import TextWithLearnMore from "./Components/TextWithLearnMore";
import ImageWithBg from "./Components/ImageWithBg";
import ImageGrapichDesignMobile from './images/mobile/image-graphic-design.jpg'
import ImagePhotographyMobile from './images/mobile/image-photography.jpg'
import ImageGrapichDesignDesk from './images/desktop/image-graphic-design.jpg'
import ImagePhotographyDesk from './images/desktop/image-photography.jpg'
import Testemonials from "./Components/Testemonials";
import Footer from "./Components/Footer";
import * as S from './app.style'
import { useState,useEffect } from "react";
import useWindowDimensions from "./Hooks/useWindowDimension";


function App() {

  const Titulo1 = 'Transfrom your brand'
  const Desc1 = 'We are full-service creative agency specializing in helping brand grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
  const Titulo2='Stand out the right audience'
  const Desc2 = "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places"
  const DesignDesc="Great design makes you memorables. We deliver artwork thay undercores your brand message aand captures potencial clients' attencion."
  const PhotoDes = 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
  const [ovo,setOvo] = useState()
  const [copo,setCopo] = useState()
  const [imageGrapichDesign,setImageGrapichDesign] = useState()
  const [imagePhotography,setimagePhotography] = useState()
  const width = useWindowDimensions()


  useEffect(() =>{
    if(width<1000){
      setOvo(ovoMobile)
      setCopo(copoMobile)
      setImageGrapichDesign(ImageGrapichDesignMobile)
      setimagePhotography(ImagePhotographyMobile)
    }else{
      setOvo(ovoDesk)
      setCopo(copoDesk)
      setImageGrapichDesign(ImageGrapichDesignDesk)
      setimagePhotography(ImagePhotographyDesk)
    }
  },[width])

  return (
    <div className="App">
      <Header />
      <main>
      <section>
        <WeAreCreativeComp />
      </section>
      <S.SectionImageText style={{direction:'rtl'}}>
        <ImageComp image={ovo}/>
        <TextWithLearnMore titulo={Titulo1} desc={Desc1}/>
      </S.SectionImageText>
      <S.SectionImageText>
        <ImageComp image={copo}/>
        <TextWithLearnMore titulo={Titulo2} desc={Desc2}/>
      </S.SectionImageText>
      <S.SecImageSideImage>
       <ImageWithBg bg={imageGrapichDesign} titulo={'Graphic Design'} desc={DesignDesc} textColor={'#24564B'}/>
        <ImageWithBg bg={imagePhotography} titulo={'Photograpy'} desc={PhotoDes} textColor={'#195574'}/>
      </S.SecImageSideImage>
      <section>
        <Testemonials></Testemonials>
      </section>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
