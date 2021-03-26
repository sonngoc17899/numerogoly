import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Cscd} from './components/main/Cscd/index';
import {Csns} from './/components/main/Csns/index'
function App() {
  return (
   <div>
   <Route exact path="/" component={Home}/>
   <Route path="/cscd" component={Cscd}/>
   <Route path="/csns" component={Csns}/>
   </div>
  );
}

export default App;
