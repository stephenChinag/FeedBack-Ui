import { useContext, useEffect, useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingService from "../rating/RatingService";
import FeedBackContext from "../../context/FeedBackContext";


const FeedBackForm=( )=>{
   const [text ,setText]=useState('')
    const [disableBtn, setDisableBtn]=useState(true)
    const [rating ,setRating]=useState(10)
    const[message, setMessage ]= useState('')

    const {feedBackEdit,handleAddFeedback,updateFeedBack}=useContext(FeedBackContext)
 useEffect(()=>{
   if (feedBackEdit.edit === true){
    setDisableBtn(false)
    setText(feedBackEdit.item.text)
    setRating(feedBackEdit.item.rating)
   }
 },[feedBackEdit])
const onChangeHandler=(event)=>{
    if (text === ''){
    setDisableBtn(true)
    setMessage(null)
    }
    else if (text ==='' ||text.trim().length<=10)
    {
        setDisableBtn(true)
        setMessage('please enter a string greater than 10 characters')
        
       
    }else{
        setMessage(null)
        setDisableBtn(false)
    }
setText(event.target.value)
}
const handleSubmitEvent=(event)=>{
    event.preventDefault()
   
}
const handleClick=()=>{
    if(text.trim().length>10){
        const rateText={
        text,
         rating,
        }
        if (feedBackEdit.edit===true){
            updateFeedBack(feedBackEdit.item.id,rateText)
        }else(
            handleAddFeedback(rateText)
            )
        setText('')
       
    }
    
}

return (
    <Card>
        
        <form onSubmit={handleSubmitEvent}>
            <h2>How would you rate your review</h2>
            <RatingService select ={(rating)=>setRating(rating)}/>
           
            <div className="input-group">
            <input 
            onChange={onChangeHandler} 
            type='text' 
            placeholder='write your review'
            value={text}
            />
           <Button onClickHanler={handleClick} type="submit" isDisabled={disableBtn} version='primary' >Send</Button>
            </div> 
            <p>{message}</p>   

        </form>
        </Card>
)
}
export default FeedBackForm;