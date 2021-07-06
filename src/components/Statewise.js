import React from "react"
import virusimg from "../images/virus.jpg"
import CountUp from "react-countup"
class StateWise extends React.Component{
    render(){
        const {stateWise}=this.props
        
        return(
            <>
             <div className="virus-div">
              <div className="corona"> <img src={virusimg}></img> </div>
           </div>
            <div className="update-div">
            <div className="graph-div"><h2 className="updates-heading">Corona cases Live Updates India</h2></div>
            <div className="graph-div"> <img className="graph" src="https://t3.ftcdn.net/jpg/01/09/46/60/240_F_109466081_sDJ47M3LfZm9lP9eS4qDa3pX3SeSw40f.jpg"></img></div>
            </div>
            <div className="Home-div pkda">
            <div className="cases"><p >State</p></div>
            <div className="cases"><p>Total Confirmed</p></div>
            <div className="cases"><p>Total Recovered</p></div>
            <div className="cases"><p>Total Deaths</p></div>
            <div className="cases"><p>Delta Confirmed</p></div>
            <div className="cases"><p>Delta Recovered</p></div>
            <div className="cases"><p>Last Updated</p></div>
            </div>
            
            {stateWise&&
            <>
            {stateWise.map((state)=>(
                <>
                
            <div className="Home-div">
                <div className="cases"><p className="country">{state.state}</p></div>
                <div className="cases"><p className="confirmed"> <CountUp end={state.confirmed} duration={5}></CountUp></p></div>
                <div className="cases"><p className="recovered"><CountUp end={state.recovered} duration={3}></CountUp></p></div>
                <div className="cases"><p className="deaths"> <CountUp end={state.deaths} duration={2}></CountUp></p></div>
                <div className="cases"><p className="new-confirmed"><CountUp end={state.deltaconfirmed}></CountUp></p></div>
                <div className="cases"><p className="new-recovered"><CountUp end={state.deltarecovered}></CountUp></p></div>
                <div className="cases"><p className="dated">{state.lastupdatedtime}</p></div>

            </div>
            
                </>
            
            ))}
            </>
            }
            
            
           
            </>
        )
    }
}
export default StateWise;