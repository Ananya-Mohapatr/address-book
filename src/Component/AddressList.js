import React,{useState,useEffect} from 'react'
import loaderGif from '../Growing ring.gif'
import './AddressList.css'
const AddressList = () =>{
    const [userData,setUserData] = useState([])
    const [loader,setLoader] = useState(true)
    const fetchData = async()=>{
        setLoader(true)
        const response = await fetch('https://dummyjson.com/users?limit=280')
        if(!response.ok){
            setLoader(false)
            console.log("error",response)
        }
        else{
            setLoader(false)
            let json = await response.json()
            setUserData(json.users)
        }
    }
    const getAddress = (data)=>{
        return data.address+" ,"+data.city+" ,"+data.state+" ,"+data.country
    }
    useEffect(()=>{
        fetchData()
    },[])
return (
    loader?
      <div className='loader'><img src={loaderGif}></img></div>:
        <div>   
            <h3>AddressList</h3>
            <table>
                <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Phone Number</th>
                <th> Address</th>
                </tr>
                {userData && userData.map((i)=>{
                    return(<tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.firstName + " " + i.lastName}</td>
                        <td>{i.phone}</td>
                        <td>{getAddress(i.address)}</td>
                    </tr>)
                })}
            </table>
        </div>

)
    
}


export default AddressList