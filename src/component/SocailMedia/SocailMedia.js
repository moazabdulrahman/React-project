import React , {useState,useEffect} from 'react'
import {SocailMediaDiv,SocailDiv,IconI,SocailP,SocailSpan,SocailSpan2} from './SocailStyle.js'
import axios from 'axios'

const SocailMedia =()=>{

    const [socials,setSocials] = useState([])


    useEffect(() => {
        axios.get('./js/data.json').then(res => {setSocials(res.data.social)})
                }, [])
    const socialsItem = socials.map(social=>{
        return(                   
            <SocailDiv key={social.id} socailType={social.type}>
                <IconI className={social.icon}></IconI>
                <SocailP>
                    <SocailSpan>{social.title}</SocailSpan>
                    <SocailSpan2>{social.body}</SocailSpan2>
                </SocailP>
            </SocailDiv>  
        )
    })            
    
    return(
        <SocailMediaDiv >
          {socialsItem}
        </SocailMediaDiv>
    )
}
export default SocailMedia