import styled from 'styled-components'
import Unity from '../images/unity.png'

const Div = styled.div`
    padding: 5% 15%;
`
const Subtitle = styled.h2`
    font-weight: 900;
    font-style: italic;
    font-size: 20px;
    text-align: left;
`
const SkillsDiv = styled.div`
    font-weight: 300;
    font-size: 18px;
    display: flex;
    justify-content: space-around;
`
const CardSkill = styled.div`
    width: 200px;
    height: 250px;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TextSkill = styled.p`
    font-size: 16px;
    font-style: italic;
    font-weight: 900;
    height: 20px;
`
const Line = styled.div`
    text-align: center;
    height: 0px;
    width: 100px;
    border: 0.5px solid #fff;
`
const DivImg = styled.div`
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
`
const ImgSkill = styled.img`
    width: 50px;
    margin: 0 5px 0 5px;
`

export default function Skills(){
    return(
        <Div id='skills'>
        <Subtitle>
            SKILLS
        </Subtitle>
        <SkillsDiv>
            <CardSkill>
                <TextSkill>WEB DEV</TextSkill>
                <Line/>
                <DivImg>
                    <ImgSkill alt="Nico-HTML" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                    <ImgSkill alt="Nico-CSS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                    <ImgSkill alt="Nico-Js" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
                    <ImgSkill alt="Nico-Ts" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"/>
                    <ImgSkill alt="Nico-React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
                    <ImgSkill alt="Nico-Vuejs" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"/>
                    <ImgSkill alt="Nico-NodeJS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"/>
                    <ImgSkill alt="Nico-Firebase" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"/>
                    <ImgSkill alt="Nico-Git" src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"/>
                </DivImg>
            </CardSkill>
            <CardSkill>
                <TextSkill>UX / UI</TextSkill>
                <Line/>
                <DivImg>
                    <ImgSkill alt="Nico-Figma" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg"/>
                </DivImg>
            </CardSkill>
            <CardSkill>
                <TextSkill>GRAPHIC DESIGN</TextSkill>
                <Line/>
                <DivImg>
                    <ImgSkill alt="Nico-Photoshop" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg"/>
                    <ImgSkill alt="Nico-Illustrator" src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg"/>
                </DivImg>
            </CardSkill>
            <CardSkill>
                <TextSkill>VIDEO GAME DEV</TextSkill>
                <Line/>
                <DivImg>
                    <ImgSkill alt="Nico-Unity" src={Unity}/>
                </DivImg>
            </CardSkill>
        </SkillsDiv>
    </Div>
    )
}