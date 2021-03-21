import React, {useState,useEffect} from 'react'
import {ProfileSkillsDiv,ProfileDiv,ListUl,ItemLi,ItemSpan,ItemWebSpan,
    SkillsDiv,DescP,BarDiv,TitleSpan,PercSpan,LineDiv,LineSpan,ProfileSkillsH2,ProfileSkillsH2Span} from './ProfileStyle.js'
import axios from 'axios'
const Profile =()=>{

    const [skills, setSkills] = useState([])

    useEffect(() => {
        axios.get('./js/data.json').then(res => {setSkills(res.data.skills)})    
    }, [])
    const skillsInfo = skills.map(skill =>{
    return(
    <BarDiv key={skill.id}>
        <TitleSpan>{skill.lang}</TitleSpan>
        <PercSpan>{skill.percentage}</PercSpan>
        <LineDiv>
            <LineSpan lineWidth={skill.percentage}></LineSpan>
        </LineDiv>
    </BarDiv>
     )
    })

return(

<ProfileSkillsDiv>
            <div className="container">
                <ProfileDiv>
                    <ProfileSkillsH2><ProfileSkillsH2Span>My </ProfileSkillsH2Span>Profile</ProfileSkillsH2>
                    <ListUl>
                        <ItemLi>
                            <ItemSpan>Name</ItemSpan>
                            Moaz Abd alrahman
                        </ItemLi>
                        <ItemLi>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1993
                        </ItemLi>
                        <ItemLi>
                            <ItemSpan>Address</ItemSpan>
                            kajang
                        </ItemLi>
                        <ItemLi>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ItemLi>
                        <ItemLi>
                            <ItemSpan>Email</ItemSpan>
                            moaz1993abdulrahman@gmail.com
                        </ItemLi>
                        <ItemLi>
                            <ItemSpan>Website</ItemSpan>
                            <ItemWebSpan>www.google.com</ItemWebSpan>
                        </ItemLi>
                    </ListUl>
                </ProfileDiv>
                
                <SkillsDiv>
                    <ProfileSkillsH2>Some <ProfileSkillsH2Span>skills</ProfileSkillsH2Span></ProfileSkillsH2>
                    <DescP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </DescP>
                    {skillsInfo}
                </SkillsDiv>                
            </div>
        </ProfileSkillsDiv>

    )
}
export default Profile