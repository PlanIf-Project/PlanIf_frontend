import styled from 'styled-components'

export const Section = styled.main`
min-height: 100vh;
background-color: var(--cor1);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

:root {
    --cor1: #B2BFCA;
    --cor2: #6F9ABF;
    --cor3: #51718C;
    --cor4: #383C40;
    --cor5: #253340;
    --cor6: #000000;
    --cor7: #ffffff;
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
`