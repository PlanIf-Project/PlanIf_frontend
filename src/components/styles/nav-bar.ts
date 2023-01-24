import styled from 'styled-components'

export const Header = styled.header`
    :root {
        --cor1: #B2BFCA;
        --cor2: #6F9ABF;
        --cor3: #51718C;
        --cor4: #383C40;
        --cor5: #253340;
        --cor6: #000000;
        --cor7: #ffffff;
    }

    background-color: var(--cor3);
    min-width: 100%;
    min-height: 5%;
    position: fixed;
    top: 0;
    
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        color: #ffffff;
    }

    nav li {
        margin-top: auto;
    }

    .title {
        font-family: 'open_sansbold';
        font-size:1.8em;
        font weight: bold;
        color: #ffffff;
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
        color: #ffffff;
        -webkit-border-box: 0 1px 0 0 #ffffff;
        border-bottom: 4px solid transparent;
        -webkit-transition: border-bottom .3s linear;
    }

    li .mymenu:hover {  
        border-bottom:4px solid #ffffff;
    }

    .selecionado {
        color: red
        border-bottom:4px solid #ffffff;
    }


`