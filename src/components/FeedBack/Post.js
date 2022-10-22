import { Navigate } from "react-router-dom"
const Post =()=>{

    const handleCleickEvent=()=>{
        <Navigate to='/google.com'/>
    }
    return (
        <div>
            <button onClick={handleCleickEvent}>Hello</button>
        </div>
    )
}
export default Post