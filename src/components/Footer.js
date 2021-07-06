import React from "react"

class Footer extends React.Component{
    render(){
        return(
            <>
            <div className="footer-div">
                <div className="social-div">
                    <div className="social-icon">
                        <img src="https://image.flaticon.com/icons/png/512/733/733547.png"></img>
                    </div>
                    <div className="social-icon">
                        <img src="https://image.flaticon.com/icons/png/512/2111/2111463.png"></img>
                    </div>
                    <div className="social-icon">
                        <img src="https://image.flaticon.com/icons/png/512/732/732200.png"></img>
                    </div>
                    <div className="social-icon">
                        <img src="https://image.flaticon.com/icons/png/512/174/174857.png"></img>
                    </div>
                    
                </div>
                <div className="copyright"><p>@ Copyright 2021 Covid-19</p></div>
                
            </div>
            </>
        )
    }
}
export default Footer;