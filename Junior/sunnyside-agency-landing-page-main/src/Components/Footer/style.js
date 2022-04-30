import styled from 'styled-components'

export const Container = styled.div`

    width: 100vw;
    height: 600px;
    .gallery{
        height: 50%;
        background-color: white;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        @media (min-width: 1000px) {
           display: flex;
        }
        img{
            width: 100%;
            height: 150px;
            @media (min-width: 1000px) {
                width: 25%;
                height: 100%;
            }
        }
    }
    .end{
        background-color: #90D4C5;
        height: 50%;
        text-align: center;
        color: #2C7564;
        h1{
            padding-top: 50px;
            margin-bottom:40px;
            font-family: 'Fraunces',serif;
            font-size: 30px;
        }
        .options{
            display: flex;
            justify-content: space-evenly;
            font-size: 15px;
            font-family: 'Barlow',serif;
            margin-bottom: 70px;
            @media (min-width: 1000px) {
                justify-content: center;
                h2{
                    margin-right: 30px;
                    cursor: pointer;
                }
            }
            h2:hover{
                    color: white;
                }
        }
        .socials{
            display:flex;
            justify-content: space-evenly;
            @media (min-width: 1000px) {
                justify-content: center;
                img{
                    margin-right: 30px;
                    cursor: pointer;
                }
            }
            
        }
    }
`