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
        img{
            width: 100%;
            height: 150px;
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
        }
        .socials{
            display:flex;
            justify-content: space-evenly
        }
    }
`