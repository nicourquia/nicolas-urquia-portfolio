import styled from 'styled-components'
import './dividerLine.css'
 
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DivShapes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
`
const Line = styled.div`
    width: 30%;
    height: 0;
    border: 0.5px solid #fff;
    margin: 0 10px 0 10px;
`

export default function DividerLine (){
    return(
        <Div>
            <Line/>
            <DivShapes>
                <div className='form-style'/>
                <div className='form-style2'/>
            </DivShapes>
            <Line/>
        </Div>
    )
}