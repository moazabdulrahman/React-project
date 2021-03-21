import styled from 'styled-components'

export const SocailMediaDiv =styled.div`
    height: auto;
    overflow: hidden
`

export const SocailDiv =styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    
    background:${props => props.socailType==="facebook"?"#3b5998":""};
    background:${props => props.socailType==="twitter"?"#498cbf":""};
    background:${props => props.socailType==="pinterest"?"#cc2127":""};
    `
   
export const IconI =styled.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px   
`
export const SocailP =styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff
`
export const SocailSpan =styled.span`
display: block;
margin-bottom: 8px
`
export const SocailSpan2 =styled.span`
font-weight: normal
`

