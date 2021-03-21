import React from 'react'
import {AboutDiv,InfoDiv,TitleH2,TitleH2Span,InfoDirH4,DescP,DescPA} from './AboutStyle'

const About =()=>{
    return(
<AboutDiv>
            <div className="container">
                <InfoDiv>
                    <TitleH2><TitleH2Span>This is</TitleH2Span> Me</TitleH2>
                    <InfoDirH4>Creative Director</InfoDirH4>
                    <DescP>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <DescPA>explicabo</DescPA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </DescP>
                    <DescP>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </DescP>
                </InfoDiv>
            </div>
        </AboutDiv>
    )
}
export default About