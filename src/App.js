import{v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,NavLink,Route,Routes}from 'react-router-dom'
import { useState } from 'react';
import FeedBackForm from './components/FeedBack/FeedBackForm.js';
import FeedBackList from './components/FeedBack/FeedBackList.js';
import FeedBackStats from './components/FeedBack/FeedBackStat.js';
import Header from './components/Header.js'
import FeedBackData from './data/FeedBackData'
import Aboutpage from './pages/AboutPage.js';
import AboutIcon from './components/shared/AboutIcon.js';
import Post from './components/FeedBack/Post.js';
function App() {
  const [feedBack,setFeedBack]=useState(FeedBackData)
const handleAddFeedback=(newFeedBack)=>{
  newFeedBack.id=uuidv4()
setFeedBack([newFeedBack,...feedBack])
}

const deleteFeedBack=(id)=>{
  if (window.confirm("are you sure you want to delete the tag?")){

    setFeedBack(feedBack.filter((item)=>item.id !== id))
  
  }
}
return (
    <Router>
      <Header/>
      <div className='container'>
      <Routes>
        <Route exact path='/'element={
          <>
          <FeedBackForm addFeedBack={handleAddFeedback}/> 
    <FeedBackStats feedBack ={feedBack}/>  
    <FeedBackList 
    feedBack = {feedBack} 
    handelDelete={deleteFeedBack}/>
          </>
        }>
    
    </Route>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/post' element={<Post/>}/>
    
  
  </Routes>
  <AboutIcon/>
  
    </div>
  
    </Router>

      
  );
}

export default App;
