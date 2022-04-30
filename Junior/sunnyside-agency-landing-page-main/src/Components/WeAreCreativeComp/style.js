import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 80vh;
    color: white;

    img{
        width: 100%;
        height: 80%;
        z-index: -10;
        position:fixed;
        @media  (min-width: 1000px) {
          height: 100%;
        }
    }
    h1{
        text-align:center;
        padding-top: 70px;
        letter-spacing: 10px;
        font-weight:700;
        @media (min-width: 1000px) {
          font-size: 54px;
          padding-top: 120px;
        }
    }
    .arrow{
        width:150px;
        height:25px;
        display: flex;
        margin: auto;
        margin-top: 150px;
        @media  (min-width: 1000px) {
          height: 30px;
          width: 300px;
        }
      }
.arrow{
  content: "";
  background: white;
  transform: rotate(90deg);
  clip-path: polygon(0 10px,calc(100% - 15px) 10px,calc(100% - 15px) 0,100% 50%,calc(100% - 15px) 100%,calc(100% - 15px) calc(100% - 10px),0 calc(100% - 10px));
}
`

