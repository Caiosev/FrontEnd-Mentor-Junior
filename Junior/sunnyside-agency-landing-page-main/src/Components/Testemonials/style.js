import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 170vh;
    background-color: #FFFBF8;
    text-align: center;
    @media (min-width: 1000px) { 
        height: 70vh;
    }
    h1{
        padding: 50px 0px;
        font-family: 'Fraunces',serif;
        font-size:15px;
        letter-spacing: 8px;
        color: #A8A8A8;
        @media (min-width: 1000px) { 
            padding-top: 100px;
        }
    }
    .clients{
        @media (min-width: 1000px) { 
            display: flex;
        }
        
    }

    

`