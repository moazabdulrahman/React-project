import styled from 'styled-components'

export const ProfileSkillsDiv = styled.div`
padding: 50px 0;
overflow: hidden;
`
export const ProfileDiv = styled.div`
width: 50%;
float: left;
`
export const ListUl = styled.ul`
list-style: none
`
export const ItemLi = styled.li`
margin-bottom: 8px
`
export const ItemSpan = styled.span`
display: inline-block;
width: 100px;
font-weight: bold;
`
export const ItemWebSpan = styled.span`
font-weight:normal;
color:#eb5424
`
export const SkillsDiv = styled.div`
width: 50%;
float: left;
`
export const DescP = styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px
`

export const BarDiv = styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px
`

export const TitleSpan = styled.span`
float: left;
`
export const PercSpan = styled.span`
float: right;
margin-right: 100px
`

export const LineDiv = styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px;
`

export const LineSpan = styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width:${props => props.lineWidth==="90%"?"90%":""};
width:${props => props.lineWidth==="80%"?"80%":""};
width:${props => props.lineWidth==="70%"?"70%":""};
`
export const ProfileSkillsH2 = styled.h2`
font-size: 40px; 
margin-bottom: 20px
`
export const ProfileSkillsH2Span = styled.span`
font-weight: normal;
`
