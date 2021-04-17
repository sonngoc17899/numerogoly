import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Cscd} from './components/main/Cscd/index';
import {Csns} from './components/main/Csns/index'
import {Arrows} from './components/main/Arrows/index.js'
function App() {
  return (
   <div>
  <Route exact path="/" component={Home}/>
   <Route path="/con-so-chu-dao" component={Cscd}/>
   <Route path="/con-so-ngay-sinh" component={Csns}/>
   <Route path="/cac-mui-ten" component={Arrows}/>
   </div>
  );
}

export default App;
