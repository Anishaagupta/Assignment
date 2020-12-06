import React from 'react'
import {Switch,Route} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Services from '../pages/Servicess';
import See from '../pages/See&Do';
import Room from '../pages/Room';

const AppRouter = () => {
   return (
       <div>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/service" component={Services}/>
         <Route exact path="/room" component={Room}/>
         <Route exact path="/gallery" component={Gallery}/>
         <Route exact path="/see&do" component={See}/>
         <Route exact component={NotFound}/>
        </Switch>
       </div>
   )
}

export default AppRouter;
