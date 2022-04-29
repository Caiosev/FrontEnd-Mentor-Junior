import styled from 'styled-components'


export const Bg = styled.img`
    width: 100vw;  
   
`
export const Container = styled.div`
       background-color: #F6FBFF;
`
export const Content = styled.div`
    width: 84vw;
    height: 400px;
    /* margin: 180px auto 150px auto; */
    margin: 0 auto;
    text-align: center;
    margin-top: -10px;
    @media screen and (min-width:1000px){
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 30% 70%;
        margin-top: -150px;
        margin-bottom: -50px;
    } 
    .bgs{
        margin: 0;
    }
    #ilustration{
        width: 90%;
        height: 200px;
        @media screen and (min-width:1000px){
            grid-column: 1/2;
            grid-row: 1/3;
            align-self: center;
            width: 400px;
            height: 280px;
        }
    }
    h1{
        font-size:20px;
        margin-top: 60px;
        margin-bottom: 20px;
        color: #032830;
        @media screen and (min-width:1000px){
            grid-column: 2/3;
            grid-row: 1/2;
            font-size: 30px;
        }
    }
    p{
        font-size: 13px;
        color: #052831;
        @media screen and (min-width:1000px){
            grid-column: 2/3;
            grid-row: 2/3;
            font-size: 15px;
        }
    }

`