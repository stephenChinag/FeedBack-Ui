import{motion,AnimatePresence}from "framer-motion"
import { useContext } from "react";
import FeedBackContext from "../../context/FeedBackContext";
import FeedBackItem from "./FeedBackItem";

const FeedBackList =()=>{

   const {feedBack}= useContext(FeedBackContext) 

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
            <FeedBackItem key ={item.id} item ={item}  />
            </motion.div>
         ))}
         </AnimatePresence>
        </div>
    )
}
export default FeedBackList;