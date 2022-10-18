import { useState } from "react";
import Button from "../shared/Button";
import Card from "../shared/Card";

const FeedBackForm=()=>{

    const [text ,setText]=useState('')
    const [disableBtn, setDisableBtn]=useState(true)
    const[message, setMessage ]= useState('Home')
const onChangeHandler=(event)=>{

    if (text===''){
        setDisableBtn(true)
        setMessage(null)
    }
    else if (text!=="" && text.length>= 10){
        setDisableBtn(false )
        set
    }
setText(event.target.value)

}


return (
    <Card>
        <form>
            <h2>How would you rate your review</h2>
            <div className="input-group">
            <input 
            onChange={onChangeHandler} 
            type='text' 
            placeholder='write your review'
            value={text}
            />
           <Button isDisabled={disableBtn} version='primary'>Send</Button>
            </div> 
            <p>{message}</p>   

        </form>

    </Card>
)
}
export default FeedBackForm;