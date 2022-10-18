import { Fragment,useState } from 'react';
import FeedBackForm from './components/FeedBack/FeedBackForm.js';
import FeedBackList from './components/FeedBack/FeedBackList.js';
import FeedBackStats from './components/FeedBack/FeedBackStat.js';
import Header from './components/Header.js'
import FeedBackData from './data/FeedBackData'
function App() {
  const [feedBack,setFeedBack]=useState(FeedBackData)
const deleteFeedBack=(id)=>{
  if (window.confirm("are you sure you want to delete the tag?")){

    setFeedBack(feedBack.filter((item)=>item.id !== id))
  
  }
}
return (
    <Fragment>
    <Header text="FeedBack UI"/>
    <div className='container'>
      <FeedBackForm/>
      <FeedBackStats feedBack ={feedBack}/>
    <FeedBackList feedBack = {feedBack} handelDelete={deleteFeedBack}/>
    </div>
  
    </Fragment>
  );
}

export default App;
