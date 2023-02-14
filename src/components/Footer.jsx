import styled from 'styled-components';

const DivMain = styled.div`
    width: 100%;
    height: 300px;
    background-color: #242424;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Div = styled.div`
    width: 33%;
`
export default function Footer(){
    return(
        <DivMain>
            <Div>
                <p>Github</p>
                <p>nicurquiga@gmail.com</p>
            </Div>
            <Div>
                <p>Texto</p>
                <p>Texto</p>
            </Div>
            <Div>
                <p>Texto</p>
                <p>Texto</p>
            </Div>
        </DivMain>
    )
}