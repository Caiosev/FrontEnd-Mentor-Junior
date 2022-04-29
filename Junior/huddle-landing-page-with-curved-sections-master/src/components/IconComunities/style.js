import styled from 'styled-components'

export const Container = styled.div`
    width: 45vw;
    height: 130px;
    margin-bottom: 60px;
    margin: 0 auto 60px auto;
    @media screen and (min-width:100px) {
        width: 15vw;
    }
    
    img{
        width: 38px;
        height: 30px;
    }
    h1{
        margin: 0;
        color: #00252E;
        font-size: 42px;
        text-align: center;
        @media screen and (min-width:100px) {
            font-size: 60px;
        }
    }
    p{
        color: #96A2AA;
        font-size: 14px;
        text-align: center;
    }
`