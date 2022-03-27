import React from 'react';
import Home from './Home'
import Loginpage from './Loginpage'


import {Switch , Route , Routes} from 'react-router-dom'
import Header from './Header';





function App (){
    return(
       <>
       <Routes>
          <Header />
          <Route exact path="/" component={Home}/> 
          <Route exact path="/Loginpage" component={Loginpage}/> 
         
          
          </Routes>
          </>
    
          );
                   
}

export default App;