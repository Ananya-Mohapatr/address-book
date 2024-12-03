import React,{useState,useEffect} from 'react'
import loaderGif from '../Growing ring.gif'
import { useSelector,useDispatch, connect } from 'react-redux'
import './AddressList.css'
import { fetchData } from '../utils/action'
const AddressList = ({data,isLoading,error,fetchData}) =>{
    // const getAddress = (data)=>{
    //     return data.address+" ,"+data.city+" ,"+data.state+" ,"+data.country
    // }
    useEffect(()=>{
    fetchData()
    },[fetchData])
return (
    isLoading?
      <div className='loader'><img src={loaderGif}></img></div>:
        <div>   
            <h3>AddressList</h3>
            <table>
                <tr>
                <th> ID</th>
                <th> Title</th>
                </tr>
                {data && data.map((i)=>{
                    return(<tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                    </tr>)
                })}
            </table>
        </div>
)
    
}

const mapStateToProps = (state,ownProps)=>({
    data:state.data,
    isLoading:state.isLoading,
    error:state.error
})
const mapDispatchToProps = (dispatch,ownprops)=>({
    fetchData:()=>dispatch(fetchData())
    })

export default connect(mapStateToProps,mapDispatchToProps)(AddressList)