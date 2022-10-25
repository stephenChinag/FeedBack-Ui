import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import FeedBackForm from './components/FeedBack/FeedBackForm.js';
import FeedBackList from './components/FeedBack/FeedBackList.js';
import FeedBackStats from './components/FeedBack/FeedBackStat.js';
import Header from './components/Header.js'
import Aboutpage from './pages/AboutPage.js';
import  { FeedBackProvider } from './context/FeedBackContext.js';
import AboutIcon from './components/shared/AboutIcon.js';
import Post from './components/FeedBack/Post.js';
function App() {


return (
  <FeedBackProvider>
        <Router>
      <Header/>
      <div className='container'>
      <Routes>
        <Route exact path='/'element={
          <>
          <FeedBackForm/> 
    <FeedBackStats/>  
    <FeedBackList/>
          </>
        }>
    
    </Route>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/post' element={<Post/>}/>
    
  
  </Routes>
  <AboutIcon/>
  
    </div>
  
    </Router>
    </FeedBackProvider>

      
  );
}

export default App;
