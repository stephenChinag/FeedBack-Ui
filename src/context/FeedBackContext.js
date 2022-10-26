import { createContext, useState } from "react"
import{v4 as uuidv4} from 'uuid'
const FeedBackContext = createContext()

export const FeedBackProvider =(props)=>{
    const [feedBack,setFeedBack]=useState([
{
    id : 1,
    text:'in this life you have to be wise',
    rating:10,
    },
])
const [feedBackEdit ,setFeedBackEdit]= useState({
    item:{},
    edit:false
})
// Deleteing FeedBackItems
const deleteFeedBack=(id)=>{
    if (window.confirm("are you sure you want to delete the tag?")){
      setFeedBack(feedBack.filter((item)=>item.id !== id))
    }
     }

     //Adding FeedBack
     const handleAddFeedback=(newFeedBack)=>{
        newFeedBack.id=uuidv4()
      setFeedBack([newFeedBack,...feedBack])
      }
    //editing FeedBack 
    const editFeedBack=(item)=>{
        setFeedBackEdit({
                item,
                edit:true
            })
    }
    //pdatFeedBack Data
    const updateFeedBack=(id ,updItem)=>{
     setFeedBack(feedBack.map((item)=>(item.id=== id ? {...item, ...updItem}: item) ))

    }
return(
    
    <FeedBackContext.Provider value={{
        feedBack,
        feedBackEdit,
        deleteFeedBack,
        handleAddFeedback,
        editFeedBack,
        updateFeedBack,
        
        }} >
       {props.children}
    </FeedBackContext.Provider>
)
}
export default FeedBackContext