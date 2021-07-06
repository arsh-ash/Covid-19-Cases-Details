import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import StateWise from "./Statewise";
import {connect} from "react-redux"
import About from "./About";
import {Route,Switch} from "react-router-dom"
import {fetchCases} from "../actions/cases"
import Footer from "./Footer";

class App extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchCases())
  }
  render(){
    const{countryWise,stateWise}=this.props.cases
    return (
      <>
      <Navbar/>
      <Switch>
      <div className="container">
     
      <Route 
      exact 
      path="/" 
      render={(props) => {
                return <Home {...props} countryWise={countryWise} />;
              }}
      />
       <Route 
      exact 
      path="/india" 
      render={(props) => {
                return <StateWise {...props} stateWise={stateWise} />;
              }}
      />
      <Route exact path="/about" component={About}></Route>
      
      </div>
      </Switch>
      <Footer/>
      </>
    );
  }

}
function mapStateToProps(state){
    return{
      cases:state.cases
    }
}

export default  connect(mapStateToProps)(App);
