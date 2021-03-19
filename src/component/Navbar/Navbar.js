import React from 'react'
import {Link} from 'react-router-dom'
import {NavbarDiv,LogoDiv,LogoH2,ListUl,ListLi,ListLiA} from './NavbarStyle'

const Navbar =()=>{
    return(
        <NavbarDiv>
            <div className="container">               
                <LogoDiv>
                    <LogoH2>Ultra Profile</LogoH2>
                </LogoDiv>
                <ListUl>
                    <ListLi><Link to="/">Home</Link></ListLi>
                    <ListLi><ListLiA href="#">Work</ListLiA></ListLi>
                    <ListLi><ListLiA href="#">Portfolio</ListLiA></ListLi>
                    <ListLi><ListLiA href="#">Resume</ListLiA></ListLi>
                    <ListLi><ListLiA href="#">About</ListLiA></ListLi>
                    <ListLi><Link to="/contact">Contact</Link></ListLi>
                </ListUl>                
            </div>   
        </NavbarDiv>
    )
}
export default Navbar