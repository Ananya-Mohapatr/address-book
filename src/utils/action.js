import { FETCH_DATA_FAILURE,FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS } from "./ActionTypes"
//ACTIONS DEFINITION
export const fetchDataRequest= ()=>({type:FETCH_DATA_REQUEST})
export const fetchDataSuccess = (data) =>({type:FETCH_DATA_SUCCESS,payload:data})
export const fetchDataFailure = (data) =>({type:FETCH_DATA_FAILURE,payload:data})

//thunk action definition
export const fetchData = ()=>{
   return async(dispatch,getState ) => {
     dispatch(fetchDataRequest())
     let width = window.innerHeight/10
     try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20`)
        if(!response.ok){
            console.log("response",response)
            dispatch(fetchDataFailure(response))
        }
        else{
            let json = await response.json()
            console.log("responsee",json)
            dispatch(fetchDataSuccess(json))
        }
     }
    catch(err){
        dispatch(fetchDataFailure(err))
    }
    
    }
   
}













































// //actions defined
// export const fetchDataRequest=()=>({type:'FETCH_DATA_REQUEST'})
// export const fetchSuccess = (data) =>({type:'FETCH_DATA_SUCCESS',payload:data})
// export const fetchFailure = (data)=>({type:'FETCH_DATA_FAILURE',payload:data})

// //thunk actions definition
// export const fetchData = ()=>{
//     return async(dispatch,getStage)=>{
//        dispatch(fetchDataRequest())
//        try{
//         const response = await fetch('https://dummyjson.com/users?limit=280');
//         if(!response.ok){
//             console.log("response",response)
//             dispatch(fetchFailure("Error"))
//         }
//         else{
//          let json = await response.json()
//          dispatch(fetchSuccess(json.users)) 
//         }
//        }
//        catch(err){
//         dispatch(fetchFailure(err))
//        }
//     }
// }