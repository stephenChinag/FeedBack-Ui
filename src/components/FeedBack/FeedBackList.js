
import FeedBackItem from "./FeedBackItem";

const FeedBackList =({feedBack,handelDelete})=>{
    if (!feedBack || feedBack.length===0 )
    return<p>No FeedBack Yet</p>

    return(
        <div className="feedback-list">
         {feedBack.map((item)=>(
            <FeedBackItem key ={item.id} item ={item} handelDelete={handelDelete} />
         ))}
        </div>
    )
}
export default FeedBackList;