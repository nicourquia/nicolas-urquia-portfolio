import styled from 'styled-components'

const NavDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Title = styled.h1`
    font-weight: 900;
    font-style: italic;
    font-size: 40px;
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

export default function Navbar(){
    return(
        <NavDiv>
            <Title>NU</Title>
            <div>
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
            </div>
        </NavDiv>
    )
}