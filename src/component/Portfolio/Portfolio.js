import React ,{useState ,useEffect} from 'react'
import {PortfolioDiv,PortfolioH2,PortfolioH2Span,PortfolioUl,PortfolioUlLi,BoxDivDiv,BoxDivImg,BoxDivP,BoxDivPSpan} from './PortfolioStyle.js'
import axios from 'axios'


const Portfolio =()=>{
 
const [images,setImages] =useState([]);

useEffect(()=>{
    axios.get('./js/data.json').then(res => {setImages(res.data.portfolio)}) 
},[])
 const portfolioImgs = images.map((img)=>{
  return (
        <BoxDivDiv key={img.id} >
            <BoxDivImg src={img.image} alt="img" />
                <BoxDivP>
                    <BoxDivPSpan>
                        Show Image
                    </BoxDivPSpan>
                </BoxDivP>
        </BoxDivDiv> 
   )
 })
 return(
    <PortfolioDiv>
            <PortfolioH2><PortfolioH2Span>My</PortfolioH2Span> Portfolio</PortfolioH2>
            <PortfolioUl>
                <PortfolioUlLi>All</PortfolioUlLi>
                <PortfolioUlLi>HTML</PortfolioUlLi>
                <PortfolioUlLi>Photoshop</PortfolioUlLi>
                <PortfolioUlLi>Wordpress</PortfolioUlLi>
                <PortfolioUlLi>Mobile</PortfolioUlLi>
        </PortfolioUl>        
        <div className="box">                
            {portfolioImgs}
        </div>     
 </PortfolioDiv>
)

}  

export default Portfolio