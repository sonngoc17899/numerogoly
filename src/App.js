import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Cscd} from './components/main/Cscd';
function App() {
  return (
   <div>
   <Route exact path="/numerogoly" component={Home}/>
   <Route exact path="/cscd" component={Cscd}/>
   </div>
  );
}

export default App;
