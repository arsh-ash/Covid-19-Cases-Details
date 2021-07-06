import React from "react"
import virusimg from "../images/virus.jpg"
import CountUp from "react-countup"
class Home extends React.Component{
    render(){
        const {countryWise}=this.props
        
        return(
            <>
           
           <div className="virus-div">
              <div className="corona"> <img src={virusimg}></img> </div>
           </div>
            <div className="update-div">
            <div className="graph-div"><h2 className="updates-heading">Corona cases Live Updates World Wide</h2></div>
            <div className="graph-div"> <img className="graph" src="https://image.flaticon.com/icons/png/128/458/458887.png"></img></div>
            </div>
            <div className="Home-div pkda">
            <div className="cases"><p>Country</p></div>
            <div className="cases"><p>Total Confirmed</p></div>
            <div className="cases"><p>Total Recovered</p></div>
            <div className="cases"><p>Total Deaths</p></div>
            <div className="cases"><p>New Confirmed</p></div>
            <div className="cases"><p>New Recovered</p></div>
            <div className="cases"><p>Last Updated</p></div>
            </div>
            
            {countryWise&&
            <>
            {countryWise.map((country)=>(
                <>
                {/* {country.TotalConfirmed} */}
            <div className="Home-div">
            {/* <div className="cases"><p><CountUp end={100}></CountUp></p></div> */}
                <div className="cases"><p className="country">{country.Country}</p></div>
                <div className="cases"><p className="confirmed"> <CountUp end={country.TotalConfirmed} duration={5}></CountUp></p></div>
                <div className="cases"><p className="recovered"><CountUp end={country.TotalRecovered} duration={3}></CountUp></p></div>
                <div className="cases"><p className="deaths"> <CountUp end={country.TotalDeaths} duration={2}></CountUp></p></div>
                <div className="cases"><p className="new-confirmed"><CountUp end={country.NewConfirmed} duration={1}></CountUp></p></div>
                <div className="cases"><p className="new-recovered"><CountUp end={country.NewRecovered}></CountUp></p></div>
                <div className="cases"><p className="dated">{country.Date}</p></div>

            </div>
            
                </>
            
            ))}
            </>
            }
            
            
           
            </>
        )
    }
}
export default Home;