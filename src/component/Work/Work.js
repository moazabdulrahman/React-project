import React ,{Component} from 'react'
import {WorkDiv,WorkTitleH2,WorkTitleH2Span,WorkPartDiv,WorkPartI,WorkPartH4,WorkPartHr,WorkPartP} from './WorkStyle.js'
import axios from 'axios'



class Work extends Component{
state={
    works:[]
}   

componentDidMount (){
    axios.get('./js/data.json').then(res => {this.setState({works:res.data.works}) })
}
render(){

    const {works} = this.state; 

    const workList = works.map(work=>{
        return (
                <WorkPartDiv first={work.id} key={work.id}>
                    <WorkPartI className={work.icon_name}></WorkPartI>
                    <WorkPartH4>{work.title}</WorkPartH4>
                    <WorkPartHr />
                    <WorkPartP>
                        {work.body}
                    </WorkPartP>
                </WorkPartDiv>
        )
    })
    return(
        <WorkDiv>
             <div className="container">
            <WorkTitleH2><WorkTitleH2Span>My</WorkTitleH2Span> Work</WorkTitleH2>
                   {workList}      
            </div>
        </WorkDiv>
    )
  }
}
export default Work