import React from 'react'
import {HomeDiv,HomeInfoDiv,HomeTitleH2,HomeInfoH4,HomeDescP,HomeDescPSpan,HomeBtn} from './HomeStyle'
const Home =()=>{
    return(
        <HomeDiv>
            <div className="container">
                <HomeInfoDiv>
                    <HomeTitleH2>Hamza Nabil</HomeTitleH2>
                    <HomeInfoH4>Creative Director</HomeInfoH4>
                    <HomeDescP>
                        Iam a professional <HomeDescPSpan>UX Designer</HomeDescPSpan> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDescP>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInfoDiv>
            </div>
        </HomeDiv>

    )
}
export default Home