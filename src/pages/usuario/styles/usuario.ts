import styled from 'styled-components'

export const PerfilStyle = styled.section`
:root {
    --cor1: #B2BFCA;
    --cor2: #6F9ABF;
    --cor3: #51718C;
    --cor4: #383C40;
    --cor5: #253340;
    --cor6: #000000;
    --cor7: #ffffff;
}
    min-height: 100vh;
    background-color: var(--cor1);
    color: var(--cor5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    section {
        background-color: var(--cor1);
        border-radius: none;
        min-width: 150vh;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .box {
    }

    ul {
        width:100%; 
        float:left; 
        text-align:center; 
    }
    li {
        padding-right: 20px;
        display: inline-block;
        list-style:none;
    }
    li .mymenu {
        font-family: 'open_sansbold';
        font-size:1.6em;
        text-decoration: none;
        color:#4c4c4c;
        -webkit-border-box: 0 1px 0 0 #4c4c4c;
        border-bottom: 4px solid transparent;
        -webkit-transition: border-bottom .3s linear;
    }
    li .mymenu:hover {  
        border-bottom:4px solid #4c4c4c;
    }
`