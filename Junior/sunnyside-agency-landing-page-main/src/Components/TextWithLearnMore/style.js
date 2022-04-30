import styled from 'styled-components'


export const Container = styled.div`
    width: 100vw;
    height: 50vh;
    background-color: #FFFBF8;
    @media (min-width: 1000px){
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    .content{
        padding: 25px;
        text-align: center;
        color: #23313E;
        h1{
            font-size: 35px;
            margin-bottom: 30px;
            font-family: 'Fraunces', serif;
        }
        p{
            font-size: 15px;
            line-height: 24px;
            margin-bottom: 30px;
            font-family: 'Barlow', serif;
            color: #A8A7AF;
        }
        h2{
            font-size:18px;
            font-family: 'Fraunces', serif;
            display:flex;
            flex-direction: column;
            align-items: center;
        }
        h2:after{
            content:"";
            width:50%;
            height:2px;
            background: #FFFBF8;
        }
    }
`