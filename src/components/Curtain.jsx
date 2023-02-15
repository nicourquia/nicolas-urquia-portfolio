import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components'
import IconPack from '../images/icon-pack.png'

const breatheAnimation = keyframes`
 0% { box-shadow: 0px 0px 30px #ffcd43c0, 0px 30px 40px #000000; margin-bottom: 0px}
 50% { box-shadow: 0px 0px 40px #ffcd43, 0px 50px 40px #000000; margin-bottom: 20px}
 100% { box-shadow: 0px 0px 30px #ffcd43c0, 0px 30px 40px #000000; margin-bottom: 0px }
`
const Div = styled.div`
    overflow-y: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #151515;
    transition: 5s;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ClickMe = styled.h2`
    font-weight: 900;
    font-style: italic;
    font-size: 24px;
    position: absolute;
    left: 22%;
    transition: 0.3s;
`
const Pack = styled.img`
    width: 18%;
    border-radius: 2px;
    box-shadow: 0px 0px 20px #ffcd43;
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    transition: 1s;
    &:hover{
        width: 20%;
    }
`
const Curtain = ({openPack}) => {
    const [playAnimation, setPlayAnimation] = useState(false);
    const [click, setClick] = useState(false)
    let frontCurtain = null;
    let pack = null;
    let clickMe = null;

    useEffect(()=>{
        const onPageLoad = () => {
            setPlayAnimation(true);
        };
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);
    function openCard(){
        setClick(true)
        if(playAnimation === true && click === true){
            clickMe = document.getElementById('click-me-id')
            pack = document.getElementById('pack-id')
            console.log('Brillo')
            clickMe.style.opacity = 0
            pack.style.filter = 'brightness(100)'
        }
        if(playAnimation === true && click === true){
            frontCurtain = document.getElementById('front-curtain')
            frontCurtain.style.transition = '3s'
            frontCurtain.style.opacity = 0
            setTimeout(()=>{
                frontCurtain.style.display = 'none'
            }, 5000)
        }
    }
    
    return(
        <Div id='front-curtain'>
            <ClickMe id='click-me-id'>DOUBLE CLICK <br/>TO OPEN→</ClickMe>
            <Pack src={IconPack} onClick={() => {openPack(click); openCard()}} id='pack-id'/>
        </Div>
    )
}
export default Curtain;