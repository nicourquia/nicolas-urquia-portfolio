import styled from 'styled-components'
import Card from './Card'

const HomeDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5% 0 0 0;
`
const Name = styled.h3`
    font-weight: 900;
    font-style: italic;
    font-size: 30px;
`
const Role = styled.p`
    font-weight: 200;
    font-style: italic;
    font-size: 25px;
`
const Div = styled.div`
    width: 80%;
`
const DivCard = styled.div`
    width: 70%;
    height: 620px;
    display: flex;
    justify-content: center;
`

export default function Home({playStatus}){
    if(playStatus === true){
        const cardContainer = document.getElementById('card-container')
        cardContainer.style.display = 'none'
        cardContainer.style.filter = 'brightness(0)'
        cardContainer.style.transition = '2s'
        cardContainer.style.opacity = 0
        setTimeout(()=>{
            cardContainer.style.display = 'block'
            setTimeout(()=>{
                cardContainer.style.filter = 'brightness(1)'
                    setTimeout(()=>{
                        cardContainer.style.opacity = 1
                    }, 1000)
            }, 370);
        }, 1000);
    }
    return(
        <HomeDiv >
            <Div>
                <Name>NICOLAS URQUIA</Name>
            </Div>
            <DivCard>
                <Div id='card-container'>
                    <Card/>
                </Div>
            </DivCard>
            <Div>
                <Role>FRONT-END DEVELOPER</Role>
            </Div>
        </HomeDiv>
    )
}