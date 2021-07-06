import { ADD_CASES ,INDIAN_CASES} from "./actionType"
export  function fetchCases(){
    const url="https://api.covid19api.com/summary"
    return(dispatch)=>{
        fetch(url)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
              console.log("World-wide-Cases",data.Countries)

              dispatch(addCasesToStore(data.Countries));

             
        })
        const api="https://api.covid19india.org/data.json"
        fetch(api)
        .then((response)=>{
           return response.json()
        }).then((data)=>{
              console.log("india-Cases",data.statewise)

              dispatch(addIndianCases(data.statewise));

             
        })
        


    }
}
export function addCasesToStore(cases){
   return{
    type:ADD_CASES,
    cases:cases
   }
   
}
export function addIndianCases(indianCases){
    return{
        type:INDIAN_CASES,
        indianCases:indianCases,
    }

}