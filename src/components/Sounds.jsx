import React from "react";
import { useEffect, useState } from 'react';
import FifaSound from "../sounds/fifaopeningsound.mp3";

const Sounds = ({playStatus}) => {
    const [playSound, setPlaySound] = useState(false);

    useEffect(()=>{
        const onPageLoad = () => {
            setPlaySound(true);
          };
        if (document.readyState === 'complete') {
            onPageLoad();
          } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
          }
        }, []);

        if(playSound & playStatus){
            const audio = new Audio(FifaSound);
            audio.loop = false;
                audio.play();
        }

  return (
    <div>
    </div>
  );
};

export default Sounds;