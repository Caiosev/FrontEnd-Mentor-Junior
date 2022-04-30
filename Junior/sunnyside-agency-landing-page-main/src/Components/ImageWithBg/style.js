import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    .content{
        display: flex;
        flex-direction: column;
        height: 90%;
        text-align: center;
        justify-content: flex-end;
        align-items: center;
        padding: 0 20px ;
        h1{
            font-size: 25px;
            font-family: 'Fraunces', serif;
            color: ${(props) => props.textColor};
            margin-bottom: 40px;
        }
        p{
            font-size: 15px;
            line-height: 25px;
            font-family: 'Barlow', serif;
            color: ${(props) => props.textColor};
        }
    }
    
    `