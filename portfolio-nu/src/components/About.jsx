import styled from 'styled-components'

const Div = styled.div`
    padding: 5% 15%;
`

const Subtitle = styled.h2`
    font-weight: 900;
    font-style: italic;
    font-size: 20px;
    text-align: left;
`

const Description = styled.div`
    font-weight: 300;
    font-size: 18px;
`

export default function About(){
    return(
        <Div id='about'>
            <Subtitle>
                ABOUT ME
            </Subtitle>
            <Description>
                Hi! My name is Nicolás Urquía, <br />
                I'm a Front-End Developer based in Buenos Aires, Argentina. <br/>
                I'm very passionate, dedicated and enthusiastic to my work. <br/>
                I have knowledge in Graphic Design, UX/UI and Video Game Development.
            </Description>
        </Div>
    )
}