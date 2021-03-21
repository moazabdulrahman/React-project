import React from 'react'
import {ContactDiv,TitleH2,TitleH2Span,Form,FormDiv
    ,InputText,InputEmail,InputSubject,Textarea,InputSubmit} from './ContactStyle.js'
import Footer from './../Footer/Footer'    

const Contact =()=>{
    return(
        <React.Fragment>
                <ContactDiv>
                    <div className="container">
                        <TitleH2><TitleH2Span>Conatact</TitleH2Span>Me A line</TitleH2>
                        <Form>
                            <FormDiv>
                                <InputText type="text" placeholder="Your Name" />
                                <InputEmail type="email" placeholder="Your Email" />
                            </FormDiv>
                            <InputSubject type="text" className="sub" placeholder="Your Subject" />
                            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                            <InputSubmit type="submit" value="Send Message" />
                        </Form>
                    </div>
                </ContactDiv>
                <Footer />
        </React.Fragment>
    )
}
export default Contact