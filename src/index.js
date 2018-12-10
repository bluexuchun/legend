import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Link,Switch } from 'react-router-dom'
import '@/assets/css/index.css';
import Index from '@/pages/index/index';
import Introduce from '@/pages/introduce/introduce';
import Map from '@/pages/map/map'
import Choice from '@/pages/choice/choice'
import Currect from '@/pages/currect/currect'
import Wrong from '@/pages/wrong/wrong'
import Restart from '@/pages/restart/restart'

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route path="/introduce" component={Introduce}></Route>
        <Route path="/map" component={Map}></Route>
        <Route path="/choice" component={Choice}></Route>
        <Route path="/currect" component={Currect}></Route>
        <Route path="/wrong" component={Wrong}></Route>
        <Route path="/restart" component={Restart}></Route>
      </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));
