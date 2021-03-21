import styled from 'styled-components'

export const WorkDiv =styled.div` 
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`
export const WorkTitleH2 =styled.h2`
    font-size: 60px;
    text-align:center 
`
export const WorkTitleH2Span =styled.span`
    font-weight: normal
`

export const WorkPartDiv=styled.div`
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
    margin-left:${props=>props.first===1? '0':'5%'}
    
`
export const WorkPartI=styled.i`
    color: #888;
    margin-bottom: 20px
`

export const WorkPartH4=styled.h4`
font-size: 25px;
color: #eb5424;
margin-bottom: 20px
`

export const WorkPartHr=styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`
export const WorkPartP=styled.h4`
font-size: 14px;
color: #888;
padding: 20px
`
