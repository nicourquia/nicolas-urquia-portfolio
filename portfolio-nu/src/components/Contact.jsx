import styled from 'styled-components'
import Instagram from '../images/instagram.png'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import Mail from '../images/mail.png'

const Div = styled.div`
    padding: 5% 15%;
`
const Subtitle = styled.h2`
    font-weight: 900;
    font-style: italic;
    font-size: 20px;
    text-align: left;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 70px;

`

const Icon = styled.img`
    width: 50px;
    position: relative;
    transition: 0.5s;
    &:hover{
        width: 70px;
        }
`

export default function Contact(){

    return(
        <Div id='contact'>
            <Subtitle>CONTACT ME</Subtitle>
            <Container>
                <Div2>
                    <a href="mailto:nicurquiga@gmail.com" target="_blank" rel="noreferrer">
                        <Icon id='link-email' src={Mail} alt="E-Mail Icon"/>
                    </a>
                        <a href="https://www.linkedin.com/in/nicolasurquia/" target="_blank" rel="noreferrer">
                            <Icon src={LinkedIn} alt="Linkedin Icon"/>
                        </a>
                        <a href="https://github.com/nicourquia" target="_blank" rel="noreferrer">
                            <Icon src={Github} alt="Github Icon"/>
                        </a>
                        <a href="https://www.instagram.com/nicourquia/" target="_blank" rel="noreferrer">
                            <Icon src={Instagram} alt="Instagram Icon"/>
                        </a>
                </Div2>
            </Container>
        </Div>
    )
}