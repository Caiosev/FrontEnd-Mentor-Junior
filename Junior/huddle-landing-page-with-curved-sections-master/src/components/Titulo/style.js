import styled from 'styled-components'
import { Variables as V } from '../../styled.var'


export const Sec = styled.section`
    width: 80vw;
    margin: auto;
    text-align: center;
    margin-bottom: 80px;

    h1{
        @media screen and (min-width:1000px){
            font-size: 32px;
        }
    }
    p{
        margin: 0;
        @media screen and (min-width:1000px){
            font-size: 18px;
            margin: 0 20%;
        }
    }
    button{
        width: 70%;
        margin-top: 40px;
        padding: 15px;
        color: white;
        background-color: ${V.LightPink};
        font-weight: 600;
        border: 0;
        border-radius: 50px;
        box-shadow: 1px 3px 17px 0px rgba(0,0,0,0.55);
        @media screen and (min-width:1000px){
            width: 30%;
        }
    }
`