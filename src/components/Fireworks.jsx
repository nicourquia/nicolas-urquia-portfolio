import { useEffect, useState } from 'react';
import { Fireworks } from '@fireworks-js/react'
import styled from 'styled-components'

const Div = styled.div`
    display: block;
    transition: 3s;
`
export default function App({playStatus}) {
    const [stopAnimation, setStopAnimation] = useState(false);

    useEffect(()=>{
        const onPageLoad = () => {
            setStopAnimation(true);
          };
        if (document.readyState === 'complete') {
            onPageLoad();
          } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
          }
        }, []);
        if(stopAnimation === true){
            const fireworkContainer = document.getElementById('firework-container')
            const firework = document.getElementById('firework')
            //fireworkContainer.style.display = 'block'
            if(playStatus === true){
              setTimeout(()=>{
                      firework.style.transition = '3s'
                      firework.style.opacity = 0
                      setTimeout(()=>{
                          fireworkContainer.style.display = 'none'
                      }, 6000)
              }, 6000);
            }
        }
    return (
    <Div id='firework-container'>
        <Fireworks id='firework'
          options={{
            rocketsPoint: {
              min: 25,
              max: 75
            },
            hue:{
                min: 40,
                max: 45
            },
            brightness:{
                min: 80,
                max: 90
            },
            acceleration: 1.02
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            background: 'transparent'
          }}
        />
    </Div>
  )
}