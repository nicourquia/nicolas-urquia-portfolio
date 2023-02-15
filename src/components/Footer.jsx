import styled from 'styled-components';

const DivMain = styled.div`
    width: 100%;
    height: 300px;
    background-color: #191919;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Div = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    background-color: transparent;
    border: 0;
    color: white;
    font-family: 'Archivo', sans-serif;
    font-weight: 300;
    font-size: 16px;
    &:hover{
        transition: 0.5s;
        color: #e8b847;
    }
`
const P = styled.p`
    font-weight: 900;
    font-style: italic;
    font-size: 30px;
`
const CopyRigth = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 13px;
    color: #9a9a9a;
`
export default function Footer(){
    return(
        <>
        <DivMain>
            <Div>
                <a href="mailto:nicurquiga@gmail.com" target="_blank" rel="noreferrer">
                    <Button>nicurquiga@gmail.com</Button>
                </a>
                <a href="https://www.linkedin.com/in/nicolasurquia/" target="_blank" rel="noreferrer">
                    <Button>Linkedin</Button>
                </a>
                <a href="https://github.com/nicourquia" target="_blank" rel="noreferrer">
                    <Button>Github</Button>
                </a>
                <a href="https://instagram.com/nicourquia" target="_blank" rel="noreferrer">
                    <Button>Instagram</Button>
                </a>
            </Div>
            <Div>
                <a href="#about">
                    <Button>About</Button>
                </a>
                <a href="#skills">
                    <Button>Skills</Button>
                </a>
                {/* <Button>Projects</Button> */}
                <a href="#contact">
                    <Button>Contact</Button>
                </a>
            </Div>
            <Div>
                <P>NU</P>
            </Div>
        </DivMain>
        <CopyRigth>Nicolas Urquia 2023 ©</CopyRigth>
        </>
    )
}