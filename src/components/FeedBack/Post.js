import { Navigate, useNavigate } from "react-router-dom"

const Post =()=>{
    const navigate =useNavigate()
    const status =45;
    if (status===404){
      return ( <Navigate to='/not found page '/>)
    }
    const onclick=()=>{
        console.log("hello")
        navigate('/about')

    }
    return (

          <div>
            <h1>Post</h1>
            <button style={{color:"green"}} className="btn" onClick={onclick}>click</button>
          </div>
    )
}
export default Post