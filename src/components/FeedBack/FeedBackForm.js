import { useState } from "react";
import RatingService from "../rating/RatingService";
import Button from "../shared/Button";
import Card from "../shared/Card";

const FeedBackForm=()=>{

    const [text ,setText]=useState('')
    const [disableBtn, setDisableBtn]=useState(true)
    const[message, setMessage ]= useState('')
const onChangeHandler=(event)=>{
    if (text === ''){
    setDisableBtn(true)
    setMessage(null)
    }
    else if (text !=='' && text.trim().length<=9){
        setDisableBtn(true)
        setMessage("ples enter a character greater than 10")
      
    }else{
        setMessage(null)
        setDisableBtn(false)
    }
setText(event.target.value)
}


return (
    <Card>
        <form>
            <h2>How would you rate your review</h2>
           <RatingService/>
            <div className="input-group">
            <input 
            onChange={onChangeHandler} 
            type='text' 
            placeholder='write your review'
            value={text}
            />
           <Button  type="submit" isDisabled={disableBtn} version='primary' >Send</Button>
            </div> 
            <p>{message}</p>   

        </form>
    </Card>
)
}
export default FeedBackForm;