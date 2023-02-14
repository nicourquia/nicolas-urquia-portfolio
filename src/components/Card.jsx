import styled from 'styled-components'
import NicolasCromo from '../images/Nicolas-Urquia.png'

const Cromo = styled.img`
    width: 100%;
    transition: 0.5s;
    &:hover{
        filter: brightness(1.15);
    }
`

export default function Card(){
    return(
        <div>
            <Cromo src={NicolasCromo} alt="Nicolas Urquia Card with skills" />
        </div>
    )
}