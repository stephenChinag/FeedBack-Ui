import{motion,AnimatePresence}from "framer-motion"
import FeedBackItem from "./FeedBackItem";

const FeedBackList =({feedBack,handelDelete})=>{
    if (!feedBack || feedBack.length===0 )
    return<p>No FeedBack Yet</p>

    return(
        <div className="feedback-list">
            <AnimatePresence>
         {feedBack.map((item)=>(
            <motion.div
            key={item.id}
            initial={{opacity:1}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <FeedBackItem key ={item.id} item ={item} handelDelete={handelDelete} />
            </motion.div>
         ))}
         </AnimatePresence>
        </div>
    )
}
export default FeedBackList;