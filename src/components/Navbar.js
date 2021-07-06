import React from "react"
import virusimg from "../images/virus.jpg"
import {Link} from  "react-router-dom"
 class Navbar extends React.Component{
     render(){
         return(
             <>
             <div className="nav">
                 <div className="left-nav">
                    <div className="img-div">
                       <img src="https://image.flaticon.com/icons/png/512/2750/2750657.png"></img>
                     </div>
                     <div className="nav-heading"> 
                     <h1 className="brand">Covid-19 </h1>
                     </div>
                     
                 </div>
                 <div className="right-nav">
                     <div className="nav-links">
                         <ul>
                             <div className="flag-box">
                             <div className="xyz">
                                   <div className="efg">
                                        <Link className="link" to="/">
                                        <li><h3 className="nav-item" >World</h3></li>
                                       </Link>
                                    </div>
                                 <div className="efg">
                                     <img  className="flag" src="https://image.flaticon.com/icons/png/512/744/744480.png"></img>
                                 </div>
                                 
                             </div>
                             <div className="xyz">
                                   <div className="efg">
                                        <Link className="link" to="/india">
                                       <li><h3 className="nav-item">India</h3></li></Link>
                                    </div>
                                 <div className="efg">
                                     <img  className="flag" src="https://image.flaticon.com/icons/png/512/330/330439.png"></img>
                                 </div>
                                 
                             </div>
                                 <div className="xyz">
                                   <div className="efg">
                                        <Link className="link" to="/about">
                                       <li><h3 className="nav-item">Covid Info</h3></li></Link>
                                    </div>
                                 <div className="efg">
                                     <img  className="flag" src="https://image.flaticon.com/icons/png/128/1562/1562948.png"></img>
                                 </div>
                                 
                             </div>
                             {/* <div className="xyz">
                                   <div className="efg">
                                        <Link className="link" to="/india">
                                       <li><h3>India</h3></li></Link>
                                    </div>
                                 <div className="efg">
                                     <img  className="flag" src="https://img-premium.flaticon.com/png/512/706/premium/706256.png?token=exp=1625314405~hmac=4b55751800683d1571884b5583c3f19d"></img>
                                 </div>
                                 
                             </div> */}
                             {/* <div className="xyz">
                                   <div className="efg">
                                        <Link className="link" to="/world">
                                       <li><h3>World</h3></li></Link>
                                    </div>
                                 <div className="efg">
                                     <img  className="flag" src="https://image.flaticon.com/icons/png/512/744/744480.png"></img>
                                 </div>
                                 
                             </div> */}
                             
                             </div>
                             
                         </ul>
                     </div>
                 </div>
             </div>
             </>
         )
     }
 }
 export default Navbar